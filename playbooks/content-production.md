# Content Production Playbook

## Objective

Produce one validated local PropLogAI blog or glossary draft for human review. Do not call Airtable, a CMS, GitHub, or production.

## Entry point

Use `prompts/run-daily-content.md`. Read `docs/content-schema.md` and `docs/seo-portfolio-contract.md` before selecting work.

## Input

Select exactly one human-approved brief with `status: "Ready for Production"`. Process one primary item at a time unless a human explicitly changes capacity.

## Workflow

1. Complete `checklists/pre-generation-checklist.md`.
2. Use the relevant blog, glossary, new-content, or rewrite playbook.
3. Have the SEO Editor update the article register and create the exact-anchor link plan.
4. Draft with `templates/article-output.md` plus the relevant body template.
5. Fact-check every sensitive claim against current source-register rows.
6. Have the SEO Editor insert links and reconcile both registers.
7. Run the QA Reviewer with `checklists/blog-quality-checklist.md`.
8. Revise until QA is at least 90, Accuracy and Safety are each at least 9, and no automatic failure remains.
9. Create the revision hash and run `scripts/validate-content.ps1` and `scripts/validate-system.ps1`.
10. Move the passing exact revision to `Human Review`.

## Stop conditions

Stop and set the matching status when a brief, source, fact check, formula verification, or ownership decision is missing. Never create filler to meet a daily quota.

AI QA is not human approval. Only a named human may complete `checklists/pre-publish-checklist.md` and set `Approved to Publish` for the exact revision and hash.
