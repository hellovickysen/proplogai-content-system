import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const date = '2026-10-18';
const note = 'K33 local link repair prepared 2026-10-18; source build verified; production unchanged pending separate release.';
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const write = (name, value) => fs.writeFileSync(path.join(root, name), value);

function fields(line) {
  const result = []; let cell = ''; let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { result.push(cell); cell = ''; }
    else cell += char;
  }
  result.push(cell);
  return result;
}
const line = (values) => values.map((value) => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',');
function table(name) {
  const original = read(name);
  const ending = original.includes('\r\n') ? '\r\n' : '\n';
  const lines = original.trimEnd().split(/\r?\n/);
  const header = fields(lines[0]);
  const rows = lines.slice(1).map((raw) => ({ raw, values: fields(raw) }));
  return { name, header, rows, ending, save() { write(name, [lines[0], ...rows.map((row) => row.changed ? line(row.values) : row.raw)].join(ending) + ending); } };
}
function set(row, header, key, value) { row.values[header.indexOf(key)] = value; row.changed = true; }
function append(row, header, key, value) {
  const index = header.indexOf(key);
  if (!row.values[index].includes(value)) set(row, header, key, `${row.values[index].trim()} ${value}`.trim());
}

const seo = table('content-map/seo-article-register.csv');
const byUrl = new Map(seo.rows.map((row) => [row.values[seo.header.indexOf('url')], row]));
const base = 'https://proplogai.com';
const legacy = byUrl.get(`${base}/blogs/trading-journal-benefits`);
if (!legacy) throw new Error('Legacy journal row missing');
set(legacy, seo.header, 'content_status', 'redirect_error');
set(legacy, seo.header, 'canonical_url', `${base}/blogs/prop-firm-trading-journal`);
set(legacy, seo.header, 'content_role', 'Redirected legacy URL');
set(legacy, seo.header, 'canonical_action', 'Repair live redirect');
set(legacy, seo.header, 'last_content_review', date);
append(legacy, seo.header, 'notes', 'K33 live browser check 2026-10-18: old URL currently reaches /prop-firm-trading-journal without /blogs and shows 404. Absolute canonical redirect prepared locally; production repair pending.');
for (const url of [
  '/blogs/prop-firm-risk-management', '/blogs/prop-firm-challenge-readiness',
  '/blogs/prop-firm-trading-rulebook', '/glossary/trading-plan',
]) {
  const row = byUrl.get(base + url);
  if (!row) throw new Error(`SEO row missing: ${url}`);
  set(row, seo.header, 'last_content_review', date);
  append(row, seo.header, 'notes', note);
}
seo.save();

const migrations = table('content-map/url-migration-register.csv');
for (const [id, wrongPath] of [['H4-001', '/how-emotions-affect-trading-decisions'], ['I3-001', '/prop-firm-trading-journal']]) {
  const row = migrations.rows.find((item) => item.values[0] === id);
  if (!row) throw new Error(`Migration missing: ${id}`);
  set(row, migrations.header, 'status', 'Live redirect broken; local repair prepared');
  append(row, migrations.header, 'notes', `K33 browser check 2026-10-18: old URL redirects to ${wrongPath} on proplogai.com and shows 404. Blog Vercel destination changed locally to the absolute /blogs/ canonical; production remains broken until released and verified.`);
}
migrations.save();

const links = table('content-map/internal-link-register.csv');
const records = [
  ['/blogs/prop-firm-risk-management', '/blogs/forex-trading-for-beginners', 'forex trading for beginners', 'Explains XAUUSD, trade size and stops before the risk workflow.', 'blog_to_blog'],
  ['/blogs/prop-firm-challenge-readiness', '/blogs/forex-trading-for-beginners', 'forex beginner guide', 'Provides the learning path before paying for a challenge.', 'blog_to_blog'],
  ['/blogs/prop-firm-trading-rulebook', '/glossary/trade-management', 'trade management', 'Defines after-entry stop and exit decisions.', 'blog_to_glossary'],
  ['/glossary/trading-plan', '/glossary/trade-management', 'trade management', 'Explains the exit or management field in a written plan.', 'glossary_to_glossary'],
];
for (const [sourcePath, targetPath, anchor, context, relationship] of records) {
  const source = byUrl.get(base + sourcePath);
  const target = byUrl.get(base + targetPath);
  if (!source || !target) throw new Error(`Link source or target missing: ${sourcePath} → ${targetPath}`);
  const existing = links.rows.find((row) => row.values[links.header.indexOf('source_url')] === base + sourcePath && row.values[links.header.indexOf('target_url')] === base + targetPath && row.values[links.header.indexOf('anchor_text')] === anchor);
  if (existing) {
    if (sourcePath === '/glossary/trading-plan') {
      set(existing, links.header, 'status', 'verified_in_draft');
      set(existing, links.header, 'reason_or_follow_up', 'K33 exact anchor verified in revised local glossary draft and rebuilt Astro page; live destination opened in browser on 2026-10-18. Production source unchanged.');
    }
    continue;
  }
  const values = Object.fromEntries(links.header.map((key) => [key, '']));
  Object.assign(values, {
    source_item_id: source.values[seo.header.indexOf('item_id')], source_url: base + sourcePath,
    source_primary_keyword: source.values[seo.header.indexOf('primary_keyword')],
    target_item_id: target.values[seo.header.indexOf('item_id')], target_url: base + targetPath,
    target_primary_keyword: target.values[seo.header.indexOf('primary_keyword')],
    anchor_text: anchor, link_context: context, relationship, status: 'verified_in_draft',
    destination_quality_status: 'audited_live_page', destination_http_status: '200',
    destination_canonical_url: base + targetPath, last_verified: date,
    reason_or_follow_up: 'K33 exact anchor verified in rebuilt local page and editorial draft where present; live destination opened in browser on 2026-10-18. Source change is local only.',
  });
  links.rows.push({ values: links.header.map((key) => values[key]), changed: true });
}
links.save();
console.log(JSON.stringify({ seoRows: seo.rows.length, migrationRows: migrations.rows.length, linkRows: links.rows.length }));
