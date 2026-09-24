# SEO Portfolio Contract

## Durable sources of truth

SEO is a portfolio responsibility. Do not rely on conversation memory.

- `content-map/seo-article-register.csv`: one row per active, planned, drafted, consolidated, redirected, or archived URL.
- `content-map/internal-link-register.csv`: one row per contextual internal-link decision.
- `content-map/future-content-opportunities-YYYY-MM-DD.csv`: dated create, update, consolidate, defer, and tool opportunities.
- `content-map/keyword-research/`: dated market-specific keyword evidence. Blank metrics mean unmeasured, not zero.
- `docs/audience-and-market-policy.md`: primary-market and secondary-country decision rules.
- `docs/category-and-cluster-model.md`: approved category, cluster, and pillar ownership.
- `docs/topic-clusters.md`: human-readable topic ownership.
- `content-map/gsc/`: dated Search Console evidence.
- `content-map/live-inventory.csv`: dated crawl inventory, not permanent truth.

Reusable blank register headers live under `templates/`.

## SEO Editor obligations

For each brief or rewrite, the SEO Editor must:

1. Check the complete register and current inventory.
2. Assign one primary intent to one canonical owner.
3. Decide create, update, consolidate, redirect-proposal, or defer.
4. Set the blog/glossary role, topic cluster, and pillar relationship.
5. Record the exact evidence period. GSC impressions are not search volume.
6. Complete title, description, slug, headings, FAQ/schema assessment, and cannibalisation decision.
7. Insert only useful contextual links and record exact anchors.
8. Verify destination quality, HTTP result, and canonical target.
9. Record reciprocal-link tasks and gaps without silently changing live content.
10. Reconcile the draft and both registers before AI QA.

The SEO register also records category, pillar status, paired blog/glossary URLs, keyword evidence type, market, checked date, and any measured volume, difficulty, or CPC. India in English is the default market. Never invent, backfill, or combine country metrics. Use `Editorial hypothesis` when no India GSC or live India keyword evidence supports a phrase.

## Article-register rules

- One active canonical URL owns one primary intent.
- A second active URL needs an explicit differentiation or consolidation decision.
- Preserve historical GSC snapshots; never overwrite one period with another.
- Preserve the country on every active metric. A secondary-country opportunity requires its own evidence record.
- A local draft must not be marked live or published.
- Glossary terms own concise definition intent; blogs own explanation, workflow, comparison, calculator, template, and problem-solving intent.

## Internal-link-register rules

Each row records source and target IDs/URLs, both primary keywords where known, exact anchor, context, relationship, status, destination quality, HTTP result, verification date, and follow-up.

Allowed working statuses are `planned`, `inserted_in_draft`, `verified_in_draft`, `live_verified`, `blocked`, `remove`, and `replace`.

Navigation, footer, tag, and breadcrumb links do not count as contextual editorial links. Reader usefulness comes before ranking benefit.

## Completion test

SEO is incomplete until the brief/draft and registers agree on primary keyword, intent, canonical owner, content role, pillar, cannibalisation decision, metadata, inserted links, exact anchors, reciprocal tasks, evidence source, and check date.
