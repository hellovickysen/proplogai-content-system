// Reconcile the approved local K28 blog revision with its SEO and link rows.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const sourceId = 'proplogai-live-blog-overtrading-prop-firm-challenges';
const sourceUrl = 'https://proplogai.com/blogs/overtrading-prop-firm-challenges';
const article = path.resolve('../proplogai-blog/src/content/blog/overtrading-prop-firm-challenges.mdx');
const seoFile = path.resolve('content-map/seo-article-register.csv');
const linksFile = path.resolve('content-map/internal-link-register.csv');
const copy = await fs.readFile(article, 'utf8');
const hash = createHash('sha256').update(copy).digest('hex').toUpperCase();

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
  if (!fields) throw new Error('CSV header missing');
  return { fields, rows: records.map(cells => Object.fromEntries(fields.map((field, i) => [field, cells[i] ?? '']))) };
}

const quote = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
async function writeCsv(file, { fields, rows }) {
  const data = [fields.map(quote).join(','), ...rows.map(row => fields.map(field => quote(row[field])).join(','))].join('\n') + '\n';
  const temp = `${file}.k28tmp`;
  await fs.writeFile(temp, data);
  await fs.rename(temp, file);
}

const seo = parseCsv(await fs.readFile(seoFile, 'utf8'));
const matches = seo.rows.filter(row => row.item_id === sourceId && row.url === sourceUrl);
if (matches.length !== 1) throw new Error(`Expected one K28 SEO row, found ${matches.length}`);
const row = matches[0];
Object.assign(row, {
  title: 'How to Avoid Overtrading in Prop Firm Challenges | PropLogAI Blog',
  primary_keyword: 'how to avoid overtrading',
  supporting_keywords: 'overtrading in prop firm challenges | overtrading causes | stop overtrading workflow',
  search_intent: 'Informational practical workflow',
  keyword_evidence: 'GSC India + current search review',
  keyword_volume: '110',
  keyword_sd: '27',
  keyword_cpc_usd: '0',
  keyword_checked_on: '2026-10-17',
  canonical_action: 'Keep and strengthen',
  gsc_market: 'India',
  gsc_top_query: '',
  gsc_clicks_period: '',
  gsc_impressions_period: '',
  gsc_ctr_percent_period: '',
  gsc_avg_position_period: '',
  gsc_period: '2026-07-15/2026-10-14',
  last_content_review: '2026-10-17',
  last_gsc_refresh: '2026-10-17',
  notes: `K28 local revision SHA-256 ${hash} implements the approved brief and awaits copy review; production still serves the prior title and copy. The URL is retained. Semrush India estimated 110 monthly searches and 27% KD for how to avoid overtrading on 2026-10-17. The blog had no visible India GSC page row in the checked three-month view; this does not prove zero impressions. The glossary owns definition intent, while this article owns the prevention and plan-review workflow. USD examples and IST record labels remain.`,
});

const body = copy.slice(copy.indexOf('\n---\n', 4) + 5);
const targets = new Set([...body.matchAll(/(?<!!)\[[^\]]+\]\((\/(?:blogs|glossary)\/[^)]+)\)/g)].map(match => `https://proplogai.com${match[1]}`));
const links = parseCsv(await fs.readFile(linksFile, 'utf8'));
const sourceLinks = links.rows.filter(link => link.source_item_id === sourceId && link.source_url === sourceUrl);
if (sourceLinks.length !== 8) throw new Error(`Expected eight K28 link rows, found ${sourceLinks.length}`);
if (targets.size !== 8 || sourceLinks.some(link => !targets.has(link.target_url))) {
  throw new Error('K28 link register does not match article destinations');
}
for (const link of sourceLinks) link.source_primary_keyword = row.primary_keyword;

await writeCsv(seoFile, seo);
await writeCsv(linksFile, links);
console.log(`K28 reconciled: article SHA-256 ${hash}, one SEO row, ${sourceLinks.length} unchanged destinations.`);
