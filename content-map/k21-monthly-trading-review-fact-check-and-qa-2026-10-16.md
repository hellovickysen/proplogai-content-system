# K21 fact check and AI QA — monthly trading review template

**Exact local article:** `worktrees/proplogai-blog/src/content/blog/monthly-trading-review-template.mdx`  
**SHA-256:** `3F730AF84E008E4412D864C44608A74B9EF175E56F778379E5AC371289F0D39A`  
**Checked:** 16 October 2026. **State:** Vicky approved exact local revision 1 for the combined release on 16 October 2026; no publication approval.

## Fact check

| Claim or content | Source and check | Result and limit |
| --- | --- | --- |
| Four fictional XAUUSD London breakout weeks total 20 comparable trades, 14 plan-following entries, and +$150 recorded before unrecorded fees. | Author-created example; counts checked as 5+5+6+4=20 and 4+3+5+2=14; USD results checked as 60+100−40+30=150. Text and all three notes inspected. | **Pass.** Educational numbers only; no live setup, price, signal or net-profit claim. |
| A positive dollar result and following a written entry check answer different review questions. | The article's fictional records show +$100 with 3/5 following and −$40 with 5/6 following; the individual action notes support the early-entry observation. | **Pass.** The article does not infer causation or predict a future result from four small weeks. |
| PropLogAI lets a trader manually log trades, notes, emotions and rule adherence. | Approved product claims `PLAI-002` and `PLAI-005`, review-by 24 October 2026; current first-party [homepage](https://proplogai.com/) inspected in Chrome 16 October 2026. | **Pass.** The article expressly does not claim a built-in monthly worksheet, automated comparison, broker sync or firm-rule verdict. Recheck before release if the product changes. |
| Search and URL decision. | [K21 India evidence](keyword-research/k21-monthly-trading-review-india-2026-10-16.md): exact India GSC page 0 clicks/0 impressions in the checked period; exact and broader Semrush phrases displayed n/a. | **Pass.** Existing URL kept; no invented volume or ranking claim. |
| Contextual links. | Two live glossary destinations showed matching H1/self-canonical in the browser; four blog destinations returned HTTP 200 with self-canonicals in local preview on 16 October 2026. | **Pass for draft links.** Production source has not been changed. |

**Fact-check verdict: Pass for local Human Review.** No unresolved performance promise, firm-rule statement or payout eligibility claim.

## Ten-category AI QA

| Category | Score | Evidence |
| --- | ---: | --- |
| Accuracy | 10 | All worksheet and visual figures reconcile; missing fees are explicit. |
| Safety | 10 | Fictional XAUUSD example, no signal or universal prop-firm rule. |
| Beginner clarity | 10 | Direct trader voice; breakout, XAUUSD and candle are explained. |
| Educational value | 10 | Copyable blank sheet and one filled month link weekly counts to the underlying entries. |
| Structure | 10 | One H1; the sequence moves from records to comparison to one next-month question. |
| SEO | 9 | Existing URL, unique rendered title, description and self-canonical; demand is unmeasured. |
| Visual learning | 10 | 16:9 WebP cover and three progressive 1:1 WebP notes checked for legibility. |
| Interactive learning | 10 | All three learning notes open and close in the zoom dialog. |
| Internal linking | 10 | Six exact contextual links reconciled to the register and destinations checked. |
| PropLogAI alignment | 10 | Product wording is bounded and secondary to the learning task. |

**Total: 99/100. Automatic failures: none. Critical issues: none. AI QA: PASS → Human Review only.** This internal editorial score does not establish search performance or publication readiness.

## Render and responsive QA

- `npm run check` passed: 30 articles validated, 31 static pages built, blog metadata and schema checks passed. Initial restricted-shell build hit Windows `spawn EPERM`; the same check passed when rerun with the required local execution permission.
- Exact local article and all four WebP assets returned HTTP 200. Rendered title: `Monthly Trading Review Template for Prop Firm Traders | PropLogAI Blog`; canonical: `https://proplogai.com/blogs/monthly-trading-review-template`; one H1 and expected description.
- At a 390 px viewport, page scroll width was 386 px; table client width was 346 px with 768 px internal scroll width and `overflow-x: auto`. The table scrolls horizontally without page-level overflow.
- The first learning-note zoom dialog opened and closed. All three notes use the same shared `ZoomImage` component.
- Content-system `validate-content.ps1` and `validate-system.ps1` passed with 48 briefs, 48 drafts, 68 SEO rows and 527 link rows. Remote link validation was not run.

## Visual production note

- The 16:9 cover uses a generated blank notebook illustration background. The precise title and weekly figures were composited locally by `scripts/make-k21-monthly-review-notes.mjs`; three 1200×1200 SVG-to-WebP teaching notes were also built by that script. The generated image was used only as an art background, not as a source for text or numeric claims.
- Source image and generated WebPs were visually inspected; each note teaches one stage. The cover and notes are local review assets until this article receives exact-revision approval and a later combined release.
