# Glossary Quality Checklist

Score each category from 0–10 and record concise evidence. AI QA passes only at 90/100 or higher, with Accuracy and Safety each at least 9/10, fact-checking passed, and no automatic failure.

Use `/glossary/overtrading` and `knowledge/13-glossary-teaching-standard.md` as the quality reference without copying their example, layout, visual, or interaction mechanically.

## Automatic failures

- Unsupported product, firm-rule, regulatory, legal, fee, performance, profit, eligibility, or market claim.
- Trade signal, forecast, personalised risk instruction, or guaranteed outcome.
- Invented source, metric, feature, rule, quote, testimonial, or partnership.
- Universal firm-rule wording where programs vary.
- Definition intent that duplicates or competes with another canonical glossary page.
- Unresolved fact-check or prohibited content.

## 1. Accuracy — 10

- [ ] The definition and material claims match current reviewed sources.
- [ ] Facts, fictional examples, assumptions, and variation are clearly separated.
- [ ] No claim is stronger than its source.

## 2. Safety — 10

- [ ] The page teaches a meaning without giving a signal, forecast, profit promise, or personalised instruction.
- [ ] P&L is not used as proof of discipline or future performance.
- [ ] Firm-specific limits and advice boundaries are visible where needed.

## 3. Definition Clarity — 10

- [ ] The first sentence gives a complete plain-English definition.
- [ ] The page speaks directly to one trader using very simple English.
- [ ] A motivated non-trader can repeat the meaning after one read.

## 4. Educational Value — 10

- [ ] The page explains why the term matters.
- [ ] One labelled practical example makes the meaning concrete.
- [ ] Common confusion and the practical boundary are clear.

## 5. Structure — 10

- [ ] Definition, explanation, example, confusion, variation, related terms, and deeper guide follow a logical short path.
- [ ] The page remains concise and does not become a duplicate long-form blog.
- [ ] Grammar, headings, labels, and formatting are clean.

## 6. SEO and Intent — 10

- [ ] One canonical glossary URL owns the definition intent.
- [ ] Term, aliases, title, description, slug, and H1 accurately match that intent.
- [ ] Cannibalisation and the complementary blog relationship are recorded.

## 7. Visual Learning — 10

- [ ] A visual is included only when it makes the definition easier to understand; a useful omission can score fully.
- [ ] Progressive handwritten visuals reveal one new point per panel and show the complete view last.
- [ ] Text-heavy panels are mobile-readable, normally 1:1, and detailed images support accessible zoom.
- [ ] Any comparison table keeps readable columns and scrolls horizontally inside its own area on mobile without creating page-level overflow.
- [ ] Generated text, prices, sessions, arrows, rules, and chart logic were checked.

## 8. Interactive Learning — 10

- [ ] An interaction is used only when changing state teaches the meaning better than a static explanation.
- [ ] The definition remains understandable without JavaScript.
- [ ] The interaction includes clear limits and gives no trading instruction.

## 9. Internal Linking — 10

- [ ] Related terms and the deeper guide help the reader continue naturally.
- [ ] Anchors are descriptive and every destination is reviewed and verified.
- [ ] The deeper guide adds application rather than repeating the definition.

## 10. PropLogAI Alignment — 10

- [ ] The page meets the clarity, usefulness, practical teaching, accuracy, and safety level of the approved `/glossary/overtrading` benchmark.
- [ ] Tone is calm, practical, evidence-based, and non-promotional.
- [ ] Product copy remains factual and secondary to the definition.

## Required QA output

Record all ten scores with evidence, total, automatic-failure result, required changes, and `PASS` or `FAIL`. `PASS` routes the exact revision to `Human Review`; it never approves publication.
