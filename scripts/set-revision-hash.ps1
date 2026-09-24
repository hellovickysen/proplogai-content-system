[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$Path
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$fullPath = if ([System.IO.Path]::IsPathRooted($Path)) { $Path } else { Join-Path $root $Path }
if (-not (Test-Path -LiteralPath $fullPath -PathType Leaf)) { throw "Draft not found: $fullPath" }

function Get-RevisionHash([string]$Raw) {
    $canonical = $Raw -replace "`r`n", "`n" -replace "`r", "`n"
    $canonical = $canonical.TrimEnd([char]10)
    $workflowFields = @(
        'revision_hash','status','fact_check_status',
        'qa_accuracy','qa_safety','qa_beginner_clarity','qa_educational_value','qa_structure','qa_seo',
        'qa_visual_learning','qa_interactive_learning','qa_internal_linking','qa_proplogai_alignment','qa_total','qa_decision',
        'human_review_status','approved_revision','approved_revision_hash','approved_by','approved_at'
    )
    foreach ($field in $workflowFields) {
        $pattern = '(?m)^' + [regex]::Escape($field) + ':\s*.*$'
        $canonical = [regex]::Replace($canonical, $pattern, "${field}: <workflow>")
    }
    $bytes = [System.Text.UTF8Encoding]::new($false).GetBytes($canonical)
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try { return ([Convert]::ToHexString($sha.ComputeHash($bytes))).ToLowerInvariant() }
    finally { $sha.Dispose() }
}

$raw = [System.IO.File]::ReadAllText($fullPath) -replace "`r`n", "`n" -replace "`r", "`n"
if ($raw -notmatch '(?m)^revision_hash:\s*.*$') { throw 'Draft is missing revision_hash.' }
if ($raw -notmatch '(?m)^item_id:\s*["'']?([^"''\r\n]+)') { throw 'Draft is missing item_id.' }
$itemId = $matches[1].Trim()
if ($raw -notmatch '(?m)^revision:\s*["'']?(\d+)') { throw 'Draft is missing a numeric revision.' }
$revision = $matches[1]
if ($raw -notmatch '(?m)^status:\s*["'']?([^"''\r\n]+)') { throw 'Draft is missing status.' }
$status = $matches[1].Trim()

$hash = Get-RevisionHash $raw
$updated = [regex]::Replace($raw, '(?m)^revision_hash:\s*.*$', "revision_hash: `"$hash`"")
[System.IO.File]::WriteAllText($fullPath, $updated, [System.Text.UTF8Encoding]::new($false))

$queuePath = Join-Path $root 'automation/queue.csv'
if (Test-Path -LiteralPath $queuePath) {
    $queue = @(Import-Csv -LiteralPath $queuePath)
    $row = @($queue | Where-Object item_id -eq $itemId)
    if ($row.Count -eq 1) {
        $row[0].revision = $revision
        $row[0].revision_hash = $hash
        $row[0].status = $status
        $queue | Export-Csv -LiteralPath $queuePath -NoTypeInformation -Encoding utf8
    }
}

Write-Host "$itemId revision $revision hash: $hash"
