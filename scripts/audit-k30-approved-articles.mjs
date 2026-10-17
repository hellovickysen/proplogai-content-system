import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Human-approved SHA-256 values from the dated batch audit logs, not inferred from Git status.
const approved = [
  ['K8', 'ai-trading-discipline', '8641CBFFD0B2DE1152F6481261AAA17212B5A0A19D738680390ACE9D1ED9D0DC'],
  ['K9', 'ai-journal-pattern-detection', '4142A45E9C67F21C16CF0F4045EC8A43083FA5752970FDD1E4BC15A2D92F6CA0'],
  ['K10', 'weekly-trading-review-template', '3F71CDC3D878C64E8369E76066F311AC000EB4E43634EDBA8421AD9237A40128'],
  ['K11', 'prop-firm-challenge-readiness', 'B5244AE60BB93E010E23EBBAAECA12F0D0209BB1E1F68AB4C276C105792216AC'],
  ['K12', 'prop-firm-risk-management', '6A2251CE299AAEB96BD31E3EFE783763DDB5B1303CC7C21DE81466B581A29965'],
  ['K13', 'forex-trading-for-beginners', '633B83C391EA1AD7C7E0B01328DC9A5CF8BF8EB56C236A946B5D9BEFAC37CCC4'],
  ['K14', 'forex-journal-funded-accounts', '6918913026AA1511B1F1212A4A6E275C425D9DAE392E5EB9C0B362E9C48453A6'],
  ['K15', 'trading-psychology-prop-firm', '2DA347908ECD67352F8BCE2A4445EA013D4EEA43407A2919555DE0B1B5714816'],
  ['K16', 'trading-discipline-prop-firm', 'F7460DD599AD3E433E653F4C42D85DD9498BE30135C27712E03297A581B6E278'],
  ['K17', 'ai-trading-coach-prop-firm', 'ACD62BD6D1C27199734B470E18F8BBA41A120C63907D841340422B0B904496C2'],
  ['K18', 'prop-firm-trading-rulebook', '28DB6E784597E280175AE36BE0442C0B984E4749BB94EC75C28410A79B01ADCA'],
  ['K19', 'trading-journal-fields', '3741D24EDE136336DE1829DA698B1CF5C62FB948F81BA516593827BC8EF45CCE'],
  ['K20', 'tracking-trading-emotions', 'B9A930F00DFFF5CB3ECD543E6992F63C3DA48204090F7FAC65F5840AF3A2F225'],
  ['K21', 'monthly-trading-review-template', '3F730AF84E008E4412D864C44608A74B9EF175E56F778379E5AC371289F0D39A'],
  ['K22', 'prop-firm-pnl-calendar', '7E93A853667E76AEC75B542785E128B5A431F92E6796A1B156C6372DB4A3006D'],
  ['K23', 'prop-firm-roi-calculator', '0886B6209F0742A11920C2C5FD5C3F03CEE4A7D8457C78BFBFFE34977AB1F1CE'],
  ['K28', 'overtrading-prop-firm-challenges', 'C5954673E882D5674F3A946C48DBC7C01FF644EDBDBFFE81D6CB084AF4D4A6E2'],
];
const blogRoot = path.resolve('../proplogai-blog/src/content/blog');
const quote = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const rows = approved.map(([batch, slug, approvedSha256]) => {
  const file = path.join(blogRoot, `${slug}.mdx`);
  const currentSha256 = fs.existsSync(file) ? crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase() : '';
  return { batch, slug, approvedSha256, currentSha256, state: currentSha256 === approvedSha256 ? 'MATCH' : 'MISMATCH' };
});
const csv = [
  ['batch', 'slug', 'approved_sha256', 'current_sha256', 'state'].map(quote).join(','),
  ...rows.map((r) => [r.batch, r.slug, r.approvedSha256, r.currentSha256, r.state].map(quote).join(',')),
].join('\n') + '\n';
const output = 'content-map/release-manifests/k30-approved-article-hashes-2026-10-17.csv';
fs.writeFileSync(output, csv);
console.log(JSON.stringify({ total: rows.length, matched: rows.filter((r) => r.state === 'MATCH').length,
  mismatches: rows.filter((r) => r.state !== 'MATCH').map((r) => r.slug) }, null, 2));
