---
item_id: "proplogai-2026-10-06-equity-curve"
revision: 1
revision_hash: "9bd27790ae47c7b9acc3a55b57c2359b0f0e28d48a62707b410dc297bf6ac5de"
title: "Equity Curve"
status: "Approved to Publish"
content_type: "Glossary"
category: "Performance Analytics"
content_role: "Definition"
topic_cluster: "Trading Performance Metrics"
primary_keyword: "trading equity curve"
supporting_keywords: [equity curve meaning, equity curve trading, trading performance curve]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who sees a curve in a dashboard and needs to know what it shows, why balance and equity curves can differ, and what the line cannot prove by itself."
keyword_evidence: "Current search review"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Semrush India estimated volume 40 for trading equity curve on 6 October 2026; KD and intent were unavailable. GSC returned 0 clicks and 0 impressions for queries containing equity curve from 6 July through 3 October 2026."
cannibalisation_status: "Reviewed — this glossary page owns the cumulative account path; drawdown owns peak-to-later-value decline; the performance-report page owns the fixed-period report; the performance guide owns the full reading sequence."
canonical_url: "https://proplogai.com/glossary/equity-curve"
pillar_url: "https://proplogai.com/blogs/trading-performance-metrics"
seo_title: "What Is an Equity Curve in Trading?"
meta_description: "Learn what a trading equity curve shows, how balance and equity differ, and how to read a fictional XAUUSD account path without overclaiming."
slug: "equity-curve"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-06"
source_checked: "2026-10-06"
source_ids: [RES-020, PLAI-003]
sources: [https://www.metatrader5.com/en/terminal/help/trading/report, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/glossary/drawdown, https://proplogai.com/glossary/performance-report, https://proplogai.com/glossary/expectancy, https://proplogai.com/glossary/profit-factor, https://proplogai.com/blogs/trading-performance-metrics]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual sentence about displaying an equity curve from user-logged trades."
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
approved_revision_hash: "9bd27790ae47c7b9acc3a55b57c2359b0f0e28d48a62707b410dc297bf6ac5de"
approved_by: "Vicky"
approved_at: "2026-10-06T21:57:26+05:30"
---

# Equity Curve

A trading equity curve is a line showing how a defined account value changes across time or trade order. Check whether it includes only closed results or also open profit and loss.

## What is an equity curve in trading?

An equity curve is a line showing how a defined account value changes across time or trade order. The horizontal line normally shows time or the order of trades. The vertical line shows account value or a cumulative result.

Before reading the shape, check what the line includes. A balance curve may use only closed results. An equity curve may also include the current profit or loss from positions that are still open. Platforms and journals can use these labels differently.

## Fictional five-trade XAUUSD example

Imagine the account starts at **$10,000** and records five closed XAUUSD results:

**+$120, −$80, +$60, −$40, +$140**

The closed-result path is:

**$10,000 → $10,120 → $10,040 → $10,100 → $10,060 → $10,200**

The final balance is $10,200. If an open XAUUSD position is currently showing **−$90**, the balance can remain $10,200 while live equity is **$10,110**. This is why you must check whether the graph includes open positions.

![Handwritten five-trade XAUUSD account path ending with a 10,200 dollar balance and a comparison showing 10,110 dollar equity after an open 90 dollar loss](/glossary/images/equity-curve-balance-vs-equity-note.webp)

*The balance and equity can differ when a position is still open. Check what your chart includes. Click or tap to enlarge.*

## What can the shape tell you?

- **Upward section:** the selected cumulative value increased during that part of the sample.
- **Flat section:** the selected value changed little during that part.
- **Uneven section:** open the original trades and check result size, setup, session and position size.
- **Decline from an earlier peak:** measure the [drawdown](/glossary/drawdown) and check which trades or open positions created it.

A rising or smooth curve does not prove discipline, safety or future profit. The line describes the recorded path. It does not explain every decision behind it.

## What can change the line?

1. Deposits and withdrawals.
2. Open profit or loss.
3. Spread, commission and swap.
4. Missing or duplicate trade records.
5. How partial exits and grouped positions are counted.

## What should you read with the curve?

Use a [trading performance report](/glossary/performance-report) to review the line with the original trades, trade count and [drawdown](/glossary/drawdown). [Expectancy](/glossary/expectancy) and [profit factor](/glossary/profit-factor) add other views of the same defined sample.

The [trading performance metrics guide](/blogs/trading-performance-metrics) shows a practical reading order. None of these historical measures predicts the next trade.

## How PropLogAI helps

PropLogAI can display an equity curve from trades you logged. Its accuracy depends on those records and the values included in the curve.

## Source note

The official MetaTrader 5 report documentation was checked on 6 October 2026. Platforms and journals can label or calculate graphs differently, so the selected values and date range must remain visible.
