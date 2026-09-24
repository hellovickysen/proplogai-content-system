[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidateSet('blog','glossary')]
    [string]$ContentType,

    [Parameter(Mandatory)]
    [ValidatePattern('^[a-z0-9][a-z0-9-]+$')]
    [string]$Slug,

    [Parameter(Mandatory)]
    [ValidatePattern('^[A-Z0-9-]+$')]
    [string]$ItemId,

    [string]$Date = (Get-Date -Format 'yyyy-MM-dd')
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$briefTemplate = if ($ContentType -eq 'blog') { 'templates/blog-brief.md' } else { 'templates/glossary-brief.md' }
$briefSubfolder = if ($ContentType -eq 'blog') { 'blogs' } else { 'glossary' }
$briefFolder = Join-Path $root "content/briefs/$briefSubfolder"
$target = Join-Path $briefFolder "$Date-$Slug.md"

if (Test-Path -LiteralPath $target) {
    throw "Brief already exists: $target"
}

$content = Get-Content -Raw -LiteralPath (Join-Path $root $briefTemplate)
$content = $content -replace '(?m)^- Item ID:\s*$', "- Item ID: $ItemId"
Set-Content -LiteralPath $target -Value $content -Encoding utf8NoBOM
Write-Host "Created $target"
