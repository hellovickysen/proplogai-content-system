# Local Content Queue

`queue.csv` is the automation-ready control plane for the local pilot. It does not call an AI provider, CMS, Airtable, Search Console, or production service.

## Allowed statuses

`Idea`, `Brief Approved`, `Ready for Production`, `Draft Generated`, `AI QA`, `Human Review`, `Changes Requested`, `Approved to Publish`, `Published`, `Needs Fact Check`, `Blocked`, `Generation Failed`, and `Publishing Failed`.

## Allowed transitions

- Idea -> Brief Approved
- Brief Approved -> Ready for Production
- Ready for Production -> Draft Generated / Generation Failed / Blocked
- Draft Generated -> AI QA / Needs Fact Check
- AI QA -> Human Review / Changes Requested / Needs Fact Check
- Human Review -> Changes Requested / Approved to Publish
- Changes Requested -> Draft Generated
- Approved to Publish -> Published / Publishing Failed
- Publishing Failed -> Approved to Publish after the failure is resolved

Only a human can make `Human Review -> Approved to Publish`. A publishing connector must verify the approved revision hash and must not alter the copy.

## Queue fields

- `item_id`: stable unique ID.
- `content_type`: `blog` or `glossary`.
- `status`: one allowed status.
- `priority`: P0-P3.
- `title`: working title or term.
- `slug`: intended canonical slug.
- `brief_path`: repository-relative brief path.
- `draft_path`: repository-relative draft path.
- `revision`: integer revision.
- `revision_hash`: required when approved.
- `source_ready`: true or false.
- `human_approver`: required for approval.
- `updated_at`: ISO 8601 timestamp.
- `error`: latest actionable failure.
