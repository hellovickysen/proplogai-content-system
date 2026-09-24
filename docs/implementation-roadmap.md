# PropLogAI Audit Implementation Roadmap

- Baseline audit: 2026-09-19
- Current audit score: 59/100
- Audited scope: 24 blogs, 35 unique glossary pages, and 2 collection indexes
- Open queue: 15 P1 actions and 2 P2 actions
- Production status: no connection and no changes authorized

## Objective

Resolve the audit's trust, semantic, content-governance, and information-architecture failures before starting automated content production. Work remains local until an exact revision is approved by a human.

## Delivery rules

1. Fix shared defects before editing individual pages at scale.
2. Do not invent historical publication dates, product capabilities, or prop-firm rules.
3. Treat consolidation and redirect proposals as hypotheses until Search Console evidence is available.
4. Every revised page must keep its sources, checked dates, owner, revision status, and human-review state.
5. Automation may prepare and validate work but must stop at `Human Review`.
6. Production publishing, deletion, redirects, CMS access, credentials, and scheduled automation require separate approval.

## Implementation sequence

### Phase 1: local content-system foundation — complete

The local repository contains knowledge rules, roles, playbooks, templates, checklists, content workspaces, queue contracts, validation, and an initial live collection-page review.

### Phase 2: full live content audit — complete

The audit covered live responses, canonicals, metadata, headings, structured data, dates, sources, brand naming, internal links, sensitive claims, and semantic overlap. Evidence is stored under `content-map/`.

### Phase 3: shared technical and governance repairs — complete locally; release gate pending

**Priority:** P1
**Estimated effort:** 3–5 working days
**Owners:** Web engineering, SEO, editorial operations

#### Workstream 3.1 — shared rendering fixes

- Remove the second H1 from the newer blog template.
- Keep the article hero title as the only H1.
- Start body content at H2 or introductory paragraph level.
- Normalize `PropLogAI` across stored copy, related cards, and templates.
- Add deterministic checks for `Propol AI` and unintended `PropLog AI` occurrences.

#### Workstream 3.2 — glossary identity and sitemap

- Choose `Daily Drawdown Limit` as the working canonical term.
- Treat `Maximum Daily Loss` as an in-page synonym unless research proves a distinct intent.
- Remove the duplicate sitemap entry.
- Make the public glossary count match unique canonical term URLs.

#### Workstream 3.3 — dates and structured data

- Define the source of truth for `published_at` and `updated_at`.
- Add honest visible dates without reconstructing unknown historical dates.
- Add and validate `BlogPosting` or `Article` schema on blogs.
- Add and validate `DefinedTerm` schema on glossary pages.
- Add `BreadcrumbList` where visible breadcrumbs exist.

#### Phase 3 exit gate

- Exactly one H1 on every blog and glossary detail page.
- Zero `Propol AI` occurrences and zero unapproved split-name occurrences.
- One sitemap entry per canonical URL; displayed term count equals unique term count.
- Valid structured data on representative pages and then the full inventory.
- Honest visible and machine-readable dates on all revised content.
- No production deployment without human review of the implementation package.

### Phase 4: claim and source governance — complete locally; owner review remains ongoing

**Priority:** P1
**Estimated effort:** 2–4 working days
**Owners:** Product owner, fact checker, editorial lead

#### Deliverables

1. **PropLogAI feature claim register**
   - Feature name
   - Exact approved wording
   - Current first-party source
   - Product owner
   - Checked date
   - Prohibited or outdated wording
2. **Prop-firm rule source register**
   - Firm and program
   - Rule name and calculation method
   - Current first-party URL
   - Checked date
   - Important variation or limitation
3. **General research source register**
   - Claim and approved paraphrase
   - Primary or high-quality source
   - Publication date, scope, and limitation
4. **Source-expiry rules**
   - Product claims: recheck after product changes and before publication.
   - Prop-firm rules: recheck at drafting and immediately before publication.
   - Regulatory or policy claims: recheck before every material revision.

#### Phase 4 exit gate

- Every product capability used in content has approved wording or is marked `Needs Fact Check`.
- Every named prop-firm rule has a current first-party source and checked date.
- Unsupported numeric norms are removed or properly scoped and cited.
- The content checklist blocks an item with a missing required source.

