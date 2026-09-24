[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot

$required = @(
    'README.md',
    'AGENTS.md',
    'knowledge/00-system-rules.md',
    'knowledge/08-proplogai.md',
    'knowledge/10-automation-boundaries.md',
    'knowledge/11-source-expiry-rules.md',
    'docs/content-schema.md',
    'docs/daily-content-workflow.md',
    'docs/seo-portfolio-contract.md',
    'docs/category-and-cluster-model.md',
    'docs/audience-and-market-policy.md',
    'docs/url-migration-policy.md',
    'prompts/run-daily-content.md',
    'playbooks/create-blog.md',
    'playbooks/create-glossary-term.md',
    'playbooks/content-production.md',
    'templates/content-brief.md',
    'templates/article-output.md',
    'templates/blog-output.md',
    'templates/glossary-output.md',
    'templates/seo-article-register.csv',
    'templates/internal-link-register.csv',
    'checklists/pre-generation-checklist.md',
    'checklists/pre-publish-checklist.md',
    'checklists/blog-quality-checklist.md',
    'checklists/blog-pre-publish.md',
    'checklists/glossary-pre-publish.md',
    'content-map/source-registers/proplogai-feature-claims.csv',
    'content-map/source-registers/prop-firm-rules.csv',
    'content-map/source-registers/general-research.csv',
    'content-map/gsc/gsc-query-performance-2026-09-20.csv',
    'content-map/gsc/gsc-page-performance-2026-09-20.csv',
    'content-map/gsc/gsc-query-page-map-2026-09-20.csv',
    'content-map/gsc/gsc-india-baseline-2026-09-24.md',
    'content-map/gsc/gsc-india-query-performance-2026-09-24.csv',
    'content-map/gsc/gsc-india-page-performance-2026-09-24.csv',
    'content-map/internal-link-map-2026-09-21.csv',
    'content-map/seo-article-register.csv',
    'content-map/internal-link-register.csv',
    'content-map/url-migration-register.csv',
    'content-map/future-content-opportunities-2026-09-24.csv',
    'content-map/proposed-editorial-calendar-2026-q4.csv',
    'content-map/keyword-research/ubersuggest-seed-metrics-2026-09-24.csv',
    'content-map/keyword-research/ubersuggest-seed-metrics-india-2026-09-24.csv',
    'content-map/keyword-research/historical/seo-register-us-metrics-2026-09-24.csv',
    'content-map/keyword-research/historical/seo-register-global-gsc-2026-09-20.csv',
    'content-map/audit-logs/batch-f-2026-09-21.md',
    'content-map/audit-logs/batch-g1-2026-09-24.md',
    'content-map/audit-logs/batch-g2-2026-09-24.md',
    'content-map/audit-logs/batch-g3-2026-09-24.md',
    'automation/queue.csv',
    'content-map/live-inventory.csv',
    'scripts/build-seo-portfolio-register.ps1',
    'scripts/apply-batch-g1-portfolio-map.ps1',
    'scripts/register-g2-pilot.ps1',
    'scripts/apply-india-primary-market.ps1',
    'scripts/set-revision-hash.ps1',
    'scripts/validate-content.ps1',
    'scripts/test-validation-guards.ps1',
    'content/assets/trading-journal-template.csv'
)

$missing = @($required | Where-Object { -not (Test-Path -LiteralPath (Join-Path $root $_)) })
if ($missing.Count -gt 0) {
    throw "Missing required paths: $($missing -join ', ')"
}

$requiredHeaders = @('item_id','content_type','status','priority','title','slug','brief_path','draft_path','revision','revision_hash','source_ready','human_approver','updated_at','error')
$header = Get-Content -LiteralPath (Join-Path $root 'automation/queue.csv') -TotalCount 1
$actualHeaders = @(($header -split ',') | ForEach-Object { $_.Trim('"') })
if (($requiredHeaders -join ',') -ne ($actualHeaders -join ',')) {
    throw 'automation/queue.csv headers do not match the queue contract.'
}

$migrationHeaders = @('migration_id','status','old_url','new_url','primary_keyword','search_intent','evidence','redirect_type','canonical_target','sitemap_status','internal_link_status','gsc_annotation_status','approved_by','approved_at','implemented_at','verified_at','notes')
$migrationHeader = Get-Content -LiteralPath (Join-Path $root 'content-map/url-migration-register.csv') -TotalCount 1
$actualMigrationHeaders = @(($migrationHeader -split ',') | ForEach-Object { $_.Trim('"') })
if (($migrationHeaders -join ',') -ne ($actualMigrationHeaders -join ',')) {
    throw 'content-map/url-migration-register.csv headers do not match the migration contract.'
}

$allowedTypes = @('blog','glossary')
$allowedStatuses = @('Idea','Brief Approved','Ready for Production','Draft Generated','AI QA','Human Review','Changes Requested','Approved to Publish','Published','Needs Fact Check','Blocked','Generation Failed','Publishing Failed')
$rows = @(Import-Csv -LiteralPath (Join-Path $root 'automation/queue.csv'))

$linkRows = @(Import-Csv -LiteralPath (Join-Path $root 'content-map/internal-link-map-2026-09-21.csv'))
if ($linkRows.Count -ne 24) { throw "Expected 24 Batch F relationship rows, found $($linkRows.Count)." }
foreach ($link in $linkRows) {
    if ($link.from_url -notmatch '^https://proplogai\.com/' -or $link.to_url -notmatch '^https://proplogai\.com/') {
        throw 'Batch F relationship URLs must stay on proplogai.com.'
    }
    if ($link.from_url.EndsWith('/') -or $link.to_url.EndsWith('/')) {
        throw 'Batch F relationship URLs must use the no-slash canonical form.'
    }
}

$opportunityPath = Join-Path $root 'content-map/future-content-opportunities-2026-09-24.csv'
$opportunities = @(Import-Csv -LiteralPath $opportunityPath)
if ($opportunities.Count -ne 16) { throw "Expected 16 Batch G1 opportunities, found $($opportunities.Count)." }
if (@($opportunities | Group-Object opportunity_id | Where-Object Count -gt 1).Count) { throw 'Duplicate Batch G1 opportunity IDs found.' }
if (@($opportunities | Group-Object proposed_url | Where-Object Count -gt 1).Count) { throw 'Duplicate Batch G1 proposed URLs found.' }
foreach ($opportunity in $opportunities) {
    foreach ($field in @('opportunity_id','priority','action','content_type','proposed_url','category','topic_cluster','primary_keyword','search_intent','evidence_source','target_market','market_tier','market_rationale','status','reason')) {
        if ([string]::IsNullOrWhiteSpace([string]$opportunity.$field)) { throw "Opportunity $($opportunity.opportunity_id) is missing $field." }
    }
    if ($opportunity.proposed_url -notmatch '^https://proplogai\.com/') { throw "Opportunity $($opportunity.opportunity_id) has an off-property URL." }
    if ($opportunity.market_tier -notin @('Primary','Secondary')) { throw "Opportunity $($opportunity.opportunity_id) has an invalid market tier." }
    if ($opportunity.market_tier -eq 'Primary' -and $opportunity.target_market -ne 'India / English') { throw "Opportunity $($opportunity.opportunity_id) has an invalid primary market." }
    if ($opportunity.market_tier -eq 'Secondary' -and ($opportunity.target_market -eq 'India / English' -or $opportunity.evidence_source -eq 'Editorial hypothesis')) { throw "Opportunity $($opportunity.opportunity_id) lacks secondary-market evidence." }
    if ($opportunity.status -match '(?i)^Approved') { throw "Opportunity $($opportunity.opportunity_id) incorrectly claims human approval." }
}

$calendar = @(Import-Csv -LiteralPath (Join-Path $root 'content-map/proposed-editorial-calendar-2026-q4.csv'))
if ($calendar.Count -ne 12) { throw "Expected 12 proposed calendar slots, found $($calendar.Count)." }
if (@($calendar | Group-Object opportunity_id | Where-Object Count -gt 1).Count) { throw 'Duplicate opportunity IDs found in the proposed calendar.' }
foreach ($slot in $calendar) {
    if ($slot.opportunity_id -notin $opportunities.opportunity_id) { throw "Calendar slot references unknown opportunity $($slot.opportunity_id)." }
    if ($slot.status -ne 'Proposed') { throw "Calendar slot $($slot.slot) must remain Proposed until human review." }
}

$duplicateIds = @($rows | Group-Object item_id | Where-Object { $_.Name -and $_.Count -gt 1 })
if ($duplicateIds.Count -gt 0) {
    throw "Duplicate queue item IDs: $($duplicateIds.Name -join ', ')"
}

foreach ($row in $rows) {
    if ($row.content_type -notin $allowedTypes) { throw "Invalid content type for $($row.item_id): $($row.content_type)" }
    if ($row.status -notin $allowedStatuses) { throw "Invalid status for $($row.item_id): $($row.status)" }
    if ($row.status -eq 'Approved to Publish' -and (-not $row.human_approver -or -not $row.revision_hash)) {
        throw "Approved item $($row.item_id) requires human_approver and revision_hash."
    }
}

$legacyMatches = @(Get-ChildItem -LiteralPath $root -Recurse -File -Include '*.md','*.csv' |
    Where-Object { $_.FullName -notlike '*README.md' } |
    Select-String -Pattern 'Sahal|Shariah-guided|halal digital finance')
if ($legacyMatches.Count -gt 0) {
    throw 'External-project-specific content remains in the PropLogAI system.'
}

$forbiddenProjectToken = -join @([char]77,[char]82,[char]72,[char]66)
$standaloneMatches = @(Get-ChildItem -LiteralPath $root -Recurse -File |
    Where-Object { $_.FullName -notmatch '[\\/]\.git([\\/]|$)' } |
    Select-String -SimpleMatch $forbiddenProjectToken)
if ($standaloneMatches.Count -gt 0) {
    throw 'A prohibited external-project reference remains in the standalone PropLogAI system.'
}

& (Join-Path $PSScriptRoot 'validate-source-registers.ps1')
& (Join-Path $PSScriptRoot 'validate-gsc-snapshot.ps1')
& (Join-Path $PSScriptRoot 'validate-content.ps1')
& (Join-Path $PSScriptRoot 'test-validation-guards.ps1')

Write-Host "PropLogAI content system validation passed. Required paths: $($required.Count); queue rows: $($rows.Count)."
