# K9 revision brief 1 — AI journal pattern detection

**State:** Brief revision 1 approved by Vicky on 10 October 2026. Implemented as a local article revision for human review. This approval does not authorise publication or a production release.

## Page and reader

- Existing canonical: [How an AI Trading Coach Finds Patterns in Your Journal Data](https://proplogai.com/blogs/ai-journal-pattern-detection). **Keep `/blogs/ai-journal-pattern-detection`.** The page is live and no evidence supports a URL migration.
- Proposed title and meta title: **How AI Finds Patterns in Your Trading Journal**. Proposed description: **“See how to check an AI finding against your own trade records, with a simple XAUUSD example and clear limits on what a pattern can tell you.”** Final wording should be checked in the rendered layout.
- Target reader: an India-based English-speaking forex or prop-firm trader who has journal entries and wants to know whether an AI summary is telling the truth. Use direct, simple English. Forex amounts, if needed, stay in USD; name XAUUSD and the London session rather than saying “an instrument” or “a time period.”
- Search intent: **AI trading journal analysis** as an editorial intent descriptor, not a measured India-volume keyword. The [10 October Semrush and GSC evidence note](keyword-research/k9-ai-journal-pattern-detection-india-2026-10-10.md) records Semrush India volume **n/a** (with 5% KD and informational intent) and GSC **0 India page impressions** for 7 July–6 October. Neither metric warrants changing the live URL. The glossary's measured `trading pattern recognition` phrase is not this article's search volume.

## Topic ownership

- The [Pattern Recognition glossary](https://proplogai.com/glossary/pattern-recognition) defines a journal-data pattern and shows a short 20-trade example; it explicitly distinguishes journal patterns from chart patterns.
- K9 owns **how to test one possible AI finding against the original journal entries**, including a changed or missing label. It should not repeat the glossary's 20-trade out-of-session example.
- The [AI coach pillar](https://proplogai.com/blogs/ai-trading-coach-prop-firm) owns overall capability and no-signals boundaries. The approved [AI discipline article](https://proplogai.com/blogs/ai-trading-discipline) owns plan-versus-outcome review. This article should link to each only where the reader needs the deeper answer.

## Evidence and product claim boundary

- The live article and local source were checked on 10 October. The current page asserts that PropLogAI Coach uses **correlation, clustering, sequence detection and outlier detection** as four implemented analysis methods, and that underlying trades can be surfaced. The approved first-party claims **PLAI-001/002/005** support journal-based pattern review and manually entered trade, emotion and rule-adherence records. They do **not** establish those four exact algorithms, a universal drill-down experience, or a guarantee that every finding is correct.
- Local app code supports a narrower statement: `app/dashboard/coach/actions.js` selects recent trades and their journal entries and passes them to `analyzeCoachReport`; `lib/ai.js` builds counts and context from recorded fields for an AI-generated report. The sampled code is **implementation evidence**, not proof of all live-plan entitlements or every possible output. Do not describe the four conceptual ways to inspect a journal as PropLogAI's documented algorithm stack.
- The existing page's example gives 75% compliance across 80 trades and 45% among 22 after-loss trades, without clearly saying the dataset is fictional. Remove it or label it fictional and check every denominator. Its “five trades is close to meaningless / two hundred is solid” wording suggests a universal sample threshold; replace with the practical point that small or incomplete groups can mislead and counts must be shown.
- Keep the no-signals and no-guarantee boundary without a legal classification. Avoid saying the AI knows what caused the trader's action. A tag is the trader's record, not a diagnosis.
- Educational sources checked for the final draft: [IG's trading-journal guidance](https://www.ig.com/ae/ig-academy/tools-for-traders/important-metrics) supports recording plan, execution, notes and result; [NIST/SEMATECH](https://www.itl.nist.gov/div898/handbook/ppc/section1/ppc136.htm) supports the correlation/causation limit; [NIST's AI evaluation playbook](https://airc.nist.gov/airmf-resources/playbook/measure/) supports checking output and input quality. Link each only beside a directly supported sentence, in plain language.

## Proposed teaching flow

1. Open with a trader's real question: your XAUUSD London-session journal says you sometimes entered early after a loss. An AI report repeats that claim. Before changing your plan, you want to see **which trades** it means.
2. Define the one review question in plain English: “When a previous XAUUSD trade lost, did I enter the next planned London breakout before my confirmation?” A breakout means price moves beyond the level you marked; confirmation here means the candle has closed beyond it. This is a **fictional example**, not an entry instruction.
3. Show a small, transparent fictional set: eight XAUUSD London breakout records; four followed a prior loss and four did not. Initially three of the four after-loss records and one of the other four are marked “entered before confirmation.” Write counts as **3 of 4 vs 1 of 4**, not a dramatic percentage headline. State that eight records are too small to settle a cause or future result.
4. Open the individual trade notes or chart screenshots. One after-loss “early” label turns out to be wrong because its candle had already closed. Correct the **fictional** count to **2 of 4 vs 1 of 4**. Explain that AI can summarise a recorded label but cannot make a mistaken label true.
5. Check missing trades, inconsistent setup names, different account or date ranges, and whether every record actually used the same confirmation rule. Then write a careful observation: “In this small corrected sample, 2 of 4 after-loss trades and 1 of 4 other trades were marked early.” Do not conclude that loss caused early entry, predict a trade or create a universal rule.
6. Close with the reader's safe next step: save the question and corrected count in the journal, watch whether the pattern appears in later records, and keep trading decisions with the written plan. Put a short, fact-limited PropLogAI paragraph after the lesson.

## Links, visuals and format

- Link the first useful explanation of [pattern recognition](/glossary/pattern-recognition), [trading journal](/glossary/trading-journal), [trade review](/glossary/trade-review), and [AI trading coach](/glossary/ai-trading-coach); explain each term beside the link. Link to the AI coach pillar and K8 discipline workflow only when they add a distinct answer.
- No interactive calculator or form is needed. A progressive handwritten note sequence would help: **(1)** the eight fictional journal records and one clear question, **(2)** the first 3-of-4 versus 1-of-4 grouping, **(3)** one corrected label and the revised 2-of-4 versus 1-of-4 count. Use 1:1 WebP panels with tap/click zoom and accurate alt text. A separate restrained 16:9 handwritten WebP cover should show journal rows under review rather than imply chart forecasting.
- If a small table is used for the eight records, keep its columns readable and scroll the table horizontally on mobile; the page itself must not overflow at 390 px. Do not use a table if short cards teach it better.
- Retain the published date, add an honest update date after implementation, preserve one H1, correct metadata and BlogPosting schema, and avoid an unnecessary redirect.

## Review gate

The approved plan was implemented locally in `proplogai-blog/src/content/blog/ai-journal-pattern-detection.mdx` with a WebP cover and three progressive WebP panels. Vicky approved article revision 1 on 10 October 2026. See [K9 audit log](audit-logs/batch-k9-2026-10-10.md) for its exact source hash, validation, and local review URL. The approved revision remains local for the combined release.
