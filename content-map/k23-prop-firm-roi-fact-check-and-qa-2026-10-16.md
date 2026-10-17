# K23 fact check and local QA — prop firm ROI calculator

**State:** Vicky approved exact local article revision 1 on 16 October 2026 for the combined release. No push, merge, deployment or publication.

## Facts and boundaries

- The fictional fees are $150 + $150 + $75 + $200 = **$575**. A $600 received payout leaves **$25 net cash**. $25 ÷ $575 × 100 = **4.347826…%**, shown as **4.35%**. The two earlier failed challenges and reset total **$375**; the successful $200 challenge alone would misleadingly show $400 net cash.
- A later $75 received fee refund makes net counted costs $500, net cash $100 and ROI **20%**. Pending refunds and payouts remain outside received totals. If net counted costs are zero, ROI percentage is undefined; the cash result can still be shown.
- The example is not a typical firm fee, return estimate, forecast or firm-rule calculation. The article distinguishes received payout from passing an evaluation, account profit, a payout request and approval.
- `PLAI-006` permits describing entered expenses, payouts and ROI information. Local first-party app code shows signed-in per-firm expense/payout summaries at `/dashboard/prop-expenses`. No public dedicated ROI route was found. The article does not promise verified accounting, an attempt-level relationship or automatic reconciliation.
- The live [funded-account glossary](https://proplogai.com/glossary/funded-account) opened on 16 October 2026. Existing expense and payout links have prior audited-live entries in the link register; this run did not recheck those two remote destinations.

## Local deliverable and verification

- Source: `../proplogai-blog/src/content/blog/prop-firm-roi-calculator.mdx`. Final SHA-256: `0886B6209F0742A11920C2C5FD5C3F03CEE4A7D8457C78BFBFFE34977AB1F1CE`.
- Code-native SVG rendered to WebP by `../proplogai-blog/scripts/make-k23-roi-notes.mjs`: 1600×900 handwritten-style cover and three progressive 1200×1200 learning notes. Exact text and math were inspected visually. This deterministic route was chosen so the dollar figures remain editable and accurate.
- The browser-only calculator uses cent-based arithmetic. Local tests passed for $575/$600, a $75 refund, zero cost, excess refunds, negative values and excess decimal places. Browser tests confirmed 4.35%, 20.00%, “Not defined” for zero cost and a clear excess-refund error.
- `npm run check` passed: article content validation, Astro static build and built-page validation for 30 published articles. Both content-system validators passed: 48 briefs, 48 drafts, 68 SEO rows, 529 link rows, source registers, GSC snapshots and guard fixtures. `git diff --check` found no whitespace errors; existing CSV line-ending notices are separate.
- Browser QA on the built page confirmed one H1, the proposed meta title and description, self-canonical `https://proplogai.com/blogs/prop-firm-roi-calculator`, the intended WebP cover, and the live glossary destination. At 390 px, the document width was 386 px; the table's 560 px content scrolled within its 346 px viewport. Note zoom opened and closed. The local browser preview is [K23 article revision 1](http://127.0.0.1:4341/blogs/prop-firm-roi-calculator).

Remote links beyond the glossary were not rechecked in this run. Static/local checks do not establish deployment, crawl, indexing or search performance.
