---
item_id: "proplogai-2026-10-05-expectancy"
revision: 1
revision_hash: "e097322de976f6588808688ac544e7292ceb99698d9358443bcdb59ee7696bc4"
title: "Trading Expectancy"
status: "Published"
content_type: "Glossary"
category: "Performance Analytics"
content_role: "Definition"
topic_cluster: "Trading Performance Metrics"
primary_keyword: "trading expectancy"
supporting_keywords: [expectancy formula trading, trading expectancy meaning, calculate expectancy]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who sees expectancy in a performance report and needs to understand what the average describes without treating it as a prediction."
keyword_evidence: "Current search review"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India reported volume 20 and CPC $0 for trading expectancy on 5 October 2026, with unavailable KD and intent. GSC returned 0 clicks and 0 impressions for queries containing trading expectancy from 6 July through 3 October 2026."
cannibalisation_status: "Reviewed — this glossary page owns the definition and formula; the expectancy calculator owns user-entered calculation; the performance-metrics guide owns the multi-metric reading workflow."
canonical_url: "https://proplogai.com/glossary/expectancy"
pillar_url: "https://proplogai.com/blogs/trading-performance-metrics"
seo_title: "What Is Trading Expectancy? Formula and Example"
meta_description: "Calculate trading expectancy with a fictional 20-trade XAUUSD sample and learn why the historical average does not predict the next trade."
slug: "expectancy"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-05"
source_checked: "2026-10-05"
source_ids: [RES-017, PLAI-003]
sources: [https://www.mql5.com/files/book/mql5book.pdf, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/glossary/win-rate, https://proplogai.com/glossary/profit-factor, https://proplogai.com/glossary/average-win-vs-average-loss, https://proplogai.com/blogs/trading-expectancy-calculator, https://proplogai.com/blogs/trading-performance-metrics]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual sentence about organising metrics from user-logged trades."
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
approved_revision_hash: "e097322de976f6588808688ac544e7292ceb99698d9358443bcdb59ee7696bc4"
approved_by: "Vicky"
approved_at: "2026-10-05T22:13:47+05:30"
---

# Trading Expectancy

Trading expectancy is the average net result per trade in one defined historical sample. It does not predict the next trade.

## What is trading expectancy?

Trading expectancy is the average net result per trade in one defined historical sample. You can express it in USD, another account currency, points or R, as long as every result uses the same unit.

Expectancy describes the selected records. It does not predict the next trade or guarantee that the same average will continue.

## Two ways to calculate the same average

**Net result ÷ total trades = expectancy per trade**

You can also calculate it from the same sample:

**(win rate × average win) − (loss rate × average loss) = expectancy**

The two formulas agree only when the inputs use the same trades, dates, counting method and cost treatment.

## Fictional 20-trade XAUUSD example

Use the same sample as the [win-rate](/glossary/win-rate) and [profit-factor](/glossary/profit-factor) definitions:

- **8 wins × $180 average win = $1,440.**
- **12 losses × $80 average loss = $960.**

**$1,440 − $960 = +$480 net result**

**+$480 ÷ 20 trades = +$24 expectancy per trade**

You can check it with the weighted formula:

**(0.40 × $180) − (0.60 × $80) = $72 − $48 = +$24**

The +$24 is the average of these 20 fictional trades. No single trade has to finish at +$24.

![Handwritten fictional 20-trade XAUUSD expectancy example showing 1440 dollars of wins, 960 dollars of losses, and a 24 dollar average per trade](/glossary/images/expectancy-average-per-trade-note.webp)

*The +$24 is the average of this fictional sample, not a prediction for the next trade. Click or tap to enlarge.*

## Keep the sample visible

1. Use one clear start and end date.
2. Use the same closed trades for win rate, average win and average loss.
3. Define how breakeven trades, partial exits and multi-leg positions are counted.
4. Use one currency or R method throughout the sample.
5. Record whether spread, commission, swap and other costs are already included.

The [average win and average loss](/glossary/average-win-vs-average-loss) page explains the two outcome-size inputs.

## Can you calculate expectancy by setup or session?

Yes, if you have enough comparable records. For example, you might review only XAUUSD London-session liquidity-sweep setups or only New York-session breakout setups. Keep the labels and counting method consistent.

A small sample can move sharply after one unusual result. Treat the number as a review of recorded trades, not proof of a permanent edge.

## What should you use next?

The [trading expectancy calculator](/blogs/trading-expectancy-calculator) lets you enter your own counts and averages. The [trading performance metrics guide](/blogs/trading-performance-metrics) shows how to read expectancy beside win rate, profit factor, drawdown and trade count.

## How PropLogAI helps

PropLogAI organises performance metrics from the trades you logged. A historical expectancy does not predict the next trade or prove that the average will continue.

## Source note

The official MQL5 programming reference was checked for this revision. Its expected-payoff statistic describes an arithmetic mean in a defined test record; reporting and trade-grouping conventions can differ across platforms.
