# K17 visual source and prompts — AI trading coach

Created 15 October 2026 for local K17 revision 1. The teaching sequence is **recorded facts → possible AI answer → human verification**. All trade details and counts are fictional.

## Cover background — built-in image generation

Prompt: “Create a warm handcrafted 16:9 editorial illustration on cream notebook paper, realistic fine paper grain, imperfect dark navy pen strokes, restrained cyan and pale yellow marker accents. On the left, a large handwritten-looking trading journal card with abstract non-text lines and small candlestick doodles; in the center, a magnifying glass inspecting the card; on the right, a separate review card with one abstract question mark and unfilled checkboxes. Read left to right: saved records, inspect, cautious question. Leave the upper quarter mostly blank for an exact title overlay. Keep the forms bold and spacious for a small blog thumbnail. No readable words, letters, numbers, logos, watermark, dollar amounts, live price chart, trading signal, robot, photorealistic person, glossy 3D effects or implication that the AI answer is correct.”

The selected background is stored at `worktrees/proplogai-blog/scripts/assets/k17-ai-coach-cover-background.png`. `scripts/make-k17-ai-coach-notes.mjs` overlays **AI TRADING COACH / CHECK THE RECORDS** as exact text and exports `public/images/cover-ai-trading-coach-prop-firm-k17.webp` at 1600×900.

## Progressive teaching notes — exact-text SVG rendered to WebP

The same script creates three 1200×1200 handwritten-style WebP notes:

1. `ai-coach-step-1-records.webp` names six fictional logged XAUUSD London breakout trades, the trader's own candle-close check and a narrow question.
2. `ai-coach-step-2-draft.webp` presents a *possible* AI summary of three early labels in six records, then asks the trader to open the source entries.
3. `ai-coach-step-3-verified.webp` shows the correction from three to two early labels after one wrongly entered label is checked. It explicitly limits the conclusion to the fictional sample.

All four WebP files were visually inspected for legibility and exact words. The square notes use the existing tap-to-zoom component. No image contains a live price, direction signal, performance promise or official firm rule.
