# K5 decision brief — Free trading journal

**Status:** Revision 1 approved by the user on 9 October 2026; implemented locally for review. This is a product-page content brief, not a Blog/Glossary production record. The current editorial YAML schema supports only Blog and Glossary, so implementation uses the main-site product workflow.

## Decision

Create a useful product landing page at `https://proplogai.com/trading-journal` for the mixed informational/product query `free trading journal`. The URL currently shows the site's 404 page. The live pricing page confirms that Basic is $0 forever and includes unlimited trade logging, journal entries with emotions, one screenshot per trade, P&L calendar, dashboard/stats and an equity chart. Recheck these facts on implementation day; pricing and limits can change.

Do not create a new `/blogs/free-trading-journal` post. That would compete with the proposed product owner and the existing journal education cluster. Do not claim a downloadable Excel file is the app; the existing `/blogs/trading-journal-template` page owns template/download intent.

## Reader and promise

An India-based forex or prop-firm trader wants to know if they can start recording trades for free and what they can actually review. Speak directly and simply: “You can record your XAUUSD trade, the London session, the setup, your planned risk in $, how you felt, and the result. Then you can see what keeps repeating.” Show the actual workflow, not a long list of marketing adjectives. Use USD for forex amounts; Indian audience context does not change the trade currency.

## Suggested page structure

1. H1: **Free Trading Journal for Forex and Prop Firm Traders**. State that Basic is free and distinguish it from the 14-day Elite trial.
2. Show a realistic, fictional XAUUSD London-session breakout entry: setup, entry/stop, planned risk, result in USD, screenshot, and a brief post-trade note. Mark sample data clearly.
3. Explain the three steps: record a trade, tag the decision and feeling, then review the pattern. A compact mobile-readable handwritten note sequence may teach this better than a decorative dashboard montage.
4. Explain what Basic includes using the currently verified pricing facts. Link to `/pricing` for live plan details; avoid hard-coding volatile limits throughout the page.
5. Show one honest screenshot or locally reproduced product view after confirming the actual logged-in experience. Do not promise integrations, automatic imports, broker execution, alerts or features the product does not provide.
6. Answer practical questions: Is the journal free forever? What can I record? Can I review P&L and emotions? What is different about the Elite trial? Does it work for prop-firm traders? Use concise answers with distinct type hierarchy.
7. End with one clear signup CTA and a smaller link to the educational journal guide.

## Keyword and URL ownership

| Intent | Canonical owner |
|---|---|
| Free online trading journal/product evaluation | Proposed `/trading-journal` |
| What to track and how to review | `/blogs/prop-firm-trading-journal` |
| Downloadable template/Excel-style intent | `/blogs/trading-journal-template` |
| Short definition | `/glossary/trading-journal` |
| Plan limits and prices | `/pricing` |

Potential supporting phrases: `free forex trading journal`, `trading journal software`, `forex trading journal app`. Use only where the page genuinely answers them. Keep `trading journal excel free download` on the template owner. No redirect is proposed because the landing URL currently returns 404; verify no legacy equivalent before implementation.

## Internal-link plan

- Product page → journal pillar: “how to keep and review a trading journal”.
- Product page → template: “download a trading journal template” for visitors who prefer a sheet.
- Product page → glossary: “what a trading journal means”.
- Product page → `/pricing`: “compare current Basic and Elite features”.
- Pillar/template/glossary → product page: one natural “start a free online trading journal” link each, only after the destination is locally implemented and verified.

## SEO and QA gates

- Self-canonical, one H1, descriptive title/meta, indexable route, product-appropriate structured data only if supported by truthful page content.
- Add the new static URL to the relevant sitemap only after it works. Do not change existing journal URLs or create redirects without an identified migration need.
- Test 390 px mobile layout and horizontally scroll any genuinely necessary comparison table. Ensure handwritten teaching visuals are legible at mobile size and can be enlarged if detailed.
- Verify current Basic features and signup path against the live product; do not turn the free plan into a misleading “trial” claim.
- After release, inspect the URL in GSC once and measure India queries/pages after 14–21 days. Indexing is separate from ranking.

## Evidence and limit

See `keyword-research/semrush-k5-free-trading-journal-india-2026-10-09.md`. Semrush India reports 480 monthly searches and KD 33 for the exact phrase, while the current India GSC sample is only 64 impressions across the entire property. The live `/pricing` page confirmed the Basic plan on 9 October 2026; the proposed `/trading-journal` URL returned the site's 404 page on the same date. The landing-page choice is an editorial inference from search intent and product fit, not a measured conversion forecast.

**Local review:** `http://127.0.0.1:3002/trading-journal`. This route is implemented locally; it has not been published to production.
