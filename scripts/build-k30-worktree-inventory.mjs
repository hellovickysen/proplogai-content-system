import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const repositories = ['proplogai-blog', 'proplogai-glossary', 'proplogai-content-system'];
const output = path.resolve('content-map/release-manifests/k30-worktree-inventory-2026-10-17.csv');
const excluded = new Set([
  'content-map/release-manifests/k30-worktree-inventory-2026-10-17.csv',
  'content-map/release-manifests/k30-release-readiness-2026-10-17.md',
  'content-map/audit-logs/batch-k30-2026-10-17.md',
]);
const runGit = (cwd, args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
const quote = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const records = [];
let excludedReviewPreviews = 0;

for (const repository of repositories) {
  const cwd = path.resolve('..', repository);
  const branch = runGit(cwd, ['branch', '--show-current']);
  const base = runGit(cwd, ['rev-parse', 'HEAD']);
  const entries = execFileSync('git', ['-c', 'core.quotePath=false', 'status', '--porcelain=v1', '-z', '--untracked-files=all'], { cwd, encoding: 'utf8' }).split('\0');

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry) continue;
    const gitStatus = entry.slice(0, 2);
    const relativePath = entry.slice(3).replaceAll('\\', '/');
    if (gitStatus.includes('R') || gitStatus.includes('C')) i++; // porcelain -z adds the original path
    if (repository === 'proplogai-content-system' && excluded.has(relativePath)) continue;
    if (repository === 'proplogai-content-system' && relativePath.startsWith('content-map/review-previews/')) {
      excludedReviewPreviews++;
      continue;
    }
    const fullPath = path.join(cwd, relativePath);
    const exists = fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
    const bytes = exists ? fs.readFileSync(fullPath) : null;
    let releaseClass = 'site-source';
    if (repository === 'proplogai-content-system') {
      releaseClass = relativePath.endsWith('.png') ? 'review-screenshot'
        : 'editorial-source';
    }
    records.push({ repository, branch, base, gitStatus, releaseClass, relativePath,
      bytes: bytes?.length ?? '', sha256: bytes ? crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase() : '' });
  }
}

records.sort((a, b) => a.repository.localeCompare(b.repository) || a.relativePath.localeCompare(b.relativePath));
const headers = ['repository', 'branch', 'base_commit', 'git_status', 'release_class', 'path', 'bytes', 'sha256'];
const csv = [headers.map(quote).join(','), ...records.map((r) => [r.repository, r.branch, r.base, r.gitStatus, r.releaseClass, r.relativePath, r.bytes, r.sha256].map(quote).join(','))].join('\n') + '\n';
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, csv);
const counts = Object.fromEntries(repositories.map((repository) => [repository, records.filter((r) => r.repository === repository).length]));
console.log(JSON.stringify({ counts, rows: records.length, excludedReviewPreviews,
  inventorySha256: crypto.createHash('sha256').update(csv).digest('hex').toUpperCase() }, null, 2));
