---
item_id: "proplogai-2026-10-05-risk-per-trade"
revision: 1
title: "Risk Per Trade"
status: "Ready for Production"
content_type: "Glossary"
category: "Risk Management"
content_role: "Definition"
topic_cluster: "Risk and Drawdown"
primary_keyword: "risk per trade"
supporting_keywords: [risk per trade meaning, how to calculate risk per trade, planned risk amount]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who wants to understand the planned USD loss for one trade without being told to use a universal percentage."
keyword_evidence: "Current search review"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India reported volume 20 and CPC $0 for risk per trade on 5 October 2026, with unavailable KD and intent. GSC returned 0 clicks and 0 impressions for queries containing risk per trade from 6 July through 3 October 2026."
cannibalisation_status: "Reviewed — this glossary page owns the planned-loss definition; position sizing owns conversion into lot size; stop loss owns trigger and fill mechanics; the risk-management guide owns the wider workflow."
canonical_url: "https://proplogai.com/glossary/risk-per-trade"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [RES-013, PFR-002, PFR-006, PLAI-002]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Risk Per Trade

## Primary question and promise

Answer **“What does risk per trade mean?”** immediately. Explain that it is a planned loss amount for one trade if the stop fills near the expected price, not a guaranteed maximum and not a universal percentage.

## Reader problem

The current definition is safe but abstract. It gives a formula without a complete trader-facing example and can leave the reader asking which account value to use, how the amount connects to position size, and whether the planned amount is also the final loss.

## Evidence and SEO decision

- Keep `/glossary/risk-per-trade`; it is the established definition owner and no migration is justified.
- Semrush India reports volume 20 and CPC $0 for `risk per trade`; KD and intent are unavailable.
- GSC returned 0 clicks and 0 impressions for queries containing `risk per trade` during 6 July–3 October 2026.
- `RES-013` supports using a selected dollar or percentage amount and the estimated loss at the chosen stop as position-sizing inputs. Its educational percentages must not become a PropLogAI recommendation.
- The named FTMO and FundedNext sources show that account-level daily-loss calculations can include different inputs; they do not prescribe a per-trade percentage.

## Required teaching path

1. Define risk per trade as the planned USD loss for one trade if the exit fills near the expected price.
2. Separate planned risk, estimated order-ticket loss and realised loss.
3. Show a fictional arithmetic example: `$10,000 reference × 0.5% selected input = $50 planned risk`. Label 0.5% as an example chosen only to demonstrate multiplication.
4. Reuse the approved XAUUSD London-session example: the trader selects $50, the order ticket estimates $10 loss per 0.01 lot at the chosen stop, and the separate position-sizing page calculates 0.05 lot.
5. Explain that spreads, commissions, swaps, slippage, gaps and fill mechanics can change the realised result.
6. Explain combined exposure: several open trades can use the account's loss allowance at the same time.
7. Tell the reader to identify the correct reference value and current firm rule before calculating.
8. State clearly that PropLogAI does not recommend one percentage for every trader, setup or program.

## Safety and evidence boundaries

- Do not prescribe 1%, 2%, 0.5% or any other universal setting.
- Do not describe planned risk as a guaranteed maximum loss.
- Do not imply that staying inside a chosen per-trade amount guarantees compliance with a daily or overall loss rule.
- Use USD in the example.
- Keep order mechanics with the Stop Loss definition and lot-size arithmetic with Position Sizing.

## Required sources

- `RES-013`: position-sizing inputs and the limitation on educational percentage examples.
- `PFR-002` and `PFR-006`: current named examples showing different daily-loss inputs.
- `PLAI-002`: approved manual-journal wording.

## Internal-link plan

- Link **position sizing** when converting the planned amount into lot size.
- Link **stop loss** where expected fill and realised loss may differ.
- Link **daily drawdown limit** and **overall drawdown limit** when discussing account-level limits.
- Link the **prop-firm risk-management guide** as the deeper workflow.

## Product mention

Use one factual paragraph: PropLogAI lets a trader manually record trade details, notes and rule adherence so planned risk can be compared with the result entered later. It is not a broker feed or live breach monitor.

## Visual decision

Plan one square handwritten WebP note with click/tap zoom after brief approval.

- Title: `RISK PER TRADE: PLAN VS RESULT`.
- Show `$10,000 × 0.5% = $50` as fictional arithmetic.
- Separate `planned $50`, `ticket estimate`, and `realised result may differ`.
- Callout: `The percentage is an input, not a universal rule.`
- Avoid a numbered step label and verify readability at 390px.

## Existing pages to avoid duplicating

- `/glossary/position-sizing`: owns the lot-size calculation.
- `/glossary/stop-loss`: owns trigger-versus-fill mechanics.
- `/blogs/prop-firm-risk-management`: owns the full risk workflow.

## Human brief approval

J5 brief revision 1 awaits Vicky's approval. Approval will authorise local implementation through Human Review only.
