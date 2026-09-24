[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$queryPath = Join-Path $root 'content-map/gsc/gsc-query-performance-2026-09-20.csv'
$pagePath = Join-Path $root 'content-map/gsc/gsc-page-performance-2026-09-20.csv'
$mapPath = Join-Path $root 'content-map/gsc/gsc-query-page-map-2026-09-20.csv'
$indiaQueryPath = Join-Path $root 'content-map/gsc/gsc-india-query-performance-2026-09-24.csv'
$indiaPagePath = Join-Path $root 'content-map/gsc/gsc-india-page-performance-2026-09-24.csv'

foreach ($path in @($queryPath, $pagePath, $mapPath, $indiaQueryPath, $indiaPagePath)) {
    if (-not (Test-Path -LiteralPath $path)) { throw "Missing GSC snapshot file: $path" }
}

$queries = @(Import-Csv -LiteralPath $queryPath)
$pages = @(Import-Csv -LiteralPath $pagePath)
$map = @(Import-Csv -LiteralPath $mapPath)
$indiaQueries = @(Import-Csv -LiteralPath $indiaQueryPath)
$indiaPages = @(Import-Csv -LiteralPath $indiaPagePath)

if ($queries.Count -ne 58) { throw "Expected 58 GSC query rows, found $($queries.Count)." }
if ($pages.Count -ne 43) { throw "Expected 43 GSC page rows, found $($pages.Count)." }
if ($map.Count -lt 10) { throw "GSC query-page map is unexpectedly small." }
if ($indiaQueries.Count -ne 10) { throw "Expected 10 India GSC query rows, found $($indiaQueries.Count)." }
if ($indiaPages.Count -ne 5) { throw "Expected 5 India GSC page rows, found $($indiaPages.Count)." }

$queryImpressions = ($queries | Measure-Object -Property impressions -Sum).Sum
$pageImpressions = ($pages | Measure-Object -Property impressions -Sum).Sum
$pageClicks = ($pages | Measure-Object -Property clicks -Sum).Sum
if ($queryImpressions -ne 191) { throw "Expected 191 visible query impressions, found $queryImpressions." }
if ($pageImpressions -ne 517) { throw "Expected 517 page-row impressions, found $pageImpressions." }
if ($pageClicks -ne 3) { throw "Expected 3 page-row clicks, found $pageClicks." }

if (@($queries | Group-Object query | Where-Object Count -gt 1).Count -gt 0) { throw 'Duplicate query rows in GSC snapshot.' }
if (@($pages | Group-Object page | Where-Object Count -gt 1).Count -gt 0) { throw 'Duplicate exact page rows in GSC snapshot.' }

foreach ($row in @($queries) + @($pages)) {
    if ($row.range_start -ne '2026-07-06' -or $row.range_end -ne '2026-09-17' -or $row.search_type -ne 'Web') {
        throw 'GSC snapshot scope is inconsistent.'
    }
    if ([int]$row.clicks -lt 0 -or [int]$row.impressions -lt 0 -or [double]$row.position -lt 0) {
        throw 'GSC snapshot contains an invalid metric.'
    }
    if ($row.ctr -notmatch '^\d+(\.\d+)?%$') { throw 'GSC snapshot contains an invalid CTR.' }
}

foreach ($row in $pages) {
    if ($row.page -notmatch '^https://proplogai\.com/') { throw "Unexpected page property: $($row.page)" }
}

foreach ($row in @($indiaQueries) + @($indiaPages)) {
    if ($row.country -ne 'India' -or $row.range_start -ne '2026-07-06' -or $row.range_end -ne '2026-09-17' -or $row.search_type -ne 'Web') {
        throw 'India GSC snapshot scope is inconsistent.'
    }
}
if (($indiaQueries | Measure-Object impressions -Sum).Sum -ne 25) { throw 'Expected 25 visible India query impressions.' }
if (($indiaPages | Measure-Object impressions -Sum).Sum -ne 25) { throw 'Expected 25 visible India page impressions.' }

$variantGroups = @($pages | Group-Object { $_.page.TrimEnd('/') } | Where-Object Count -gt 1)
if ($variantGroups.Count -ne 1 -or $variantGroups[0].Name -ne 'https://proplogai.com/blogs/revenge-trading-prop-firm') {
    throw 'Expected the single revenge-trading trailing-slash URL variant group.'
}
Write-Host "GSC snapshot validation passed. Global query rows: $($queries.Count); global page rows: $($pages.Count); India query rows: $($indiaQueries.Count); India page rows: $($indiaPages.Count); mapped rows: $($map.Count)."
