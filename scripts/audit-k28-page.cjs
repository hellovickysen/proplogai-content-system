const { createRequire } = require('node:module');
const { writeFileSync } = require('node:fs');
const { chromium } = createRequire('C:/Users/vicky/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/probe.cjs')('playwright');

const url = 'http://127.0.0.1:4323/blogs/overtrading-prop-firm-challenges';
const expectedTitle = 'How to Avoid Overtrading in Prop Firm Challenges | PropLogAI Blog';
const expectedH1 = 'How to Avoid Overtrading in a Prop Firm Challenge';
const expectedCanonical = 'https://proplogai.com/blogs/overtrading-prop-firm-challenges';

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const results = [];
  for (const width of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 844 }, deviceScaleFactor: 1 });
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const visibleNotes = page.locator('[data-zoom-trigger] img');
    for (let i = 0; i < await visibleNotes.count(); i++) {
      await visibleNotes.nth(i).scrollIntoViewIfNeeded();
      await visibleNotes.nth(i).evaluate(image => image.decode());
    }
    const facts = await page.evaluate(() => {
      const table = document.querySelector('article table');
      const figures = [...document.querySelectorAll('[data-zoom-trigger] img')];
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        modified: document.querySelector('meta[property="article:modified_time"]')?.content,
        h1s: [...document.querySelectorAll('h1')].map(element => element.textContent.trim()),
        quickAnswer: document.querySelector('article')?.textContent.includes('Before another trade, check your written setup'),
        practicalHeading: [...document.querySelectorAll('article h2')].some(element => element.textContent.trim() === 'How to avoid overtrading when you feel the urge'),
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        table: table && { visibleWidth: table.clientWidth, contentWidth: table.scrollWidth, columns: table.rows[0]?.cells.length },
        zoomImages: figures.length,
        zoomImagesLoaded: figures.every(image => image.complete && image.naturalWidth > 0),
      };
    });
    const before = await page.locator('[data-aligned]').textContent();
    await page.locator('[data-drift-review] input[name="session"]').check();
    const after = await page.locator('[data-aligned]').textContent();
    await page.locator('[data-zoom-trigger]').first().click();
    const zoomOpened = await page.locator('[data-zoom-dialog]').first().evaluate(dialog => dialog.open);
    await page.locator('[data-zoom-close]').first().click();
    const zoomClosed = await page.locator('[data-zoom-dialog]').first().evaluate(dialog => !dialog.open);
    const result = { width, status: response?.status(), pageErrors, ...facts, interactiveBefore: before, interactiveAfter: after, zoomOpened, zoomClosed };
    if (result.status !== 200 || result.title !== expectedTitle || result.h1s.length !== 1 || result.h1s[0] !== expectedH1 || result.canonical !== expectedCanonical || result.modified !== '2026-10-17' || !result.quickAnswer || !result.practicalHeading || result.documentWidth > result.viewportWidth || !result.table || (width <= 390 && result.table.contentWidth <= result.table.visibleWidth) || result.zoomImages !== 4 || !result.zoomImagesLoaded || before !== '2' || after !== '3' || !zoomOpened || !zoomClosed || pageErrors.length) {
      throw new Error(`K28 ${width}px QA failed: ${JSON.stringify(result)}`);
    }
    results.push(result);
    await page.close();
  }
  await browser.close();
  writeFileSync('.audit-cache/k28-page-qa.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
