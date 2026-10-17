const { createRequire } = require('node:module');
const { writeFileSync } = require('node:fs');
const { chromium } = createRequire('C:/Users/vicky/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/probe.cjs')('playwright');

const pages = [
  '/blogs/overtrading-prop-firm-challenges',
  '/blogs/prop-firm-consistency-calculator',
  '/blogs/how-to-calculate-position-size-forex',
  '/glossary/consistency-rule',
  '/glossary/position-sizing',
];

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const results = [];
  for (const pathname of pages) {
    const errors = [];
    page.removeAllListeners('pageerror');
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(`https://proplogai.com${pathname}`, { waitUntil: 'networkidle', timeout: 30000 });
    const layout = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      tables: [...document.querySelectorAll('article table')].map(table => {
        const box = table.getBoundingClientRect();
        return { visibleWidth: Math.round(box.width), contentWidth: table.scrollWidth, scrollable: table.scrollWidth > table.clientWidth + 1, firstRowCells: table.rows[0]?.cells.length || 0 };
      }),
    }));
    results.push({ pathname, status: response?.status(), errors, ...layout });
  }
  await browser.close();
  writeFileSync('.audit-cache/k27-mobile-qa.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
