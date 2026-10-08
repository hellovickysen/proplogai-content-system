---
item_id: "proplogai-2026-10-05-average-win-vs-average-loss"
revision: 1
revision_hash: "e481bdfb7c25d9c4756ebbdf1165d1b6f7a36a79f94262bc914718c1cb65af9f"
title: "Average Win vs Average Loss"
status: "Approved to Publish"
content_type: "Glossary"
category: "Performance Analytics"
content_role: "Definition"
topic_cluster: "Trading Performance Metrics"
primary_keyword: "average win vs average loss"
supporting_keywords: [average winner vs average loser, average profit trade, average loss trade]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who needs to calculate average winning and losing trade size and understand why the result must be read with win rate."
keyword_evidence: "Current search review"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India returned no usable volume, KD, intent or CPC for the exact phrase or average win trading on 5 October 2026. GSC returned 0 clicks and 0 impressions for queries containing average win from 6 July through 3 October 2026."
cannibalisation_status: "Reviewed — this glossary page owns the two averages and their relationship; expectancy owns the weighted average outcome; profit factor owns gross profit divided by gross loss; the performance guide owns the full reading sequence."
canonical_url: "https://proplogai.com/glossary/average-win-vs-average-loss"
pillar_url: "https://proplogai.com/blogs/trading-performance-metrics"
seo_title: "Average Win vs Average Loss: Formula and Example"
meta_description: "Calculate average win and average loss with a fictional 20-trade XAUUSD example and learn why realised outcome size must be read with win rate."
slug: "average-win-vs-average-loss"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-05"
source_checked: "2026-10-05"
source_ids: [RES-018, PLAI-003]
sources: [https://www.mql5.com/en/articles/20917, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/glossary/win-rate, https://proplogai.com/glossary/expectancy, https://proplogai.com/glossary/profit-factor, https://proplogai.com/glossary/risk-reward-ratio, https://proplogai.com/blogs/trading-expectancy-calculator, https://proplogai.com/blogs/trading-performance-metrics]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual sentence about organising average winning and losing results from user-logged trades."
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
approved_revision_hash: "e481bdfb7c25d9c4756ebbdf1165d1b6f7a36a79f94262bc914718c1cb65af9f"
approved_by: "Vicky"
approved_at: "2026-10-06T11:06:06+05:30"
---

# Average Win vs Average Loss

Average win is the total winning result divided by winning trades. Average loss is the absolute total losing result divided by losing trades in the same defined sample.

## What do average win and average loss mean?

Average win is the total result from winning trades divided by the number of winning trades. Average loss is the absolute total result from losing trades divided by the number of losing trades in the same defined sample.

These two averages describe realised results. They do not tell you what was planned before each trade.

## Fictional 20-trade XAUUSD example

Use the same sample as the [win-rate](/glossary/win-rate), [profit-factor](/glossary/profit-factor) and [expectancy](/glossary/expectancy) definitions:

- **8 winning trades produced $1,440: $1,440 ÷ 8 = $180 average win.**
- **12 losing trades lost $960: $960 ÷ 12 = $80 average loss.**

You can describe the realised outcome-size relationship as:

**$180 ÷ $80 = 2.25, or 2.25:1**

This ratio describes the average sizes in these 20 fictional trades. It does not guarantee that the sample is profitable and does not predict the next trade.

![Handwritten fictional XAUUSD sample showing a 180 dollar average win, 80 dollar average loss, and 2.25 to 1 realised size ratio](/glossary/images/average-win-vs-average-loss-note.webp)

*Read the realised size ratio with win rate. It is different from a planned risk-reward ratio. Click or tap to enlarge.*

## Realised size ratio or planned risk-reward ratio?

The 2.25:1 above comes from completed trades. A [planned risk-reward ratio](/glossary/risk-reward-ratio) compares intended loss and intended reward before entry. Slippage, partial exits, costs and trade management can make the realised result different from the plan.

## Why must you read it with win rate?

Average outcome size explains only one part of the sample. The number of wins and losses also matters. Two samples can have the same $180 average win and $80 average loss but different overall results because their [win rates](/glossary/win-rate) differ.

The [expectancy](/glossary/expectancy) calculation combines frequency and average outcome size.

## Keep the sample rules visible

1. Use one clear start and end date.
2. Define how breakeven trades, partial exits and multi-leg positions are counted.
3. Use one currency or R method throughout.
4. State whether spread, commission, swap and other costs are included.
5. Check whether one unusual winner or loser moved a small-sample average.

## What should you use next?

The [trading expectancy calculator](/blogs/trading-expectancy-calculator) lets you enter winning and losing counts and averages. The [trading performance metrics guide](/blogs/trading-performance-metrics) shows how to read these figures beside profit factor, expectancy, drawdown and trade count.

## How PropLogAI helps

PropLogAI can organise average winning and losing results from trades you logged. The result depends on those records and counting choices.

## Source note

The official MQL5 educational calculation was checked on 5 October 2026. Reporting conventions can differ across journals and platforms, so the sample and counting method must remain visible.
