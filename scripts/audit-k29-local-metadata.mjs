import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const blogRoot = path.resolve('../proplogai-blog/src/content/blog');
const glossaryFile = path.resolve('../proplogai-glossary/src/data/glossary-terms.js');
const { glossaryTerms } = await import(pathToFileURL(glossaryFile).href);
const rows = [];

for (const file of await fs.readdir(blogRoot)) {
  if (!file.endsWith('.mdx') || file.startsWith('_')) continue;
  const source = await fs.readFile(path.join(blogRoot, file), 'utf8');
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) throw new Error(`No frontmatter: ${file}`);
  const field = (name) => {
    const match = frontmatter[1].match(new RegExp(`^${name}:\\s*(.+)$`, 'm'));
    return match ? JSON.parse(match[1]) : undefined;
  };
  const title = field('metaTitle') || field('title');
  const description = field('description');
  if (!title || !description) throw new Error(`Missing metadata: ${file}`);
  rows.push({
    type: 'blog', slug: file.slice(0, -4), title: `${title} | PropLogAI Blog`,
    description, source: path.join(blogRoot, file),
  });
}

for (const term of glossaryTerms) {
  rows.push({
    type: 'glossary', slug: term.slug, title: `${term.title} | PropLogAI Glossary`,
    description: term.shortDefinition, source: glossaryFile,
  });
}

const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const headers = ['type', 'slug', 'title_length', 'title', 'description_length', 'description', 'source'];
const lines = [headers.map(csvCell).join(',')];
for (const row of rows.sort((a, b) => a.type.localeCompare(b.type) || a.slug.localeCompare(b.slug))) {
  const values = [row.type, row.slug, row.title.length, row.title, row.description.length, row.description, row.source];
  lines.push(values.map(csvCell).join(','));
}
await fs.mkdir('.audit-cache', { recursive: true });
await fs.writeFile('.audit-cache/k29-local-metadata.csv', `${lines.join('\n')}\n`);
console.log(JSON.stringify({
  blogs: rows.filter((row) => row.type === 'blog').length,
  glossary: rows.filter((row) => row.type === 'glossary').length,
  blogTitlesOver70: rows.filter((row) => row.type === 'blog' && row.title.length > 70).length,
  blogDescriptionsOver160: rows.filter((row) => row.type === 'blog' && row.description.length > 160).length,
  glossaryDescriptionsOver160: rows.filter((row) => row.type === 'glossary' && row.description.length > 160).length,
}, null, 2));
