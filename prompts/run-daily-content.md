# Run One PropLogAI Content Item

## Goal

Produce one review-ready local blog or glossary draft from one approved brief. Stop at human review.

## Required procedure

1. Read `README.md`, `AGENTS.md`, `knowledge/00-system-rules.md`, `docs/content-schema.md`, and `docs/seo-portfolio-contract.md`.
2. Select exactly one brief with `status: "Ready for Production"`.
3. Read only the knowledge, role files, example pattern, playbook, template, and checklists relevant to that brief.
4. Complete `checklists/pre-generation-checklist.md`. Stop if a required input fails.
5. Use `skills/seo/seo-editor.md` to confirm intent, canonical ownership, content type, cluster, pillar, GSC evidence, overlap, metadata direction, and quality-checked destinations.
6. Update `content-map/seo-article-register.csv`. Do not rely on memory.
7. Build and record the exact-anchor internal-link plan in `content-map/internal-link-register.csv` before drafting. Do not force a link.
8. Draft with the relevant blog or glossary playbook and machine-readable template.
9. Run `skills/fact-checking/fact-checker.md`. Resolve, remove, or block every unsupported sensitive claim before QA.
10. Run `skills/qa/qa-reviewer.md` using the applicable 100-point rubric and record all ten scores.
11. Reconcile the draft, source IDs, SEO register, and link register.
12. Run `scripts/validate-content.ps1` and `scripts/validate-system.ps1`.
13. If all gates pass, move the exact revision to `Human Review`. AI must not approve it.

## Required output

- Matching brief and draft with the same `item_id`.
- YAML front matter that follows `docs/content-schema.md`.
- Answer-first, beginner-readable content with explicit limits.
- Current source IDs and checked dates.
- Matching SEO and internal-link register rows.
- Fact-check and ten-category QA evidence.
- A final note stating what passed, what remains unresolved, and the next human action.
