[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$inventory = @(Import-Csv (Join-Path $root 'content-map/live-inventory.csv'))
$gscPages = @(Import-Csv (Join-Path $root 'content-map/gsc/gsc-page-performance-2026-09-20.csv'))
$gscMap = @(Import-Csv (Join-Path $root 'content-map/gsc/gsc-query-page-map-2026-09-20.csv'))
$output = Join-Path $root 'content-map/seo-article-register.csv'
$existingRows = if (Test-Path $output) { @(Import-Csv $output) } else { @() }

function Get-Slug([string]$Url) {
    $uri = [uri]$Url
    $slug = $uri.AbsolutePath.Trim('/').Split('/')[-1]
    if ([string]::IsNullOrWhiteSpace($slug)) { return 'home' }
    return $slug
}

function Get-ExistingValue($Row, [string]$Name, [string]$Fallback = '') {
    if ($null -ne $Row -and $Row.PSObject.Properties.Name -contains $Name) {
        $value = [string]$Row.$Name
        if (-not [string]::IsNullOrWhiteSpace($value)) { return $value }
    }
    return $Fallback
}

$rows = foreach ($item in $inventory) {
    $slug = Get-Slug $item.url
    $type = if ($item.content_type -like 'blog*') { 'blog' } else { 'glossary' }
    $page = @($gscPages | Where-Object page -eq $item.url | Select-Object -First 1)
    $query = @($gscMap | Where-Object landing_page -eq $item.url | Sort-Object {[int]$_.page_impressions_for_query} -Descending | Select-Object -First 1)
    $existing = @($existingRows | Where-Object url -eq $item.url | Select-Object -First 1)
    $existing = if ($existing.Count) { $existing[0] } else { $null }
    $action = 'keep'
    if ($slug -eq 'trading-journal-benefits') { $action = 'consolidate_proposal' }
    elseif ($slug -in @('trading-emotions-account-killer','prop-firm-expense-tracking-guide')) { $action = 'refresh' }

    [pscustomobject]@{
        item_id = "proplogai-live-$type-$slug"
        title = $item.title
        url = $item.url
        content_status = $item.status
        canonical_url = $item.url
        category = Get-ExistingValue $existing 'category' $item.category
        primary_keyword = Get-ExistingValue $existing 'primary_keyword' $item.primary_topic
        supporting_keywords = Get-ExistingValue $existing 'supporting_keywords'
        search_intent = Get-ExistingValue $existing 'search_intent' $item.primary_intent
        content_role = Get-ExistingValue $existing 'content_role' $item.content_role
        topic_cluster = Get-ExistingValue $existing 'topic_cluster' $item.category
        pillar_url = Get-ExistingValue $existing 'pillar_url'
        pillar_status = Get-ExistingValue $existing 'pillar_status' 'Unassigned'
        paired_content_urls = Get-ExistingValue $existing 'paired_content_urls'
        keyword_evidence = Get-ExistingValue $existing 'keyword_evidence' 'Editorial hypothesis'
        keyword_market = Get-ExistingValue $existing 'keyword_market' 'India / English'
        market_tier = Get-ExistingValue $existing 'market_tier' 'Primary'
        market_rationale = Get-ExistingValue $existing 'market_rationale' "PropLogAI's primary audience is India."
        keyword_volume = Get-ExistingValue $existing 'keyword_volume'
        keyword_sd = Get-ExistingValue $existing 'keyword_sd'
        keyword_cpc_usd = Get-ExistingValue $existing 'keyword_cpc_usd'
        keyword_checked_on = Get-ExistingValue $existing 'keyword_checked_on'
        canonical_action = Get-ExistingValue $existing 'canonical_action' $action
        gsc_market = Get-ExistingValue $existing 'gsc_market'
        gsc_top_query = Get-ExistingValue $existing 'gsc_top_query'
        gsc_clicks_period = Get-ExistingValue $existing 'gsc_clicks_period'
        gsc_impressions_period = Get-ExistingValue $existing 'gsc_impressions_period'
        gsc_ctr_percent_period = Get-ExistingValue $existing 'gsc_ctr_percent_period'
        gsc_avg_position_period = Get-ExistingValue $existing 'gsc_avg_position_period'
        gsc_period = Get-ExistingValue $existing 'gsc_period'
        priority = Get-ExistingValue $existing 'priority' $item.audit_priority
        last_content_review = Get-ExistingValue $existing 'last_content_review' '2026-09-24'
        last_gsc_refresh = Get-ExistingValue $existing 'last_gsc_refresh'
        notes = Get-ExistingValue $existing 'notes' 'Seeded from dated live inventory; refresh crawl and GSC before time-sensitive decisions.'
    }
}

$inventoryUrls = @($inventory.url)
$plannedOrDraftRows = @($existingRows | Where-Object { $_.url -notin $inventoryUrls })
$allRows = @($rows) + $plannedOrDraftRows
$allRows | Sort-Object url | Export-Csv -LiteralPath $output -NoTypeInformation -Encoding utf8
Write-Host "SEO portfolio register built: $($allRows.Count) rows ($($rows.Count) live inventory; $($plannedOrDraftRows.Count) planned/draft)."
