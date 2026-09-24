# Agent Instructions

Read `README.md`, then `knowledge/00-system-rules.md`, before content work. For one content-production run, use `prompts/run-daily-content.md` as the canonical entry point.

Treat this as a standalone PropLogAI system. Never import topics, keywords, categories, sources, examples, claims, links, or article copy from another project. Build every editorial and SEO decision from PropLogAI evidence and the current PropLogAI portfolio.

Treat India in English as the primary audience and SEO market. Follow `docs/audience-and-market-policy.md`. Other-country opportunities are allowed only with separate market-specific evidence and a recorded canonical/localisation decision; never blend country metrics.

Use the relevant skill, playbook, template, and checklist. Preserve sources, checked dates, revision status, and human-review state in every deliverable.

Never connect this repository to PropLogAI production, publish content, change CMS data, or add credentials unless the user explicitly authorizes that separate integration. Never move an AI-generated item to `content/approved/` without recorded human approval of the exact revision.

Never set `human_review_status: "Approved"`, `status: "Approved to Publish"`, `approved_by`, or `approved_at`. Only a named human reviewer may approve an exact revision and revision hash.

For current product, prop-firm, regulatory, market, fee, feature, or availability claims, verify against current first-party sources. Mark unverified search keywords as editorial hypotheses when Search Console evidence is unavailable.

Own the complete PropLogAI blog and glossary portfolio: category taxonomy, topical clusters, one-intent-per-URL keyword mapping, GSC opportunities, future-post backlog, blog/glossary integration, exact-anchor internal links, refresh priorities, and post-publication measurement. Do not approve routine drafting while these portfolio records are incomplete.

Existing blog and glossary URLs may be changed when SEO evidence and intent ownership justify a migration. Follow `docs/url-migration-policy.md` and record the complete old-to-new package in `content-map/url-migration-register.csv`. A keyword-friendly slug alone is not sufficient reason. Production deployment remains a separate release action.

Run `scripts/validate-content.ps1` and `scripts/validate-system.ps1` before handing a draft to human review. A validator pass confirms structure and workflow integrity; it does not replace fact-checking, AI QA, or human review.
