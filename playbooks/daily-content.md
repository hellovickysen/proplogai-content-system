# Daily Content Workflow

The daily operator processes at most one primary item at a time unless a human changes capacity.

1. Enter through `prompts/run-daily-content.md`.
2. Select the highest-priority `Ready for Production` item with a human-approved brief.
3. Confirm inventory, GSC evidence, SEO registers, and source-register freshness.
4. Generate the correct blog or glossary draft using the canonical schema.
5. Run SEO/register reconciliation, fact check, 100-point AI QA, and both validators.
6. Route a passing exact revision and hash to `Human Review`; route failures to the matching failure status.
7. Log the run and stop. Do not approve or publish.

Maintain a small approved buffer only after real review capacity is known. Quality and current evidence outrank daily volume.
