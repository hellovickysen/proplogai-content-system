# PropLogAI Blog and Glossary Audit

- Snapshot date: 2026-09-19
- Blog index: `https://proplogai.com/blogs`
- Glossary index: `https://proplogai.com/glossary`
- Sitemap records checked: 62
- Unique pages checked: 61
- Content URLs checked: 24 blogs and 35 glossary pages
- Overall score: 59/100 — Fail
- Accuracy score: 5/10
- Safety score: 6/10

## Executive summary

The site has a strong topical foundation, working crawl paths, self-consistent canonicals, useful article depth, and a coherent same-type related-content system. Every audited URL returned HTTP 200. All 64 unique internal destinations found in the audited content also returned 200 without redirects.

The library is not ready to scale through automation yet. It has systemic trust, semantic, and content-governance gaps: no content page links to an external source, none exposes structured data, none exposes a publication or update date, blogs and glossary pages do not link to each other, 18 articles render duplicate H1s, and brand naming is inconsistent. Several prop-firm and performance definitions present changing or contextual values as broadly typical facts.

The correct next move is to repair the shared templates and high-risk glossary definitions before creating more content.

## Score breakdown

| Area | Score | Evidence |
|---|---:|---|
| Intent and usefulness | 12/15 | Strong coverage and generally clear page purposes; some older pages overlap newer canonical candidates. |
| Factual accuracy and sources | 5/20 | No external source links across 59 content URLs; changing prop-firm rules and benchmark claims are unsourced. |
| Safety and advice boundary | 9/15 | Newer articles usually include boundaries, but several glossary entries are overly universal or prescriptive. |
| Beginner clarity and readability | 13/15 | Plain explanations and examples are common; some claims oversimplify important variation. |
| Structure and examples | 8/10 | New articles are substantial and well structured; three older articles are much thinner and more promotional. |
| SEO and uniqueness | 6/10 | Unique titles/descriptions and good canonicals; duplicate H1s, metadata outliers, and sitemap duplication remain. |
| Internal links and content-map fit | 2/5 | Same-type related links work, but there are no blog-to-glossary or glossary-to-blog links. |
| Brand alignment | 2/5 | `PropLog AI` and `Propol AI` appear throughout rendered content instead of consistent `PropLogAI`. |
| Metadata and operational completeness | 2/5 | No visible dates, date metadata, or JSON-LD on content pages. |

## P1 findings

### 1. High-impact claims have no source layer

All 24 blogs and all 35 unique glossary pages have zero external source links in their main rendered content. This affects claims about prop-firm rules, drawdown methods, challenge structures, payout splits, behavioural research, and metric interpretation.

Examples requiring revision or current named sources include:

- `daily-drawdown-limit`: describes 4–5% as typical and says a breach ends an account instantly, including unrealized losses, without naming a firm or calculation method.
- `risk-per-trade`: presents 0.5–2% as a typical range for prop-firm traders.
- `prop-firm-challenge`: presents an 8–10% Phase 1 target, a 5% Phase 2 target, 30-day timing, real-capital funding, and pass-rate language as broadly representative.
- `funded-account`: says traders use the firm's real capital, gives $25,000–$400,000 account sizes, and gives 70–90% profit splits without distinguishing simulated and live structures.
- `consistency-rule`: treats 30–40% as typical and advises readers not to worry about the rule if they size consistently.
- `profit-factor`: calls a value above 1.5 strong without context.
- `loss-aversion`: presents the “roughly twice” claim as a stable fact without a source or qualification.
- `win-rate`: gives style-based ranges without sources or sample definitions.

Action: add a dated source register and firm-specific caveats. Remove general numeric ranges when they do not help the definition.

### 2. Eighteen blog pages render two H1 elements

The newer blog template renders the article title once in the hero and again in the Markdown body. The six older articles render one H1. This is a shared-template defect rather than an isolated copy error.

Action: keep the hero title as the single H1 and begin article content at H2 or plain introductory copy. Recheck all 24 pages after the template fix.

### 3. The glossary reports 36 terms but exposes 35 unique term URLs

The glossary sitemap repeats `https://proplogai.com/glossary/daily-drawdown-limit`. On the collection page, both “Daily Drawdown Limit” and “Maximum Daily Loss” point to that same destination.

Action: choose one canonical label with the other as an in-page synonym, or create a genuinely distinct term only if its intent and definition differ. Emit each canonical URL once in the sitemap and make the public term count match unique pages.

### 4. Brand naming is inconsistent

