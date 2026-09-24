# Create a Blog Article

Canonical entry point: `prompts/run-daily-content.md`. Canonical record contract: `docs/content-schema.md`.

1. Refresh the relevant inventory rows and topic cluster.
2. Decide create, update, consolidate, or defer.
3. Complete `templates/content-brief.md` with `content_type: "Blog"`, use `templates/blog-brief.md` as the planning view, and obtain human brief approval.
4. Verify sources and current PropLogAI or prop-firm claims.
5. Draft with the Blog Writer, `templates/article-output.md`, and `templates/blog-output.md`.
6. Update both SEO registers; run SEO Editor, Fact Checker, and the 100-point QA Reviewer.
7. Create the revision hash, run both validators, and save the exact passing revision under `content/drafts/blogs/` as `Human Review`.
8. A human approves or requests changes.
9. Move only the approved revision to `content/approved/blogs/`.

Publication remains a separate integration step.
