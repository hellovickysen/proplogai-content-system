// Reconcile K20's local article metadata and exact Markdown links. Run from this checkout.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const article = path.resolve('../proplogai-blog/src/content/blog/tracking-trading-emotions.mdx');
const seoFile = path.resolve('content-map/seo-article-register.csv');
const linkFile = path.resolve('content-map/internal-link-register.csv');
const sourceId = 'proplogai-live-blog-tracking-trading-emotions';
const sourceUrl = 'https://proplogai.com/blogs/tracking-trading-emotions';
const checked = '2026-10-16';
const markdown = await fs.readFile(article, 'utf8');
const revisionHash = createHash('sha256').update(markdown).digest('hex').toUpperCase();

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
  await fs.writeFile(file + '.k20tmp', data);
  await fs.rename(file + '.k20tmp', file);
}

const seo = parseCsv(await fs.readFile(seoFile, 'utf8'));
const row = seo.rows.find((entry) => entry.item_id === sourceId);
if (!row || seo.rows.filter((entry) => entry.item_id === sourceId).length !== 1) throw new Error('Expected one K20 SEO row');
Object.assign(row, {
  title: 'How to Track Trading Emotions in Your Journal | PropLogAI Blog',
  primary_keyword: 'how to track trading emotions',
  supporting_keywords: 'trading emotion journal | emotion tags in trading | how to record emotions in trading',
  paired_content_urls: 'https://proplogai.com/glossary/emotion-tracking',
  keyword_evidence: 'Current search review',
  keyword_volume: '',
  keyword_sd: '',
  keyword_cpc_usd: '',
  keyword_checked_on: checked,
  canonical_action: 'Keep and strengthen',
  gsc_market: 'India',
  gsc_top_query: '',
  gsc_clicks_period: '0',
  gsc_impressions_period: '0',
  gsc_ctr_percent_period: '0%',
  gsc_avg_position_period: '',
  gsc_period: '2026-07-14/2026-10-13',
  last_content_review: checked,
  last_gsc_refresh: checked,
  notes: `K20 revision 1 SHA-256 ${revisionHash} was approved by Vicky on 2026-10-16 for the local combined release; this is not Approved to Publish, and production still serves the prior copy. India Search Console exact page returned 0 clicks and 0 impressions for 2026-07-14/2026-10-13. NoxTools Server 1 Semrush India desktop exact how-to phrase returned n/a volume/KD/intent; broader trading emotions estimated volume 110 with KD n/a. No measured exact-keyword demand or URL-migration rationale. K20 owns the repeatable feeling/urge/plan/action workflow; glossary owns the concise definition, psychology pillar owns the broader topic, journal-fields owns field selection, and template owns the copyable form.`,
});

const body = markdown.slice(markdown.indexOf('\n---\n', 4) + 5);
const targets = new Map();
for (const match of body.matchAll(/(?<!!)\[([^\]]+)\]\((https:\/\/proplogai\.com\/(?:blogs|glossary)\/[^)]+|\/(?:blogs|glossary)\/[^)]+)\)/g)) {
  const url = match[2].startsWith('https://') ? match[2] : `https://proplogai.com${match[2]}`;
  if (!targets.has(url)) targets.set(url, match[1]);
}
if (targets.size !== 4) throw new Error(`Expected 4 K20 destinations; got ${targets.size}`);

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
    source_primary_keyword: row.primary_keyword,
    target_item_id: target.item_id,
    target_url: url,
    target_primary_keyword: target.primary_keyword,
    anchor_text: anchor,
    link_context: 'First useful definition or next-step route in the K20 emotion tracking guide',
    relationship,
    status: 'verified_in_draft',
    destination_quality_status: 'audited_live_page',
    destination_http_status: '200',
    destination_canonical_url: url,
    last_verified: checked,
    reason_or_follow_up: 'Exact K20 anchor checked in the local article and destination H1/self-canonical confirmed in Chrome on 2026-10-16. Production source has not changed.',
  });
}

await writeCsv(seoFile, seo.fields, seo.rows);
await writeCsv(linkFile, links.fields, links.rows);
console.log(`K20 SEO row updated; ${oldCount} outgoing rows replaced by ${targets.size} exact local links.`);
