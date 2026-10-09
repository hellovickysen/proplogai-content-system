---
item_id: "proplogai-2026-10-05-position-sizing"
revision: 2
revision_hash: "f88d882cc4b42d1d495f41b628262472d5a61d5d4c1ddb6c355ae162f7afc834"
title: "Position Sizing"
status: "Published"
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
market_rationale: "Semrush India reports 590 monthly searches, difficulty 40, informational intent and CPC $0 for position sizing on 5 October 2026. Property-wide GSC has no current page or query signal."
cannibalisation_status: "Reviewed — this page owns the definition and formula inputs; risk per trade owns the planned-loss input; the calculator owns deterministic calculation; the guide owns the worked method; and the risk-management blog owns the wider workflow."
canonical_url: "https://proplogai.com/glossary/position-sizing"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
seo_title: "What Is Position Sizing in Trading? | PropLogAI"
meta_description: "Learn position sizing with a simple fictional XAUUSD example using planned USD risk, stop distance, platform contract details, and prop-firm limits."
slug: "position-sizing"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-09"
source_checked: "2026-10-05"
source_ids: [RES-013, PLAI-002, PLAI-005]
sources: [https://www.cmegroup.com/education/courses/trade-and-risk-management/proper-position-size, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/tools/position-size-calculator, https://proplogai.com/blogs/how-to-calculate-position-size-forex, https://proplogai.com/glossary/risk-per-trade, https://proplogai.com/glossary/stop-loss, https://proplogai.com/glossary/daily-drawdown-limit, https://proplogai.com/glossary/overall-drawdown-limit, https://proplogai.com/blogs/prop-firm-risk-management]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual statement about recording trade details and whether the trade followed the trader's own rules."
fact_check_status: "Passed"
qa_accuracy: 10
qa_safety: 10
qa_beginner_clarity: 10
qa_educational_value: 10
qa_structure: 10
qa_seo: 10
qa_visual_learning: 10
qa_interactive_learning: 10
qa_internal_linking: 10
qa_proplogai_alignment: 9
qa_total: 99
qa_decision: "PASS"
human_review_status: "Approved"
approved_revision: 2
approved_revision_hash: "f88d882cc4b42d1d495f41b628262472d5a61d5d4c1ddb6c355ae162f7afc834"
approved_by: "Vicky"
approved_at: "2026-10-09T14:57:38+05:30"
---

# Position Sizing

Position sizing is the calculation used to choose trade size so the estimated loss at the planned stop matches your chosen USD risk and exact account rules.

## What is position sizing?

Position sizing is the calculation used to choose the trade size so the estimated loss at your planned [stop loss](/glossary/stop-loss) matches the USD amount you chose before entry. The size must also fit the exact rules for your account and prop-firm program.

## The four inputs

1. **Planned USD risk:** the maximum loss you plan for this trade. See [risk per trade](/glossary/risk-per-trade).
2. **Entry:** the price where you expect to open the trade.
3. **Stop distance:** the distance between the entry and the planned stop.
4. **Estimated loss per unit:** what one unit, contract, or 0.01 lot would lose if the stop filled at the expected price.

`Position size = planned USD risk ÷ estimated loss per unit at the stop`

When you have these inputs, use the [forex position size calculator](/tools/position-size-calculator). The [step-by-step position-size guide](/blogs/how-to-calculate-position-size-forex) shows the complete XAUUSD and EURUSD calculations.

## Fictional XAUUSD example

You plan a maximum loss of **$50**. After choosing the entry and stop, your platform's order ticket estimates that each **0.01 lot** would lose **$10** if price reached that stop.

1. **$50 ÷ $10 = 5 units**
2. **5 × 0.01 lot = 0.05 lot**

The calculated size for this fictional ticket is **0.05 lot**. The $50 amount is an example, not a recommendation.

![Handwritten fictional XAUUSD position-sizing example using a planned 50 dollar loss and an order-ticket estimate of 10 dollars loss per 0.01 lot to calculate 0.05 lot](/glossary/images/position-sizing-formula-note.webp)

*This is a fictional calculation. Verify the instrument and account details shown by your own platform before using a size. Click or tap to enlarge.*

## Check the platform details before using the result

Do not assume that the same price move has the same value on every instrument or platform. Check the contract specification, tick or price-move value, account currency, and any currency conversion shown for your exact order.

Spread, commission, slippage, or a price gap can make the realised loss different from the estimate. A stop is part of the calculation, but it does not guarantee the exact exit price.

## Prop-firm limits are separate checks

After calculating the trade size, compare the planned loss and any open exposure with the current [daily drawdown limit](/glossary/daily-drawdown-limit) and [overall drawdown limit](/glossary/overall-drawdown-limit) for your exact program and account stage. Position sizing does not replace those checks.

The [forex and prop-firm risk-management guide](/blogs/prop-firm-risk-management) explains how the size, stop, open exposure, and firm limits fit together.

## How PropLogAI helps

PropLogAI lets you record trade details and whether the trade followed your own rules. It is not a live position-size calculator, broker feed, or breach monitor.

## Source note

The calculation inputs and PropLogAI feature claims were checked on 5 October 2026. Instrument values, platform specifications, costs, currency conversion, and firm rules can vary.
