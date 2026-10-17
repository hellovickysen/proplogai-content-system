# K33 locally approved revision

Vicky approved the K33 local review on 18 October 2026. Separate authorization then covered pushing three K33 branches and opening PRs for review. This is not the content-system `Approved to Publish` state. The PRs remain unmerged and no production deployment has occurred.

## Review scope

- Blog: `src/content/blog/prop-firm-risk-management.mdx` (`8c4cb5829324370fa4707fadd5238db79d31bd2626212fecac29cddfd1e14f92`), `src/content/blog/prop-firm-challenge-readiness.mdx` (`3f64e534c390b5a7524b5f0f6862c1523d4b5affa6c00e7c4f92606c89b563cb`), and `src/content/blog/prop-firm-trading-rulebook.mdx` (`4eb541966867b06df090ab3d968a9d0dfffeb19ad4cf99be025751b35b61d770`). These add the four-page link repair's three blog anchors and update visible dates.
- Glossary: `src/data/glossary-terms.js` (`b4752cf50b265445fc32a2ecfeab0d274bddbd6311f3b2b919f48447534d619a`) adds the fourth anchor to Trading Plan and updates its date.
- Blog redirect repair: `vercel.json` (`4de14b076bc06fc6df57002ea096832c9f3f56215dcda1ff90da225e643b1aaa`), `scripts/validate-build.mjs`, and `scripts/validate-content.mjs`. The two retired URLs must redirect permanently to the correct public `/blogs/` targets.
- Content system: revision 2 of `content/drafts/glossary/trading-plan.md` has editorial revision hash `4779080f1bbb8a9edc312f47753b11fb24b3bf587faf9b8d7141da26930030d2`. K33 also updates the SEO, migration, and internal-link registers, cluster model, rendered-link audit script, content validator, and the K33 audit/review artifacts. The previous approved Trading Plan revision is retained.

## Release and verification order

1. Isolate the K33 paths from unrelated K31/K32 worktree changes before creating commits. The main-site repository is outside this scope.
2. Run blog `npm run check`, glossary `npm run check`, and content-system validators on the exact candidate. Confirm `git diff --check` for all three repositories.
3. After separate production-release authorization, merge the approved candidates. Verify both retired URL chains: permanent redirect → intended `/blogs/` URL → HTTP 200 → self-canonical.
4. Check the four revised live page bodies, reciprocal contextual links, and a fresh rendered-link inventory. Record deployment and crawl results separately.

The K33 audit log remains the evidence source for local page counts, responsive checks, and the observed broken production redirects.
