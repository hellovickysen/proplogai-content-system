---
item_id: "proplogai-2026-10-05-expectancy"
revision: 1
title: "Trading Expectancy"
status: "Ready for Production"
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
product_mention_required: true
source_ids: [RES-017, PLAI-003]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Trading Expectancy

## Primary question and promise

Answer **“What is trading expectancy?”** immediately. Explain that it is the average net result per trade in one defined historical sample, expressed in money or another consistent result unit.

## Reader problem

The current page uses a separate 55% example that breaks the approved same-sample sequence across Win Rate and Profit Factor. It has no rendered sources. The reader needs one calculation that can be checked two ways and a clear boundary between a historical average and a forecast.

## Evidence and SEO decision

- Keep `/glossary/expectancy`; it is the established definition owner and no migration is justified.
- Semrush India reports volume 20 and CPC $0 for `trading expectancy`; KD and intent are unavailable.
- GSC returned 0 clicks and 0 impressions for queries containing `trading expectancy` during 6 July–3 October 2026.
- `RES-017` supports expected payoff as the arithmetic mean of total net profit and the number of transactions in a defined test record.
- The weighted win-rate formula and `net result ÷ trade count` are algebraically equivalent only when they use the same sample and counting method.

## Required teaching path

1. Define trading expectancy as average net result per trade in one defined historical sample.
2. Show both equivalent formulas: `net result ÷ total trades` and `(win rate × average win) − (loss rate × average loss)`.
3. Reuse the approved fictional 20-trade XAUUSD sample: 8 wins averaging $180 and 12 losses averaging $80.
4. Calculate `$1,440 − $960 = +$480`, then `+$480 ÷ 20 = +$24 per trade`.
5. Confirm the same answer using `(0.40 × $180) − (0.60 × $80) = +$24`.
6. Explain that +$24 describes the average of those 20 recorded trades; no single trade has to equal $24.
7. Explain the inputs: same closed trades, same dates, same currency or R unit, same grouping method and consistent cost treatment.
8. Explain why setup or session expectancy needs enough comparable trades and must not be inferred from a tiny sample.
9. Link the calculator for user-entered values and the performance guide for the full metric sequence.

## Safety and evidence boundaries

- Do not call positive expectancy proof of a permanent edge.
- Do not predict the next trade or promise future profitability.
- Do not mix results from different samples, currencies or counting methods.
- State whether costs are included in the recorded results.
- Use USD for the fictional forex example.

## Required sources

- `RES-017`: official MQL5 programming reference for expected payoff as the arithmetic mean of total profit and transaction count.
- `PLAI-003`: approved performance-dashboard wording from logged data.

## Internal-link plan

- Link **win rate** and **average win vs average loss** beside the weighted formula.
- Link **profit factor** as a different total-win-versus-total-loss ratio.
- Link the **trading expectancy calculator** for user-entered values.
- Link the **trading performance metrics guide** as the deeper same-sample walkthrough.

## Product mention

Use one factual sentence: PropLogAI organises performance metrics from the trades a user logged. It does not predict the next trade or prove that the historical average will continue.

## Visual decision

Plan one square handwritten WebP note with click/tap zoom after brief approval.

- Title: `EXPECTANCY: AVERAGE PER TRADE`.
- Show `8 × $180 = $1,440`, `12 × $80 = $960`, `+$480 ÷ 20 = +$24`.
- Add `Same sample. Same costs. Same counting method.`
- Callout: `+$24 is the sample average, not the next trade.`
- Avoid a numbered step label and verify readability at 390px.

## Existing pages to avoid duplicating

- `/blogs/trading-expectancy-calculator`: owns the interactive calculation.
- `/blogs/trading-performance-metrics`: owns the multi-metric reading sequence.
- `/glossary/win-rate`: owns winning-trade frequency.
- `/glossary/profit-factor`: owns gross winning amount divided by gross losing amount.

## Human brief approval

J5 brief revision 1 awaits Vicky's approval. Approval will authorise local implementation through Human Review only.
