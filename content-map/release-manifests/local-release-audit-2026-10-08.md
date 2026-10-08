# PropLogAI K1 grouped local release audit

Audit date: 8 October 2026 (IST)  
Release state: Local commits created and verified; remote release not started  
Scope fingerprint: `23354a477f413f77b1df71a3be554bf20f42c32b34fc3b746a89a6477896ce20`  
Fingerprint file: `content-map/release-manifests/local-release-file-fingerprints-2026-10-08.csv`

## Release boundary

| Repository | Release branch | Base commit | Payload commit | Changed payload paths |
| --- | --- | --- | --- | ---: |
| `proplogai-content-system` | `codex/k1-content-release` | `bbd945687facbb6a2f6b5808d78293cf97e6f29e` | `ed853a2517e6bcceb2b225fa5f09628ea2dfdbd5` | 163 |
| `proplogai-blog` | `main` | `ce27f3ecd74965836f95ecadefc37144190f393b` | `ce27f3ecd74965836f95ecadefc37144190f393b` | 0 |
| `proplogai-glossary` | `codex/k1-glossary-release` | `82d79c36099eafd4de1d8f3f87d7c9862344c3df` | `bd3ede8ad0ca0c87f7fc62a8588a926d7d2646db` | 34 |

The blog repository is clean and synchronized with `origin/main`; its 29 published articles were verified but add no files to this release. The release payload contains the complete approved glossary revision plus its content-system audits, briefs, drafts, approved snapshots, evidence and registers.

Each row hashes the exact Git blob bytes in the local release commits. The scope fingerprint is the SHA-256 of the manifest's canonical LF bytes. The audit and fingerprint files are excluded because they describe the fingerprint itself. Any content payload change requires regeneration and renewed approval.

## Approved content inventory

- Approved queue items: **47**.
- Blog items already approved and present on the synchronized blog branch: **12**.
- Glossary items approved in the grouped payload: **35**.
- Draft-to-approved snapshot mismatches: **0**.

All queue items are `Approved to Publish`, name Vicky as the human approver and carry the exact approved revision hash. Every live glossary term has a brief, draft and approved snapshot.

## Verification evidence

- Content system validation and guard tests passed: 69 source rows, 47 briefs, 47 drafts, 67 SEO rows, 444 internal-link rows and 47 queue rows.
- The live remote-link validation passed for approved draft URLs and the link register.
- Blog `npm run check` passed on 8 October 2026: 29 articles, 30 built pages, metadata, BlogPosting and BreadcrumbList schema, one H1 per page and the approved redirect.
- Glossary `npm run check` passed on 8 October 2026: 35 terms, 36 built pages, WebPage, DefinedTerm and BreadcrumbList schema, one H1 per term and 36 unique sitemap URLs.
- The manifest was verified against the committed Git blobs for every payload path.
- Local review servers are available at `http://127.0.0.1:4323/blogs` and `http://127.0.0.1:4322/glossary`.
- Production remains unchanged. No push, pull request, merge, Vercel deployment, Search Console submission or indexing claim was made in K1.

## Release decision

The exact committed payload is ready for final human approval. The next authorized action will be to push the two release branches and create pull requests to `main`. If any payload file changes, regenerate the fingerprint and request approval again.
