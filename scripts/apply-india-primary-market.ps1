[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$seoPath = Join-Path $root 'content-map/seo-article-register.csv'
$opportunityPath = Join-Path $root 'content-map/future-content-opportunities-2026-09-24.csv'
$historyDir = Join-Path $root 'content-map/keyword-research/historical'
New-Item -ItemType Directory -Path $historyDir -Force | Out-Null

$metrics = @{
    'trading journal' = @('8100','37','0.03'); 'free trading journal' = @('480','31','0.15')
    'trading journal template' = @('480','20','0'); 'what is a trading journal' = @('20','5','0')
    'trading psychology' = @('2900','38','0.05'); 'trading discipline' = @('720','41','0.01')
    'prop firm rules' = @('40','15','0'); 'prop firm drawdown' = @('10','13','0')
    'position sizing' = @('590','45','0'); 'forex position sizing calculator' = @('10','5','0')
    'profit factor' = @('170','18','0'); 'what is profit factor in trading' = @('90','5','0')
    'trading expectancy' = @('70','18','0'); 'trading expectancy calculator' = @('30','13','0')
    'prop firm expenses' = @('0','12','0'); 'prop firm payout' = @('170','16','1.12')
}
$indiaPages = @{
    'https://proplogai.com/blogs/forex-journal-funded-accounts' = @('prop firm trading journal','0','2','0%','73.5')
    'https://proplogai.com/blogs/prop-firm-consistency-calculator' = @('consistency calculator','0','2','0%','47.5')
    'https://proplogai.com/glossary/consistency-rule' = @('40 consistency rule','0','1','0%','84.0')
    'https://proplogai.com/glossary/drawdown' = @('drawdown limit','0','1','0%','74.0')
    'https://proplogai.com/glossary/overtrading' = @('overtrading','0','19','0%','90.4')
}

$seo = @(Import-Csv $seoPath)
$usHistoryPath = Join-Path $historyDir 'seo-register-us-metrics-2026-09-24.csv'
if (-not (Test-Path $usHistoryPath)) {
    $seo | Where-Object { $_.keyword_volume_us -ne '' -or $_.keyword_sd_us -ne '' -or $_.keyword_cpc_usd -ne '' } |
        Select-Object item_id,url,primary_keyword,keyword_market,keyword_volume_us,keyword_sd_us,keyword_cpc_usd,keyword_checked_on |
        Export-Csv $usHistoryPath -NoTypeInformation -Encoding utf8
}
$globalGscPath = Join-Path $historyDir 'seo-register-global-gsc-2026-09-20.csv'
if (-not (Test-Path $globalGscPath)) {
    $seo | Where-Object { $_.gsc_impressions_period -ne '' } |
        Select-Object item_id,url,gsc_top_query,gsc_clicks_period,gsc_impressions_period,gsc_ctr_percent_period,gsc_avg_position_period,gsc_period,last_gsc_refresh |
        Export-Csv $globalGscPath -NoTypeInformation -Encoding utf8
}

$converted = foreach ($row in $seo) {
    $metric = if ($metrics.ContainsKey($row.primary_keyword)) { $metrics[$row.primary_keyword] } else { @('','','') }
    $gsc = if ($indiaPages.ContainsKey($row.url)) { $indiaPages[$row.url] } else { @('','','','','') }
    $hasMetric = $metric[0] -ne ''; $hasGsc = $gsc[2] -ne ''
    $evidence = if ($hasMetric -and $hasGsc) { 'GSC India + current search review' } elseif ($hasMetric) { 'Current search review' } elseif ($hasGsc) { 'GSC India' } else { 'Editorial hypothesis' }
    [pscustomobject][ordered]@{
        item_id=$row.item_id; title=$row.title; url=$row.url; content_status=$row.content_status; canonical_url=$row.canonical_url
        category=$row.category; primary_keyword=$row.primary_keyword; supporting_keywords=$(if ($row.item_id -eq 'proplogai-2026-09-24-trading-journal-template') { 'trading journal template excel | trading journal excel free download india | trading journal template google sheets | trading journal examples' } else { $row.supporting_keywords }); search_intent=$row.search_intent
        content_role=$row.content_role; topic_cluster=$row.topic_cluster; pillar_url=$row.pillar_url; pillar_status=$row.pillar_status
        paired_content_urls=$row.paired_content_urls; keyword_evidence=$evidence; keyword_market='India / English'; market_tier='Primary'; market_rationale="PropLogAI's primary audience is India."
        keyword_volume=$metric[0]; keyword_sd=$metric[1]; keyword_cpc_usd=$metric[2]; keyword_checked_on='2026-09-24'
        canonical_action=$row.canonical_action; gsc_market=$(if ($hasGsc) { 'India' } else { '' }); gsc_top_query=$gsc[0]
        gsc_clicks_period=$gsc[1]; gsc_impressions_period=$gsc[2]; gsc_ctr_percent_period=$gsc[3]; gsc_avg_position_period=$gsc[4]
        gsc_period=$(if ($hasGsc) { '2026-07-06/2026-09-17' } else { '' }); priority=$row.priority; last_content_review=$row.last_content_review
        last_gsc_refresh=$(if ($hasGsc) { '2026-09-24' } else { '' })
        notes=$(if ($row.notes -match 'India is the primary market') { $row.notes } else { (($row.notes.TrimEnd('.') + '. India is the primary market; earlier US keyword and global GSC data are historical evidence only.').TrimStart('. ')) })
    }
}
$converted | Sort-Object url | Export-Csv $seoPath -NoTypeInformation -Encoding utf8

$opportunities = @(Import-Csv $opportunityPath)
$convertedOpportunities = foreach ($row in $opportunities) {
    $metric = if ($metrics.ContainsKey($row.primary_keyword)) { $metrics[$row.primary_keyword] } else { @('','','') }
    $indiaGscIds = @('G1-001','G1-002','G1-003','G1-005')
    $evidence = if ($row.opportunity_id -in $indiaGscIds -and $metric[0] -ne '') { 'GSC India + current search review' } elseif ($row.opportunity_id -in $indiaGscIds) { 'GSC India' } elseif ($metric[0] -ne '') { 'Current search review India' } else { 'Editorial hypothesis' }
    $signal = switch ($row.opportunity_id) {
        'G1-001' { '19 visible India impressions across overtrading query variants; glossary page has 19 India impressions' }
        'G1-002' { '3 visible India query impressions; calculator page has 2 India impressions' }
        'G1-003' { '1 visible India impression for drawdown limit and the drawdown glossary page' }
        'G1-005' { '2 India impressions for prop firm trading journal currently land on the funded-account article' }
        default { '' }
    }
    $status = if ($row.opportunity_id -eq 'G1-007') { 'Human Review' } elseif ($row.evidence_source -match 'GSC|Current search review' -and $evidence -eq 'Editorial hypothesis') { 'Reassess after India evidence' } else { $row.status }
    [pscustomobject][ordered]@{
        opportunity_id=$row.opportunity_id; priority=$row.priority; action=$row.action; content_type=$row.content_type; proposed_url=$row.proposed_url
        category=$row.category; topic_cluster=$row.topic_cluster; primary_keyword=$row.primary_keyword; supporting_keywords=$(if ($row.opportunity_id -eq 'G1-007') { 'trading journal template excel | trading journal excel free download india | trading journal template google sheets | trading journal examples' } else { $row.supporting_keywords })
        search_intent=$row.search_intent; evidence_source=$evidence; target_market='India / English'; market_tier='Primary'; market_rationale="PropLogAI's primary audience is India."; monthly_volume=$metric[0]
        seo_difficulty=$metric[1]; cpc_usd=$metric[2]; gsc_signal=$signal; canonical_owner_or_overlap=$row.canonical_owner_or_overlap
        required_internal_links=$row.required_internal_links; source_risk=$row.source_risk; status=$status
        reason=$(if ($row.opportunity_id -eq 'G1-007') { 'India revision 2 uses live India SERP and keyword evidence and awaits human review' } else { $row.reason })
    }
}
$convertedOpportunities | Export-Csv $opportunityPath -NoTypeInformation -Encoding utf8
Write-Host "Applied India-primary market model to $($converted.Count) SEO rows and $($convertedOpportunities.Count) opportunities."
