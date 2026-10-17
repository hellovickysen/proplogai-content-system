# K26 source and glossary-link audit

**State:** Local portfolio pass and one focused naming correction completed 17 October 2026. No push or publication.

## Decision

The current local blog and glossary already connect well. The fresh builds contain **30 blog articles and 35 glossary terms**. A rendered-content inventory found **665 links**, including 131 blog-to-glossary links, 163 glossary-to-glossary links, 60 glossary-to-blog links, 115 blog-to-blog links, and 147 links in glossary source cards. All local blog, glossary and downloadable-file targets found in article/term content exist in the corresponding local builds. [The full link inventory](/k26-links) records each anchor and destination.

The count is a **local rendered-build check**, not a production crawl or proof that every external site is available to every visitor. The inventory excludes shared navigation, footer and related-term cards from its editorial-link counts.

## Source judgement, not link quotas

Fifteen blog articles have no third-party link in the article body. That is a review signal, not fifteen defects. The pages reviewed in this group chiefly teach fictional arithmetic, a journaling method or PropLogAI's own workflow, without presenting a named firm's limit as a current universal rule. Their relevant terms already link to glossary definitions, whose source cards provide background where needed. Adding a generic third-party citation to every page would not establish the truth of a specific sentence.

The higher-risk pages do show their applicable first-party sources in the article body: [prop-firm rules](https://proplogai.com/blogs/prop-firm-rules-guide), [daily drawdown](https://proplogai.com/blogs/daily-drawdown-calculator), [payout rules](https://proplogai.com/blogs/prop-firm-payout-rules), and the [consistency calculation](https://proplogai.com/blogs/prop-firm-consistency-calculator). Their glossary counterparts display dated source cards. K25 separately checked PropLogAI feature statements; a glossary or homepage link should not be mistaken for an authenticated feature test.

The [consistency-rule glossary](https://proplogai.com/glossary/consistency-rule) is the only term without another glossary link **inside its definition body**. Its related-term cards point to profit target, funded account and prop-firm challenge, and its body hands readers to the consistency guide and calculator. There is no term here that requires an extra inline definition link merely to increase link count.

## Focused correction from current official rules

The [official Instant Funding page](https://instantfunding.com/help/if1/) now heads the program **IF Starter** and says it was previously known as **IF1**. It still describes a 15% best-trade condition for the stated payout case. The local blog and glossary used the older name alone. Both now say **“IF Starter (formerly IF1)”** while retaining the 15% example, its best-trade method, and the official URL. The blog and glossary revision dates and the five named sources' checked dates now reflect this local pass.

The official pages for [Topstep](https://help.topstep.com/en/articles/8284208-consistency-at-topstep), [Tradeify](https://help.tradeify.co/en/articles/10468320-rules-consistency-rule), [Apex](https://apextraderfunding.com/help-center/additional-helpful-items/50-consistency-requirement/) and [My Funded Futures](https://help.myfundedfutures.com/en/articles/11994562-consistency-rule-at-my-fundedfutures) were also opened on 17 October. Their cited program-specific percentages and consequences remain visible. Apex's own page uses both “less than 50%” and an example implying 50% satisfies the condition, so the existing article and glossary continue to tell readers to verify the exact boundary on their dashboard. We did not convert that conflicting source into a universal threshold.

The [FTMO objectives page](https://ftmo.com/en/trading-objectives/) now contains a 1-Step consistency section with an account-date condition from 12 October 2026. Existing PropLogAI pages use FTMO primarily to illustrate that programs differ and do not state that consistency is absent from FTMO. A future FTMO-specific explanation must separate older accounts, current 1-Step and 2-Step terms; it is **not** a reason to add FTMO percentages to this general guide today.

## What remains outside K26

- No complete HTTP-status test of every third-party link or signed-in product action was performed.
- K27 will refresh production technical and India search evidence. Its crawl must not use these local link counts as a live baseline.
- Previously approved but unreleased blog/glossary revisions remain local for the combined release decision.

## Review gates

Both Astro `npm run check` builds, both content-system validators, the regenerated rendered-link inventory and `git diff --check` **passed** after the two-copy correction. The served pages returned HTTP 200 and contained the new name and 17 October date. Review the exact local consistency [blog](http://127.0.0.1:4323/blogs/prop-firm-consistency-calculator) and [glossary](http://127.0.0.1:4322/glossary/consistency-rule) pages.
