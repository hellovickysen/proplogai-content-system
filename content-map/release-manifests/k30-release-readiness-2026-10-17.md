# K30 content release audit

**State:** Local audit performed 17 October 2026; scope updated 18 October after the instruction to leave the main-site billing matter aside. This is a review snapshot, not `Approved to Publish`.

## Decision and scope

The release candidate covers **three repositories only**: the blog, glossary and standalone content system. The main-site repository, including its already approved local K7 copy change, is **deferred and left untouched**. The earlier four-repository audit found a trial/billing copy contradiction and an existing admin build warning there; neither blocks review of this three-repository content scope. This report does not declare the main-site copy verified or ready for publication.

The [K30 worktree inventory](/k30-inventory) contains **242 changed paths**: 126 blog, two glossary and 114 content-system paths. Its CSV SHA-256 is `233BC92A1B543FCBF6E00B7F59A8EA786D30354C7CEC0B2B1DF1861D69A61AF0`. It records path, working-tree status, branch, base commit, byte count and file hash. Generated HTML review previews (51 paths at inventory time) are excluded. Five review screenshots remain classified as `review-screenshot` for a later keep/exclude choice. The CSV is a working-tree snapshot, not a commit or frozen release fingerprint; source changes require regeneration before release.

At the 17 October read-only remote check, all three local HEAD commits matched their GitHub `main` commits. Blog and glossary worktrees are on `codex/k5-journal-links`; the content system is on `main`. Remote heads must be checked again immediately before any push.

## Approval and QA reconciliation

| Check | K30 result | Limit |
| --- | --- | --- |
| [Human-approved article hashes](/k30-article-hashes) | All **17** K8–K23 and K28 MDX files match their exact local approval SHA-256. | A changed approved article needs renewed review. |
| K29 glossary summaries | Shared data-file SHA-256 `9DB83E80F5F61078D8E682FBA152E18027C852DAABCB444183E2DE1F29898306` matches the K29 approval log. | K29 approved three revised summaries within the shared file. |
| Blog | `npm run check` passed: 30 articles, 31 built pages, one H1 per article, dates, metadata and schema. | Local build QA is not indexing evidence. |
| Glossary | `npm run check` passed: 35 terms, 36 built pages, dates, one H1 per term and schema. | Local build QA only. |
| Content system | System, source, GSC and guard validators passed: 48 briefs, 48 drafts, 68 SEO rows, 529 link rows and 70 source rows. | This did not test every external link. |
| Rendered links | Refreshed K26 scan: **65 pages, 665 links**, zero missing local blog, glossary or download targets. | Product and third-party destinations were not all HTTP-tested in K30. |
| Assets and whitespace | All **63** changed blog `.webp` files have valid RIFF/WEBP headers; `git diff --check` passed in the three content repositories. | File-format and whitespace checks are not a visual review of every image. |

The blog's `.md` deletions paired with new `.mdx` files are article-format migrations at the same URL slugs. K30 proposes no new URL, redirect or sitemap migration.

## Remaining content release steps

1. Classify the five review screenshots as release evidence or local-only files, then regenerate the inventory and final hashes. Keep generated review HTML outside the Git payload.
2. Recheck the three remote branch heads and run the content validators after any further edits. Preserve the exact 17 approved article hashes unless a new revision is reviewed.
3. Obtain separate final publication authorization for the exact content payload before committing, pushing, merging or deploying. After deployment, verify rendered HTML, canonical URLs, internal links and sitemaps; revisit the five K27 Search Console indexing examples after a recrawl opportunity.

The original main-site findings remain in the local audit history for a separate future decision. No main-site file was changed in this scope update. No commit, push, pull request, merge, deployment, Search Console submission or indexing claim was made.