### Phase 5: high-risk content remediation — complete locally; human release gate pending

**Priority:** P1
**Estimated effort:** 5–8 working days
**Owners:** Fact checker, editorial lead, SEO editor

#### Workstream 5.1 — glossary remediation

Start with these audited claim areas:

1. Daily drawdown limit
2. Funded account
3. Prop-firm challenge
4. Consistency rule
5. Risk per trade
6. Win rate
7. Profit factor
8. Loss aversion
9. Profit target
10. Overall drawdown or related drawdown definition

Each revision must lead with a simple, variation-aware definition; separate simulated and live structures where relevant; avoid universal rule language; state formulas and assumptions; cite current named sources; avoid individualized risk instructions or profit implications; and link to one approved deeper guide where useful.

#### Workstream 5.2 — legacy blog remediation

- `trading-emotions-account-killer`: remove fear-based framing and decide refresh versus consolidation after GSC review.
- `trading-journal-benefits`: narrow the intent or consolidate with the journal pillar after GSC review.
- `prop-firm-expense-tracking-guide`: rewrite around record keeping and separate it from ROI calculator intent.

#### Phase 5 exit gate

- All ten high-risk glossary revisions pass fact check, safety, SEO, and human review.
- The three legacy articles have a documented keep, refresh, consolidate, or redirect decision.
- No page uses unsourced “typical,” “best,” “strong,” or guaranteed-outcome language.
- Redirects remain proposals until separately approved.

### Phase 6: Search Console evidence and topic ownership — baseline complete

**Priority:** P1 dependency for consolidation decisions
**Estimated effort:** 1–2 working days after connection
**Owners:** SEO analyst, editorial lead

#### Required analysis

- Confirm the exact PropLogAI Search Console property and effective data range.
- Map queries, clicks, impressions, CTR, and average position to blog and glossary URLs.
- Identify query overlap between legacy pages and proposed pillars.
- Find striking-distance pages, declining pages, and high-impression/low-CTR pages.
- Replace editorial overlap hypotheses with evidence-backed ownership decisions.

#### Decisions to resolve

- `trading-journal-benefits` versus `prop-firm-trading-journal`.
- `trading-emotions-account-killer` versus the psychology cluster.
- `prop-firm-expense-tracking-guide` versus `prop-firm-roi-calculator`.
- Broad AI-coach page versus mechanics and discipline support pages.

#### Phase 6 exit gate

- Every cluster has one documented primary intent owner.
- Consolidation and redirect proposals include query/page evidence.
- Pages without enough evidence remain unchanged and are marked for observation.
- A measurement baseline is saved for post-change comparison.

### Phase 7: internal linking and metadata repair — complete locally; deployment pending

**Priority:** P1 links, then P2 metadata
**Estimated effort:** 3–5 working days
**Owners:** SEO editor, editorial team, web engineering

#### Internal-link implementation

- Link the first useful technical mention in a blog to its canonical glossary definition.
- Link each approved glossary page to one relevant deeper guide.
- Preserve same-type related links when they match reader intent.
- Avoid quotas, repetitive anchors, and links to content still failing review.
- Recheck every internal destination for status, redirect, and canonical consistency.

#### Metadata implementation

- Rewrite the 22 blog titles longer than 60 characters around the primary promise.
- Review five long and three short blog descriptions.
- Review three long and two short glossary descriptions.
- Remove repeated title branding where it wastes snippet space.
- Judge metadata by clarity and rendered snippet quality, not length alone.

#### Phase 7 exit gate

- Every approved content page has at least one useful incoming and outgoing relationship.
- Relevant blog and glossary pairs are connected in both directions.
- All internal destinations return 200 and resolve to the expected canonical URL.
- Metadata is unique, intent-led, and free from unsupported claims.

### Phase 8: local automation and regression controls — controls implemented; one-item run pending

**Priority:** After remediation rules are stable
**Estimated effort:** 3–5 working days
**Owners:** Content operations, web engineering

#### Automate locally

- Sitemap and live-inventory refresh.
- H1, canonical, HTTP, redirect, date, schema, source, and brand checks.
- Metadata outlier reporting.
- Blog-to-glossary and glossary-to-blog link coverage.
- Claim-register validation and source-age warnings.
- Draft scaffolding, revision hashes, and status routing.

