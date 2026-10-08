---
item_id: "proplogai-2026-10-05-win-rate"
revision: 1
revision_hash: "9d94c5ca494a82df5ec006b77c3c5e75349f042c380cf7ff5cb5de82e0e27ace"
title: "Win Rate"
status: "Published"
content_type: "Glossary"
category: "Performance Analytics"
content_role: "Definition"
topic_cluster: "Trading Performance Metrics"
primary_keyword: "trading win rate"
supporting_keywords: [win rate formula, trading win percentage, calculate win rate]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who sees a win-rate percentage in a journal or dashboard and needs to understand what it counts, what it leaves out, and how to compare it fairly."
keyword_evidence: "Editorial hypothesis"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "The 2 October 2026 GSC family check returned 0 clicks and 0 impressions for performance-metric queries. A fresh exact Semrush check was unavailable because authenticated Chrome was not exposed on 5 October 2026; no metric was inferred."
cannibalisation_status: "Reviewed — this glossary page owns the win-rate definition and formula; the trading-performance-metrics blog owns the multi-metric workflow; expectancy owns the combined average-outcome calculation."
canonical_url: "https://proplogai.com/glossary/win-rate"
pillar_url: "https://proplogai.com/blogs/trading-performance-metrics"
seo_title: "What Is Win Rate in Trading? Formula and Example"
meta_description: "Learn how trading win rate is calculated with a 20-trade XAUUSD example, what counts as a win, and why the percentage cannot be read alone."
slug: "win-rate"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-05"
source_checked: "2026-10-05"
source_ids: [RES-016, PLAI-003]
sources: [https://www.mql5.com/en/docs/constants/environment_state/Statistics, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/glossary/average-win-vs-average-loss, https://proplogai.com/glossary/profit-factor, https://proplogai.com/glossary/expectancy, https://proplogai.com/blogs/trading-performance-metrics]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual statement about displaying win rate from user-logged trades."
fact_check_status: "Passed"
qa_accuracy: 10
qa_safety: 10
qa_beginner_clarity: 10
qa_educational_value: 10
qa_structure: 10
qa_seo: 9
qa_visual_learning: 10
qa_interactive_learning: 10
qa_internal_linking: 10
qa_proplogai_alignment: 10
qa_total: 99
qa_decision: "PASS"
human_review_status: "Approved"
approved_revision: 1
approved_revision_hash: "9d94c5ca494a82df5ec006b77c3c5e75349f042c380cf7ff5cb5de82e0e27ace"
approved_by: "Vicky"
approved_at: "2026-10-05"
---

# Win Rate

Win rate is the percentage of closed trades counted as wins in one defined sample.

## What is win rate in trading?

Win rate is the percentage of closed trades counted as wins in one defined sample.

`Win rate = winning closed trades ÷ total closed trades × 100`

The percentage tells you how often the recorded trades won. It does not tell you how much the wins or losses were worth.

## Fictional 20-trade XAUUSD example

Imagine you review 20 closed XAUUSD trades. The sample includes London-session liquidity-sweep setups and New York-session breakout setups. Eight trades finished with a positive recorded result and 12 finished with a negative result.

`8 wins ÷ 20 closed trades × 100 = 40% win rate`

The 40% describes this fictional sample. It is not a target or recommendation.

The same sample finished at +$480 because its winning trades were larger than its losing trades. The win rate alone did not show that. You need the [average win and average loss](/glossary/average-win-vs-average-loss) and the [profit factor](/glossary/profit-factor) to understand the size relationship.

![Handwritten fictional XAUUSD sample showing 8 wins averaging 180 dollars, 12 losses averaging 80 dollars, a 40 percent win rate, and a positive 480 dollar result](/glossary/images/win-rate-same-sample-note.webp)

*Win rate counts how many trades won. It does not show how large the wins and losses were. Click or tap to enlarge.*

## Decide what counts before calculating

1. **Closed trades:** use one clear start and end date.
2. **Breakeven trades:** decide whether a zero result stays in the total or is shown separately.
3. **Partial exits:** decide whether several exits belong to one trade or several records.
4. **Multi-leg positions:** use the same grouping rule every time.
5. **Costs:** record whether spread, commission, swap and other costs are already included.

If you change the counting method between periods, the percentages are not directly comparable.

## What win rate does not show

- **Outcome size:** a $20 win and a $500 win both count as one win.
- **Trade order:** the percentage does not show losing streaks or the path of drawdown.
- **Decision quality:** a winning trade may still have broken the written plan.
- **Future results:** a historical percentage does not predict the next trade.

## Read it with the same sample

Read win rate beside average win, average loss, profit factor, [expectancy](/glossary/expectancy), costs and the number of trades included. A higher percentage is not automatically better, and there is no universal good win rate.

The [trading performance metrics guide](/blogs/trading-performance-metrics) walks through every number from this same fictional XAUUSD sample.

## How PropLogAI helps

PropLogAI displays win rate from the trades you logged. Review it beside trade count, average win, average loss, profit factor, costs, and rule adherence.

## Source note

The metric inputs and PropLogAI feature wording were checked on 5 October 2026. MQL5 is used for the technical report definitions; other journals and platforms may count records differently.
