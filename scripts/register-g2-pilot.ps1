[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$seoPath = Join-Path $root 'content-map/seo-article-register.csv'
$linkPath = Join-Path $root 'content-map/internal-link-register.csv'
$queuePath = Join-Path $root 'automation/queue.csv'
$itemId = 'proplogai-2026-09-24-trading-journal-template'
$url = 'https://proplogai.com/blogs/trading-journal-template'

$seoRows = @(Import-Csv $seoPath)
if (@($seoRows | Where-Object item_id -eq $itemId).Count -eq 0) {
    $seoRows += [pscustomobject][ordered]@{
        item_id = $itemId
        title = 'Trading Journal Template for Prop Firm Traders'
        url = $url
        content_status = 'draft'
        canonical_url = $url
        category = 'Journaling'
        primary_keyword = 'trading journal template'
        supporting_keywords = 'free trading journal template | trading journal format | trading journal example'
        search_intent = 'Informational template'
        content_role = 'Template'
        topic_cluster = 'Trading Journaling and Reviews'
        pillar_url = 'https://proplogai.com/blogs/prop-firm-trading-journal'
        pillar_status = 'Current'
        paired_content_urls = 'https://proplogai.com/glossary/trading-journal | https://proplogai.com/blogs/trading-journal-fields'
        keyword_evidence = 'Current search review'
        keyword_market = 'India / English'
        market_tier = 'Primary'
        market_rationale = "PropLogAI's primary audience is India."
        keyword_volume = '480'
        keyword_sd = '20'
        keyword_cpc_usd = '0'
        keyword_checked_on = '2026-09-24'
        canonical_action = 'create'
        gsc_market = ''
        gsc_top_query = ''
        gsc_clicks_period = ''
        gsc_impressions_period = ''
        gsc_ctr_percent_period = ''
        gsc_avg_position_period = ''
        gsc_period = ''
        priority = 'P1'
        last_content_review = '2026-09-24'
        last_gsc_refresh = ''
        notes = 'Batch G2 supervised pilot; approved brief; stop at Human Review.'
    }
}
$pilotSeo = @($seoRows | Where-Object item_id -eq $itemId)[0]
$pilotSeo.content_status = 'human_review'
$pilotSeo.supporting_keywords = 'trading journal template excel | trading journal excel free download india | trading journal template google sheets | trading journal examples'
$pilotSeo.keyword_evidence = 'Current search review'
$pilotSeo.keyword_market = 'India / English'
$pilotSeo.market_tier = 'Primary'
$pilotSeo.market_rationale = "PropLogAI's primary audience is India."
$pilotSeo.keyword_volume = '480'
$pilotSeo.keyword_sd = '20'
$pilotSeo.keyword_cpc_usd = '0'
$pilotSeo.keyword_checked_on = '2026-09-24'
$pilotSeo.last_content_review = '2026-09-24'
$seoRows | Sort-Object url | Export-Csv $seoPath -NoTypeInformation -Encoding utf8

$links = @(Import-Csv $linkPath)
function Add-Link([string]$SourceUrl,[string]$TargetUrl,[string]$Anchor,[string]$Relationship,[string]$Context) {
    $source = @($seoRows | Where-Object url -eq $SourceUrl)
    $target = @($seoRows | Where-Object url -eq $TargetUrl)
    if ($source.Count -ne 1 -or $target.Count -ne 1) { throw "Cannot register link $SourceUrl -> $TargetUrl" }
    $keyExists = @($links | Where-Object { $_.source_item_id -eq $source[0].item_id -and $_.target_url -eq $TargetUrl }).Count -gt 0
    if ($keyExists) { return }
    $script:links += [pscustomobject][ordered]@{
        source_item_id = $source[0].item_id
        source_url = $SourceUrl
        source_primary_keyword = $source[0].primary_keyword
        target_item_id = $target[0].item_id
        target_url = $TargetUrl
        target_primary_keyword = $target[0].primary_keyword
        anchor_text = $Anchor
        link_context = $Context
        relationship = $Relationship
        status = 'planned'
        destination_quality_status = 'audited_live_page'
        destination_http_status = '200'
        destination_canonical_url = $TargetUrl
        last_verified = '2026-09-24'
        reason_or_follow_up = 'Batch G2 pilot link plan; verify exact placement in the relevant revision.'
    }
}

Add-Link $url 'https://proplogai.com/blogs/prop-firm-trading-journal' 'prop firm trading journal' 'cluster_to_pillar' 'Use when explaining the wider journaling system.'
Add-Link $url 'https://proplogai.com/blogs/trading-journal-fields' 'trading journal fields' 'supporting_blog' 'Use when the reader needs a deeper field-selection guide.'
Add-Link $url 'https://proplogai.com/glossary/trading-journal' 'trading journal' 'blog_to_glossary' 'Use on the first useful definition reference.'
Add-Link $url 'https://proplogai.com/glossary/trade-review' 'trade review' 'blog_to_glossary' 'Use when explaining the post-trade review step.'
Add-Link $url 'https://proplogai.com/glossary/setup-compliance' 'setup compliance' 'blog_to_glossary' 'Use when explaining rule and setup adherence.'
Add-Link $url 'https://proplogai.com/blogs/weekly-trading-review-template' 'weekly trading review template' 'supporting_blog' 'Use when moving from one trade entry to a weekly review.'
Add-Link $url 'https://proplogai.com/blogs/monthly-trading-review-template' 'monthly trading review template' 'supporting_blog' 'Use when distinguishing a monthly review from a weekly review.'
Add-Link 'https://proplogai.com/blogs/prop-firm-trading-journal' $url 'trading journal template' 'pillar_to_cluster' 'Add beside the existing simple-template section after this page is approved for release.'
Add-Link 'https://proplogai.com/blogs/trading-journal-fields' $url 'copyable trading journal template' 'supporting_blog' 'Add after the field list when the reader is ready to use the fields.'
Add-Link 'https://proplogai.com/glossary/trading-journal' $url 'trading journal template' 'glossary_to_blog' 'Add as the practical next step after the definition.'
$draftTargets = @(
    'https://proplogai.com/blogs/prop-firm-trading-journal',
    'https://proplogai.com/blogs/trading-journal-fields',
    'https://proplogai.com/glossary/trading-journal',
    'https://proplogai.com/glossary/trade-review',
    'https://proplogai.com/glossary/setup-compliance',
    'https://proplogai.com/blogs/weekly-trading-review-template',
    'https://proplogai.com/blogs/monthly-trading-review-template'
)
foreach ($link in @($links | Where-Object { $_.source_item_id -eq $itemId -and $_.target_url -in $draftTargets })) {
    $link.status = 'verified_in_draft'
    $link.reason_or_follow_up = 'Verified in revision 1 of the Batch G2 Human Review draft.'
}
$links | Sort-Object source_url,target_url | Export-Csv $linkPath -NoTypeInformation -Encoding utf8

$queue = @(Import-Csv $queuePath)
if (@($queue | Where-Object item_id -eq $itemId).Count -eq 0) {
    $queue += [pscustomobject][ordered]@{
        item_id = $itemId
        content_type = 'blog'
        status = 'Ready for Production'
        priority = 'P1'
        title = 'Trading Journal Template for Prop Firm Traders'
        slug = 'trading-journal-template'
        brief_path = 'content/briefs/blogs/trading-journal-template.md'
        draft_path = 'content/drafts/blogs/trading-journal-template.md'
        revision = '1'
        revision_hash = ''
        source_ready = 'true'
        human_approver = ''
        updated_at = '2026-09-24'
        error = ''
    }
}
$pilotQueue = @($queue | Where-Object item_id -eq $itemId)[0]
$pilotQueue.status = 'Human Review'
$pilotQueue.revision = '1'
$pilotQueue.updated_at = '2026-09-24'
$queue | Export-Csv $queuePath -NoTypeInformation -Encoding utf8

Write-Host "Registered Batch G2 pilot: $itemId"
