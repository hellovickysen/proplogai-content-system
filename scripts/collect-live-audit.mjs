import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(.:)/, '$1')), '..');
const outputDir = path.join(root, '.audit-cache');
const checkedDate = new Date().toISOString().slice(0, 10);

const sitemapUrls = [
  'https://proplogai.com/blogs/sitemap.xml',
  'https://proplogai.com/glossary/sitemap.xml',
];

const decode = (value = '') => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

const strip = (value = '') => decode(value
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim());

const attrs = (tag = '') => Object.fromEntries(
  [...tag.matchAll(/([:\w-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1].toLowerCase(), decode(match[2])]),
);

const csv = (value) => {
  const text = value === null || value === undefined ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

async function get(url) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'PropLogAI-Content-Audit/1.0' },
    signal: AbortSignal.timeout(30000),
  });
  return { response, body: await response.text() };
}

const sitemapRecords = [];
for (const sitemapUrl of sitemapUrls) {
  const { response, body } = await get(sitemapUrl);
  if (!response.ok) throw new Error(`Sitemap failed: ${sitemapUrl} (${response.status})`);
  for (const match of body.matchAll(/<url>\s*<loc>(.*?)<\/loc>[\s\S]*?<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)) {
    sitemapRecords.push({ sitemap: sitemapUrl, url: decode(match[1]), lastmod: match[2] });
  }
}

const duplicateSitemapUrls = [...new Set(sitemapRecords
  .filter((record, index, all) => all.findIndex((candidate) => candidate.url === record.url) !== index)
  .map((record) => record.url))];
const uniqueRecords = [...new Map(sitemapRecords.map((record) => [record.url, record])).values()];

const riskyPatterns = [
  ['guarantee', /guaranteed?|guarantees?/gi],
  ['outcome_language', /single biggest edge|account killer|making you lose money|wrecking your account/gi],
  ['universal_typical_range', /typically\s+\d|usually\s+(?:expressed|set)|\d+\s*[-–]\s*\d+%/gi],
  ['prescriptive_risk', /risk\s+(?:only\s+)?\d+(?:\.\d+)?%\s+(?:per|on)/gi],
  ['advice_signal', /trade signal|buy signal|sell signal|what to trade|when to trade/gi],
];

