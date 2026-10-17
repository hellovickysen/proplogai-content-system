# K8 revision brief 1 — AI trading discipline

**State:** Vicky approved revision 1 for local implementation, then approved the rendered local article on 10 October 2026. The approved revision remains local; publication is reserved for the later combined release.

## Page and reader

- Existing canonical: [How to Use AI to Improve Trading Discipline Without Taking Trading Advice](https://proplogai.com/blogs/ai-trading-discipline). **Keep the URL.** No redirect or new page is justified.
- Proposed reader-facing title: **How AI Can Help You Review Trading Discipline**. Explain the no-signals boundary in the introduction and a short FAQ or callout instead of carrying a 90-character title.
- Primary intent: You have a journal and a written setup, but you do not know how to use an AI review to spot where your own decisions changed. The answer must be a practical review process, not a guide to trading with AI signals.
- Target reader: an India-based English-speaking forex or prop-firm trader. Use XAUUSD and USD amounts where an example helps; mention Asian, London, or New York session by name, and use IST only when a clock time matters.
- Cluster role: AI Coaching and Journal Analytics **workflow support**. The [AI coach pillar](https://proplogai.com/blogs/ai-trading-coach-prop-firm) owns overall capability and advice boundaries; [AI journal pattern detection](https://proplogai.com/blogs/ai-journal-pattern-detection) owns technical methods; [trading discipline for prop firms](https://proplogai.com/blogs/trading-discipline-prop-firm) owns the broader discipline system; the [discipline checklist](https://proplogai.com/blogs/trading-discipline-checklist) owns the short reusable checklist. K8 owns only **how to use a journal-based AI review without handing the trading decision to it**.

## Search and source basis

- The live article and its current URL were checked in the browser on 10 October 2026. Its long title, abstract introduction, unsupported automation claims, no glossary links, and no external source links are visible in the rendered page.
- Semrush India check: exact `ai trading discipline` has **no reported data**; broader `trading discipline` is estimated at 880 monthly searches/KD 27 and has informational intent. The broader query is already assigned to a different page. See `content-map/keyword-research/semrush-k8-ai-trading-discipline-india-2026-10-10.md`.
- The latest K6 India Search Console property report covers 7 July–6 October: 2 clicks and 64 impressions **across the property**. It contains no measured AI-discipline query or page opportunity in the saved visible rows. Do not imply K8 demand or a ranking gain from this small report.
- Use first-party product claim IDs **PLAI-001, PLAI-002, PLAI-005** narrowly: Propol reviews a trader's own journal data; the trader manually logs details, emotions, and whether their setup was followed. The local app code confirms a setup-adherence calculation from recorded `setup_followed` values, but does not establish automatic monitoring of any arbitrary new custom rule. Code evidence is an implementation check, not proof of every production entitlement.
- General educational sources where helpful: **RES-011** for comparing a considered trade with a written checklist; **RES-022** for trade journal fields and post-trade review; **RES-024** for why a journal association does not prove causation. The three registered URLs were opened on 10 October. RES-011 is a video page with little written teaching text; prefer the stronger, directly readable RES-022 and RES-024 where they support the final wording. Use only the journal-record section of RES-022, not its separate market-signal suggestions. Cite only where the linked page directly supports the sentence.

## Current claims to correct

| Current wording or idea | Revision rule |
| --- | --- |
| AI tracks adherence to any new rule “automatically” and prepares summaries automatically | Say the trader can record whether the setup was followed and use available journal/coach reviews. Do not promise a custom-rule monitor or automatic cadence without a tested product flow. |
| 58%, 90%, 52%, 81%, and 88% rates in the examples | Either remove or explicitly label as fictional, show a small denominator, and separate self-recorded adherence from an AI-derived conclusion. Avoid implying these came from real users. |
| “The trader decides the cause is fatigue” | Say the trader **suspects** fatigue and checks notes; one pattern does not establish the cause. |
| A “good AI” always stops before advice | State the boundary for PropLogAI and the reader's safe use, without declaring the behaviour of all tools. |
| “Unlicensed trading advice” | Avoid a legal classification unsupported by a named jurisdiction and current regulatory source. Use plain “trade recommendation or signal.” |

## Proposed teaching flow

1. Open with the trader's moment: after a losing XAUUSD London-session breakout, you feel tempted to enter again before the confirmation in your written plan. The question is whether the decision changed, not whether the next trade won.
2. Show the three fields to record: the setup condition written before entry, whether it was met (`Yes`, `No`, or `Not recorded`), and a short reason or emotion note. Link [trading journal](https://proplogai.com/glossary/trading-journal), [trading plan](https://proplogai.com/glossary/trading-plan), and [setup compliance](https://proplogai.com/glossary/setup-compliance) at first useful mentions, with a plain-English explanation beside each link.
3. Ask the AI review a bounded question: “From the trades I logged, when did I record that I entered before my own confirmation?” It may summarize those entries. It must not choose the next XAUUSD trade, tell the trader to stop or trade a session, or treat a tag as a diagnosis.
4. Show a **fictional** two-trade comparison: Trade A followed the written breakout confirmation and lost **$50**; Trade B skipped confirmation and won **$80**. A is plan-following despite the loss; B is plan-breaking despite the profit. Keep the teaching point on the decision, not the P&L.
5. Close with a short weekly review: check the underlying trade records, note missing fields, decide whether a pattern is worth watching, and write one personal question for the next review. Avoid a universal minimum sample, guaranteed improvement, or a new risk rule.
6. Add a brief product paragraph only after the teaching: PropLogAI lets the trader record trades, emotions, setup adherence, and notes, and Propol can review the recorded journal. Actual feature limits are on the current pricing page. No automatic custom-rule monitoring claim.

## Internal links and source placement

- The first explanation of an AI trading coach → [AI Trading Coach glossary](https://proplogai.com/glossary/ai-trading-coach), anchor **“AI trading coach”**.
- The first comparison of a planned setup and the actual entry → [Setup Compliance glossary](https://proplogai.com/glossary/setup-compliance), anchor **“setup compliance”**.
- The record and review section → [Trading Journal glossary](https://proplogai.com/glossary/trading-journal), anchor **“trading journal”**; link only if it adds meaning beyond the existing journal pillar link.
- One contextual link to the AI coach pillar when explaining the no-signals boundary. One optional link to pattern-detection mechanics for readers who want the technical detail. Avoid a block of repetitive links.
- Add the two most useful external sources beside their relevant claims rather than a decorative bibliography. Check HTTP/canonical at implementation. The live URLs were reachable in earlier cluster audits; recheck before saying the new links are verified.

## Visual and format decision

No interactive form is needed. Use a **handwritten learning-note sequence** because the main difficulty is seeing a plan/decision/result distinction. Plan three square **1:1 WebP** panels: (1) written XAUUSD London breakout condition, (2) two small journal rows with setup-followed and USD result, (3) the review question and the “planned loss / unplanned win” lesson. The final panel may combine the earlier marks. Make each panel tap/click to zoom; verify text at 390 px mobile width, zoom close, keyboard access, and alt text. Use a clear **16:9 WebP handwritten cover** with very little text; do not reuse the in-article full panel as the thumbnail. If a two-row comparison table is clearer than a visual, keep columns wide and scroll horizontally within the table on mobile.

## Review boundary

The existing source article stays untouched until this brief is approved. Before handing the revised article to human review, confirm the current product workflow, recheck cited pages and exact link targets, inspect title/meta/canonical/schema, verify WebP visuals and mobile layout, and run both content-system validators plus the blog build. A passing build or brief check is not a production release.
