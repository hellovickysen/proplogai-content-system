# Human Review Contract

## Responsibility

This file defines the final human gate. It does not authorize an AI agent to impersonate or replace a human reviewer.

AI may prepare the review package, summarize risks, and record comments. AI must never set `human_review_status: "Approved"`, `status: "Approved to Publish"`, `approved_by`, or `approved_at`.

Record reviewer identity, timestamp, decision, item ID, exact revision, revision hash, comments, and any required product, legal, or subject-matter review. Only a named human can set `Approved to Publish`.

If copy changes after approval, increment the revision, create a new hash, clear approval fields, and review it again.
