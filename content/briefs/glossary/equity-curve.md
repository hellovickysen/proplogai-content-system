---
item_id: "proplogai-2026-10-06-equity-curve"
revision: 1
title: "Equity Curve"
status: "Ready for Production"
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
product_mention_required: true
source_ids: [RES-020, PLAI-003]
updated_at: "2026-10-06"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-06"
---

# Content Brief: Equity Curve

## Primary question and promise

Answer **“What is an equity curve in trading?”** immediately. Explain that it is a line showing how a defined account value changes across time or trade order. Then separate a balance curve based on closed results from an equity curve that may include open profit or loss.

## Reader problem

The current page says that the curve plots cumulative balance or equity but does not make the balance-versus-equity difference clear. A trader may see a smooth line and assume the method is safe, or see a dip and not know whether it came from closed trades, open positions, a deposit or a withdrawal.

## Evidence and SEO decision

- Keep `/glossary/equity-curve`; it is the established definition owner and no migration is justified.
- Semrush India estimated volume 40 for `trading equity curve`; KD and intent were unavailable.
- GSC returned 0 clicks and 0 impressions for queries containing `equity curve` during 6 July–3 October 2026.
- `RES-020` supports the distinction between a balance path based on closed account activity and an equity path that includes open-position profit or loss in MetaTrader reporting.
- `PLAI-003` supports the factual product statement that PropLogAI displays an equity curve from logged data.

## Required teaching path

1. Define an equity curve in one short paragraph.
2. Explain the horizontal axis as time or trade order and the vertical axis as account value or cumulative result.
3. Separate a balance curve from an equity curve. State that platforms and journals may use labels differently, so the reader must check what the graph includes.
4. Use one fictional XAUUSD sample with five closed-trade results: `+$120, -$80, +$60, -$40, +$140` from a $10,000 starting point.
5. Show the closed-result path: `$10,000 → $10,120 → $10,040 → $10,100 → $10,060 → $10,200`.
6. Add one separate moment where an open XAUUSD position is `-$90`: balance remains `$10,200`, while live equity is `$10,110` if the platform includes that open result.
7. Explain what upward, flat, uneven and falling sections describe without calling any shape automatically good or bad.
8. Explain that deposits, withdrawals, fees, swaps, commissions, open positions and missing records can change the line or its meaning.
9. Tell the reader to use the curve with drawdown, trade count, expectancy, profit factor and the original trade records.
10. State that the line describes recorded history; it does not predict the next trade or prove rule-following.

## Safety and evidence boundaries

- Do not call a smooth or rising curve proof of skill, discipline, safety or future profit.
- Do not infer rule adherence from account results alone.
- Do not mix balance and equity without stating what each includes.
- Do not hide deposits, withdrawals or open profit/loss inside the example.
- Keep the fictional forex amounts in USD.

## Required sources

- `RES-020`: official MetaTrader 5 report documentation for balance/equity graph distinctions and report components.
- `PLAI-003`: approved wording for the equity curve shown from logged PropLogAI data.

## Internal-link plan

- Link **drawdown** when explaining a decline from an earlier peak.
- Link **trading expectancy** and **profit factor** as results that help explain the path but do not replace it.
- Link **performance report** as the place to review the curve with the rest of a fixed-period summary.
- Link the **trading performance metrics guide** for the complete reading sequence.
- Preserve incoming links from the performance guide and Sharpe Ratio page.

## Product mention

Use one factual sentence: PropLogAI can display an equity curve from trades a user logged. Its accuracy depends on those records and the values included in the curve.

## Visual decision

Plan one square handwritten WebP learning note with click/tap zoom after brief approval.

- Title: `READ THE CURVE, THEN CHECK THE RECORDS`.
- Draw the five-point fictional closed-result path.
- Add a small side-by-side callout: `Balance $10,200` and `Equity $10,110 with -$90 open P&L`.
- Mark the previous peak and later dip without turning the chart into a trade setup or forecast.
- Footer: `A curve shows the path. It does not explain every decision.`
- Avoid tiny axis labels, verify at 390px and keep every detailed label readable when enlarged.

## Existing pages to avoid duplicating

- `/glossary/drawdown`: owns peak-to-later-value decline.
- `/glossary/performance-report`: owns the fixed-period report structure.
- `/glossary/sharpe-ratio`: owns the advanced risk-adjusted-return definition.
- `/blogs/trading-performance-metrics`: owns the complete metric reading order.

## Human brief approval

J7 brief revision 1 awaits Vicky's approval. Approval will authorise local implementation through Human Review only.
