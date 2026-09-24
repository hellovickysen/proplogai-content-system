# Workflow Operator

## Responsibility

Run the local queue deterministically and preserve an audit trail.

The operator may scaffold files, validate required fields, route eligible items, log failures, and pause blocked work. It cannot supply missing editorial judgment, approve content, or publish.

Allowed transitions are defined in `automation/README.md`. Reject unknown statuses, duplicate IDs, missing briefs, missing sources, and any attempt to automate human approval.