#### Required failure behaviour

- Fail closed when required evidence is missing.
- Never promote a failed item to human review as complete.
- Never approve, publish, delete, redirect, or change production automatically.
- Preserve the exact failed revision and validation result.

#### Phase 8 exit gate

- The repeatable audit produces the same counts from the same snapshot.
- Deliberate test defects are detected by the correct checks.
- Queue item IDs and revision hashes remain stable through retries.
- All automated work stops at `Human Review`.

### Phase 9: controlled production pilot — not started

**Priority:** Only after Phases 3–8 pass
**Pilot size:** 2 blog items and 3 glossary items
**Owners:** Editorial lead, fact checker, SEO editor, human approver

#### Pilot workflow

`Idea → Brief Approved → Ready for Production → Draft Generated → AI QA → Fact Check → SEO Review → Human Review → Approved to Publish`

Select low-risk topics with clear intent and available sources. Include one new blog, one refresh, and three glossary revisions. Record review time, failure causes, revision count, and validator false positives.

#### Phase 9 exit gate

- Every exact published revision has recorded human approval.
- Live output matches the approved revision and passes post-publication checks.
- No safety, source, brand, schema, date, or linking regression appears.
- Pilot results support a written decision to adjust, continue, or stop.

### Phase 10: optional CMS integration and scale — deferred

This phase begins only after separate approval for CMS access and publishing integration.

- Start with a private preview or staging environment.
- Use the exact approved revision hash as the publishing input.
- Verify the final URL, canonical, metadata, schema, dates, links, and rendered content.
- Roll back or stop when production output differs from the approved revision.
- Increase volume gradually only after two clean review cycles.

## Proposed implementation batches

| Batch | Scope | Dependency | Completion evidence |
|---|---|---|---|
| A | H1, brand, glossary identity, sitemap | None | Full-inventory regression report |
| B | Date model and structured data | Batch A | Schema validation and page samples |
| C | Claim and source registers | Product and editorial owners | Approved registers with checked dates |
| D | Ten high-risk glossary revisions | Batch C | Revision-level QA and human decisions |
| E | Three legacy blog decisions | GSC connection | Query ownership and disposition log |
| F | Cross-links and metadata | Batches D and E | Link graph and metadata QA |
| G | Local automation controls | Stable rules from A–F | Repeatable audit and failure tests |
| H | Five-item production pilot | All prior gates | Approved revisions and post-live QA |

Current status on 2026-09-24: Batches A–F and Batch G are complete locally through the required automation stopping point. Batch G3 made India/English the primary market, preserved other-country opportunities behind separate evidence, rebuilt the active 62-row SEO register, added India-filtered GSC evidence, and revised the pilot to revision 2. The exact revision still requires a human decision. Batch H has not started.

## Measurement plan

Record a baseline before implementation and compare after Google has enough time to process the changes.

- Valid indexed pages and sitemap consistency
- Structured-data validity
- Single-H1 compliance
- Source and date coverage
- Cross-type internal-link coverage
- Brand-name error count
- Search Console clicks, impressions, CTR, and average position by revised URL
- Query overlap between cluster pages
- Human review time, revision count, and rejection reasons
- Automation failures and false positives

Search outcomes are not guaranteed. Do not use traffic movement as proof that factual or safety requirements may be relaxed.

## Approval gates

| Gate | Decision required | Default without approval |
|---|---|---|
| G1 | Approve implementation plan and owners | Keep work local and unstarted |
| G2 | Approve exact content revisions | Keep in `content/drafts/` |
| G3 | Approve consolidation and redirect list | Preserve existing URLs |
| G4 | Approve CMS or preview integration | No credentials or connection |
| G5 | Approve exact pilot items for publication | Stop at human review |
| G6 | Approve scale-up cadence | Keep the pilot volume cap |

## Immediate next action

Review revision 2 of `content/drafts/blogs/trading-journal-template.md`, identified by hash `57fcc14a100609a00d69eb7f4a8b160f8848b7e083ee19a5b7ead06e359a91d6`. It uses India keyword and SERP evidence and includes the reviewed CSV asset. Record requested changes or the named human approval, then decide whether to begin the five-item Batch H production pilot.

No CMS, redirect, repository integration, deployment, or production change is part of this review step.
