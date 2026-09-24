# PropLogAI Content-System Alignment Audit

- Audit date: 2026-09-22
- Reference: standalone PropLogAI editorial, SEO, validation, and approval requirements
- Scope: `proplogai-content-system` structure, operating contract, SEO memory, validation, and approval controls
- Production effect: none

## Verdict

The standalone PropLogAI system supports its two content types, trading-safety requirements, source registers, existing live library, and dated Search Console evidence. Every editorial and SEO decision belongs to the PropLogAI portfolio and must be supported by PropLogAI-specific evidence.

The workflow engine and SEO portfolio architecture are ready for a supervised local one-item run. All 61 existing URLs now have category, keyword, intent, pillar, evidence, and blog/glossary relationship mapping, and a 16-row future-opportunity backlog exists. The system is not yet proven for routine production because the canonical workspace still contains zero real briefs and zero real drafts. Airtable, CMS publishing, redirects, scheduled execution, and production deployment remain outside the connected system.

## Alignment matrix

| Required operating capability | PropLogAI implementation | Status |
|---|---|---|
| Canonical machine-readable content record | `docs/content-schema.md` and YAML templates | Aligned |
| One-item supervised run entry point | `prompts/run-daily-content.md` | Aligned |
| Deterministic content validation | `scripts/validate-content.ps1` | Aligned and extended |
| Human-only publication approval | Exact revision/hash fields plus validator rejection of AI approvers | Aligned and tested |
| 100-point editorial QA | Ten-category PropLogAI blog rubric with 90-point gate | Aligned and adapted |
| Pre-generation and pre-publish gates | Canonical checklists under `checklists/` | Aligned |
| Durable SEO portfolio memory | SEO article and exact-anchor link registers | Aligned and seeded |
| System-wide readiness validation | `scripts/validate-system.ps1` | Aligned and extended |
| Future queue/CMS separation | Local repository remains source of truth; integrations deferred | Aligned |

## PropLogAI-specific controls preserved

- Separate blog and glossary creation, review, and audit workflows.
- No trade signals, market forecasts, profit promises, pass promises, or personalised trading instructions.
- Firm and program rules require named, current, first-party evidence and variation-aware language.
- Product claims, firm rules, and research claims use distinct source registers with statuses and review dates.
- GSC metrics retain their evidence period and are not described as search volume.
- Local draft links cannot be marked live; the exact anchor and destination evidence remain in a durable register.
- Production, CMS, Airtable, redirects, credentials, commits, pushes, and deployments require separate work and authorization.

## Implemented changes

1. Added a canonical schema covering identity, revisioning, workflow status, SEO ownership, sources, QA, and exact human approval.
2. Added the one-item daily run prompt and updated blog, glossary, rewrite, daily, and automation playbooks to use it.
3. Added canonical content-brief and article-output templates while retaining content-type-specific body templates.
4. Replaced the placeholder blog QA file with a PropLogAI-specific 100-point rubric.
5. Added pre-generation and pre-publish gates and made AI approval explicitly invalid.
6. Added a 61-row SEO portfolio register from the dated live inventory and GSC snapshot.
7. Added a 24-row internal-link register preserving exact Batch F anchors and local/live status.
8. Added deterministic content validation and a failure test that accepts a valid Human Review fixture and rejects an AI-authored publication approval.
9. Updated the implementation roadmap so completed local batches and the true next gate are visible.

## Validation evidence

| Check | Result |
|---|---|
| Source-register validation | Passed: 3 registers, 40 rows |
| GSC snapshot validation | Passed: 58 query rows, 43 page rows, 12 query/page map rows, 1 URL-variant group |
| Content/register validation | Passed: 0 briefs, 0 drafts, 61 SEO rows, 152 link rows |
| Remote destination check | Passed for all unique registered target URLs |
| Approval guard test | Passed: valid Human Review accepted; AI-authored approval rejected |
| Full system validation | Passed: 45 required paths; 0 queue rows |

The zero brief/draft and queue counts are accurate readiness boundaries, not evidence of content throughput.

## Current data limits

- The SEO register is seeded from the 2026-09-19 live inventory. Refresh the crawl before a time-sensitive audit.
- GSC fields use the 2026-07-06 through 2026-09-17 evidence period and the 2026-09-20 export. Refresh before new performance decisions.
- Thirty-three of the 61 portfolio rows currently contain page-level GSC-period data; absence of a match is not proof of zero demand.
- The link register contains 152 decisions: 128 planned, 22 locally verified in drafts, and two pre-existing relationships marked `live_verified`.
- Forty-one portfolio rows use editorial-hypothesis keyword mapping. Blank keyword metrics mean unmeasured, not zero.
- Seven performance glossary pages point to a planned performance-metrics pillar; those links must not be inserted until the pillar exists and is quality checked.
- Existing local blog and glossary remediation remains unreleased until its separate review and deployment process is completed.

## Required next gate

Complete Batch G with one low-risk content item:

1. Review `content-map/future-content-opportunities-2026-09-24.csv` and select one low-risk `Recommended for brief` item.
2. Create one real brief using `templates/content-brief.md`.
3. Have a human approve the brief and set it to `Ready for Production`.
4. Run `prompts/run-daily-content.md` through fact check, SEO reconciliation, and 100-point AI QA.
5. Run `scripts/validate-content.ps1` and `scripts/validate-system.ps1`.
6. Stop at `Human Review` and record review time, revision count, false positives, and unresolved questions.

Only after that dry run should the team decide whether to begin the five-item Batch H production pilot.
