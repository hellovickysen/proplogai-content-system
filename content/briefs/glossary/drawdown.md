---
item_id: "proplogai-2026-10-01-drawdown"
revision: 1
title: "Drawdown"
status: "Ready for Production"
content_type: "Glossary"
category: "Risk Management"
content_role: "Definition"
topic_cluster: "Risk and Drawdown"
primary_keyword: "drawdown in prop firm"
supporting_keywords: [what is drawdown in prop firm, what is drawdown in trading prop firm, trading drawdown, drawdown limit]
search_intent: "Definition"
target_reader: "An Indian forex or prop-firm trader who sees the word drawdown and needs to understand the difference between an account decline and a prop-firm loss limit."
keyword_evidence: "GSC India"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "PropLogAI's primary audience is India. Existing Search Console data assigns the broad drawdown question to this URL, while current stored India keyword evidence supports the wider prop-firm drawdown cluster."
cannibalisation_status: "Reviewed — this page owns the broad definition; daily drawdown limit and overall drawdown limit retain their separate rule definitions; the calculator guide owns the calculation workflow."
canonical_url: "https://proplogai.com/glossary/drawdown"
pillar_url: "https://proplogai.com/blogs/prop-firm-risk-management"
product_mention_required: true
source_ids: [PFR-002, PFR-003, PFR-005, PFR-006, PFR-007, PFR-008, PFR-015, PLAI-003]
updated_at: "2026-10-01"
brief_approved_by: "Vicky"
brief_approved_at: "2026-10-01"
---

# Content Brief: Drawdown in Prop Firm Trading

## Primary question and promise

Answer **“What is drawdown in a prop firm?”** in simple English. Help one trader understand that drawdown can describe an account falling from an earlier high, while a prop firm's daily or overall drawdown limit is a separate written rule with its own floor and calculation method.

## Reader problem

The trader may see that an account is “in drawdown” and assume the account has already breached a prop-firm rule. They may also confuse closed balance with equity while an XAUUSD position is open.

By the end, the reader should be able to identify:

1. the earlier account high;
2. the later account value;
3. whether the measurement uses balance or equity; and
4. whether they are reviewing normal performance drawdown or an official prop-firm limit.

Use direct second-person language, USD examples, and familiar trading details. Explain every necessary term where it first appears.

## Search and GSC evidence

- Global GSC, 6 July–17 September 2026: `/glossary/drawdown` received 34 impressions at an average position of 78.5.
- The query `what is drawdown in prop firm` produced 18 impressions at an average position of 74.2, all assigned to this glossary URL in the topic-ownership map.
- The query `what is drawdown in trading prop firm` produced 3 impressions at an average position of 83.3.
- India GSC for the same period: the page received 1 impression for `drawdown limit` at position 74.
- Ubersuggest India seed `prop firm drawdown`: 10 monthly searches, SEO difficulty 13, CPC $0, checked 24 September 2026. Do not present this as exact volume for the primary phrase.
- Keep `/glossary/drawdown`. It already owns the broad definition and has search history; no redirect or new competing URL is needed.

## Canonical ownership

- `/glossary/drawdown`: broad peak-to-trough, balance, and equity drawdown definition.
- `/glossary/daily-drawdown-limit`: the firm's daily loss-rule definition.
- `/glossary/overall-drawdown-limit`: the firm's account-wide loss-rule definition, including static and trailing methods.
- `/blogs/daily-drawdown-calculator`: the calculation workflow using an official floor.
- `/blogs/prop-firm-risk-management`: the wider risk-management pillar.

## Required teaching path

1. Give the one-sentence definition immediately.
2. Use a fictional XAUUSD example: the account reaches $108,000 and later falls to $104,000 after a New York-session result.
3. Show the arithmetic: `$108,000 − $104,000 = $4,000`, and `$4,000 ÷ $108,000 × 100 ≈ 3.7%`.
4. Explain balance drawdown and equity drawdown in plain English, including the effect of open profit or loss.
5. Separate normal performance drawdown from daily and overall prop-firm limits.
6. Explain that being in drawdown does not automatically mean the account is breached; the exact current program rule and dashboard decide that status.
7. Give a short checklist of what to record: peak, later low, balance or equity, measurement period, and exact firm rule if applicable.
8. Link the reader to the correct daily or overall definition and to the calculator guide.

## Firm/program variation and formula assumptions

- The worked 3.7% figure is a fictional peak-to-trough example, not a recommended limit or risk percentage.
- Do not state a universal prop-firm drawdown percentage.
- A firm's daily floor may use a day-start reference, balance, equity, open P&L, costs, or a named reset time.
- An overall floor may be static, trailing, or end-of-day trailing. Keep those methods separate.
- Any named FTMO or FundedNext example must preserve the exact program and the currently checked wording.
- The firm's current dashboard, agreement, and official rules remain the source for breach status.

## Required source-register IDs

- `PFR-002`, `PFR-006`, `PFR-007`, `PFR-015`: current named daily-loss examples and calculation variation.
- `PFR-003`, `PFR-005`, `PFR-008`: current named static or trailing overall-loss examples.
- `PLAI-003`: approved wording for PropLogAI's equity curve and user-entered performance records.

## Existing pages to avoid duplicating

- Do not reproduce the full daily-floor workflow or calculator from `/blogs/daily-drawdown-calculator`.
- Do not turn this page into a detailed daily-rule definition; link `/glossary/daily-drawdown-limit`.
- Do not turn this page into a detailed static-versus-trailing rule guide; link `/glossary/overall-drawdown-limit`.
- Do not compete with `/blogs/prop-firm-risk-management` for the wider risk-management workflow.

## Internal-link plan

- Link **daily drawdown limit** at the first rule distinction.
- Link **overall drawdown limit** beside the daily definition.
- Link **daily drawdown calculator** after the reader understands that an official floor is required.
- Link **prop firm risk management** as the deeper cluster guide.
- Retain `equity curve` as a related term.
- Add or verify reciprocal links from the daily and overall definitions, calculator guide, and risk pillar.

## Product mention and CTA rationale

Use one factual mention: PropLogAI can display an equity curve and performance metrics from trades the user records. State that the firm's dashboard and rules determine official breach status. A strong sales CTA is unnecessary on a concise definition page.

## Visual plan

Add one 1200×1200 handwritten WebP learning note because the difference between performance drawdown and a prop-firm limit is the main source of confusion.

- Panel 1: `$108,000 peak`.
- Panel 2: `$104,000 later value` after a fictional XAUUSD New York-session result.
- Panel 3: `$4,000 drawdown ≈ 3.7%`.
- Final section: “This measures the decline. Your firm's daily or overall floor is a separate rule.”
- Use large mobile-readable writing, click/tap zoom, descriptive alt text, and no dense decorative elements.
- Verify the normal and enlarged image at 390px with no page-level overflow.

## Human brief approval

- Approved by: Vicky
- Approved on: 2026-10-01
- Proposed scope: refresh the existing drawdown glossary page and its reciprocal cluster links locally; stop at Human Review without pushing or deploying.
