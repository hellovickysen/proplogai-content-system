# K28 brief 1 — help the trader avoid overtrading

**State:** Brief 1 approved by Vicky on 17 October 2026. The local blog revision is implemented for copy review; the glossary, public URLs and production page are unchanged. See the [K28 audit log](/k28-audit).

## Decision

Revise the **existing** [overtrading blog](http://127.0.0.1:4323/blogs/overtrading-prop-firm-challenges) only where it helps a trader who is about to take another trade. Keep the [overtrading glossary](http://127.0.0.1:4322/glossary/overtrading) as the short definition. Preserve both URL slugs, the blog's publication date, its Trading Discipline category, the approved handwritten WebP cover and progressive notes, the zoom interaction, and the current USD/IST XAUUSD example. Give the reader a faster answer near the top; retain the detailed comparison and later review below.

## Reader and search evidence

You planned a London-session XAUUSD liquidity-sweep and breakout setup. The first trade lost **$38**. In New York you feel pushed to enter before the breakout candle closes. You want to know what to check **before** taking that second trade, not merely what overtrading means.

The [K27 audit](/k27-audit) found that the India Search Console query family is currently visible mainly through the definition page: “overtrading” had 15 impressions, “what is overtrading” five, and “meaning of overtrading” three for 15 July–14 October. The glossary had 25 visible India page impressions; the practical blog was not in the five visible page rows, which is **not proof of zero impressions**. Semrush India on 17 October estimated 260 monthly searches for “overtrading” and 110 for “how to avoid overtrading,” with 27% difficulty for the latter. Its narrower India results were prevention guides and discussions, mixed across stock, day, and forex traders. Those are tool estimates and a directional intent check, not PropLogAI traffic or a ranking promise.

The current live/local blog title is **“Overtrading in Prop Firm Challenges: Signs and Review | PropLogAI Blog”**. Its H1 says **“Overtrading in Prop Firm Challenges: Causes, Signs, and Fixes.”** The introduction accurately describes the urge and the definition, but the actionable checklist begins much lower, under **“What to do when you feel the urge to trade.”** The local article and glossary already link to each other and have different jobs. Do not create a new article for the prevention phrase.

## Proposed copy, limited to the blog

1. Set the meta title to **“How to Avoid Overtrading in Prop Firm Challenges”**. Keep the self-canonical at the existing URL. The rendered browser title will still add the site's normal brand suffix; verify its final length in built HTML.
2. Set the H1 to **“How to Avoid Overtrading in a Prop Firm Challenge”**. The intro should still say, in plain language, that overtrading is a change from your written plan, not simply a high trade count. Keep the first useful [overtrading glossary](http://127.0.0.1:4322/glossary/overtrading) link.
3. After the opening definition, add a short direct answer, close to this wording: **“Before another trade, check your written setup, planned session, final confirmation and usual size. If one check is missing, pause instead of making up a new rule while price is moving. Write down what changed, then review it later. The last trade's profit or loss does not decide whether this entry follows your plan.”** This is a process check, not a signal or universal stop-trading rule. Avoid duplicating the later four-step explanation.
4. Rename the existing practical section to **“How to avoid overtrading when you feel the urge”** and tighten only repeated sentences if the new quick answer makes them redundant. Keep the useful sequence: name the urge → check the written setup → record the result separately → review several records later. Keep the XAUUSD London-to-New-York example, the −$38 result, the five-sign comparison table, progressive note images and interactive review.
5. Proposed description: **“Feel the urge to take another XAUUSD trade? Check your setup, session, confirmation and size before entry, then review any change without judging by P&L.”** Confirm final rendered wording and length. Do not insert a live XAUUSD price or imply the firm permits a second trade; account rules remain individual.

## Link and ownership check

- Definition/meaning: `/glossary/overtrading`. Keep the glossary's short answer, fictional example, own sources, and its handoff to the blog. No K28 glossary rewrite is proposed.
- Prevention and plan drift: `/blogs/overtrading-prop-firm-challenges`. Keep its links to setup compliance, trade review, revenge trading, FOMO, the journal template and the discipline guide at the point where each term helps the reader.
- Wider discipline: `/blogs/trading-discipline-prop-firm` and its checklist. Do not copy their full rulebook/checklist teaching into this article.
- Loss-driven recovery: `/blogs/revenge-trading-prop-firm`. The blog can explain that revenge trading may lead to overtrading without treating the two as identical.
- The existing cross-links from the discipline pillar, checklist, psychology pillar and revenge guide already route readers to this page. Confirm the built links before changing any register row. Add no link just to raise a count.

## Editorial and QA gate

Speak to the trader directly in simple English. Use USD for forex and prop-firm P&L; use IST only to label the trader's recorded time, and avoid fixed London/New York clock hours because daylight-saving shifts. Explain a liquidity sweep or breakout in plain words on first use; use glossary links where a reviewed definition exists. Preserve the approved handwritten learning-note visual style and tap-to-zoom. Tables must remain wide, clear and horizontally scrollable at 390px.

After brief approval, edit the **local blog only** and record an honest `updatedDate`. Build/check Astro, verify one H1, rendered title, description, canonical, all images, glossary/article links, table scrolling, and the interaction at desktop and 390px. Run both content-system validators and `git diff --check`; update only K28's SEO/link audit rows if they need reconciliation. Provide the exact verified localhost article URL and an audit log for the copy review. Keep publication separate.
