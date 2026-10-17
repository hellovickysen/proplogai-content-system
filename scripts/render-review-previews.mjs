// Local-only brief preview renderer. Uses the adjacent blog checkout's existing Markdown dependencies.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const modules = path.resolve('../proplogai-blog/node_modules');
const load = (name) => import(pathToFileURL(path.join(modules, name, 'index.js')).href);
const [{ unified }, { default: parse }, { default: gfm }, { default: rehype }, { default: stringify }] =
  await Promise.all(['unified', 'remark-parse', 'remark-gfm', 'remark-rehype', 'rehype-stringify'].map(load));

const style = `:root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;background:#080a11;color:#e9edf5;font:17px/1.7 system-ui,-apple-system,Segoe UI,sans-serif}main{max-width:880px;margin:auto;padding:32px 22px 100px}header{padding:18px 22px;background:#101725;border:1px solid #27334c;border-radius:16px;margin-bottom:26px}header strong{color:#79d7e8}h1,h2,h3{line-height:1.23;color:#fff}h1{font-size:clamp(2rem,5vw,3rem)}h2{font-size:1.55rem;margin-top:2.3em;border-top:1px solid #293044;padding-top:1em}a{color:#8bd8eb}p,li{color:#d5dbe6}strong{color:#fff}code{background:#1a2335;padding:.12em .35em;border-radius:4px;color:#b8eff8;overflow-wrap:anywhere}ol,ul{padding-left:1.5em}li{margin:.45em 0}.table-scroll{overflow-x:auto;max-width:100%}table{border-collapse:collapse;min-width:740px}th,td{border:1px solid #334057;padding:12px;text-align:left;vertical-align:top}th{background:#192338;color:#fff}@media(max-width:600px){body{font-size:16px}main{padding:18px 15px 70px}header{padding:16px}}`;

