import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const repositories = ['proplogai-blog', 'proplogai-glossary', 'proplogai-content-system'];
const output = path.resolve('content-map/release-manifests/k31-content-candidate-2026-10-18.csv');
const selfExcluded = new Set([
  'content-map/release-manifests/k31-content-candidate-2026-10-18.csv',
  'content-map/release-manifests/k31-content-release-review-2026-10-18.md',
  'content-map/audit-logs/batch-k31-2026-10-18.md',
]);
const git = (cwd, args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const rows = [];
const excluded = { reviewPreviews: 0, manifestFiles: 0 };

for (const repository of repositories) {
  const cwd = path.resolve('..', repository);
  const branch = git(cwd, ['branch', '--show-current']);
  const base = git(cwd, ['rev-parse', 'HEAD']);
  const entries = execFileSync('git', ['-c', 'core.quotePath=false', 'status', '--porcelain=v1', '-z', '--untracked-files=all'], { cwd, encoding: 'utf8' }).split('\0');

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry) continue;
    const status = entry.slice(0, 2);
    const relativePath = entry.slice(3).replaceAll('\\', '/');
    if (status.includes('R') || status.includes('C')) i++;
    if (repository === 'proplogai-content-system') {
      if (relativePath.startsWith('content-map/review-previews/')) { excluded.reviewPreviews++; continue; }
      if (selfExcluded.has(relativePath)) { excluded.manifestFiles++; continue; }
    }

    const file = path.join(cwd, relativePath);
    const bytes = fs.existsSync(file) && fs.statSync(file).isFile() ? fs.readFileSync(file) : null;
    rows.push({ repository, branch, base, status, relativePath,
      bytes: bytes?.length ?? '', sha256: bytes ? crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase() : '' });
  }
}

rows.sort((a, b) => a.repository.localeCompare(b.repository) || a.relativePath.localeCompare(b.relativePath));
const header = ['repository', 'branch', 'base_commit', 'git_status', 'path', 'bytes', 'sha256'];
const csv = [header.map(csvCell).join(','), ...rows.map((row) => [row.repository, row.branch, row.base, row.status, row.relativePath, row.bytes, row.sha256].map(csvCell).join(','))].join('\n') + '\n';
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, csv);
console.log(JSON.stringify({ rows: rows.length,
  counts: Object.fromEntries(repositories.map((repository) => [repository, rows.filter((row) => row.repository === repository).length])),
  excluded,
  sha256: crypto.createHash('sha256').update(csv).digest('hex').toUpperCase() }, null, 2));
