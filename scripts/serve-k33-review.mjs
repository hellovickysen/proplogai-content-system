import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = {
  '/k33-audit': ['content-map/review-previews/k33-audit.html', 'text/html; charset=utf-8'],
  '/k33-log': ['content-map/audit-logs/batch-k33-2026-10-18.md', 'text/markdown; charset=utf-8'],
  '/k33-baseline': ['content-map/k33-rendered-link-inventory-baseline-2026-10-18.csv', 'text/csv; charset=utf-8'],
  '/k33-local': ['content-map/k33-rendered-link-inventory-local-2026-10-18.csv', 'text/csv; charset=utf-8'],
};
const port = 3043;
createServer((req, res) => {
  const entry = routes[new URL(req.url, `http://127.0.0.1:${port}`).pathname];
  if (!entry) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = readFileSync(resolve(entry[0]));
    res.writeHead(200, { 'Content-Type': entry[1], 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(500); res.end('File unavailable'); }
}).listen(port, '127.0.0.1', () => console.log(`K33 review: http://127.0.0.1:${port}/k33-audit`));
