import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve('..');
const blogDir = path.join(root, 'proplogai-blog/src/content/blog');
const glossaryFile = path.join(root, 'proplogai-glossary/src/data/glossary-terms.js');
const { glossaryTerms } = await import(pathToFileURL(glossaryFile).href);
const rows = [];

const claimIds = (value) => {
  const ids = [];
  if (/AI coach|Propol|AI review|analys[ez]/i.test(value)) ids.push('PLAI-001');
  if (/log|journal|trade details|notes|screenshots|setup|session|stop|floor|reset time|rule values/i.test(value)) ids.push('PLAI-002');
  if (/metric|dashboard|win rate|profit factor|average R|equity curve|report/i.test(value)) ids.push('PLAI-003');
  if (/calendar|daily result/i.test(value)) ids.push('PLAI-004');
  if (/emotion|rule adherence|rule.follow|discipline|setup followed/i.test(value)) ids.push('PLAI-005');
  if (/expense|payout|ROI/i.test(value)) ids.push('PLAI-006');
  if (/public profile|selected achievements/i.test(value)) ids.push('PLAI-007');
  if (/free plan|Basic/i.test(value)) ids.push('PLAI-008');
  if (/Elite|trial/i.test(value)) ids.push('PLAI-009');
  if (/100 AI|4 AI coach|10 screenshots|unlimited AI|AI analyses per month/i.test(value)) ids.push('PLAI-010');
  if (/CSV export|email coach|share card/i.test(value)) ids.push('PLAI-011');
  return ids.join(' | ') || 'PLAI-002';
};
const csv = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;

for (const file of fs.readdirSync(blogDir).filter((name) => name.endsWith('.mdx'))) {
  const lines = fs.readFileSync(path.join(blogDir, file), 'utf8').split(/\r?\n/);
  const slug = file.replace(/\.mdx$/, '');
  let inBody = false;
  let separators = 0;
  let mapped = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---' && separators < 2) { separators++; inBody = separators === 2; continue; }
    if (!inBody || !line.includes('PropLogAI') || line.startsWith('#')) continue;
    if (!/(lets|can|does|displays|provides|helps|organis|analys|records|manual|dashboard|calendar|coach|expense|payout|trade details|journal|metrics|free plan|Basic)/i.test(line)) continue;
    rows.push({
      type: 'blog', url: `https://proplogai.com/blogs/${slug}`,
      source: `src/content/blog/${file}:${i + 1}`, claim: line,
      ids: claimIds(line), status: 'Mapped for K25 review',
      note: 'Compare exact wording with first-party page, pricing, and current product fields.'
    });
    mapped++;
  }
  if (mapped === 0) rows.push({
    type: 'blog', url: `https://proplogai.com/blogs/${slug}`,
    source: `src/content/blog/${file}`, claim: '', ids: '',
    status: 'No explicit product-feature sentence found by K25 source scan',
    note: 'Keep in portfolio; inspect rendered copy during a later full crawl.'
  });
}
for (const term of glossaryTerms) {
  if (!term.proplogConnection) continue;
  const source = fs.readFileSync(glossaryFile, 'utf8');
  const start = source.indexOf(`slug: '${term.slug}'`);
  const match = source.slice(start).match(/proplogConnection:/);
  const line = start >= 0 && match ? source.slice(0, start + match.index).split('\n').length : '';
  rows.push({
    type: 'glossary', url: `https://proplogai.com/glossary/${term.slug}`,
    source: `src/data/glossary-terms.js:${line}`, claim: term.proplogConnection,
    ids: (term.sourceIds || []).filter((id) => id.startsWith('PLAI-')).join(' | '),
    status: term.slug === 'position-sizing' ? 'Approved correction implemented locally'
      : ['daily-drawdown-limit', 'overall-drawdown-limit'].includes(term.slug) ? 'Approved clarification implemented locally'
      : 'Mapped for K25 review',
    note: term.slug === 'position-sizing' ? 'Now distinguishes the manual journal from the separate public position-size calculator and links directly to it.'
      : ['daily-drawdown-limit', 'overall-drawdown-limit'].includes(term.slug) ? 'Now explains that the official floor or reset time can be copied into notes; no verified dedicated field is claimed.'
      : 'Exact product-connection copy; checked against the source IDs and product pages.'
  });
}
const header = ['page_type', 'url', 'source_location', 'exact_statement', 'claim_ids', 'review_status', 'review_note'];
const target = 'content-map/k25-product-claim-map-2026-10-17.csv';
fs.writeFileSync(target, [header.join(','), ...rows.map((row) =>
  [row.type, row.url, row.source, row.claim, row.ids, row.status, row.note].map(csv).join(',')
)].join('\n') + '\n');
const mdCell = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const mapMd = [
  '# K25 product statement inventory — 17 October 2026',
  '',
  'This is a source-level map of exact PropLogAI statements, not a claim that every rendered sentence or authenticated feature has been verified. The three flagged glossary statements were revised locally after approval; see the K25 audit. The adjacent CSV has machine-readable exact text.',
  '',
  '| Page | Source | Claim IDs | Review state | Exact source statement |',
  '| --- | --- | --- | --- | --- |',
  ...rows.map((row) => `| [${row.url.split('/').at(-1)}](${row.url}) | ${mdCell(row.source)} | ${mdCell(row.ids)} | ${mdCell(row.status)} | ${mdCell(row.claim)} |`),
  ''
].join('\n');
fs.writeFileSync('content-map/k25-product-claim-map-2026-10-17.md', mapMd);
console.log(`${rows.filter((row) => row.claim).length} product statements mapped across ${new Set(rows.map((row) => row.url)).size} pages (${rows.length} register rows) to ${target}`);
