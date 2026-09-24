# Daily Content Workflow

## Current local stage

The system processes one blog or glossary item at a time and stops at human review. No Airtable record, CMS entry, redirect, or production page is changed.

Use:

- `prompts/run-daily-content.md` as the entry point;
- `docs/content-schema.md` as the record contract;
- `docs/seo-portfolio-contract.md` as durable SEO memory;
- `content-map/source-registers/` for current claim evidence; and
- `scripts/validate-content.ps1` plus `scripts/validate-system.ps1` for deterministic checks.

Every run must update the SEO article and internal-link registers with the true current status. Local changes may be `inserted_in_draft` or `verified_in_draft`; only human-confirmed deployed evidence may be marked `live_verified`.

## Later Airtable stage

Airtable may become the queue and review interface after a manual one-record pilot. The repository remains the source of editorial, safety, SEO, and approval rules.

The Airtable mapping must include all fields and allowed values from `docs/content-schema.md`, including QA scores, exact revision/hash, human reviewer, approval timestamp, source IDs, canonical ownership, and link-register status.

## Later publishing stage

A publishing adapter may accept only `Approved to Publish`. It must verify the approved revision and hash, store the CMS ID and URL, and record failures. Publishing remains separately approved work.
