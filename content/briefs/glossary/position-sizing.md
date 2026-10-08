---
item_id: "proplogai-2026-10-05-position-sizing"
revision: 1
title: "Position Sizing"
status: "Idea"
content_type: "Glossary"
category: "Risk Management"
content_role: "Definition"
topic_cluster: "Risk and Drawdown"
primary_keyword: "position sizing"
supporting_keywords: [what is position sizing in trading, position sizing formula, trade position sizing]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who knows the planned USD loss and stop level but needs a simple explanation of how those inputs determine trade size."
keyword_evidence: "Current search review"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India reports 590 monthly searches, difficulty 40, informational intent and CPC $0 for position sizing on 5 October 2026. GSC reports no clicks or impressions for the page or property-wide position-sizing queries from 6 July through 29 September 2026."
cannibalisation_status: "Reviewed — this page owns the definition and formula inputs; risk per trade owns the planned-loss input; the risk-management blog owns the wider workflow; a future calculator would own deterministic calculation."
canonical_url: "https://proplogai.com/glossary/position-sizing"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [RES-013, PLAI-002, PLAI-005]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Position Sizing

## Primary question and promise

Answer **“What is position sizing?”** immediately. Explain that position sizing is the calculation used to choose trade size so the estimated loss at the planned stop matches the trader's chosen USD risk, while staying inside the exact account and prop-firm rules.

## Reader problem

The current page gives a mathematically wrong EURUSD example and then presents `1–2%` as a universal instruction. A trader needs the order of decisions instead:

1. choose the planned USD loss using their own plan and exact account rules;
2. choose the stop from the setup;
3. check the instrument value and platform contract details; and
4. calculate the trade size.

## Evidence and SEO decision

- Keep `/glossary/position-sizing`; it is the established definition owner.
- Direct GSC, 6 July–29 September 2026: `/glossary/position-sizing` returned 0 clicks and 0 impressions.
- The property-wide query filter containing `position siz` also returned 0 clicks and 0 impressions for the same period.
- Semrush India, Server 1, checked 5 October 2026: `position sizing` has volume 590, keyword difficulty 40, informational intent and CPC $0.
- Semrush reports much larger calculator intent: `position size calculator` volume 9,900 and KD 34; `forex position size calculator` volume 4,400 and KD 47. The glossary must not absorb calculator intent. Record a separate deterministic tool opportunity instead.
- Earlier Ubersuggest India evidence also reported volume 590, difficulty 45 and CPC $0 on 24 September 2026. Keep the source and date separate rather than blending difficulty values.

## Required teaching path

1. Define position sizing in one sentence.
2. Explain the four inputs: planned USD risk, entry, stop distance, and loss per unit at that stop.
3. Use the plain formula: `position size = planned USD risk ÷ estimated loss per unit at the stop`.
4. Give a fictional XAUUSD order-ticket example without assuming a universal contract size: the trader plans a $50 maximum loss, and the platform estimates that each 0.01-lot unit would lose $10 at the selected stop; `$50 ÷ $10 = 5` units of 0.01 lot, or 0.05 lot.
5. State that the trader must verify the platform's contract specification, tick or price-move value and currency conversion before using the result.
6. Explain that spread, commission, slippage or gaps can make the realised loss differ from the estimate.
7. Explain that daily and overall prop-firm limits remain separate checks.
8. Remove `Never risk more than 1–2%` and every claim that size automatically protects capital or guarantees consistency.

## Firm/program variation and formula assumptions

- No universal risk percentage is approved under the PropLogAI system rules. `RES-013` may support the calculation inputs but explicitly cannot support a universal percentage recommendation.
- The $50 example is fictional and is not a recommendation.
- Lot value and loss per price move depend on the instrument, broker or platform contract and account currency.
- A stop order may fill away from the requested price.
- The trader must compare the planned loss and open exposure with their exact current prop-firm rules.

## Required sources

- `RES-013`: position size depends on the planned loss and loss per unit at the stop.
- `PLAI-002` and `PLAI-005`: limited product wording about recording trade details and rule adherence.

## Internal-link plan

- Link **risk per trade** where the planned-loss input is defined.
- Link **stop loss** when explaining the exit level used in the estimate.
- Link **daily drawdown limit** and **overall drawdown limit** as separate prop-firm checks.
- Link **forex risk management** to the deeper pillar.

## Product mention

Use one factual sentence: PropLogAI lets you record trade details and whether the trade followed your own rules. Do not call it a live position-size calculator, broker feed, risk engine or breach monitor.

## Visual decision

Use one 1:1 handwritten WebP formula card with click/tap zoom.

- Step 1: `Planned loss: $50`.
- Step 2: `Order ticket estimate: $10 loss per 0.01 lot at this stop`.
- Step 3: `$50 ÷ $10 = 5 units`.
- Result: `5 × 0.01 lot = 0.05 lot`.
- Footer: `Check contract details, costs and exact firm rules.`
- Verify at 390px. The image must make clear that the platform estimate is specific to the fictional example.

## Existing pages to avoid duplicating

- `/glossary/risk-per-trade`: owns the planned-risk input.
- `/blogs/prop-firm-risk-management`: owns the wider risk-management workflow.
- `/glossary/daily-drawdown-limit` and `/glossary/overall-drawdown-limit`: own the firm-rule definitions.
- A future calculator, if built, must own deterministic calculation rather than this glossary page.

## Human brief approval

- J1 brief revision 1 approved by Vicky on 5 October 2026.
- Implementation remains local and must stop at Human Review.
