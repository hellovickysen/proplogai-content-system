import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const port = Number(process.env.PORT || 3017);
const pages = new Map([
  ['/k9-brief', 'k9-ai-journal-pattern-detection-brief.html'],
  ['/k10-brief', 'k10-weekly-trading-review-brief.html'],
  ['/k11-brief', 'k11-prop-firm-challenge-readiness-brief.html'],
  ['/k11-evidence', 'k11-prop-firm-challenge-readiness-evidence.html'],
  ['/k12-brief', 'k12-forex-risk-management-brief.html'],
  ['/k12-evidence', 'k12-forex-risk-management-evidence.html'],
  ['/k13-brief', 'k13-forex-trading-for-beginners-brief.html'],
  ['/k13-evidence', 'k13-forex-trading-for-beginners-evidence.html'],
  ['/k14-brief', 'k14-funded-account-journal-brief.html'],
  ['/k14-evidence', 'k14-funded-account-journal-evidence.html'],
  ['/k15-brief', 'k15-trading-psychology-brief.html'],
  ['/k15-evidence', 'k15-trading-psychology-evidence.html'],
  ['/k16-brief', 'k16-trading-discipline-brief.html'],
  ['/k16-evidence', 'k16-trading-discipline-evidence.html'],
  ['/k17-brief', 'k17-ai-trading-coach-brief.html'],
  ['/k17-evidence', 'k17-ai-trading-coach-evidence.html'],
  ['/k18-brief', 'k18-trading-rulebook-brief.html'],
  ['/k18-evidence', 'k18-trading-rulebook-evidence.html'],
  ['/k19-brief', 'k19-trading-journal-fields-brief.html'],
  ['/k19-evidence', 'k19-trading-journal-fields-evidence.html'],
  ['/k20-brief', 'k20-tracking-trading-emotions-brief.html'],
  ['/k20-evidence', 'k20-tracking-trading-emotions-evidence.html'],
  ['/k21-brief', 'k21-monthly-trading-review-brief.html'],
  ['/k21-evidence', 'k21-monthly-trading-review-evidence.html'],
  ['/k22-brief', 'k22-pnl-calendar-brief.html'],
  ['/k22-evidence', 'k22-pnl-calendar-evidence.html'],
  ['/k23-brief', 'k23-prop-firm-roi-brief.html'],
  ['/k23-evidence', 'k23-prop-firm-roi-evidence.html'],
  ['/k24-audit', 'k24-portfolio-audit.html'],
  ['/k25-audit', 'k25-product-claim-audit.html'],
  ['/k25-map', 'k25-product-claim-map.html'],
  ['/k26-audit', 'k26-source-and-glossary-link-audit.html'],
  ['/k27-audit', 'k27-technical-search-audit.html'],
  ['/k28-brief', 'k28-overtrading-cluster-brief.html'],
  ['/k28-audit', 'k28-audit-log.html'],
  ['/k29-audit', 'k29-metadata-review.html'],
  ['/k29-log', 'k29-audit-log.html'],
  ['/k30-audit', 'k30-release-readiness.html'],
  ['/k30-log', 'k30-audit-log.html'],
  ['/k31-audit', 'k31-content-release-review.html'],
  ['/k31-log', 'k31-audit-log.html'],
]);
const root = path.resolve('content-map/review-previews');

http.createServer(async (request, response) => {
  const pathname = new URL(request.url || '/', 'http://localhost').pathname;
  const k27Data = new Map([
    ['/k27-live-crawl', ['.audit-cache/live-page-audit.csv', 'text/csv']],
    ['/k27-sitemaps', ['.audit-cache/sitemap-records.json', 'application/json']],
    ['/k27-mobile', ['.audit-cache/k27-mobile-qa.json', 'application/json']],
    ['/k28-qa', ['.audit-cache/k28-page-qa.json', 'application/json']],
    ['/k29-metadata', ['.audit-cache/k29-local-metadata.csv', 'text/csv']],
    ['/k30-inventory', ['content-map/release-manifests/k30-worktree-inventory-2026-10-17.csv', 'text/csv']],
    ['/k30-article-hashes', ['content-map/release-manifests/k30-approved-article-hashes-2026-10-17.csv', 'text/csv']],
    ['/k31-candidate', ['content-map/release-manifests/k31-content-candidate-2026-10-18.csv', 'text/csv']],
  ]);
  if (k27Data.has(pathname)) {
    const [file, type] = k27Data.get(pathname);
    try {
      const body = await readFile(path.resolve(file));
      response.writeHead(200, { 'Content-Type': `${type}; charset=utf-8`, 'Cache-Control': 'no-store' });
      response.end(body);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Audit data unavailable');
    }
    return;
  }
  if (pathname === '/k26-links') {
    try {
      const csv = await readFile(path.resolve('content-map/k26-rendered-link-inventory-2026-10-17.csv'));
      response.writeHead(200, { 'Content-Type': 'text/csv; charset=utf-8', 'Cache-Control': 'no-store' });
      response.end(csv);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Inventory unavailable');
    }
    return;
  }
  const file = pages.get(pathname);
  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }
  try {
    const html = await readFile(path.join(root, file));
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end(html);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Preview unavailable');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Review previews: http://127.0.0.1:${port}/k9-brief through /k23-brief and paired evidence routes`);
});
