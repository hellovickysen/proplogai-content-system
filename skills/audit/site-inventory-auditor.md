# Site Inventory Auditor

## Responsibility

Build or refresh the complete blog and glossary inventory before content planning.

## Output

Update `content-map/live-inventory.csv` with one row per canonical URL. Record content type, title, category, intent, primary topic, status, last checked, HTTP result, canonical result, source confidence, and audit priority.

Detect duplicate intent, competing slugs, missing glossary-to-blog paths, outdated terms, broken links, soft 404s, orphan pages, missing sitemap entries, and categories with thin coverage.

Do not infer search performance without authorized Search Console evidence. Record unknowns explicitly.
