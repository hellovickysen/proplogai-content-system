# PropLogAI Content Record Schema

## Purpose

Every production brief and draft must begin with YAML front matter. This is the canonical machine-readable contract for local validation and a future Airtable mapping. Human-readable metadata may repeat these values, but YAML is authoritative.

## Identity and versioning

- `item_id`: permanent identifier in the form `proplogai-YYYY-MM-DD-topic-slug`.
- `revision`: positive integer. Increase it whenever content changes after entering `Human Review`.
- `revision_hash`: lowercase SHA-256 of the reviewable revision, generated with `scripts/set-revision-hash.ps1`.
- `status`: one allowed workflow value.
- `updated_at` for briefs and `last_updated` for drafts: ISO date `YYYY-MM-DD`.

Matching briefs and drafts share the same `item_id`. Draft slugs must be unique across blog and glossary content.

The hash normalizes line endings and excludes workflow-only values: status, fact-check and QA results, human-review and approval fields, and the hash field itself. It binds the article body, identity, SEO metadata, sources, and internal-link plan. Changing any reviewable content invalidates the hash; changing only a workflow decision does not.

## Workflow statuses

Normal flow:

`Idea` → `Brief Approved` → `Ready for Production` → `Draft Generated` → `AI QA` → `Human Review` → `Changes Requested` → `Approved to Publish` → `Published`

Failure or pause states:

`Needs Fact Check`, `Blocked`, `Generation Failed`, `Publishing Failed`

AI may move a passing item to `Human Review`. AI must never set `Approved to Publish`, `Published`, or the human approval fields.

## Required brief fields

- `item_id`, `revision`, `title`, `status`, `content_type`
- `content_role`, `topic_cluster`, `primary_keyword`, `supporting_keywords`
- `search_intent`, `target_reader`, `keyword_evidence`, `keyword_market`, `market_tier`, `market_rationale`
- `cannibalisation_status`, `canonical_url`, `pillar_url`
- `product_mention_required`, `source_ids`, `updated_at`
- `brief_approved_by`, `brief_approved_at`

`content_type` is `Blog` or `Glossary`. `keyword_evidence` is `GSC`, `Current search review`, or `Editorial hypothesis`.

`Ready for Production` requires a named human in `brief_approved_by` and a valid approval date in `brief_approved_at`. AI must not create or alter those values.

## Required draft fields

- All identity, content, SEO, canonical, and audience fields from the brief
- `keyword_market`, `market_tier`, and `market_rationale`, identifying the country, language, and reason for the active SEO decision
- `seo_title`, `meta_description`, `slug`, `author`
- `last_updated`, `source_checked`, `source_ids`, `sources`
- `internal_link_status`, `internal_links`
- `seo_register_status`, `internal_link_register_status`
- `product_mention`, `fact_check_status`
- `qa_accuracy`, `qa_safety`, `qa_beginner_clarity`, `qa_educational_value`
- `qa_structure`, `qa_seo`, `qa_visual_learning`, `qa_interactive_learning`
- `qa_internal_linking`, `qa_proplogai_alignment`, `qa_total`, `qa_decision`
- `human_review_status`, `approved_revision`, `approved_revision_hash`, `approved_by`, `approved_at`

Use `null` for QA and approval fields that are not yet available. Do not omit them.

## Approval integrity

`Approved to Publish` is valid only when:

- `fact_check_status` is `Passed`;
- `qa_decision` is `PASS`;
- `qa_total` is at least 90;
- Accuracy and Safety are each at least 9;
- `human_review_status` is `Approved`;
- `approved_revision` equals `revision`;
- `approved_revision_hash` equals `revision_hash`; and
- `approved_by` and `approved_at` identify a real human decision.

Any content change after approval increments the revision, creates a new hash, clears approval fields, and returns the item to `Changes Requested` or `Draft Generated`.

## Evidence rules

- Every sensitive claim must map to a current source-register ID.
- Product and general-research rows must be `Approved`; named firm-rule rows must be `Verified`.
- No required row may be expired, `Needs Fact Check`, or `Prohibited`.
- Firm rules must retain the exact firm, program, checked date, and variation limits.

## Ownership

- Repository: editorial rules, schema, prompt, templates, registers, and dated evidence.
- AI: research support, drafting, SEO execution, fact-check preparation, and AI QA.
- SEO registers: durable keyword, canonical, pillar, anchor, and link-status memory.
- Human reviewer: final decision for the exact revision and hash.
- Future Airtable: queue and review interface.
- Future CMS adapter: accepts only a structurally valid human-approved record.
