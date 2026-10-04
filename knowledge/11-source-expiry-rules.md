# Source Expiry Rules

## Claim gate

Every sensitive statement must map to one row in a source register before drafting. Sensitive statements include product capabilities, pricing, plan limits, integrations, prop-firm rules, percentages, benchmarks, behavioral claims, and performance claims.

- `Approved` and `Verified`: usable only within the registered wording and limitation.
- `Needs Fact Check`: drafting and publication are blocked until the row is verified and approved.
- `Prohibited`: the recorded wording must not be used.

The writer records the register ID in the brief or review notes. A URL alone is not approval.

## Review windows

| Source type | Maximum age | Earlier recheck trigger |
|---|---:|---|
| PropLogAI price, promotion, trial, plan limit, or coming-soon feature | 7 days | Product or pricing release |
| Other PropLogAI capability | 30 days | Product release or UI change |
| Named prop-firm rule | 14 days | Firm announcement or program change |
| Law, regulation, tax, or platform policy | 14 days | Authority or policy update |
| Stable peer-reviewed research | 12 months | Material correction, retraction, or newer review |
| Benchmark, survey, market statistic, or performance claim | 30 days | New dataset or methodology change |

`review_by` is the operational deadline. If the deadline has passed, the claim automatically becomes `Needs Fact Check` until rechecked.

## Dates shown to readers

A visible phrase such as `checked on`, `rechecked on`, `current as of`, or `last verified` is a freshness claim. Use it only when the named sources were actually opened and checked on that date.

- The visible date must match the source register and the draft's `source_checked` field.
- Recheck every cited time-sensitive source before its `review_by` date. If the article remains live after that deadline, refresh the claim and visible date or remove the dated claim until verification is complete.
- Never advance a visible date merely to make an article appear fresh.
- Historical dates used inside a fictional example do not require periodic updating, but they must remain clearly part of the example.
- A date review is required whenever a page with visible source-check dates is refreshed, approved, or prepared for publication.

## Source quality

Use the product or firm's own current page for product features and rules. Use the original paper, official body, or transparent dataset for research and statistics. Search snippets, copied summaries, affiliate pages, and unsourced marketing copy cannot approve a claim.

Record the exact program, calculation basis, reset time, account type, population, publication date, and limitations when they affect meaning. If the source conflicts with the content, the source wins until an owner resolves the conflict.

## Change and failure handling

When a source disappears, redirects to materially different terms, or conflicts with another first-party page:

1. Change the row to `Needs Fact Check`.
2. Block generation, approval, and publication that rely on it.
3. Preserve the old wording in notes for audit history.
4. Ask the named owner to resolve the claim.
5. Record a new checked date and review deadline only after verification.

Cached `.firecrawl` files are local research evidence and are excluded from Git. The source registers, limitations, checked dates, and audit logs are the durable review record.
