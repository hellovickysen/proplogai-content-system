# Automation Boundaries

Automation may inventory URLs, validate metadata, check links, detect duplicates, scaffold briefs, generate drafts, run deterministic checks, calculate readability, and route items to human review.

Automation may not:

- mark its own output approved;
- publish without an exact human-approved revision ID;
- silently change approved copy;
- invent or silently repair missing sources;
- bypass failed safety or fact checks;
- retry publishing forever;
- store secrets in this repository.

Every automated run must preserve item ID, content type, revision, input sources, model or tool version when applicable, timestamps, status changes, errors, and reviewer decision.

Publishing integration is a separate later phase. It must accept only `Approved to Publish`, confirm the approved revision hash, return the final URL and CMS ID, and record failures without changing the approved source.
