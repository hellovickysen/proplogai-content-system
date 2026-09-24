# Date and structured-data model

- Defined: 2026-09-19
- Status: Implemented locally in Batch B; human review and production release pending

## Date source of truth

### Blog articles

| Logical field | Stored field | Requirement | Public output |
|---|---|---|---|
| `published_at` | Frontmatter `date` | Required ISO date | Visible `Published` date, `<time datetime>`, `article:published_time`, `BlogPosting.datePublished`, RSS and sitemap |
| `updated_at` | Frontmatter `updatedDate` | Optional ISO date; must not precede `date` | Visible `Updated` date only when later than publication, `article:modified_time`, `BlogPosting.dateModified`, sitemap |

Existing frontmatter dates are preserved as repository source data. Batch B does not reconstruct or overwrite unknown history. When `updatedDate` is absent, the page omits modified-date claims rather than copying the build date.

### Glossary pages

Historical publication dates are unknown, so glossary pages do not claim a publication date.

| Logical field | Stored field | Requirement | Public output |
|---|---|---|---|
| Page revision date | Per-term `updatedAt`, falling back to `glossaryPageUpdatedAt` | ISO date | Visible `Page updated` date, `<time datetime>`, `article:modified_time`, `WebPage.dateModified`, sitemap |

`glossaryPageUpdatedAt` records the shared data/template revision introduced by this batch. It is not a factual-review date. Future term-specific content revisions should set that term's `updatedAt`; this overrides the shared fallback.

## Structured-data model

### Blog collection

- `CollectionPage`
- `ItemList` containing the 24 published article URLs

### Blog article

- `BlogPosting` with headline, description, canonical main entity, publication date, optional modification date, optional image, and PropLogAI organization attribution
- `BreadcrumbList` matching Home → Blog → article

### Glossary collection

- `CollectionPage`
- `DefinedTermSet` containing the 35 canonical terms

### Glossary term

- `WebPage` carrying the page revision date
- `DefinedTerm` carrying the term name, description, canonical URL, optional aliases, and glossary-set membership
- `BreadcrumbList` matching Home → Glossary → term

## Validation contract

The two repositories' `npm run check` commands now parse every generated JSON-LD block and fail when:

- JSON-LD is invalid JSON;
- a required schema type is missing;
- required properties are incomplete;
- visible ISO dates or article date metadata are absent;
- breadcrumb lists do not contain the expected three items;
- collection item counts differ from the generated inventory; or
- the existing Batch A H1, canonical-term, sitemap, related-term, or brand checks regress.

This is deterministic local structural validation. External Google processing and eligibility can only be verified after an approved deployment and recrawl.
