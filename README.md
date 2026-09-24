# PropLogAI Content System

This repository is the local operating system for auditing, planning, writing, reviewing, and eventually automating PropLogAI blog and glossary content.

This is a standalone PropLogAI system. Its topics, keywords, categories, clusters, sources, examples, claims, links, briefs, and copy must come from PropLogAI's own product, audience, portfolio, evidence, and search data.

Its primary audience is India in English. Other-country opportunities may be pursued when separate country-specific evidence supports them; market metrics must never be blended.

It does not connect to the production website, CMS, Airtable, Search Console, or publishing credentials.

## Product position

PropLogAI is an AI-assisted discipline and journaling system for prop-firm traders. Content may help readers understand trading behaviour, rule adherence, journaling, performance review, prop-firm rules, risk concepts, expenses, and calculators. It must not provide trade signals, forecast markets, promise profitability, or treat P&L as proof of discipline.

## Execution order

```text
README
  -> knowledge
  -> skills
  -> playbooks
  -> templates
  -> checklists
  -> content workspace
  -> human approval
  -> optional automation and publishing later
```

## Repository map

- `knowledge/` — brand, audience, safety, SEO, linking, and quality rules.
- `skills/` — one responsibility per editorial role.
- `playbooks/` — complete workflows for audits, blogs, glossary terms, refreshes, and automation.
- `templates/` — required metadata and output formats.
- `checklists/` — deterministic gates before generation or publication.
- `content-map/` — live inventory, topic ownership, cannibalisation decisions, and refresh queue.
- `content/` — briefs, drafts, approved revisions, and published snapshots.
- `automation/` — local queue contract and future integration boundary.
- `examples/` — approved examples added after human review.
- `scripts/` — local validation and scaffolding helpers.
- `prompts/` — canonical orchestration entry points for supervised content runs.

## Content lifecycle

`Idea -> Brief Approved -> Ready for Production -> Draft Generated -> AI QA -> Human Review -> Changes Requested/Approved to Publish -> Published`

Only a human may set `Approved to Publish`. Automation may prepare, validate, and move work to `Human Review`; it may not approve its own output.

## Current live baseline

The initial 2026-09-19 snapshot found 24 blog articles at `https://proplogai.com/blogs` and 36 glossary terms at `https://proplogai.com/glossary`. Treat those counts as a dated snapshot and refresh the inventory before planning new content.

## First use

1. Read `knowledge/00-system-rules.md` and the relevant content-type rules.
2. Read `docs/content-schema.md`, `docs/seo-portfolio-contract.md`, and `docs/audience-and-market-policy.md`.
3. Start with `prompts/run-daily-content.md` and select exactly one approved brief.
4. Refresh `content-map/live-inventory.csv` before making a new ownership decision.
5. Complete the SEO article and internal-link registers before drafting.
6. Run the relevant playbook, fact check, and 100-point AI QA.
7. Run `scripts/validate-content.ps1` and `scripts/validate-system.ps1`.
8. Keep the result in `content/drafts/` until a named human approves the exact revision and hash.

## Readiness boundary

The repository is the editorial source of truth. It owns the PropLogAI blog and glossary program end to end: category and topical-cluster architecture, keyword and intent ownership, GSC opportunity analysis, future-post planning, briefs, writing, blog/glossary integration, internal links, fact checks, QA, refresh decisions, and review handoffs. Airtable and CMS publishing remain later integrations. Search Console files are dated evidence snapshots and must be refreshed before making time-sensitive performance decisions.

The workflow engine and portfolio architecture passed one supervised local brief-to-`Human Review` pilot on 2026-09-24. The exact revision now awaits human review. Routine production begins only after the pilot is reviewed and a human explicitly decides whether to start the five-item production pilot.
