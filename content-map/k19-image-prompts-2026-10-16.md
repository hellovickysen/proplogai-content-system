# K19 visual production notes — trading journal fields

Created for the local 16 October 2026 article revision. These are teaching visuals for a fictional XAUUSD London-session journal entry, not a live setup or trading signal.

- **Cover:** 16:9 warm paper desk with a central two-column journal card, pencil, pen, coffee and blue ink. The graphic asks what to write down and contrasts a `+$18` result with an unrecorded plan answer. Background generated once with the imagegen tool, then exact text and labels composed deterministically by `scripts/make-k19-journal-fields-notes.mjs`. Saved as `public/images/cover-trading-journal-fields-k19.webp` (1600 × 900).
- **Step 1:** 1:1 ruled handwritten note showing only `+$18 net` and the missing question, “Did I wait for my planned check?” Saved as `journal-fields-step-1-result.webp`.
- **Step 2:** 1:1 ruled note placing “Wait for the breakout candle to close” beside “Entered while the candle was open.” Plan followed: No; result still `+$18 net`. Saved as `journal-fields-step-2-action.webp`.
- **Step 3:** 1:1 complete record with six field groups, fictional 14 October 2026 date, XAUUSD London breakout, planned check, early entry, `+$18 net`, and a next-review question. Saved as `journal-fields-step-3-complete.webp`.

All three notes are 1200 × 1200 WebP. Text is generated from SVG to keep spelling and dollar amounts exact. The article uses the existing `ZoomImage` control so readers can tap to enlarge each note. Thumbnail text was shortened after visual inspection to keep it inside the journal card at mobile size. Run `node scripts/make-k19-journal-fields-notes.mjs` from the blog checkout to regenerate the assets from the saved background and SVG source.
