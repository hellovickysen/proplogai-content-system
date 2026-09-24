[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$today = (Get-Date).Date
$dateFormat = 'yyyy-MM-dd'
$culture = [System.Globalization.CultureInfo]::InvariantCulture

$contracts = @(
    @{
        Path = 'content-map/source-registers/proplogai-feature-claims.csv'
        Id = 'claim_id'
        Headers = @('claim_id','status','feature','approved_wording','source_url','source_type','owner','checked_on','review_by','prohibited_or_outdated_wording','notes')
        Allowed = @('Approved','Needs Fact Check','Prohibited')
        Usable = @('Approved')
    },
    @{
        Path = 'content-map/source-registers/prop-firm-rules.csv'
        Id = 'rule_id'
        Headers = @('rule_id','status','firm','program','rule','approved_wording','official_source_url','checked_on','review_by','scope_and_limitation')
        Allowed = @('Verified','Needs Fact Check','Prohibited')
        Usable = @('Verified')
    },
    @{
        Path = 'content-map/source-registers/general-research.csv'
        Id = 'research_id'
        Headers = @('research_id','status','claim','approved_paraphrase','source_url','publisher','publication_date','checked_on','review_by','scope_and_limitation')
        Allowed = @('Approved','Needs Fact Check','Prohibited')
        Usable = @('Approved')
    }
)

$rowCount = 0
foreach ($contract in $contracts) {
    $path = Join-Path $root $contract.Path
    if (-not (Test-Path -LiteralPath $path)) { throw "Missing source register: $($contract.Path)" }

    $header = Get-Content -LiteralPath $path -TotalCount 1
    if (($contract.Headers -join ',') -ne $header) {
        throw "Unexpected headers in $($contract.Path)."
    }

    $rows = @(Import-Csv -LiteralPath $path)
    $rowCount += $rows.Count
    $duplicates = @($rows | Group-Object -Property $contract.Id | Where-Object { -not $_.Name -or $_.Count -gt 1 })
    if ($duplicates.Count -gt 0) { throw "Missing or duplicate IDs in $($contract.Path)." }

    foreach ($row in $rows) {
        $id = $row.($contract.Id)
        if ($row.status -notin $contract.Allowed) { throw "Invalid status for ${id}: $($row.status)" }

        $checked = [DateTime]::MinValue
        $review = [DateTime]::MinValue
        if (-not [DateTime]::TryParseExact($row.checked_on, $dateFormat, $culture, [Globalization.DateTimeStyles]::None, [ref]$checked)) {
            throw "Invalid checked_on date for $id."
        }
        if (-not [DateTime]::TryParseExact($row.review_by, $dateFormat, $culture, [Globalization.DateTimeStyles]::None, [ref]$review)) {
            throw "Invalid review_by date for $id."
        }
        if ($review -lt $checked) { throw "review_by precedes checked_on for $id." }

        $url = if ($row.PSObject.Properties.Name -contains 'official_source_url') { $row.official_source_url } else { $row.source_url }
        if ($url -and $url -notmatch '^https://') { throw "Source URL must use HTTPS for $id." }
        if ($row.status -in $contract.Usable) {
            if (-not $url) { throw "Usable claim $id requires a source URL." }
            if ($review.Date -lt $today) { throw "Usable claim $id expired on $($row.review_by)." }
        }
    }
}

Write-Host "Source-register validation passed. Registers: $($contracts.Count); rows: $rowCount."
