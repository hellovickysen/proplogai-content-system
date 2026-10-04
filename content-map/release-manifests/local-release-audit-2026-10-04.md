# PropLogAI grouped local release audit

Audit date: 4 October 2026 (IST)  
Release state: Local review complete; remote release not started  
Scope fingerprint: `844af8f425b192ddfbef328366fae0ba1fd211576a372eec7c560a4bd6d81d29`  
Fingerprint file: `content-map/release-manifests/local-release-file-fingerprints-2026-10-04.csv`

## Release boundary

This audit covers the current local working trees in:

| Repository | Base commit | Changed paths captured |
| --- | --- | ---: |
| `proplogai-content-system` | `95a787fb32d45a7b0f2715dc3b995861202a53c4` | 80 |
| `proplogai-blog` | `75ce901006bc71a53cceeff7036ed45fe54a7e2f` | 56 |
| `proplogai-glossary` | `aad6dfc782af2485a36f8a89c3df83099402d673` | 7 |

The fingerprint contains every modified, deleted, and untracked path found before this manifest was written. Generated build output is ignored. This audit does not include a Git commit, push, pull request, merge, Vercel deployment, production change, Search Console submission, or indexing claim.

## Approved content included

| Type | Slug | Revision | Approved draft hash |
| --- | --- | ---: | --- |
| Blog | `trading-journal-template` | 5 | `597a264d82268aa58b6960ef9e38f3642dbaf699d4620084c0f611bd5f7a932b` |
| Blog | `prop-firm-expense-tracking-guide` | 2 | `446e277f0923f4a6c0ee7938cf9d340691f4e89be0da47d0a38907cecd44afea` |
| Blog | `how-emotions-affect-trading-decisions` | 1 | `54d7c552738a6b76d5e0438b74270c7d89fe4649f57af391f6944f02b8007d49` |
| Blog | `daily-drawdown-calculator` | 1 | `ce9ca77f4a2afd8db0a04156b97b18c96636c2afa7861896930e9acd43d5ed72` |
| Blog | `prop-firm-consistency-calculator` | 4 | `73788121a189d5a7a43206375a83a9533c13d0485d0f3b380d308cad59435389` |
| Glossary | `drawdown` | 1 | `56dd4bbe80c8b9a504587ffa229c4ac573e675ed78b456c5f914f008f8ce100e` |
| Blog | `prop-firm-trading-journal` | 1 | `ef98c7a85f2fcb2b10e28f6306aee89fda9bc5d4358830566ddff00205890a3d` |
| Blog | `prop-firm-rules-guide` | 2 | `a99a308fc2a998f4e9c3fd287ecd2810099a2d89b82837927500e5e69026ff9b` |
| Blog | `prop-firm-payout-rules` | 1 | `46fd094876f373b627e2468a81247fb99c656c9e246849e5ae1114820804b372` |
| Blog | `trading-performance-metrics` | 1 | `3225ff71bda4fc920abb66a3992f0462ea863beb8935aaffc816cc70aaec3fac` |
| Blog | `trading-expectancy-calculator` | 1 | `e907ea1565d77a4f0742e3cf8978041b61de510877952df5ee28f4898a705c1a` |
| Blog | `revenge-trading-prop-firm` | 1 | `5223346a718013c428176cc6fb0589ae4e543e718401dde5ef49c7dc8842dfc3` |
| Blog | `trading-discipline-checklist` | 1 | `acb1ea2e7a3525f974b4a204ee669ba62849d6d15e54779495aaf2bcc4d24694` |

All 13 queue rows are `Approved to Publish`, name Vicky as the human approver, and match their approved snapshot files.

## I10 consolidation decision

The proposed `post-loss-trading-routine` URL is intentionally excluded. GSC and Semrush evidence did not justify another page. The post-loss routine belongs in `revenge-trading-prop-firm`, while `trading-discipline-checklist` owns the reusable checklist intent. The opportunity remains `Do not create - consolidate` so the system does not treat a non-existent draft as approved content.

## Source freshness

The rule register was refreshed on 4 October 2026 from the current official FTMO and FundedNext pages. The renewed 14-day review window ends on 18 October 2026 for PFR-001 through PFR-009 where applicable, PFR-013, PFR-014, and PFR-015. Approved article snapshots were not rewritten merely to change a displayed check date.

## Verification evidence

- Content system: passed source-register, GSC snapshot, content, and validation-guard checks. Totals: 3 source registers, 53 source rows, 13 briefs, 13 drafts, 67 SEO rows, 273 internal-link rows, 13 queue rows.
- Blog: `npm run check` passed. It validated 29 published articles and built 30 pages. Article metadata, BlogPosting and BreadcrumbList schema, one H1 per article, visible dates, and the approved redirect passed.
- Glossary: `npm run check` passed. It validated 35 terms and built 36 pages. WebPage, DefinedTerm, BreadcrumbList, one H1 per term, and unique sitemap URLs passed.
- `git diff --check` passed in all three repositories. The remaining messages are Windows LF-to-CRLF notices, not whitespace errors.
- All 13 approved local review URLs returned HTTP 200 on ports 4323 and 4322.

Remote links were not bulk-crawled by the validator. Time-sensitive named prop-firm claims used in this release were checked directly against their official pages during the audit.

## Release result

The grouped content release is ready for final human review. The next action, after explicit approval of this exact scope fingerprint, is to create local commits and then perform the separately approved remote release workflow. Any content change after approval requires a new fingerprint and another review.
