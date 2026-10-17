# K18 visual source and prompts — trading rulebook

Created 15 October 2026 for the local K18 article revision 1. The sequence is **vague rule → checkable written rule → decision and journal review**. XAUUSD, sessions and results are fictional teaching details, not trading instructions.

## Cover background — built-in image generation

Prompt: “Use case: infographic-diagram. Asset type: 16:9 editorial cover background for a PropLogAI educational blog about writing a personal trading rulebook. Create a handcrafted flat-lay on warm cream notebook paper with real paper grain and uneven dark-navy ink lines. Left: a mostly blank notebook with a few non-text short lines and checkboxes. Center: a pen tracing one line from a vague scribble toward a clear checkbox. Right: a small simple fork with one unchecked branch and one checked branch, suggesting 'written rule versus urge' but without market direction. Very restrained cyan marker and soft yellow highlights, strong spacious composition, appealing at small thumbnail size. Leave the upper quarter fairly open for exact title added later in code. No readable words, letters, numbers, charts showing trade direction, prices, dollar amounts, logos, watermarks, glossy 3D, or photorealistic person. Preserve natural hand-drawn imperfection and simple teaching clarity.”

The selected generated PNG background was copied into `worktrees/proplogai-blog/scripts/assets/k18-rulebook-cover-background.png`. `worktrees/proplogai-blog/scripts/make-k18-rulebook-notes.mjs` adds the exact title **TRADING RULEBOOK / WRITE A RULE YOU CAN CHECK** and exports `public/images/cover-prop-firm-trading-rulebook-k18.webp` at 1600×900. The built-in image generator was used for the bitmap background; exact letters were added in code to avoid generated-text errors.

## Progressive handwritten learning notes — exact-text SVG to WebP

The same script produces three 1200×1200 notes in `worktrees/proplogai-blog/public/images/`:

1. `rulebook-step-1-vague.webp`: “Only take good breakouts” leaves the fictional XAUUSD London trader unable to answer whether an open candle qualifies.
2. `rulebook-step-2-written.webp`: the trader's own versioned rule names the marked level, candle-close check, planned stop and size method. It explicitly says these are personal checks, not firm rules or a trade signal.
3. `rulebook-step-3-review.webp`: the final note shows the written close check, an early +$28 result marked rule not followed, and a −$22 result marked rule followed. The fictional outcomes teach that dollars and process answer different questions.

All four WebP outputs were visually inspected for exact text, legibility and honest example logic. The square notes use the existing tap-to-zoom component. The image generation skill's built-in mode produced the cover background; the notes are deterministic code-native designs so every trading label and amount stays exact.
