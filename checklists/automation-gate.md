# Automation Gate

- [ ] Item ID is unique.
- [ ] Content type and status are allowed.
- [ ] Brief exists and is approved.
- [ ] Required source-register IDs are present and resolve to allowed statuses.
- [ ] Source `review_by` dates have not passed.
- [ ] Generation fails closed when a required claim is missing, expired, `Needs Fact Check`, or `Prohibited`.
- [ ] Output revision is immutable after approval.
- [ ] Validation and failure logs are preserved.
- [ ] Human approval is recorded separately from AI QA.
- [ ] Publishing is blocked unless status is `Approved to Publish` and the hash matches.
- [ ] Secrets are outside the repository.
- [ ] A failure-path test has passed.
