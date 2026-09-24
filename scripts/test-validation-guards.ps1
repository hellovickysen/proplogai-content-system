[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$testRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("proplogai-content-validator-" + [guid]::NewGuid().ToString('N'))

try {
    foreach ($path in @('scripts','content/briefs','content/drafts','content-map/source-registers')) {
        New-Item -ItemType Directory -Path (Join-Path $testRoot $path) -Force | Out-Null
    }
    Copy-Item (Join-Path $root 'scripts/validate-content.ps1') (Join-Path $testRoot 'scripts/validate-content.ps1')
    Copy-Item (Join-Path $root 'scripts/set-revision-hash.ps1') (Join-Path $testRoot 'scripts/set-revision-hash.ps1')

    @'
research_id,status,claim,approved_paraphrase,source_url,publisher,publication_date,checked_on,review_by,scope_and_limitation
RES-TEST,Approved,Test concept,Test-only approved wording,https://example.com/source,Test Publisher,2026,2026-09-22,2027-09-22,Validator fixture only
'@ | Set-Content (Join-Path $testRoot 'content-map/source-registers/general-research.csv')

    @'
item_id,title,url,content_status,canonical_url,category,primary_keyword,supporting_keywords,search_intent,content_role,topic_cluster,pillar_url,pillar_status,paired_content_urls,keyword_evidence,keyword_market,market_tier,market_rationale,keyword_volume,keyword_sd,keyword_cpc_usd,keyword_checked_on,canonical_action,gsc_market,gsc_top_query,gsc_clicks_period,gsc_impressions_period,gsc_ctr_percent_period,gsc_avg_position_period,gsc_period,priority,last_content_review,last_gsc_refresh,notes
proplogai-2026-09-22-validator-fixture,Validator fixture,https://proplogai.com/blogs/validator-fixture,draft,https://proplogai.com/blogs/validator-fixture,Testing,validator fixture,content validation fixture,Informational,Cluster support,Content operations,https://proplogai.com/blogs/validator-fixture,Current,https://proplogai.com/blogs/validator-fixture,Editorial hypothesis,India / English,Primary,Validator fixture uses the primary market,,,,2026-09-22,create,,,,,,,,P1,2026-09-22,,Test fixture
'@ | Set-Content (Join-Path $testRoot 'content-map/seo-article-register.csv')

    @'
source_item_id,source_url,source_primary_keyword,target_item_id,target_url,target_primary_keyword,anchor_text,link_context,relationship,status,destination_quality_status,destination_http_status,destination_canonical_url,last_verified,reason_or_follow_up
'@ | Set-Content (Join-Path $testRoot 'content-map/internal-link-register.csv')

    @'
---
item_id: "proplogai-2026-09-22-validator-fixture"
revision: 1
title: "Validator fixture"
status: "Ready for Production"
content_type: "Blog"
content_role: "Cluster support"
topic_cluster: "Content operations"
primary_keyword: "validator fixture"
supporting_keywords: []
search_intent: "Informational"
target_reader: "Content operator"
keyword_evidence: "Editorial hypothesis"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "Validator fixture uses the primary market."
cannibalisation_status: "Reviewed - no conflict found"
canonical_url: "https://proplogai.com/blogs/validator-fixture"
pillar_url: "https://proplogai.com/blogs/validator-fixture"
product_mention_required: false
source_ids: [RES-TEST]
updated_at: "2026-09-22"
brief_approved_by: "Test Human"
brief_approved_at: "2026-09-22"
---

# Validator fixture brief
'@ | Set-Content (Join-Path $testRoot 'content/briefs/validator-fixture.md')

    $validDraft = @'
---
item_id: "proplogai-2026-09-22-validator-fixture"
revision: 1
revision_hash: "abc123"
title: "Validator fixture"
status: "Human Review"
content_type: "Blog"
content_role: "Cluster support"
topic_cluster: "Content operations"
primary_keyword: "validator fixture"
supporting_keywords: []
search_intent: "Informational"
target_reader: "Content operator"
keyword_evidence: "Editorial hypothesis"
keyword_market: "India / English"
market_tier: "Primary"
market_rationale: "Validator fixture uses the primary market."
cannibalisation_status: "Reviewed - no conflict found"
canonical_url: "https://proplogai.com/blogs/validator-fixture"
pillar_url: "https://proplogai.com/blogs/validator-fixture"
seo_title: "Validator fixture"
meta_description: "A validator fixture used only for deterministic local tests."
slug: "validator-fixture"
author: "PropLogAI Editorial Team"
last_updated: "2026-09-22"
source_checked: "2026-09-22"
source_ids: [RES-TEST]
sources: [https://example.com/source]
internal_link_status: "Complete"
internal_links: []
seo_register_status: "Complete"
internal_link_register_status: "Complete"
product_mention: "Not included."
fact_check_status: "Passed"
qa_accuracy: 9
qa_safety: 9
qa_beginner_clarity: 9
qa_educational_value: 9
qa_structure: 9
qa_seo: 9
qa_visual_learning: 9
qa_interactive_learning: 9
qa_internal_linking: 9
qa_proplogai_alignment: 9
qa_total: 90
qa_decision: "PASS"
human_review_status: "Pending"
approved_revision: null
approved_revision_hash: null
approved_by: null
approved_at: null
---

# Validator fixture

This is a deterministic validator fixture with one cited test source.
'@
    $draftPath = Join-Path $testRoot 'content/drafts/validator-fixture.md'
    $validDraft | Set-Content $draftPath
    & (Join-Path $testRoot 'scripts/set-revision-hash.ps1') -Path $draftPath | Out-Null
    $validDraft = [System.IO.File]::ReadAllText($draftPath)

    $validator = Join-Path $testRoot 'scripts/validate-content.ps1'
    $validOutput = & pwsh -NoProfile -File $validator 2>&1
    if ($LASTEXITCODE -ne 0) { throw "Valid Human Review fixture was rejected:`n$($validOutput -join "`n")" }

    $invalidMarketDraft = $validDraft.Replace('market_tier: "Primary"','market_tier: "Secondary"')
    $invalidMarketDraft | Set-Content $draftPath
    $invalidMarketOutput = & pwsh -NoProfile -File $validator 2>&1
    if ($LASTEXITCODE -eq 0) { throw 'India content was incorrectly accepted as a secondary-market item.' }
    if (($invalidMarketOutput -join "`n") -notmatch 'Secondary content requires another named market and current evidence') {
        throw "Invalid secondary market failed for an unexpected reason:`n$($invalidMarketOutput -join "`n")"
    }

    $invalidDraft = $validDraft.Replace('status: "Human Review"','status: "Approved to Publish"')
    $invalidDraft = $invalidDraft.Replace('human_review_status: "Pending"','human_review_status: "Approved"')
    $invalidDraft = $invalidDraft.Replace('approved_revision: null','approved_revision: 1')
    $invalidDraft = $invalidDraft.Replace('approved_revision_hash: null','approved_revision_hash: "abc123"')
    $invalidDraft = $invalidDraft.Replace('approved_by: null','approved_by: "Codex"')
    $invalidDraft = $invalidDraft.Replace('approved_at: null','approved_at: "2026-09-22T12:00:00+05:30"')
    $invalidDraft | Set-Content $draftPath

    $invalidOutput = & pwsh -NoProfile -File $validator 2>&1
    if ($LASTEXITCODE -eq 0) { throw 'AI-authored approval fixture was incorrectly accepted.' }
    if (($invalidOutput -join "`n") -notmatch 'approved_by must identify a human reviewer') {
        throw "AI approval failed for an unexpected reason:`n$($invalidOutput -join "`n")"
    }

    Write-Host 'VALIDATION GUARD TESTS PASSED' -ForegroundColor Green
    Write-Host 'Accepted a valid Human Review fixture and rejected invalid secondary-market and AI-authored publication states.'
}
finally {
    if (Test-Path $testRoot) { Remove-Item -LiteralPath $testRoot -Recurse -Force }
}
