---
item_id: "proplogai-2026-10-08-daily-drawdown-limit"
revision: 1
title: "Daily Drawdown Limit"
status: "Ready for Production"
content_type: "Glossary"
category: "Prop Firm Rules"
content_role: "Definition"
topic_cluster: "Risk and Drawdown"
primary_keyword: "daily drawdown limit"
supporting_keywords: [maximum daily loss, daily loss limit prop firm, daily drawdown rule]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who needs to understand the daily floor, what account value is measured, when the firm's day resets and what a violation means before trading a challenge or funded-stage account."
keyword_evidence: "GSC India"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "GSC India returned 0 clicks and 1 impression for queries containing drawdown, with drawdown limit as the only matching query. The exact daily-drawdown page returned 0 clicks and 0 impressions. Semrush India was refreshed on 8 October 2026. The exact phrase has no measurable India volume, KD, intent or CPC in the checked report; this is treated as unavailable rather than zero."
cannibalisation_status: "Reviewed — this glossary page owns the daily-rule definition and floor calculation; the daily drawdown calculator article owns the longer calculation workflow; Drawdown owns the performance decline definition; Overall Drawdown Limit owns the account-period floor."
canonical_url: "https://proplogai.com/glossary/daily-drawdown-limit"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [PFR-002, PFR-006, PFR-007, PFR-015, PFR-020, PLAI-002, PLAI-005]
updated_at: "2026-10-08"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-08"
---

# Content Brief: Daily Drawdown Limit

## Primary question and promise

Answer **“What is a daily drawdown limit?”** immediately. Explain that it is the official daily floor for one named program and account stage. The trader must know the reference value, measured account value, included costs and reset time before calculating the remaining buffer.

## Reader problem

The current page gives accurate ingredients but still makes the trader assemble the meaning. A new trader may copy a percentage, treat Indian midnight as the reset, ignore open XAUUSD loss, or mistake the remaining buffer for an amount they should risk. Revision 1 must turn those ingredients into one short check that a motivated non-trader can repeat.

## Evidence and SEO decision

- Keep `/glossary/daily-drawdown-limit`; it is the established definition owner and matches the primary phrase.
- GSC URL-prefix property, Web, India, 6 July–5 October 2026, checked 8 October: queries containing `drawdown` returned 0 clicks, 1 impression and average position 74. The only row was `drawdown limit` with 1 impression.
- The page filter containing `glossary/daily-drawdown-limit` returned 0 clicks and 0 impressions.
- The same India view without the query/page filter showed 2 clicks, 65 impressions, 3.1% CTR and average position 62.1. Filtered GSC totals may be partial and are not search-volume estimates.
- Current search results use both `daily drawdown limit` and `maximum daily loss`. Keep the first as primary and explain the second as a common firm label.
- Semrush India was refreshed on Server 3 on 8 October 2026. Exact India volume, KD, intent and CPC were unavailable; `daily drawdown limit` showed estimated global volume 20, and `maximum daily loss` showed estimated global volume 30.

## Required teaching path

1. Define the term in two short sentences. Say that some firms call it **maximum daily loss**.
2. Give one four-line rule check:
   - What value sets today's floor?
   - Does the rule test balance, equity or another stated value?
   - Do open P&L, swaps and commissions count?
   - At what server time does the firm's day reset?
3. Teach only the safe calculation: **current measured value − official daily floor = buffer above the floor**. Tell the trader to copy the official floor from the dashboard or current rule rather than rebuilding it from a percentage when the firm already displays it.
4. Use a fictional `$100,000` account and an XAUUSD London-session breakout. The official daily floor is `$95,000`; measured equity is `$96,200`; the buffer is `$1,200`. State clearly that `$1,200` is distance from the floor, not a recommended trade risk.
5. Add two dated named examples under `Checked 8 October 2026`:
   - FTMO 2-Step: the checked page uses a 5% amount based on initial simulated capital, recalculates the floor at 00:00 CE(S)T from the balance recorded then, and tests equity including open P&L, swaps and commissions.
   - FundedNext: the checked page lists 5% for Stellar 2-Step, 3% for Stellar 1-Step and 4% for Stellar Lite, with running plus closed loss counted.
6. Explain the consequence carefully: both checked examples call crossing the applicable limit a violation. The exact account action, reset option and later status must come from that program's current rule page and dashboard.
7. End with one action: copy the official floor, measured value and reset time before the session begins.

## Firm and date boundaries

- Do not state 3%, 4% or 5% as a normal or universal daily limit.
- Do not convert CE(S)T into one fixed IST time because daylight-saving changes the relationship. Tell the reader to check the firm's current server time.
- Do not claim every firm measures equity, includes the same costs or resets the same way.
- Keep FTMO 1-Step, FTMO 2-Step and FundedNext program variants separate.
- Recheck the named rule pages before implementation if the source review date has passed.

## Required sources

- `PFR-002`: FTMO 2-Step Maximum Daily Loss definition, calculation and measured equity.
- `PFR-006`, `PFR-007` and `PFR-015`: FundedNext named-program daily-limit examples.
- `PFR-020`: proof that program parameters vary and must be checked for the purchased model.
- `PLAI-002` and `PLAI-005`: approved manual journal and rule-adherence wording only.

## Internal-link plan

- Link **overall drawdown limit** when separating today's floor from the account-period floor.
- Link **drawdown** when separating a performance decline from a contractual rule.
- Link **risk per trade** when explaining why buffer is not a risk recommendation.
- Link the **daily drawdown calculator** for the longer calculation workflow.
- Link the **prop firm risk management guide** for the wider framework.
- Link **prop firm challenge** when explaining where the rule may apply.

## Product mention

Use one factual sentence: PropLogAI lets a trader manually record the official rule value, trade details, notes and P&L. It does not calculate the firm's official breach status; the firm's current dashboard and rules remain authoritative.

## Visual decision

Plan one square handwritten WebP with click/tap zoom after brief approval.

- Title: `TODAY'S FLOOR CAN RESET`.
- Step 1: copy the official daily floor.
- Step 2: show the measured value including open P&L only when the rule says it counts.
- Step 3: subtract floor from measured value.
- Final panel: `$96,200 − $95,000 = $1,200 BUFFER`, plus `BUFFER IS NOT PLANNED RISK` and `CHECK THE RESET TIME`.
- Keep named firms and percentages out of the image so later rule changes do not make it stale.
- Main labels must remain readable at 390px; the enlarged view must be keyboard and touch accessible.

## Existing pages to avoid duplicating

- `/blogs/daily-drawdown-calculator`: owns the full calculation and comparison workflow.
- `/glossary/overall-drawdown-limit`: owns the account-period floor and static/trailing distinction.
- `/glossary/drawdown`: owns performance drawdown.
- `/glossary/risk-per-trade`: owns planned trade risk.

## Human brief approval

Pending Vicky's approval of J15 brief revision 1.
