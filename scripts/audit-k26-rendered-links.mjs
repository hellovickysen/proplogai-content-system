import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const worktrees = resolve(root, '..');
const blog = join(worktrees, 'proplogai-blog');
const glossary = join(worktrees, 'proplogai-glossary');
const { parse } = await import(pathToFileURL(join(blog, 'node_modules/parse5/dist/index.js')).href);
const output = process.argv[2] ? resolve(process.argv[2]) : join(root, 'content-map/k26-rendered-link-inventory-2026-10-17.csv');

function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}
function walk(node, fn) {
  fn(node);
  for (const child of node.childNodes || []) walk(child, fn);
}
function find(node, test) {
  let result;
  walk(node, item => { if (!result && test(item)) result = item; });
  return result;
}
function text(node) {
  let value = '';
  walk(node, item => { if (item.nodeName === '#text') value += item.value || ''; });
  return value.replace(/\s+/g, ' ').trim();
}
function csv(value) { return `"${String(value ?? '').replaceAll('"', '""')}"`; }

const pages = [];
for (const [type, project, marker] of [
  ['blog', blog, 'prose-blog'], ['glossary', glossary, 'prose-glossary'],
]) {
  const dist = join(project, 'dist');
  for (const item of readdirSync(dist, { withFileTypes: true })) {
    if (!item.isDirectory() || item.name.startsWith('_') || item.name === 'images' || item.name === 'downloads') continue;
    const file = join(dist, item.name, 'index.html');
    let html;
    try { html = readFileSync(file, 'utf8'); } catch { continue; }
    const dom = parse(html);
    const content = find(dom, item => (attrs(item).class || '').split(/\s+/).includes(marker));
    if (!content) throw new Error(`Content marker ${marker} missing: ${file}`);
    pages.push({ type, slug: item.name, url: `/${type === 'blog' ? 'blogs' : 'glossary'}/${item.name}`, dom, content });
  }
}
const known = new Set(pages.map(p => p.url));
const rows = [];
for (const page of pages) {
  walk(page.content, node => {
    if (node.tagName !== 'a') return;
    const href = attrs(node).href || '';
    if (!href) return;
    let target = href.replace(/\/$/, '').split(/[?#]/)[0];
    if (/^https?:\/\/proplogai\.com\//.test(target)) target = new URL(target).pathname.replace(/\/$/, '');
    let kind = 'other';
    if (target.startsWith('/glossary/')) kind = 'glossary';
    else if (target.startsWith('/blogs/downloads/')) kind = 'download';
    else if (target.startsWith('/blogs/')) kind = 'blog';
    else if (/^https?:\/\//.test(target)) kind = 'external';
    else if (target.startsWith('/')) kind = 'product';
    const localStatus = ['glossary', 'blog'].includes(kind) ? (known.has(target) ? 'exists-in-local-build' : 'missing-in-local-build')
      : kind === 'download' ? (existsSync(join(blog, 'dist', target.slice('/blogs/'.length))) ? 'exists-in-local-build' : 'missing-in-local-build') : '';
    rows.push([page.type, page.url, 'content', kind, href, text(node), localStatus]);
  });
  if (page.type === 'glossary') {
    const sources = find(page.dom, n => attrs(n).id === 'sources-heading');
    if (sources) {
      const section = find(page.dom, n => n.tagName === 'section' && (n.childNodes || []).some(c => c === sources || find(c, x => x === sources)));
      if (section) walk(section, node => {
        if (node.tagName !== 'a') return;
        rows.push([page.type, page.url, 'sources-card', 'external', attrs(node).href || '', text(node), '']);
      });
    }
  }
}
const header = ['page_type', 'page_url', 'placement', 'target_type', 'href', 'anchor', 'local_target_status'];
writeFileSync(output, [header, ...rows].map(row => row.map(csv).join(',')).join('\n') + '\n');
const counts = pages.map(p => ({
  page: p.url,
  external: rows.filter(r => r[1] === p.url && r[3] === 'external').length,
  glossary: rows.filter(r => r[1] === p.url && r[3] === 'glossary').length,
  missing: rows.filter(r => r[1] === p.url && r[6] === 'missing-in-local-build').length,
}));
console.log(JSON.stringify({ pages: pages.length, links: rows.length, missing: rows.filter(r => r[6] === 'missing-in-local-build'), noExternal: counts.filter(c => c.external === 0).map(c => c.page), noGlossary: counts.filter(c => c.glossary === 0).map(c => c.page), output }, null, 2));
