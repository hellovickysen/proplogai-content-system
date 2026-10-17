# K22 fact check and QA — P&L calendar

**Exact local article:** `worktrees/proplogai-blog/src/content/blog/prop-firm-pnl-calendar.mdx`  
**SHA-256:** `7E93A853667E76AEC75B542785E128B5A431F92E6796A1B156C6372DB4A3006D`  
**Checked:** 16 October 2026. **State:** Vicky approved the exact local revision 1 for the combined release on 16 October 2026; this is not publication approval, and production still serves the previous copy.

## Fact checks

| Item | Evidence | Result |
| --- | --- | --- |
| Fictional weekly arithmetic | Daily USD: −40+75−110+0+35=−40. Trades: 2+3+4+0+2=11. Written check followed: 2+2+2+0+2=8. Wednesday: −30−20−35−25=−110. | Pass. Text and the three visual notes use the same numbers. Fees are explicitly not recorded. |
| Result versus action | Tuesday +$75 has one of three entries before the required close; Wednesday −$110 has two of four before the close. | Pass. No causal claim is made about the early entries or the P&L. The reasons for early entries are marked missing. |
| Product claim | Approved claim `PLAI-004` says a calendar view of logged P&L, review due 19 October 2026. Local app `components/calendar/PnlCalendar.js` aggregates `t.pnl` by date; the cells are static and do not open trade details. | Pass. Article says to find that date's trades in the journal, without claiming the calendar tile is clickable, broker-verified, diagnostic, or an official prop-firm status. Recheck claim before release. |
| Search and URL | [K22 India evidence](keyword-research/k22-pnl-calendar-india-2026-10-16.md): exact page 0 India clicks and impressions in checked period; close Semrush India terms had no usable estimates. | Pass. Existing URL preserved. Primary phrase is an editorial intent hypothesis, not proven demand. |
| Source scope | Prior fixed stop examples, 2R scenario and unsupported cortisol paragraph removed. | Pass. Current account rules are assigned to the specific firm's terms and dashboard. |

## Reader and render QA

- Direct trader voice and simple XAUUSD/London breakout explanation. The task is a five-step progression: see the daily result, find that day's trades, compare each entry with the written check, mark missing facts and write one next question.
- Three 1200×1200 WebP learning notes were visually inspected. The first shows daily results, the second opens Wednesday's four trades, and the third shows a completed review note. The 1600×900 WebP cover was inspected separately. All exact words and figures were composited locally over generated blank art.
- At a 390 px viewport, body and document scroll widths were 386 px. Both tables had 346 px visible width, 768 px internal scroll width and `overflow-x: auto`; there was no page-level horizontal overflow. Learning-note image width was 344 px. Zoom dialog opened and closed.
- `npm run check` passed after the final article wording change: 30 published articles and 31 built pages; generated metadata and schema checks passed. The initial restricted-shell build failed at Windows `spawn EPERM`; the permitted local rerun passed.
- Final rendered title: `Trading P&L Calendar: How to Review Red Days | PropLogAI Blog`. One H1, expected description and self-canonical `https://proplogai.com/blogs/prop-firm-pnl-calendar` were verified in the localhost browser. The local preview is [K22 article](http://127.0.0.1:4340/blogs/prop-firm-pnl-calendar). A [review screenshot](audit-logs/k22-article-review.png) was saved.
- Seven contextual links were reconciled to the internal-link register: trade-review and revenge-trading glossary definitions; journal fields, weekly review, monthly review, journal pillar and performance metrics. Blog routes exist in the local build. Remote link validation was not run in this pass.
- `validate-content.ps1` and `validate-system.ps1` passed after link reconciliation: 48 briefs, 48 drafts, 68 SEO rows and 530 link rows. Neither validator establishes live publication or indexing.

**Verdict: human-approved exact local revision.** The SEO phrase and visual design are editorial decisions; search demand, production behavior and reader comprehension still need observation after any later release.

## Visual production

- Generated cover background prompt: “Create a 16:9 landscape editorial cover background for a trader's P&L calendar lesson, in a handmade notebook illustration style. Warm off-white lightly textured paper on a dark navy desk, navy ink hand-drawn five weekday calendar cards across the center, the Wednesday card circled in loose red pencil, a small handwritten-style candlestick sketch and turquoise highlighter accents. Keep the left upper quarter dark navy and uncluttered for later title overlay, and keep every card free of words and numbers so exact data can be added separately. Sophisticated, tactile, imperfect pen lines, natural Indian trader study notes aesthetic. No letters, text, digits, logos, watermarks, symbols resembling words.”
- Source: `worktrees/proplogai-blog/scripts/assets/k22-pnl-calendar-cover-background.png`. Generator: `worktrees/proplogai-blog/scripts/make-k22-pnl-calendar-notes.mjs`. Final cover and notes: `worktrees/proplogai-blog/public/images/cover-prop-firm-pnl-calendar-k22.webp`, `pnl-calendar-step-1-days.webp`, `pnl-calendar-step-2-trades.webp`, `pnl-calendar-step-3-note.webp`.
