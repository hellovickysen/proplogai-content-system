---
item_id: "proplogai-2026-10-09-how-to-calculate-position-size-forex"
revision: 2
title: "How to Calculate Position Size in Forex"
status: "Ready for Production"
content_type: "Blog"
category: "Risk Management"
content_role: "Utility guide"
topic_cluster: "Risk and Drawdown"
primary_keyword: "how to calculate position size in forex"
supporting_keywords: [forex position sizing formula, how to calculate lot size in forex, position size example]
search_intent: "Informational utility"
target_reader: "An Indian forex or prop-firm trader who knows the planned USD loss and stop level but needs a simple worked method before using the calculator."
keyword_evidence: "Editorial hypothesis"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India confirms strong calculator demand, while the exact guide phrases returned unavailable metrics. The guide supports the calculator without claiming unmeasured volume."
cannibalisation_status: "Reviewed — the calculator owns direct calculation, this guide owns the worked method and interpretation, the glossary owns the concise definition, and the risk pillar owns the wider workflow."
canonical_url: "https://proplogai.com/blogs/how-to-calculate-position-size-forex"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [RES-013, RES-028, PLAI-002, PLAI-005]
updated_at: "2026-10-09"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-09"
---

# Content Brief: How to Calculate Position Size in Forex

## Primary question and article promise

Show one trader how planned USD risk, stop distance and the instrument value at that stop become a position size. Use a complete XAUUSD example and a shorter EURUSD cross-check. Link the calculator near the start and explain every input in very simple English.

## Reader problem

You may know where your stop belongs but still be unsure what lot size to enter. A generic formula can be dangerous when it silently assumes a fixed pip value or contract size. The guide must show the order of the checks and make the platform-specific value visible.

## Canonical ownership

- `/tools/position-size-calculator`: deterministic calculation task; primary `forex position size calculator`.
- `/blogs/how-to-calculate-position-size-forex`: worked method, examples, common mistakes and interpretation.
- `/glossary/position-sizing`: concise meaning and four inputs.
- `/glossary/risk-per-trade`: planned USD loss input.
- `/blogs/prop-firm-risk-management`: full risk workflow and account-limit checks.

This creates a new guide URL. No existing URL is migrated or redirected.

## Required teaching path

1. Open with a trader preparing a fictional XAUUSD London-session breakout.
2. Explain why choosing the stop comes before choosing the lot size.
3. Link the live calculator and define planned USD risk, stop distance, pip/tick value and contract size in plain English.
4. Show the price-distance method: planned loss divided by the estimated loss for 1.00 lot.
5. Use a fictional `$10,000` USD account, a user-selected `1%` arithmetic input, `$100` planned loss, XAUUSD entry `4150`, stop `4148`, and a verified-for-the-example contract size of `100` units per lot. A `$2` move would equal `$200` for 1.00 lot, so the raw result is `0.50 lot`.
6. State beside the example that the percentage and contract size are assumptions, not recommendations or universal broker specifications.
7. Cross-check with a fictional EURUSD example using an entered `$10 per pip for 1.00 lot`, a `20-pip` stop and `$100` planned loss: `$100 ÷ ($10 × 20) = 0.50 lot`.
8. Explain why JPY pairs, non-USD account currencies, metals and broker symbols may need different pip, tick, conversion or contract inputs.
9. Explain lot-step rounding and show both raw size and rounded-down size.
10. Explain that spread, commission, slippage and gaps can make the realised loss differ from the estimate.
11. Give a pre-entry checklist and a journal note the trader can copy.

## Formula and safety controls

- Risk amount: `account balance × selected risk percentage ÷ 100`, or use a directly entered USD amount.
- Forex pip mode: `lots = planned USD loss ÷ (stop distance in pips × USD pip value for 1.00 lot)`.
- Price-distance mode: `lots = planned USD loss ÷ (absolute entry-to-stop distance × contract size per lot × quote-to-USD conversion when required)`.
- The live tool should avoid hidden conversions. When the account or quote currency requires conversion, ask for the platform's USD loss per 1.00 lot or a current conversion input.
- Do not recommend a risk percentage, lot size, instrument, direction, setup or session.
- Do not call the estimate a guaranteed maximum loss.
- Do not imply that using the calculator satisfies daily drawdown, overall drawdown, margin or firm rules.

## Required source-register IDs

- `RES-013`: position size depends on planned risk and the value of the move to the stop.
- `PLAI-002`, `PLAI-005`: approved wording for recording trade details and rule adherence.
- Before implementation, add or approve a current technical source for platform contract size, tick size, tick value and profit currency. MetaTrader's official symbol-specification documentation is the preferred candidate.

## Internal-link plan

- Tool → guide: `how the calculation works`.
- Guide → tool: `forex position size calculator`.
- Guide → `/glossary/position-sizing`: `position sizing`.
- Guide → `/glossary/risk-per-trade`: `planned USD risk`.
- Guide → `/glossary/stop-loss`: `stop loss`.
- Guide → `/glossary/daily-drawdown-limit`: `daily drawdown limit`.
- Guide → `/glossary/overall-drawdown-limit`: `overall drawdown limit`.
- Guide → `/blogs/prop-firm-risk-management`: `forex and prop-firm risk-management guide`.
- Add useful reciprocal links from the two glossary owners and the pillar after the tool is locally verified.

## Product mention and CTA rationale

Use one factual CTA after the worked example: calculate the size first, then record the planned risk, stop, setup and final result in PropLogAI for later review. Do not claim live broker data, automatic order sizing or breach monitoring.

## Visual plan

- Cover: 1200×630 handwritten WebP with a clear four-step chain: `$ risk → stop distance → value per lot → lot size`.
- In-article: one 1200×1200 handwritten WebP that reveals the fictional XAUUSD calculation step by step and ends with the complete `0.50 lot` result.
- Make the detailed visual click/tap to zoom and verify keyboard close, touch close and mobile layout.
- Use the interactive calculator as the main interactive element. Do not add a second calculator inside the blog.
- Any comparison table must scroll inside its container at 390 px and must not create page-level overflow.

## Human brief approval

K3 brief revision 1 was approved by Vicky on 9 October 2026. Approval authorises local implementation through Human Review only. It does not authorise a push, merge, deployment or publication.

