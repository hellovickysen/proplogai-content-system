# K29 metadata review — keep meaning ahead of character counts

**State:** Local revision 1 ready for copy review on 17 October 2026. No Git push, merge, deployment, sitemap change or indexing request.

## Decision

Keep all blog and glossary URLs, titles, categories, canonicals and article copy. The current local metadata has no missing or duplicate titles or descriptions across **30 articles and 35 terms**. Three glossary summaries were harder to read than they needed to be, so this local revision simplifies their visible lead and meta description. It does not shorten titles just to hit a character target.

[Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link) asks for descriptive, concise titles and may generate a different search title. [Google's snippet guidance](https://developers.google.com/search/docs/appearance/snippet) says descriptions have no fixed length limit and snippets vary by device and query. Therefore, 70/160 characters are review flags in this audit, not SEO pass/fail rules or ranking guarantees.

## Evidence and scope

The 17 October K27 **live** sitemap crawl found 11 blog titles over 70 characters, three blog descriptions and 14 glossary descriptions over 160. The fresh K29 **local source** inventory, before editing, found seven, two and 14 respectively. Several approved local article titles already differ from live; the two snapshots must not be combined as one state. The local inventory includes the blog layout's actual ` | PropLogAI Blog` suffix and the glossary's ` | PropLogAI Glossary` suffix. [Download the local metadata inventory](/k29-metadata).

After this focused revision, the local counts are **seven long blog titles, two long blog descriptions and 11 long glossary descriptions**. The remaining items are not eleven proven defects. Some need their caveats to distinguish a definition from a firm rule or from a claim about what a metric proves. No exact Search Console page-query evidence was found in K27 that would justify rewriting those pages or changing their URLs. We will inspect real search appearance when those pages have enough impressions.

## Three clearer glossary summaries

| Page | Before | Local revision 1 | Reason |
| --- | --- | --- | --- |
| [Trading Plan](http://127.0.0.1:4322/glossary/trading-plan) | “A trading plan is a written framework prepared before trading that says what you may trade, when you may act, what conditions must be present, how risk and exits are planned, and what you will record afterward.” (210 characters) | “A trading plan says what you trade, which setup lets you enter, how much you risk, and when you exit. Write it before trading; review each trade afterward.” (155) | Puts the practical meaning first and keeps entry, risk, exit and later review. The full page still explains the detailed plan. |
| [Emotion Tracking](http://127.0.0.1:4322/glossary/emotion-tracking) | “Emotion tracking means recording a short feeling tag beside a specific trading moment and the observable decision that followed. The feeling is context; it does not prove what caused the result.” (194) | “Emotion tracking means noting how you felt at a trading moment and what you did next. The note gives context; it does not prove the feeling caused your result.” (159) | Simpler words preserve the important limit on causal claims. |
| [Pre-Market Routine](http://127.0.0.1:4322/glossary/pre-market-routine) | “A pre-market routine is a short sequence you complete before your planned trading session so the setup, account rules, risk and no-trade conditions are written before you consider an entry.” (189) | “A pre-market routine is a check before your trading session. Write down your setup, account rules, risk and reasons to stay out before you consider an entry.” (157) | Separates the definition from the action and explains “no-trade conditions” in plain English. |

The three term-level `updatedAt` values are 17 October 2026. No other term body, source card, image, related link or page-level template was edited. The URLs stay unchanged.

## Why the longer article titles stay

The 88-character local beginner guide title starts with **“Forex Trading for Beginners”** and then names its separate prop-firm-challenge task. The funded-account journal and challenge-readiness titles likewise describe what their articles actually help a trader do. Removing those qualifiers to satisfy an arbitrary limit could make the results less useful. The two local article descriptions over 160 characters are only 162 characters and accurately summarize their pages. With sparse page-level India Search Console data, there is no supported claim that two extra characters are hurting clicks.

## QA and next gate

`npm run check` passed for the glossary: 35 valid terms, 36 built pages, unique sitemap URLs, one H1 per term page, visible dates and schema. The first restricted build hit `spawn EPERM` while accessing the existing E: dependency tree; the permitted rerun passed. The exact three localhost pages returned HTTP 200 with one H1 and the expected new rendered descriptions. `git diff --check` passed. The local metadata inventory found no missing or duplicate title/description across 65 content pages.

Review the three linked glossary pages above. Approval of K29 revision 1 means approval of these exact local summaries; publication remains a separate decision. After the combined release, compare actual Google title links and snippets for pages with meaningful impressions before considering another metadata rewrite.
