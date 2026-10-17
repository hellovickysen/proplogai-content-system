# K16 visual source and prompts — trading discipline

Created 15 October 2026 for local K16 revision 1. The lesson separates following a written plan from a trade's financial result. Every trade detail is fictional.

## Cover background — built-in image generation

Prompt: “Make a warm, handcrafted 16:9 editorial illustration for a PropLogAI trading-education blog cover, with cream notebook paper, realistic paper grain, imperfect dark-navy pen strokes, cyan and pale yellow marker accents. The lesson is trading discipline: one simple handwritten planning card on the left, a small decision checkpoint in the center, and a separate review card on the right. Include only minimal abstract chart/candlestick doodles, without any real trade entry, direction arrow, price target, ticked checkbox, dollar amount, or claim of profit. Leave the upper quarter mostly clean for an exact title overlay. Keep core card shapes large enough for a small blog thumbnail. No text, letters, numbers, logos, watermarks, photorealistic people, or glossy AI effects.”

The selected background is stored at `worktrees/proplogai-blog/scripts/assets/k16-trading-discipline-cover-background.png`. `scripts/make-k16-trading-discipline-notes.mjs` overlays the exact title **TRADING DISCIPLINE / PLAN · CHECK · REVIEW** and exports `public/images/cover-trading-discipline-prop-firm-k16.webp` at 1600×900. The exported cover was visually checked for legibility and accurate words.

## Progressive teaching notes — exact-text SVG rendered to WebP

The same script creates three 1200×1200 handwritten-style notes so mobile readers see one stage at a time:

1. `trading-discipline-step-1-plan.webp` presents a fictional XAUUSD London breakout plan, including a marked level, candle-close check, the trader's own size method and personal stop condition.
2. `trading-discipline-step-2-check.webp` shows the open breakout candle and makes clear that the planned candle-close check is not complete yet.
3. `trading-discipline-step-3-review.webp` compares separate fictional outcomes: a −$35 trade that followed the plan and a +$40 early entry that skipped it. Plan match and net P&L remain different fields.

All four WebP images were visually inspected. The square notes use the existing tap-to-zoom component and contain no live XAUUSD price, direction signal, universal firm rule, or promised outcome.
