# PropLogAI Search Console baseline

## Scope and data quality

- Property: `https://proplogai.com/` (URL-prefix property)
- Search type: Web
- Effective current period: 2026-07-06 to 2026-09-17
- Previous comparison period: 2026-04-23 to 2026-07-05
- Filters: none
- Last-update signal during collection: 5 hours ago
- Collection method: read-only Google Search Console performance UI

The current period has 3 clicks, 422 impressions, 0.7% CTR, and average position 48.9. The previous period has zero clicks and zero impressions, so no page can be classified as declining. This is an early visibility baseline, not a mature trend dataset.

The visible query table contains 58 rows and 191 impressions. Its sum is below the property total because Search Console withholds some low-volume query data. The page table contains 43 rows and its impressions are not additive to the property total because multiple property URLs can appear in one result set.

## Strongest early page signals

| Page | Clicks | Impressions | CTR | Position | Interpretation |
|---|---:|---:|---:|---:|---|
| Homepage | 3 | 73 | 4.1% | 17.0 | Only page with clicks |
| `/glossary/overtrading` | 0 | 70 | 0% | 81.8 | Clear definition ownership, weak ranking |
| `/blogs/prop-firm-consistency-calculator` | 0 | 69 | 0% | 64.9 | Clear cluster demand, weak ranking |
| `/glossary/drawdown` | 0 | 34 | 0% | 78.5 | Clear definition ownership, weak ranking |
| `/tools` | 0 | 24 | 0% | 11.2 | Striking distance with mixed brand/generic intent |
| `/pricing` | 0 | 22 | 0% | 24.9 | Emerging commercial visibility |
| `/blogs/prop-firm-expense-tracking-guide` | 0 | 15 | 0% | 16.7 | Best content refresh opportunity |
| `/blogs/daily-drawdown-calculator` | 0 | 15 | 0% | 28.8 | Strengthen calculator cluster links |

## Striking-distance content baseline

Using a conservative local rule of at least four impressions and average position 4–20, the content candidates are:

- `prop-firm-expense-tracking-guide`: 15 impressions, position 16.7.
- `prop-firm-challenge-readiness`: 8 impressions, position 7.0.
- Blog index: 7 impressions, position 5.0.
- `prop-firm-roi-calculator`: 6 impressions, position 12.7.
- `prop-firm-trading-rulebook`: 5 impressions, position 8.2.
- `monthly-trading-review-template`: 5 impressions, position 9.4.
- `ai-trading-coach-prop-firm`: 4 impressions, position 9.8.

All have zero clicks in this small window. Treat title and snippet improvements as tests, then review after 28 days rather than assuming low CTR is solely a copy problem.

## Measurement plan

After approved Batch F/G changes are released, record the release date and compare the first complete 28-day period with the preceding 28 days. Review clicks, impressions, CTR, and position for the exact owner URLs and their mapped query groups. Do not combine URL variants when diagnosing canonical behavior.
