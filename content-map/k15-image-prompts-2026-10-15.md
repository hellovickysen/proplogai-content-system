# K15 visual source and prompts — trading psychology

Created 15 October 2026 for the local K15 revision. The lesson is to compare a written plan with the next decision, then record the result separately. All trade details are fictional.

## Cover background — built-in image generation

The built-in image generator produced a 16:9 hand-drawn notebook background showing a trading plan card and a separate urge/decision card. It uses PropLogAI's navy ink, cream paper, cyan and violet marker accents, and generous space for an exact title overlay. The source background is stored at `worktrees/proplogai-blog/scripts/assets/k15-trading-psychology-cover-background.png`.

`scripts/make-k15-trading-psychology-notes.mjs` overlays **TRADING PSYCHOLOGY / PLAN OR URGE?** as exact text and exports `public/images/cover-trading-psychology-prop-firm-k15.webp` at 1600×900. The exported cover was visually inspected for composition and text accuracy.

## Progressive teaching notes — exact-text SVG rendered to WebP

The same script makes three 1200×1200 notes. Exact text is rendered from SVG to avoid invented or garbled labels.

1. `trading-psychology-step-1-plan.webp` shows the fictional XAUUSD London breakout plan before pressure: marked level, candle-close check, written size method and personal stop rule.
2. `trading-psychology-step-2-urge.webp` adds a fictional −$50 net result and the urge to recover it, while leaving the candle-close check open. It does not show a trade signal.
3. `trading-psychology-step-3-review.webp` combines the planned check, early entry and separate plan-match and +$35 net-result lines. A profitable result does not erase the skipped check.

The three square notes were visually inspected and are displayed through the existing tap-to-zoom component. They contain no live XAUUSD price or universal prop-firm rule.
