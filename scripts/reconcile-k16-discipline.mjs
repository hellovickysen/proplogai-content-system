// Reconcile K16's local article metadata and exact Markdown links. Run from this checkout.
import fs from 'node:fs/promises';
import path from 'node:path';

const article = path.resolve('../proplogai-blog/src/content/blog/trading-discipline-prop-firm.mdx');
const seoFile = path.resolve('content-map/seo-article-register.csv');
const linkFile = path.resolve('content-map/internal-link-register.csv');
const sourceId = 'proplogai-live-blog-trading-discipline-prop-firm';
const sourceUrl = 'https://proplogai.com/blogs/trading-discipline-prop-firm';
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
  await fs.writeFile(file + '.k16tmp', data);
  await fs.rename(file + '.k16tmp', file);
}

const seo = parseCsv(await fs.readFile(seoFile, 'utf8'));
const row = seo.rows.find((entry) => entry.item_id === sourceId);
if (!row || seo.rows.filter((entry) => entry.item_id === sourceId).length !== 1) throw new Error('Expected one K16 SEO row');
Object.assign(row, {
  title: 'Trading Discipline for Prop Firm Traders: Follow Your Plan, Then Review It | PropLogAI Blog',
  category: 'Trading Discipline',
  supporting_keywords: 'trading discipline for prop firm traders | how to be disciplined in trading | rule adherence',
  keyword_evidence: 'Current search review',
  keyword_volume: '720',
  keyword_sd: '41',
  keyword_cpc_usd: '0.01',
  keyword_checked_on: checked,
  canonical_action: 'Keep and strengthen',
  last_content_review: checked,
  notes: 'K16 local revision 1 is in human review; production still serves the prior copy. Ubersuggest India/English on 2026-10-15 estimated volume 720, difficulty 41 and CPC $0.01 for trading discipline; these are tool estimates, not traffic or rank. GSC Wizard and Semrush were unavailable. Keep the existing URL pending current India page/query evidence.',
});

const markdown = await fs.readFile(article, 'utf8');
const body = markdown.slice(markdown.indexOf('\n---\n', 4) + 5);
const targets = new Map();
for (const match of body.matchAll(/(?<!!)\[([^\]]+)\]\((https:\/\/proplogai\.com\/(?:blogs|glossary)\/[^)]+|\/(?:blogs|glossary)\/[^)]+)\)/g)) {
  const url = match[2].startsWith('https://') ? match[2] : `https://proplogai.com${match[2]}`;
  if (!targets.has(url)) targets.set(url, match[1]);
}
if (targets.size !== 12) throw new Error(`Expected 12 K16 destinations; got ${targets.size}`);

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
    source_primary_keyword: 'trading discipline',
    target_item_id: target.item_id,
    target_url: url,
    target_primary_keyword: target.primary_keyword,
    anchor_text: anchor,
    link_context: 'First useful explanation or next-step route in the K16 discipline pillar',
    relationship,
    status: 'verified_in_draft',
    destination_quality_status: 'audited_live_page',
    destination_http_status: '200',
    destination_canonical_url: url,
    last_verified: checked,
    reason_or_follow_up: 'Exact K16 anchor checked in the local article on 2026-10-15. Destination 200/canonical is from an earlier portfolio audit unless separately noted in the K16 audit log; production source has not changed. Recheck the current live setup-compliance destination before release because its body contains older unsupported performance comparisons.',
  });
}

await writeCsv(seoFile, seo.fields, seo.rows);
await writeCsv(linkFile, links.fields, links.rows);
console.log(`K16 SEO row updated; ${oldCount} outgoing rows replaced by ${targets.size} exact local links.`);
