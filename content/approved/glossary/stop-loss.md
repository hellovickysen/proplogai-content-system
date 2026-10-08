---
item_id: "proplogai-2026-10-05-stop-loss"
revision: 1
revision_hash: "832b52e2c744f0567ac4ca4d45816c76a587f0f461c911e25bb7cbf384d8074c"
title: "Stop Loss"
status: "Approved to Publish"
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
market_rationale: "PropLogAI's primary audience is India. Current India GSC and Semrush metrics were unavailable because the authenticated Chrome tabs were not exposed on 5 October 2026. No metric was inferred."
cannibalisation_status: "Reviewed — this glossary page owns the stop-loss definition and execution limitation; position sizing owns the size calculation; the risk-management blog owns the wider workflow."
canonical_url: "https://proplogai.com/glossary/stop-loss"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
seo_title: "What Is a Stop Loss in Trading? | PropLogAI"
meta_description: "Learn how a stop loss works, including the planned level, trigger and actual fill, with a fictional XAUUSD example and prop-firm risk checks."
slug: "stop-loss"
author: "PropLogAI Editorial Team"
last_updated: "2026-10-05"
source_checked: "2026-10-05"
source_ids: [RES-015, PLAI-002, PLAI-005]
sources: [https://www.finra.org/investors/insights/stop-orders-factors-consider-during-volatile-markets, https://proplogai.com/]
internal_link_status: "Verified in local render"
internal_links: [https://proplogai.com/glossary/position-sizing, https://proplogai.com/glossary/risk-per-trade, https://proplogai.com/glossary/risk-reward-ratio, https://proplogai.com/glossary/daily-drawdown-limit, https://proplogai.com/glossary/overall-drawdown-limit, https://proplogai.com/blogs/prop-firm-risk-management]
seo_register_status: "Matched"
internal_link_register_status: "Matched"
product_mention: "One factual statement about manually recording trade details and rule adherence."
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
approved_revision_hash: "832b52e2c744f0567ac4ca4d45816c76a587f0f461c911e25bb7cbf384d8074c"
approved_by: "Vicky"
approved_at: "2026-10-05T13:35:31+05:30"
---

# Stop Loss

A stop loss is a planned exit level or order instruction used to close a trade after a price trigger. The trigger price is not always the final fill price.

## What is a stop loss?

A stop loss is a planned exit level or order instruction used to close a trade after price reaches a trigger. It helps you define the loss you expect before entry, but it does not guarantee the exact exit price or final loss.

The wording and order behaviour can differ by instrument, broker and platform. Check the specification for the order you are actually using.

## Fictional XAUUSD London-session example

Imagine you plan an XAUUSD breakout during the London session. You choose an entry and a stop below the level that would invalidate your setup. After you choose the [position size](/glossary/position-sizing), the order ticket estimates a [planned loss](/glossary/risk-per-trade) of **$50** if the stop fills at the expected price.

The $50 is an estimate for this fictional example. It is not a recommended amount and it is not a guaranteed maximum.

![Handwritten four-step stop-loss note showing a planned XAUUSD stop level, the trigger, the platform attempting the exit, and an actual fill that may differ](/glossary/images/stop-loss-trigger-fill-note.webp)

*A stop level is part of the plan. The exact trigger and fill rules depend on the instrument, broker, platform and account. Click or tap to enlarge.*

## Plan, trigger and fill are three different things

1. **Planned stop level:** the price level written into your trade plan.
2. **Trigger:** the event that activates the exit instruction under your platform's order rules.
3. **Actual fill:** the price where the exit is completed.

In a calm market, the fill may be close to the planned stop. During fast movement, a price gap, a wider spread, or slippage, the fill can be different. That difference can make the realised loss higher or lower than the estimate.

## What about a stop-limit order?

Some platforms offer an instruction commonly called a stop-limit order. It combines a trigger with a limit on the acceptable execution price. The trade-off is that the order may remain unfilled if that price is unavailable.

Order names and mechanics vary. Check whether your instrument and platform support this instruction and how it behaves before relying on the label.

## Your stop and position size work together

The stop distance and trade size determine the estimated USD loss. If you move the stop farther away without reducing the size, the planned loss increases. Recalculate the estimate whenever one of those inputs changes.

A stop also does not replace the current [daily drawdown limit](/glossary/daily-drawdown-limit) or [overall drawdown limit](/glossary/overall-drawdown-limit) for your exact account. Your firm's current dashboard and rulebook decide whether a result is a breach.

## Use the stop as one part of the plan

Your written setup should explain what invalidates the trade, how size is calculated, and what you will record if the exit differs from the plan. The stop provides the risk side of the [risk-reward ratio](/glossary/risk-reward-ratio). The [forex and prop-firm risk-management guide](/blogs/prop-firm-risk-management) explains the wider process.

## How PropLogAI helps

PropLogAI lets you manually record trade details and whether you followed your own rules. It is not a live stop monitor, broker feed, or breach detector.

## Source note

FINRA's stop-order guidance was checked on 5 October 2026 and describes US stock orders. The trigger-versus-fill concept is used here with that limitation. Forex, CFD, futures, broker, platform and prop-firm mechanics vary.