Rendered content contains `PropLog AI` on 21 pages, with 48 occurrences. The typo `Propol AI` appears on 7 pages, with 14 occurrences. The approved brand is `PropLogAI`.

Action: correct stored article and related-card content, then add a deterministic brand-name check before publication.

### 5. Content has no structured data or date signals

None of the 61 audited pages contains JSON-LD. None of the 59 content URLs exposes a visible date, `article:published_time`, `article:modified_time`, or a `<time datetime>` value.

Action: add `BlogPosting` or `Article` schema to blogs, `DefinedTerm` schema to glossary pages, and `BreadcrumbList` where breadcrumbs are visible. Add honest published and last-updated dates to articles and glossary entries. Do not fabricate historical dates.

### 6. Blogs and glossary pages are disconnected

All blog pages have zero links to glossary term pages. All glossary pages have zero links to deeper blog guides. Same-type related links exist and work, but readers cannot move between definition and application intent.

Action: create a curated cross-link map. Link the first useful technical mention in a blog to its canonical glossary term, and link each glossary page to one deeper guide when a strong match exists.

## P2 findings

### Metadata length needs a deliberate rewrite

- 22 of 24 blog titles exceed 60 characters.
- 5 blog descriptions exceed 160 characters and 3 are under 120.
- 3 glossary descriptions exceed 160 characters and 2 are under 120.
- Titles and descriptions are otherwise unique and every audited page has a description.

Length alone is not a ranking defect, but the current titles often spend scarce display space on repeated `| PropLogAI Blog` branding. Rewrite for a clear promise first and verify how titles render in search results.

### Three older articles fall below the current standard

The extracted pages for `trading-journal-benefits`, `trading-emotions-account-killer`, and `prop-firm-expense-tracking-guide` are materially shorter than the newer article set and use more sensational or prescriptive wording. Examples include `single biggest edge`, `silent account killer`, `making you lose money`, `the math is obvious`, and `the only number that matters`.

Action: place all three in the refresh or consolidation queue before using them as prominent internal-link targets.

### Product claims need an approved feature source

Newer articles repeatedly describe capabilities such as rule-compliance calculations, cross-week lookups, automatic drawdown tracking, challenge-readiness tracking, and AI pattern categories. The audit found no linked product documentation supporting these claims.

Action: create an approved PropLogAI feature claim register with owner, source, checked date, and exact allowed wording.

## Intent and cannibalisation findings

No two page titles or meta descriptions are exact duplicates. The main overlap risks are semantic:

- `trading-journal-benefits` overlaps the broader `prop-firm-trading-journal` page and should be consolidated or given a sharply distinct beginner-benefits intent after Search Console review.
- `trading-emotions-account-killer` overlaps `trading-psychology-prop-firm` and `tracking-trading-emotions`; its current fear-based framing should not remain the canonical broad page.
- `prop-firm-expense-tracking-guide` overlaps `prop-firm-roi-calculator`; keep both only if the guide owns record-keeping workflow and the calculator article owns the full ROI formula.
- The AI coach cluster is viable if `ai-trading-coach-prop-firm` owns the broad category, `ai-journal-pattern-detection` owns mechanics, and `ai-trading-discipline` owns the safe workflow.
- Weekly and monthly review templates have distinct time-horizon intent and should remain separate.

These are editorial hypotheses because no Search Console data was available during this audit.

## Technical strengths to preserve

- All 61 unique sitemap pages returned HTTP 200.
- Every audited page has a canonical that matches its final URL after normalizing the trailing slash.
- No audited page is marked `noindex`.
- Titles and descriptions are unique.
- All 64 unique internal destinations found in audited content returned 200 with no redirects.
- Every glossary detail page has one H1.
- Same-type related-content links give every content page at least one incoming link from another content page.

## Recommended execution order

1. Fix brand naming and the shared duplicate-H1 template.
2. Correct the duplicate glossary term and sitemap entry.
3. Create a claim register and rewrite the 10 high-risk glossary pages.
4. Add honest dates and structured data.
5. Build blog-to-glossary and glossary-to-blog links.
6. Refresh or consolidate the three older articles.
7. Rewrite metadata outliers.
8. Re-run this audit, then begin the controlled blog and glossary production pilot.

## Evidence and limits

The audit used the live collection pages, XML sitemaps, rendered HTML, canonical and metadata extraction, H1 and link checks, structured-data detection, and page-text review. Word counts are approximate rendered-main counts. Search performance, traffic, CTR, backlinks, and query ownership were not available, so ranking and consolidation decisions remain editorial hypotheses until authorized Search Console evidence is reviewed.