async function inspect(record) {
  const started = Date.now();
  try {
    const { response, body } = await get(record.url);
    const tags = [...body.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map((match) => ({ tag: match[0], attrs: attrs(match[0]) }));
    const meta = (key, value) => tags.find(({ attrs: item }) => item[key]?.toLowerCase() === value.toLowerCase())?.attrs.content || '';
    const canonical = tags.find(({ attrs: item }) => (item.rel || '').toLowerCase().split(/\s+/).includes('canonical'))?.attrs.href || '';
    const title = strip(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
    const description = meta('name', 'description') || meta('property', 'og:description');
    const robots = meta('name', 'robots');
    const publishedTime = meta('property', 'article:published_time') || meta('name', 'date');
    const modifiedTime = meta('property', 'article:modified_time') || meta('name', 'last-modified');
    const timeValues = [...body.matchAll(/<time\b[^>]*datetime=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
    const h1s = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => strip(match[1]));
    const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || body;
    const images = [...main.matchAll(/<img\b[^>]*>/gi)].map((match) => attrs(match[0]));
    const text = strip(main);
    const words = text ? text.split(/\s+/).length : 0;
    const links = [...main.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
      .map((match) => ({ href: decode(match[1]), text: strip(match[2]) }));
    const absoluteLinks = links.map((link) => {
      try { return { ...link, url: new URL(link.href, record.url) }; } catch { return null; }
    }).filter(Boolean);
    const internal = absoluteLinks.filter(({ url }) => url.hostname === 'proplogai.com');
    const external = absoluteLinks.filter(({ url }) => url.protocol.startsWith('http') && url.hostname !== 'proplogai.com');
    const sourceLinks = external.filter(({ url }) => !/youtube|twitter|x\.com|facebook|instagram|linkedin/.test(url.hostname));
    const jsonLdBlocks = [...body.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    const schemaTypes = [];
    for (const block of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(block[1]);
        const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
        for (const node of nodes) if (node?.['@type']) schemaTypes.push([node['@type']].flat().join('|'));
      } catch {
        schemaTypes.push('INVALID_JSON');
      }
    }
    const flags = [];
    for (const [name, pattern] of riskyPatterns) if (pattern.test(text)) flags.push(name);
    return {
      url: record.url,
      content_type: record.url.includes('/blogs/') ? 'blog' : record.url.includes('/glossary/') ? 'glossary' : record.url.endsWith('/blogs') ? 'blog_index' : 'glossary_index',
      sitemap_lastmod: record.lastmod,
      checked_date: checkedDate,
      status: response.status,
      final_url: response.url,
      redirect_count: response.redirected ? 1 : 0,
      title,
      title_length: title.length,
      description,
      description_length: description.length,
      canonical,
      canonical_matches: canonical.replace(/\/$/, '') === response.url.replace(/\/$/, ''),
      robots,
      noindex: /noindex/i.test(robots),
      published_time: publishedTime,
      modified_time: modifiedTime,
      visible_time_values: timeValues.join('|'),
      h1_count: h1s.length,
      h1: h1s.join(' | '),
      word_count_approx: words,
      internal_links: internal.length,
      blog_links: internal.filter(({ url }) => url.pathname.startsWith('/blogs/')).length,
      glossary_links: internal.filter(({ url }) => url.pathname.startsWith('/glossary/')).length,
      external_source_links: sourceLinks.length,
      jsonld_blocks: jsonLdBlocks.length,
      schema_types: [...new Set(schemaTypes)].join('|'),
      image_count: images.length,
      images_missing_alt: images.filter((image) => !Object.hasOwn(image, 'alt') || !image.alt.trim()).length,
      risky_flags: flags.join('|'),
      response_ms: Date.now() - started,
      _text: text,
      _internal_links: internal.map(({ url, text: anchor }) => ({ url: url.href, anchor })),
      _external_links: external.map(({ url, text: anchor }) => ({ url: url.href, anchor })),
      error: '',
    };
  } catch (error) {
    return { url: record.url, content_type: '', sitemap_lastmod: record.lastmod, checked_date: checkedDate, status: '', error: error.message };
  }
}

const results = [];
const concurrency = 6;
for (let index = 0; index < uniqueRecords.length; index += concurrency) {
  results.push(...await Promise.all(uniqueRecords.slice(index, index + concurrency).map(inspect)));
}

await fs.mkdir(outputDir, { recursive: true });
const headers = [...new Set(results.flatMap((result) => Object.keys(result)))].filter((header) => !header.startsWith('_'));
const csvText = [headers.join(','), ...results.map((result) => headers.map((header) => csv(result[header])).join(','))].join('\n') + '\n';
await fs.writeFile(path.join(outputDir, 'live-page-audit.csv'), csvText, 'utf8');
await fs.writeFile(path.join(outputDir, 'sitemap-records.json'), JSON.stringify({ checkedDate, sitemapRecords, duplicateSitemapUrls }, null, 2) + '\n', 'utf8');
await fs.writeFile(path.join(outputDir, 'page-text.json'), JSON.stringify(results.map(({ url, content_type, _text }) => ({ url, content_type, text: _text })), null, 2) + '\n', 'utf8');
await fs.writeFile(path.join(outputDir, 'link-graph.json'), JSON.stringify(results.map(({ url, content_type, _internal_links, _external_links }) => ({ url, content_type, internal_links: _internal_links, external_links: _external_links })), null, 2) + '\n', 'utf8');

const blogCategory = (url) => {
  if (/ai-journal|ai-trading/.test(url)) return 'AI Trading Coaching';
  if (/expense|roi/.test(url)) return 'Prop Firm Expenses and ROI';
  if (/calculator/.test(url)) return 'Tools and Calculators';
  if (/overtrading|rulebook|discipline/.test(url)) return 'Trading Discipline';
  if (/revenge|emotion|psychology/.test(url)) return 'Trading Psychology';
  if (/journal|review-template|pnl-calendar/.test(url)) return 'Trading Journaling';
  return 'General Forex Education';
};
const glossaryCategories = {
  'Trading Psychology': ['fomo','revenge-trading','tilt','confirmation-bias','loss-aversion','overconfidence'],
  'Risk Management': ['drawdown','position-sizing','risk-reward-ratio','stop-loss','daily-drawdown-limit','risk-per-trade'],
  'Performance Metrics': ['win-rate','profit-factor','expectancy','sharpe-ratio','average-win-vs-average-loss','equity-curve'],
  'Trading Discipline': ['trading-plan','setup-compliance','overtrading','pre-market-routine','trade-management','rule-based-trading'],
  'Prop Firm': ['prop-firm-challenge','funded-account','overall-drawdown-limit','profit-target','consistency-rule'],
  'Journal and Analysis': ['trading-journal','trade-review','emotion-tracking','pattern-recognition','performance-report','ai-trading-coach'],
};
const priorityOneGlossary = new Set(['daily-drawdown-limit','risk-per-trade','win-rate','profit-factor','loss-aversion','prop-firm-challenge','funded-account','overall-drawdown-limit','profit-target','consistency-rule']);
const pillarCandidates = new Set(['prop-firm-risk-management','ai-trading-coach-prop-firm','trading-discipline-prop-firm','trading-psychology-prop-firm','prop-firm-trading-journal']);
const inventoryHeaders = ['url','content_type','title','category','primary_intent','primary_topic','content_role','status','http_result','canonical_result','last_checked','evidence_basis','audit_priority','notes'];
const inventoryRows = results.map((result) => {
  const slug = new URL(result.url).pathname.split('/').filter(Boolean).at(-1) || '';
  const isIndex = result.content_type.endsWith('_index');
  const category = result.content_type === 'blog' ? blogCategory(result.url)
    : result.content_type === 'glossary' ? Object.entries(glossaryCategories).find(([, slugs]) => slugs.includes(slug))?.[0] || 'Unmapped'
      : 'Mixed';
  const priority = isIndex ? 'P1'
    : result.content_type === 'glossary' && priorityOneGlossary.has(slug) ? 'P1'
      : result.content_type === 'blog' && (result.h1_count !== 1 || /Propol AI/.test(result._text) || ['trading-journal-benefits','trading-emotions-account-killer','prop-firm-expense-tracking-guide'].includes(slug)) ? 'P1'
        : 'P2';
  const notes = [
    `h1=${result.h1_count}`,
    `words~${result.word_count_approx}`,
    `schema=${result.schema_types || 'none'}`,
    `sources=${result.external_source_links}`,
    `blog_links=${result.blog_links}`,
    `glossary_links=${result.glossary_links}`,
    !result.published_time && !result.modified_time && !result.visible_time_values ? 'date=missing' : '',
    /Propol AI/.test(result._text) ? 'brand_typo=Propol AI' : '',
    /PropLog AI/.test(result._text) ? 'brand_spacing=PropLog AI' : '',
  ].filter(Boolean).join('; ');
  return {
    url: result.url,
    content_type: result.content_type,
    title: result.title,
    category,
    primary_intent: isIndex ? 'discovery' : result.content_type === 'glossary' ? `definition of ${slug.replace(/-/g, ' ')}` : 'educational guide',
    primary_topic: isIndex ? category : slug.replace(/-/g, ' '),
    content_role: isIndex ? 'index' : result.content_type === 'glossary' ? 'definition' : pillarCandidates.has(slug) ? 'pillar candidate' : 'cluster support',
    status: 'live',
    http_result: result.status,
    canonical_result: result.canonical_matches ? 'self canonical' : result.canonical || 'missing',
    last_checked: checkedDate,
    evidence_basis: 'live HTTP and sitemap audit; intent role is editorial hypothesis',
    audit_priority: priority,
    notes,
  };
});
const inventoryCsv = [inventoryHeaders.join(','), ...inventoryRows.map((row) => inventoryHeaders.map((header) => csv(row[header])).join(','))].join('\n') + '\n';
await fs.writeFile(path.join(root, 'content-map', 'live-inventory.csv'), inventoryCsv, 'utf8');
await fs.writeFile(path.join(root, 'content-map', `live-technical-inventory-${checkedDate}.csv`), csvText, 'utf8');

const internalLinkUrls = [...new Set(results.flatMap((result) => result._internal_links || [])
  .map(({ url }) => {
    try {
      const parsed = new URL(url);
      parsed.hash = '';
      return parsed.href;
    } catch {
      return null;
    }
  })
  .filter(Boolean))];
const internalLinkChecks = [];
for (let index = 0; index < internalLinkUrls.length; index += 10) {
  internalLinkChecks.push(...await Promise.all(internalLinkUrls.slice(index, index + 10).map(async (url) => {
    try {
      const { response } = await get(url);
      return { url, status: response.status, final_url: response.url, redirected: response.redirected, error: '' };
    } catch (error) {
      return { url, status: '', final_url: '', redirected: '', error: error.message };
    }
  })));
}
await fs.writeFile(path.join(outputDir, 'internal-link-checks.json'), JSON.stringify(internalLinkChecks, null, 2) + '\n', 'utf8');

const summary = {
  checkedDate,
  sitemapRecords: sitemapRecords.length,
  uniquePages: results.length,
  duplicateSitemapUrls,
  failedPages: results.filter((result) => result.status !== 200).map((result) => ({ url: result.url, status: result.status, error: result.error })),
  missingCanonical: results.filter((result) => !result.canonical).map((result) => result.url),
  canonicalMismatch: results.filter((result) => result.canonical && !result.canonical_matches).map((result) => ({ url: result.url, canonical: result.canonical })),
  h1Issues: results.filter((result) => result.h1_count !== 1).map((result) => ({ url: result.url, h1_count: result.h1_count })),
  missingDescriptions: results.filter((result) => !result.description).map((result) => result.url),
  missingStructuredData: results.filter((result) => result.jsonld_blocks === 0).map((result) => result.url),
  noExternalSources: results.filter((result) => ['blog', 'glossary'].includes(result.content_type) && result.external_source_links === 0).map((result) => result.url),
  noGlossaryLinksFromBlogs: results.filter((result) => result.content_type === 'blog' && result.glossary_links === 0).map((result) => result.url),
  noBlogLinksFromGlossary: results.filter((result) => result.content_type === 'glossary' && result.blog_links === 0).map((result) => result.url),
  brokenInternalLinks: internalLinkChecks.filter((result) => result.status !== 200).map((result) => ({ url: result.url, status: result.status, final_url: result.final_url, error: result.error })),
  riskyPages: results.filter((result) => result.risky_flags).map((result) => ({ url: result.url, flags: result.risky_flags })),
};
await fs.writeFile(path.join(outputDir, 'summary.json'), JSON.stringify(summary, null, 2) + '\n', 'utf8');
console.log(JSON.stringify(summary, null, 2));
