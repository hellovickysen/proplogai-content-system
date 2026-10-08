---
item_id: "proplogai-2026-10-08-overall-drawdown-limit"
revision: 1
title: "Overall Drawdown Limit"
status: "Ready for Production"
content_type: "Glossary"
category: "Prop Firm Rules"
content_role: "Definition"
topic_cluster: "Prop Firm Rules and Readiness"
primary_keyword: "overall drawdown limit"
supporting_keywords: [maximum loss prop firm, total drawdown limit, prop firm loss limit]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who needs to understand the account-period floor, whether it stays fixed or moves, and what crossing it means before trading a challenge or funded-stage account."
keyword_evidence: "GSC India"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "GSC India returned 0 clicks and 1 impression for queries containing drawdown, with drawdown limit as the only matching query. The exact overall-drawdown page returned 0 clicks and 0 impressions. Semrush India was refreshed on 8 October 2026. The exact phrase has no measurable India volume, KD, intent or CPC in the checked report; this is treated as unavailable rather than zero."
cannibalisation_status: "Reviewed — this glossary page owns the overall account-floor definition and static-versus-moving distinction; Daily Drawdown Limit owns the one-day floor; Drawdown owns the performance decline; the daily drawdown calculator article owns the longer comparison workflow."
canonical_url: "https://proplogai.com/glossary/overall-drawdown-limit"
pillar_url: "https://proplogai.com/blogs/prop-firm-challenge-readiness"
product_mention_required: true
source_ids: [PFR-003, PFR-005, PFR-008, PFR-020, PLAI-002, PLAI-005]
updated_at: "2026-10-08"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-08"
---

# Content Brief: Overall Drawdown Limit

## Primary question and promise

Answer **“What is an overall drawdown limit?”** immediately. Explain that it is the lowest permitted account value across the account period. The firm may call it **maximum loss**, and the floor may stay fixed or move under the exact program rule.

## Reader problem

The current page defines static and moving floors but does not give one complete trader-facing example. A new trader may confuse the maximum-loss amount with the account floor, assume a trailing floor can move back down, or treat an overall limit like a daily rule that resets. Revision 1 must make the reference, floor, measured value and consequence visible in one simple sequence.

## Evidence and SEO decision

- Keep `/glossary/overall-drawdown-limit`; it is the established definition owner and current evidence does not justify a migration.
- GSC URL-prefix property, Web, India, 6 July–5 October 2026, checked 8 October: queries containing `drawdown` returned 0 clicks, 1 impression and average position 74. The only matching query was `drawdown limit`.
- The page filter containing `glossary/overall-drawdown-limit` returned 0 clicks and 0 impressions.
- The same India view without the query/page filter showed 2 clicks, 65 impressions, 3.1% CTR and average position 62.1. Filtered totals may be partial and are not search-volume estimates.
- Current search results use `maximum drawdown`, `maximum loss` and `overall drawdown limit` for the same broad intent. Keep the established phrase as primary and explain the aliases.
- Semrush India was refreshed on Server 3 on 8 October 2026. Exact India volume, KD, intent and CPC were unavailable for `overall drawdown limit` and `maximum loss prop firm`; no metric is inferred.

## Required teaching path

1. Define the term in two short sentences and introduce **maximum loss** as a common firm label.
2. Separate three rule models in plain English:
   - **Static:** the official floor stays fixed.
   - **Trailing:** the official floor can rise after gains under the stated rule.
   - **End-of-day trailing:** the firm reviews or updates the floor at a daily checkpoint rather than after every price movement.
3. Teach the safe calculation: **current measured value − current official overall floor = buffer above the floor**.
4. Use a fictional `$100,000` account. If the official static floor is `$90,000` and measured equity is `$94,500`, the buffer is `$4,500`. If a different program's dashboard later raises its official trailing floor to `$92,000`, the trader must use `$92,000`, not the original `$90,000`.
5. Add two dated named examples under `Checked 8 October 2026`:
   - FTMO 2-Step: the checked page describes a static 10% Maximum Loss amount based on initial simulated capital; the `$100,000` example has a `$90,000` floor.
   - FTMO 1-Step: the checked page describes an end-of-day trailing Maximum Loss with a 10% amount. The floor can rise and does not fall before the named reset condition.
   - FundedNext Stellar 2-Step: the checked page lists a 10% Maximum Loss amount and uses a fixed `$90,000` floor in its `$100,000` example.
6. Compare daily and overall limits in two direct lines: the daily floor applies to the firm's defined day and resets or recalculates; the overall floor applies across the account period and follows its static or moving rule. Both may apply at the same time.
7. Explain the consequence carefully: the checked named programs call crossing the applicable floor a rule violation. The exact account status and any reset path come from the current agreement and dashboard.
8. End with one action: write down the current official overall floor and whether it is static or moving before trading.

## Firm and date boundaries

- Do not state 6%, 8%, 10% or another figure as normal, typical or universal.
- Do not imply that every trailing floor uses the same high-water mark, update time or withdrawal treatment.
- Do not mix FTMO 1-Step's trailing rule with FTMO 2-Step's static rule.
- Do not call an ordinary performance decline a rule breach; the official account value must cross the program's stated floor.
- Recheck the named rule pages before implementation if the source review date has passed.

## Required sources

- `PFR-003`: FTMO 2-Step static Maximum Loss.
- `PFR-005`: FTMO 1-Step end-of-day trailing Maximum Loss.
- `PFR-008`: FundedNext Stellar 2-Step Maximum Loss example.
- `PFR-020`: proof that program parameters vary by model.
- `PLAI-002` and `PLAI-005`: approved manual journal and rule-adherence wording only.

## Internal-link plan

- Link **daily drawdown limit** when making the one-day versus account-period distinction.
- Link **drawdown** when separating measured performance decline from a contractual floor.
- Link **prop firm challenge** when explaining where the rule may apply.
- Link the **daily drawdown calculator** for the longer comparison workflow.
- Link the **prop firm rules guide** and **challenge readiness guide** for wider rule checking.
- Link **funded account** when noting that account-stage rules may differ.

## Product mention

Use one factual sentence: PropLogAI can store the rule value, trades, notes and P&L that a trader enters. It does not know the firm's live official floor or decide breach status; the firm's current dashboard and agreement remain authoritative.

## Visual decision

Plan one square handwritten WebP with click/tap zoom after brief approval.

- Title: `FIRST ASK: STATIC OR MOVING?`.
- Step 1: show the starting reference and official floor.
- Step 2: split into `STATIC — FLOOR STAYS` and `MOVING — USE THE CURRENT DASHBOARD FLOOR`.
- Step 3: compare measured value with the current official floor.
- Final panel: `$94,500 − $90,000 = $4,500 BUFFER`, plus `DAILY AND OVERALL RULES CAN BOTH APPLY`.
- Use fictional values only; keep firm names and percentages outside the image.
- Main labels must remain readable at 390px; the enlarged view must be keyboard and touch accessible.

## Existing pages to avoid duplicating

- `/glossary/daily-drawdown-limit`: owns the firm's one-day floor and reset.
- `/glossary/drawdown`: owns performance drawdown.
- `/blogs/daily-drawdown-calculator`: owns the full daily-versus-overall calculation workflow.
- `/blogs/prop-firm-rules-guide`: owns the wider rule-review process.

## Human brief approval

Pending Vicky's approval of J15 brief revision 1.
