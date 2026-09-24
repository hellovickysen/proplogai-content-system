# Local Automation Playbook

## Phase 1: local queue

Use `automation/queue.csv` as a transparent pilot. Validate IDs, types, statuses, brief paths, and source readiness. Scaffold work with `scripts/new-content-item.ps1` and validate the repository with `scripts/validate-system.ps1`.

## Phase 2: review interface

After the local workflow is stable, an external queue such as Airtable may mirror IDs, statuses, briefs, sources, reviewer comments, revision hashes, and errors. The repository remains the rule and template source of truth.

## Phase 3: publishing integration

Add only after human review is reliable. The publisher accepts `Approved to Publish`, verifies the approved revision hash, creates or updates the intended content type, stores the CMS ID and final URL, and returns `Publishing Failed` on error.

No phase is complete until a failure case is tested and the audit trail is preserved.
