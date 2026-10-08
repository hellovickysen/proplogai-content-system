---
item_id: "proplogai-2026-10-05-average-win-vs-average-loss"
revision: 1
title: "Average Win vs Average Loss"
status: "Ready for Production"
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
product_mention_required: true
source_ids: [RES-018, PLAI-003]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Average Win vs Average Loss

## Primary question and promise

Answer **“What do average win and average loss mean?”** immediately. Explain that each is calculated from one side of a defined trade sample: total winning result divided by winning trades, and total losing result divided by losing trades.

## Reader problem

The current page jumps to a ratio and makes broad profitability statements. It does not show the two average calculations, define cost treatment, or connect cleanly to the approved 20-trade XAUUSD sample used by Win Rate, Profit Factor and Expectancy.

## Evidence and SEO decision

- Keep `/glossary/average-win-vs-average-loss`; it is the established definition owner and no migration is justified.
- Semrush India returned no usable data for `average win vs average loss` or `average win trading`.
- GSC returned 0 clicks and 0 impressions for queries containing `average win` during 6 July–3 October 2026.
- `RES-018` supports calculating the mean profitable trade from profitable results and the mean losing trade from losing results.
- Use the page because it is a required input definition for the approved expectancy and performance-metrics cluster, not because unmeasured demand has been assumed.

## Required teaching path

1. Define average win and average loss separately.
2. Reuse the approved fictional 20-trade XAUUSD sample: 8 wins total $1,440 and 12 losses total $960.
3. Calculate `$1,440 ÷ 8 = $180 average win` and `$960 ÷ 12 = $80 average loss`.
4. Show the descriptive size ratio: `$180 ÷ $80 = 2.25`, or `2.25:1`.
5. Explain that this 2.25:1 is an observed result ratio, not the planned risk-reward ratio before entry.
6. Explain why it must be read with win rate: the same averages can produce different overall results when the number of wins and losses changes.
7. Define the sample and cost treatment: dates, currency or R, breakeven trades, partial exits, grouped positions, commission, swap and spread.
8. Warn that one unusual winner or loser can move a small-sample average sharply.
9. Link expectancy for the weighted result and the performance guide for the full sequence.

## Safety and evidence boundaries

- Do not claim that average win above average loss guarantees profitability.
- Do not claim that average win below average loss requires a universal win rate without showing the exact sample mathematics.
- Do not call the realised average ratio the same thing as a planned risk-reward ratio.
- Do not diagnose exit discipline from the ratio alone.
- Use USD for the fictional forex sample.

## Required sources

- `RES-018`: official MQL5 educational description of average profitable and losing trade calculations.
- `PLAI-003`: approved wording for metrics organised from logged trades.

## Internal-link plan

- Link **win rate** when explaining outcome frequency.
- Link **trading expectancy** when combining frequency and average outcome size.
- Link **profit factor** as the gross-total comparison.
- Link **risk-reward ratio** to distinguish a planned trade from realised sample averages.
- Link the **trading expectancy calculator** and **trading performance metrics guide**.

## Product mention

Use one factual sentence: PropLogAI can organise average winning and losing results from trades a user logged. The result depends on those records and counting choices.

## Visual decision

Plan one square handwritten WebP note with click/tap zoom after brief approval.

- Title: `AVERAGE WIN VS AVERAGE LOSS`.
- Show `8 wins: $1,440 ÷ 8 = $180` and `12 losses: $960 ÷ 12 = $80`.
- Show `$180 ÷ $80 = 2.25:1 realised size ratio`.
- Callout: `Read it with win rate. This is not the planned R:R.`
- Avoid numbered step labels and verify readability at 390px.

## Existing pages to avoid duplicating

- `/glossary/expectancy`: owns the weighted average result.
- `/glossary/profit-factor`: owns gross profit divided by gross loss.
- `/glossary/risk-reward-ratio`: owns the planned ratio before a trade.
- `/blogs/trading-expectancy-calculator`: owns user-entered calculation.
- `/blogs/trading-performance-metrics`: owns the full metric reading order.

## Human brief approval

J6 brief revision 1 awaits Vicky's approval. Approval will authorise local implementation through Human Review only.

