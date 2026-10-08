---
item_id: "proplogai-2026-10-05-win-rate"
revision: 1
title: "Win Rate"
status: "Ready for Production"
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
market_rationale: "PropLogAI's primary audience is India. The 2 October 2026 GSC family check returned 0 clicks and 0 impressions for performance-metric queries. A fresh exact Semrush check was unavailable because authenticated Chrome was not exposed on 5 October 2026; no metric is inferred."
cannibalisation_status: "Reviewed — this glossary page owns the win-rate definition and formula; the trading-performance-metrics blog owns the multi-metric reading workflow; expectancy owns the combined average-outcome calculation."
canonical_url: "https://proplogai.com/glossary/win-rate"
pillar_url: "https://proplogai.com/blogs/trading-performance-metrics"
product_mention_required: true
source_ids: [RES-016, PLAI-003]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Win Rate

## Primary question and promise

Answer **“What is win rate in trading?”** immediately. Explain that it is the percentage of closed trades counted as wins in one defined sample, then show why the percentage alone cannot tell the reader whether the sample made money or whether the process was followed.

## Reader problem

The current definition and formula are broadly correct, but the page reads like a metric note rather than a conversation with a trader. It uses a separate 100-trade example instead of the same approved 20-trade XAUUSD sample used by the performance-metrics guide. A trader also needs a clearer answer about breakeven trades, partial exits, costs and why win rate does not measure decision quality.

## Evidence and SEO decision

- Keep `/glossary/win-rate`; it is the established definition owner and no migration is justified.
- The GSC performance-metric family check for 6 July–29 September 2026 returned 0 clicks and 0 impressions.
- No exact India Semrush metric is recorded for `trading win rate`. Keep the keyword as an editorial hypothesis until authenticated browser access returns.
- `RES-016` supports the use of total trades and profitable-trade counts in a defined report. It does not support a universal good win rate.
- The live `/blogs/trading-performance-metrics` page is the current pillar and owns the multi-metric workflow.

## Required teaching path

1. Define win rate in one sentence.
2. Show the formula: `winning closed trades ÷ total closed trades × 100`.
3. Use the same fictional sample as the approved pillar: 20 closed XAUUSD trades across London-session liquidity-sweep and New York-session breakout setups; 8 wins and 12 losses; `8 ÷ 20 × 100 = 40%`.
4. State that the 40% describes only this fictional sample and is not a target or recommendation.
5. Explain the counting rules the trader must decide first: breakeven trades, partial exits, multi-leg positions and whether costs are already included.
6. Explain what win rate does not show: win size, loss size, trade order, drawdown, costs, rule adherence or future results.
7. Show why a lower win rate can still accompany a positive sample and a higher win rate can accompany a negative sample without recommending either.
8. Link profit factor and expectancy as different summaries of the same defined trades.
9. Remove any wording that treats win rate as a complete performance or discipline score.

## Firm/program variation and formula assumptions

- The example uses closed trades and classifies a win by the final recorded net result.
- Other journals or platforms may count breakeven trades, partial exits and multi-leg positions differently.
- A prop firm's official dashboard and payout rules remain separate from a journal's win-rate calculation.
- Historical win rate does not predict the next trade or prove rule compliance.

## Required sources

- `RES-016`: defined-sample trade counts and reporting limitations.
- `PLAI-003`: the PropLogAI dashboard displays win rate from logged data.

## Internal-link plan

- Link **profit factor** where outcome size is introduced.
- Link **expectancy** where win frequency and average result are combined.
- Link **average win and average loss** when explaining why outcome size matters.
- Link **trading performance metrics** to the deeper guide using the same fictional sample.

## Product mention

Use one factual sentence: PropLogAI displays win rate from the trades you logged. Tell the reader to review it beside trade count, average win, average loss, profit factor, costs and rule adherence. Do not call it broker-verified or a prediction.

## Visual decision

Use one square handwritten WebP learning note with click/tap zoom.

- `20 closed XAUUSD trades`.
- `8 wins ÷ 20 trades × 100 = 40%`.
- Callout: `Win rate counts outcomes. It does not show their size.`
- Label the sample fictional and verify readability with no overflow at 390px.

## Existing pages to avoid duplicating

- `/blogs/trading-performance-metrics`: owns the full reading order and 20-trade walkthrough.
- `/glossary/profit-factor`: owns gross winning amount versus gross losing amount.
- `/glossary/expectancy`: owns the average result per trade formula.
- `/glossary/average-win-vs-average-loss`: owns the size comparison.

## Human brief approval

J3 brief revision 1 approved by Vicky on 5 October 2026. Implementation remains local and must stop at Human Review.
