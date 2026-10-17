# K14 visual source and prompts — funded-account journal

Created 12 October 2026. These are educational visuals for the local K14 revision; no image is a trading signal or a copy of a firm's rule page.

## Cover background — built-in image generation

Use case: `infographic-diagram`. The built-in image-generation tool created a 16:9 notebook illustration from this prompt:

> A warm, human hand-drawn trading journal scene on cream notebook paper. A large blank paper trading-journal card on the left, a smaller official rule-page card on the right, and a simple hand-drawn arrow that shows journal notes lead to checking the official rule source. Delicate navy ink outlines, cyan and pale yellow marker highlights, tiny unobtrusive gold-market candlestick sketch, realistic paper grain and imperfect pen strokes. Leave generous clean blank space across the upper half for a title to be overlaid later. No words, numbers, letters, ticked boxes, logos, watermark or photorealistic faces. Shapes and lesson must read at thumbnail size.

The selected generated source is stored at `worktrees/proplogai-blog/scripts/assets/k14-funded-journal-cover-background.png`. `scripts/make-k14-funded-journal-notes.mjs` overlays the exact handwritten-style title **FUNDED ACCOUNT JOURNAL / WHAT DID YOU CHECK?** and exports `public/images/cover-forex-journal-funded-accounts-k14.webp` at 1600×900. The output was visually checked for text accuracy and composition.

## Two progressive teaching notes — exact-text SVG rendered to WebP

The same script draws 1200×1200 notes using existing PropLogAI paper, ink and marker styling so labels cannot drift during generation.

1. `funded-journal-step-1-check.webp`: blank account card with firm/program/stage, official rule source, reset time/zone, and **NOT CHECKED YET**. There are no pre-ticked boxes or invented firm numbers.
2. `funded-journal-step-2-entry.webp`: fictional XAUUSD London entry separating **$50 planned loss**, **$58 actual net loss**, and **VERIFY WITH THE FIRM**. The $8 difference is calculated and stated plainly. It shows no live price or trade direction.

Both square notes were opened and visually inspected. The article presents them through the existing tap-to-zoom component with descriptive alt text.