async function render(source, title, lead, target) {
  const markdown = await fs.readFile(source, 'utf8');
  let body = String(await unified().use(parse).use(gfm).use(rehype).use(stringify).process(markdown));
  body = body
    .replaceAll('href="/glossary/', 'href="https://proplogai.com/glossary/')
    .replaceAll('href="/blogs/', 'href="https://proplogai.com/blogs/')
    .replaceAll('href="/trading-journal"', 'href="https://proplogai.com/trading-journal"')
    .replace('href="keyword-research/k11-prop-firm-challenge-readiness-india-2026-10-10.md"', 'href="/k11-evidence"')
    .replace('href="keyword-research/k12-forex-risk-management-india-2026-10-11.md"', 'href="/k12-evidence"')
    .replace('href="keyword-research/k13-forex-trading-for-beginners-india-2026-10-11.md"', 'href="/k13-evidence"')
    .replace('href="keyword-research/k14-funded-account-journal-india-2026-10-12.md"', 'href="/k14-evidence"')
    .replace('href="keyword-research/k15-trading-psychology-india-2026-10-15.md"', 'href="/k15-evidence"')
    .replace('href="keyword-research/k16-trading-discipline-india-2026-10-15.md"', 'href="/k16-evidence"')
    .replace('href="keyword-research/k17-ai-trading-coach-india-2026-10-15.md"', 'href="/k17-evidence"')
    .replace('href="keyword-research/k18-trading-rulebook-india-2026-10-15.md"', 'href="/k18-evidence"')
    .replace('href="keyword-research/k19-trading-journal-fields-india-2026-10-16.md"', 'href="/k19-evidence"')
    .replace('href="keyword-research/k20-trading-emotions-india-2026-10-16.md"', 'href="/k20-evidence"')
    .replace('href="keyword-research/k21-monthly-trading-review-india-2026-10-16.md"', 'href="/k21-evidence"')
    .replace('href="keyword-research/k22-pnl-calendar-india-2026-10-16.md"', 'href="/k22-evidence"')
    .replace('href="keyword-research/k23-prop-firm-roi-india-2026-10-16.md"', 'href="/k23-evidence"')
    .replaceAll('<table>', '<div class="table-scroll"><table>')
    .replaceAll('</table>', '</table></div>');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><style>${style}</style></head><body><main><header><strong>PropLogAI · ${title}</strong><br>${lead}</header>${body}</main></body></html>`;
  await fs.writeFile(target, html);
}

await render(
  'content-map/k11-prop-firm-challenge-readiness-revision-brief-2026-10-10.md',
  'K11 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/prop-firm-challenge-readiness">live article</a> has not been changed.',
  'content-map/review-previews/k11-prop-firm-challenge-readiness-brief.html',
);
await render(
  'content-map/keyword-research/k11-prop-firm-challenge-readiness-india-2026-10-10.md',
  'K11 Search Evidence',
  '<a href="/k11-brief">Back to the K11 brief</a>.',
  'content-map/review-previews/k11-prop-firm-challenge-readiness-evidence.html',
);
await render(
  'content-map/k12-forex-risk-management-revision-brief-2026-10-11.md',
  'K12 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/prop-firm-risk-management">live article</a> has not been changed.',
  'content-map/review-previews/k12-forex-risk-management-brief.html',
);
await render(
  'content-map/keyword-research/k12-forex-risk-management-india-2026-10-11.md',
  'K12 Search Evidence',
  '<a href="/k12-brief">Back to the K12 brief</a>.',
  'content-map/review-previews/k12-forex-risk-management-evidence.html',
);
await render(
  'content-map/k13-forex-trading-for-beginners-revision-brief-2026-10-11.md',
  'K13 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/forex-trading-for-beginners">live article</a> has not been changed.',
  'content-map/review-previews/k13-forex-trading-for-beginners-brief.html',
);
await render(
  'content-map/keyword-research/k13-forex-trading-for-beginners-india-2026-10-11.md',
  'K13 Search Evidence',
  '<a href="/k13-brief">Back to the K13 brief</a>.',
  'content-map/review-previews/k13-forex-trading-for-beginners-evidence.html',
);
await render(
  'content-map/k14-funded-account-journal-revision-brief-2026-10-12.md',
  'K14 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/forex-journal-funded-accounts">live article</a> has not been changed.',
  'content-map/review-previews/k14-funded-account-journal-brief.html',
);
await render(
  'content-map/keyword-research/k14-funded-account-journal-india-2026-10-12.md',
  'K14 Search Evidence',
  '<a href="/k14-brief">Back to the K14 brief</a>.',
  'content-map/review-previews/k14-funded-account-journal-evidence.html',
);
await render(
  'content-map/k15-trading-psychology-revision-brief-2026-10-15.md',
  'K15 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/trading-psychology-prop-firm">live article</a> has not been changed.',
  'content-map/review-previews/k15-trading-psychology-brief.html',
);
await render(
  'content-map/keyword-research/k15-trading-psychology-india-2026-10-15.md',
  'K15 Search Evidence',
  '<a href="/k15-brief">Back to the K15 brief</a>.',
  'content-map/review-previews/k15-trading-psychology-evidence.html',
);
await render(
  'content-map/k16-trading-discipline-revision-brief-2026-10-15.md',
  'K16 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/trading-discipline-prop-firm">live article</a> has not been changed.',
  'content-map/review-previews/k16-trading-discipline-brief.html',
);
await render(
  'content-map/keyword-research/k16-trading-discipline-india-2026-10-15.md',
  'K16 Search Evidence',
  '<a href="/k16-brief">Back to the K16 brief</a>.',
  'content-map/review-previews/k16-trading-discipline-evidence.html',
);
await render(
  'content-map/k17-ai-trading-coach-revision-brief-2026-10-15.md',
  'K17 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/ai-trading-coach-prop-firm">live article</a> has not been changed.',
  'content-map/review-previews/k17-ai-trading-coach-brief.html',
);
await render(
  'content-map/keyword-research/k17-ai-trading-coach-india-2026-10-15.md',
  'K17 Search Evidence',
  '<a href="/k17-brief">Back to the K17 brief</a>.',
  'content-map/review-previews/k17-ai-trading-coach-evidence.html',
);
await render(
  'content-map/k18-trading-rulebook-revision-brief-2026-10-15.md',
  'K18 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/prop-firm-trading-rulebook">live article</a> has not been changed.',
  'content-map/review-previews/k18-trading-rulebook-brief.html',
);
await render(
  'content-map/keyword-research/k18-trading-rulebook-india-2026-10-15.md',
  'K18 Search Evidence',
  '<a href="/k18-brief">Back to the K18 brief</a>.',
  'content-map/review-previews/k18-trading-rulebook-evidence.html',
);
await render(
  'content-map/k19-trading-journal-fields-revision-brief-2026-10-16.md',
  'K19 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/trading-journal-fields">live article</a> has not been changed.',
  'content-map/review-previews/k19-trading-journal-fields-brief.html',
);
await render(
  'content-map/keyword-research/k19-trading-journal-fields-india-2026-10-16.md',
  'K19 Search Evidence',
  '<a href="/k19-brief">Back to the K19 brief</a>.',
  'content-map/review-previews/k19-trading-journal-fields-evidence.html',
);

await render(
  'content-map/k20-tracking-trading-emotions-revision-brief-2026-10-16.md',
  'K20 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/tracking-trading-emotions">live article</a> has not been changed.',
  'content-map/review-previews/k20-tracking-trading-emotions-brief.html',
);
await render(
  'content-map/keyword-research/k20-trading-emotions-india-2026-10-16.md',
  'K20 Search Evidence',
  '<a href="/k20-brief">Back to the K20 brief</a>.',
  'content-map/review-previews/k20-tracking-trading-emotions-evidence.html',
);
await render(
  'content-map/k21-monthly-trading-review-revision-brief-2026-10-16.md',
  'K21 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/monthly-trading-review-template">live article</a> has not been changed.',
  'content-map/review-previews/k21-monthly-trading-review-brief.html',
);
await render(
  'content-map/keyword-research/k21-monthly-trading-review-india-2026-10-16.md',
  'K21 Search Evidence',
  '<a href="/k21-brief">Back to the K21 brief</a>.',
  'content-map/review-previews/k21-monthly-trading-review-evidence.html',
);
await render(
  'content-map/k22-pnl-calendar-revision-brief-2026-10-16.md',
  'K22 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/prop-firm-pnl-calendar">live article</a> has not been changed.',
  'content-map/review-previews/k22-pnl-calendar-brief.html',
);
await render(
  'content-map/keyword-research/k22-pnl-calendar-india-2026-10-16.md',
  'K22 Search Evidence',
  '<a href="/k22-brief">Back to the K22 brief</a>.',
  'content-map/review-previews/k22-pnl-calendar-evidence.html',
);
await render(
  'content-map/k23-prop-firm-roi-revision-brief-2026-10-16.md',
  'K23 Revision Brief 1',
  'Review the plan. The <a href="https://proplogai.com/blogs/prop-firm-roi-calculator">live article</a> has not been changed.',
  'content-map/review-previews/k23-prop-firm-roi-brief.html',
);
await render(
  'content-map/keyword-research/k23-prop-firm-roi-india-2026-10-16.md',
  'K23 Search Evidence',
  '<a href="/k23-brief">Back to the K23 brief</a>.',
  'content-map/review-previews/k23-prop-firm-roi-evidence.html',
);
console.log('K11–K23 brief and evidence previews rendered.');
await render(
  'content-map/k24-portfolio-audit-2026-10-17.md',
  'K24 Portfolio Audit',
  'The next evidence-led batch after the approved K23 local revision.',
  'content-map/review-previews/k24-portfolio-audit.html',
);
await render(
  'content-map/k25-product-claim-audit-2026-10-17.md',
  'K25 Product Claim Audit',
  'Approved K25 glossary corrections are implemented locally for review.',
  'content-map/review-previews/k25-product-claim-audit.html',
);
await render(
  'content-map/k25-product-claim-map-2026-10-17.md',
  'K25 Statement Map',
  '<a href="/k25-audit">Back to the K25 audit</a>.',
  'content-map/review-previews/k25-product-claim-map.html',
);
await render(
  'content-map/k26-source-and-glossary-link-audit-2026-10-17.md',
  'K26 Source and Glossary-Link Audit',
  'A local rendered-portfolio link pass and one focused consistency-rule naming correction.',
  'content-map/review-previews/k26-source-and-glossary-link-audit.html',
);
await render(
  'content-map/k27-technical-search-audit-2026-10-17.md',
  'K27 Technical and India Search Audit',
  'Fresh live crawl, mobile-table check, signed-in India Search Console and Semrush evidence. No publication.',
  'content-map/review-previews/k27-technical-search-audit.html',
);
await render(
  'content-map/k28-overtrading-cluster-brief-2026-10-17.md',
  'K28 Overtrading Cluster Brief',
  'Approved brief 1; the focused local article revision is ready for review.',
  'content-map/review-previews/k28-overtrading-cluster-brief.html',
);
await render(
  'content-map/audit-logs/batch-k28-2026-10-17.md',
  'K28 Local Revision Audit Log',
  '<a href="http://127.0.0.1:4323/blogs/overtrading-prop-firm-challenges">Open the exact local article</a> for copy review.',
  'content-map/review-previews/k28-audit-log.html',
);
await render(
  'content-map/k29-metadata-review-2026-10-17.md',
  'K29 Metadata Review',
  'Three plain-English glossary summaries are ready for local review. No publication.',
  'content-map/review-previews/k29-metadata-review.html',
);
await render(
  'content-map/audit-logs/batch-k29-2026-10-17.md',
  'K29 Audit Log',
  '<a href="/k29-audit">Open the K29 review report</a>.',
  'content-map/review-previews/k29-audit-log.html',
);
await render(
  'content-map/release-manifests/k30-release-readiness-2026-10-17.md',
  'K30 Content Release Audit',
  'Three-repository content scope and local QA. No publication.',
  'content-map/review-previews/k30-release-readiness.html',
);
await render(
  'content-map/audit-logs/batch-k30-2026-10-17.md',
  'K30 Audit Log',
  '<a href="/k30-audit">Open the K30 report</a>.',
  'content-map/review-previews/k30-audit-log.html',
);
await render(
  'content-map/release-manifests/k31-content-release-review-2026-10-18.md',
  'K31 Content Release Review',
  'Exact three-repository local candidate. No publication.',
  'content-map/review-previews/k31-content-release-review.html',
);
await render(
  'content-map/audit-logs/batch-k31-2026-10-18.md',
  'K31 Audit Log',
  '<a href="/k31-audit">Open the K31 report</a>.',
  'content-map/review-previews/k31-audit-log.html',
);
