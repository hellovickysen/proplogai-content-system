---
item_id: "proplogai-2026-10-05-stop-loss"
revision: 1
title: "Stop Loss"
status: "Ready for Production"
content_type: "Glossary"
category: "Risk Management"
content_role: "Definition"
topic_cluster: "Risk and Drawdown"
primary_keyword: "stop loss"
supporting_keywords: [stop loss meaning, stop loss order, trading stop loss]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who needs to understand what a stop instruction does, what the trigger price means, and why the actual fill and loss can differ from the plan."
keyword_evidence: "Editorial hypothesis"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Current India GSC and Semrush metrics are pending because the authenticated Chrome tabs were not exposed to the browser-control session on 5 October 2026. No metric is inferred."
cannibalisation_status: "Reviewed — this glossary page owns the stop-loss definition and execution limitation; position sizing owns the size calculation; the risk-management blog owns the wider workflow."
canonical_url: "https://proplogai.com/glossary/stop-loss"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [RES-015, PLAI-002, PLAI-005]
updated_at: "2026-10-05"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-05"
---

# Content Brief: Stop Loss

## Primary question and promise

Answer **“What is a stop loss?”** immediately. Explain that it is a planned exit level or order instruction used to close a trade after a price trigger, while making clear that the trigger price is not always the final fill price.

## Reader problem

The current page says a stop automatically caps the loss, calls it the primary defence against catastrophic losses, and treats stops as universal survival tools. That can make a trader believe the planned amount is guaranteed. The page also lists stop styles without explaining that order names and execution rules vary by platform and instrument.

## Evidence and SEO decision

- Keep `/glossary/stop-loss`; it is the established definition owner and no URL migration is justified.
- The India keyword remains an editorial hypothesis until the authenticated GSC and Semrush browser tabs are available. Blank metrics mean unmeasured, not zero.
- `RES-015` supports the limited statement that a stop price can act as a trigger and the final execution price may differ. It is a US-stock source, so the page must not transfer its exact mechanics to every forex, CFD or futures platform.
- The page will tell the reader to verify the exact broker or platform order specification and current prop-firm rules.

## Required teaching path

1. Define a stop loss in simple language.
2. Separate the **planned stop level**, **trigger**, and **actual fill**.
3. Use a fictional XAUUSD London-session breakout example: entry at a fictional price, a stop below the setup's invalidation level, and a `$50` estimated loss from the selected position size.
4. Show the normal path: price reaches the trigger, the exit instruction is activated, and the platform attempts the exit under its order rules.
5. Show the exception: fast movement, a gap, spread, slippage, liquidity or platform rules can produce a different fill and a loss above or below the estimate.
6. Explain that a stop-limit order may avoid a worse price but may remain unfilled; use this only as a general concept and tell the reader to check exact platform terminology.
7. Explain that the stop level and position size work together. Moving the stop without recalculating size changes planned USD risk.
8. Explain that daily and overall drawdown rules remain separate account checks.
9. Remove `capping your loss`, `primary defense against catastrophic losses`, `survival tools`, and every universal claim that one trade will breach the account.
10. Do not prescribe fixed-pip, ATR, technical or time-based stops as a best method. Mention a method only if needed to explain that a trader's written setup defines the planned level.

## Firm/program variation and formula assumptions

- The example is fictional and is not a trade instruction.
- Stop-order names, triggers, fill rules, allowed order types and weekend or news handling can differ by instrument, broker, platform and prop-firm program.
- The estimated loss assumes a position size and expected fill. It is not a guaranteed maximum.
- The firm's current dashboard and rulebook decide whether a result causes a breach.

## Required sources

- `RES-015`: trigger-versus-fill and stop-limit non-execution concepts, with the US-stock limitation stated.
- `PLAI-002` and `PLAI-005`: limited product wording about manually recording trade details and rule adherence.

## Internal-link plan

- Link **position sizing** where size changes the estimated USD loss.
- Link **risk per trade** where the planned loss is defined.
- Link **risk-reward ratio** where the stop provides the planned-risk side of the ratio.
- Link **daily drawdown limit** and **overall drawdown limit** as separate firm-rule checks.
- Link **forex risk management** to the deeper pillar.

## Product mention

Use one factual sentence: PropLogAI lets you manually record trade details and whether you followed your own rules. Do not call it a live stop monitor, broker feed, automatic stop tracker, or breach detector.

## Visual decision

Use one square handwritten WebP learning note with click/tap zoom.

- Step 1: `Planned stop level` under a fictional XAUUSD breakout entry.
- Step 2: `Price reaches the trigger`.
- Step 3: `Platform attempts the exit`.
- Final note: `Actual fill may differ. Check your order rules.`
- Verify readability and no page overflow at 390px.

## Existing pages to avoid duplicating

- `/glossary/position-sizing`: owns the size calculation.
- `/glossary/risk-per-trade`: owns the planned-loss input.
- `/glossary/risk-reward-ratio`: owns planned risk versus planned reward.
- `/blogs/prop-firm-risk-management`: owns the wider risk workflow.

## Human brief approval

J2 brief revision 1 approved by Vicky on 5 October 2026. Implementation remains local and must stop at Human Review.
