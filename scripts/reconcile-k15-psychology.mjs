// Reconcile K15's local article metadata and exact Markdown links. Run from this checkout.
import fs from 'node:fs/promises';
import path from 'node:path';

const article = path.resolve('../proplogai-blog/src/content/blog/trading-psychology-prop-firm.mdx');
const seoFile = path.resolve('content-map/seo-article-register.csv');
const linkFile = path.resolve('content-map/internal-link-register.csv');
const sourceId = 'proplogai-live-blog-trading-psychology-prop-firm';
const sourceUrl = 'https://proplogai.com/blogs/trading-psychology-prop-firm';
const checked = '2026-10-15';

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
  await fs.writeFile(file + '.k15tmp', data);
  await fs.rename(file + '.k15tmp', file);
}

const seo = parseCsv(await fs.readFile(seoFile, 'utf8'));
const row = seo.rows.find((entry) => entry.item_id === sourceId);
if (!row || seo.rows.filter((entry) => entry.item_id === sourceId).length !== 1) throw new Error('Expected one K15 SEO row');
Object.assign(row, {
  title: 'Trading Psychology for Prop Firm Traders: Notice What Changes Your Decisions | PropLogAI Blog',
  category: 'Trading Psychology',
  supporting_keywords: 'trading psychology for prop firm traders | trading emotions | trader behaviour',
  keyword_evidence: 'Editorial hypothesis',
  canonical_action: 'Keep and strengthen',
  last_content_review: checked,
  notes: 'K15 local revision 1 is in human review; production still serves the prior copy. The September 2026 Ubersuggest India metrics are dated estimates, not current rankings. Fresh GSC and Semrush were unavailable on 2026-10-15. Keep the existing URL pending current India page/query evidence.',
});

const markdown = await fs.readFile(article, 'utf8');
const body = markdown.slice(markdown.indexOf('\n---\n', 4) + 5);
const targets = new Map();
for (const match of body.matchAll(/(?<!!)\[([^\]]+)\]\((https:\/\/proplogai\.com\/(?:blogs|glossary)\/[^)]+|\/(?:blogs|glossary)\/[^)]+)\)/g)) {
  const url = match[2].startsWith('https://') ? match[2] : `https://proplogai.com${match[2]}`;
  if (!targets.has(url)) targets.set(url, match[1]);
}
if (targets.size !== 12) throw new Error(`Expected 12 K15 destinations; got ${targets.size}`);

const byUrl = new Map(seo.rows.map((entry) => [entry.url, entry]));
const links = parseCsv(await fs.readFile(linkFile, 'utf8'));
const oldCount = links.rows.filter((entry) => entry.source_item_id === sourceId).length;
links.rows = links.rows.filter((entry) => entry.source_item_id !== sourceId);
for (const [url, anchor] of targets) {
  const target = byUrl.get(url);
  if (!target) throw new Error(`SEO target missing: ${url}`);
  const relationship = url.includes('/glossary/') ? 'blog_to_glossary'
    : target.topic_cluster === row.topic_cluster ? 'pillar_to_cluster' : 'cross_cluster';
  links.rows.push({
    source_item_id: sourceId,
    source_url: sourceUrl,
    source_primary_keyword: 'trading psychology',
    target_item_id: target.item_id,
    target_url: url,
    target_primary_keyword: target.primary_keyword,
    anchor_text: anchor,
    link_context: 'First useful explanation or next-step route in the K15 psychology pillar',
    relationship,
    status: 'verified_in_draft',
    destination_quality_status: 'audited_live_page',
    destination_http_status: '200',
    destination_canonical_url: url,
    last_verified: checked,
    reason_or_follow_up: 'Exact K15 anchor checked in the local built article on 2026-10-15. Destination 200/canonical is from an earlier portfolio audit unless separately noted in the K15 audit log; production source has not changed.',
  });
}

await writeCsv(seoFile, seo.fields, seo.rows);
await writeCsv(linkFile, links.fields, links.rows);
console.log(`K15 SEO row updated; ${oldCount} outgoing rows replaced by ${targets.size} exact local links.`);
