// Reconcile K19's local article metadata and exact Markdown links. Run from this checkout.
import fs from 'node:fs/promises';
import path from 'node:path';

const article = path.resolve('../proplogai-blog/src/content/blog/trading-journal-fields.mdx');
const seoFile = path.resolve('content-map/seo-article-register.csv');
const linkFile = path.resolve('content-map/internal-link-register.csv');
const sourceId = 'proplogai-live-blog-trading-journal-fields';
const sourceUrl = 'https://proplogai.com/blogs/trading-journal-fields';
const checked = '2026-10-16';

function parseCsv(source) {
  const records = [];
  let row = [], cell = '', quoted = false;
  source = source.replace(/^\uFEFF/, '');
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (char === '"') {
      if (quoted && source[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) {
      row.push(cell); cell = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && source[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some(Boolean)) records.push(row);
      row = [];
    } else cell += char;
  }
  if (cell || row.length) { row.push(cell); records.push(row); }
  const fields = records.shift();
  if (!fields) throw new Error('CSV missing header');
  return { fields, rows: records.map((cells) => Object.fromEntries(fields.map((field, i) => [field, cells[i] ?? '']))) };
}

const quote = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
async function writeCsv(file, fields, rows) {
  const data = [fields.map(quote).join(','), ...rows.map((row) => fields.map((key) => quote(row[key])).join(','))].join('\n') + '\n';
  await fs.writeFile(file + '.k19tmp', data);
  await fs.rename(file + '.k19tmp', file);
}

const seo = parseCsv(await fs.readFile(seoFile, 'utf8'));
const row = seo.rows.find((entry) => entry.item_id === sourceId);
if (!row || seo.rows.filter((entry) => entry.item_id === sourceId).length !== 1) throw new Error('Expected one K19 SEO row');
Object.assign(row, {
  title: 'Trading Journal Fields: What to Record and Why | PropLogAI Blog',
  primary_keyword: 'trading journal fields',
  supporting_keywords: 'what to record in a trading journal | what to track in a trading journal | prop firm journal fields',
  keyword_evidence: 'Current search review',
  keyword_volume: '',
  keyword_sd: '21',
  keyword_cpc_usd: '',
  keyword_checked_on: checked,
  canonical_action: 'Keep and strengthen',
  last_content_review: checked,
  notes: 'K19 local revision 1 was approved by Vicky against article SHA-256 3741D24EDE136336DE1829DA698B1CF5C62FB948F81BA516593827BC8EF45CCE on 2026-10-16 for the combined release; production still serves the prior copy. This is not Approved to Publish. Semrush India desktop exact phrase returned KD 21% and Informational intent; volume and CPC were n/a. Historical all-country GSC page export had 0 clicks, 12 impressions, average position 39.3 for 2026-07-06/2026-09-17; this is not current India data. URL retained. The page owns field selection and purpose; the pillar owns the full journal workflow, and the template owns a reusable form.',
});

const markdown = await fs.readFile(article, 'utf8');
const body = markdown.slice(markdown.indexOf('\n---\n', 4) + 5);
const targets = new Map();
for (const match of body.matchAll(/(?<!!)\[([^\]]+)\]\((https:\/\/proplogai\.com\/(?:blogs|glossary)\/[^)]+|\/(?:blogs|glossary)\/[^)]+)\)/g)) {
  const url = match[2].startsWith('https://') ? match[2] : `https://proplogai.com${match[2]}`;
  if (!targets.has(url)) targets.set(url, match[1]);
}
if (targets.size !== 8) throw new Error(`Expected 8 K19 destinations; got ${targets.size}`);

const byUrl = new Map(seo.rows.map((entry) => [entry.url, entry]));
for (const url of targets.keys()) if (!byUrl.has(url)) throw new Error(`SEO target missing: ${url}`);

const links = parseCsv(await fs.readFile(linkFile, 'utf8'));
const oldCount = links.rows.filter((entry) => entry.source_item_id === sourceId).length;
links.rows = links.rows.filter((entry) => entry.source_item_id !== sourceId);
for (const [url, anchor] of targets) {
  const target = byUrl.get(url);
  const relationship = url.includes('/glossary/') ? 'blog_to_glossary'
    : url === row.pillar_url ? 'cluster_to_pillar'
    : target.topic_cluster === row.topic_cluster ? 'cluster_to_cluster' : 'cross_cluster';
  links.rows.push({
    source_item_id: sourceId,
    source_url: sourceUrl,
    source_primary_keyword: 'trading journal fields',
    target_item_id: target.item_id,
    target_url: url,
    target_primary_keyword: target.primary_keyword,
    anchor_text: anchor,
    link_context: 'First useful definition or next-step route in the K19 journal fields guide',
    relationship,
    status: 'verified_in_draft',
    destination_quality_status: 'audited_live_page',
    destination_http_status: '200',
    destination_canonical_url: url,
    last_verified: checked,
    reason_or_follow_up: 'Exact K19 anchor checked in the local article on 2026-10-16. Reverify destination HTTP and self-canonical in preview/browser. Production source has not changed.',
  });
}

await writeCsv(seoFile, seo.fields, seo.rows);
await writeCsv(linkFile, links.fields, links.rows);
console.log(`K19 SEO row updated; ${oldCount} outgoing rows replaced by ${targets.size} exact local links.`);
