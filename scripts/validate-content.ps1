[CmdletBinding()]
param([switch]$CheckRemoteLinks)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$errors = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

function Error([string]$Message) { $errors.Add($Message) }
function Warn([string]$Message) { $warnings.Add($Message) }
function Clean([string]$Value) {
    $value = $Value.Trim()
    if ($value.Length -ge 2 -and (($value[0] -eq '"' -and $value[-1] -eq '"') -or ($value[0] -eq "'" -and $value[-1] -eq "'"))) {
        return $value.Substring(1, $value.Length - 2)
    }
    return $value
}
function Is-Null([string]$Value) { [string]::IsNullOrWhiteSpace($Value) -or $Value -in @('null','~') }
function Array-Values([string]$Value) {
    if ([string]::IsNullOrWhiteSpace($Value) -or $Value.Trim() -eq '[]') { return @() }
    return @(($Value.Trim() -replace '^\[|\]$','') -split ',' | ForEach-Object { (Clean $_).Trim() } | Where-Object { $_ })
}
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
function Read-Record([System.IO.FileInfo]$File, [string]$Kind) {
    $lines = @(Get-Content -LiteralPath $File.FullName)
    $relative = $File.FullName.Substring($root.Length + 1)
    if ($lines.Count -lt 3 -or $lines[0].Trim() -ne '---') { Error "${relative}: missing YAML front matter"; return $null }
    $closing = -1
    for ($i = 1; $i -lt $lines.Count; $i++) { if ($lines[$i].Trim() -eq '---') { $closing = $i; break } }
    if ($closing -lt 2) { Error "${relative}: YAML front matter is not closed"; return $null }
    $meta = @{}
    for ($i = 1; $i -lt $closing; $i++) {
        if ($lines[$i] -match '^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$') { $meta[$matches[1]] = Clean $matches[2] }
    }
    $body = if ($closing -lt $lines.Count - 1) { @($lines[($closing + 1)..($lines.Count - 1)]) } else { @() }
    [pscustomobject]@{ Path=$relative; FullPath=$File.FullName; Kind=$Kind; Meta=$meta; Body=$body; Raw=($lines -join "`n") }
}
function Require($Record, [string[]]$Fields) {
    foreach ($field in $Fields) { if (-not $Record.Meta.ContainsKey($field)) { Error "$($Record.Path): missing required field '$field'" } }
}

$briefFields = @('item_id','revision','title','status','content_type','content_role','topic_cluster','primary_keyword','supporting_keywords','search_intent','target_reader','keyword_evidence','keyword_market','market_tier','market_rationale','cannibalisation_status','canonical_url','pillar_url','product_mention_required','source_ids','updated_at','brief_approved_by','brief_approved_at')
$draftFields = @('item_id','revision','revision_hash','title','status','content_type','content_role','topic_cluster','primary_keyword','supporting_keywords','search_intent','target_reader','keyword_evidence','keyword_market','market_tier','market_rationale','cannibalisation_status','canonical_url','pillar_url','seo_title','meta_description','slug','author','last_updated','source_checked','source_ids','sources','internal_link_status','internal_links','seo_register_status','internal_link_register_status','product_mention','fact_check_status','qa_accuracy','qa_safety','qa_beginner_clarity','qa_educational_value','qa_structure','qa_seo','qa_visual_learning','qa_interactive_learning','qa_internal_linking','qa_proplogai_alignment','qa_total','qa_decision','human_review_status','approved_revision','approved_revision_hash','approved_by','approved_at')
$statuses = @('Idea','Brief Approved','Ready for Production','Draft Generated','AI QA','Human Review','Changes Requested','Approved to Publish','Published','Needs Fact Check','Blocked','Generation Failed','Publishing Failed')
$qaStatuses = @('Pending','PASS','FAIL')
$factStatuses = @('Pending','Passed','Needs Review','Failed')
$humanStatuses = @('Pending','Changes Requested','Approved','Blocked')
$keywordEvidenceValues = @('GSC India','Current search review','Editorial hypothesis')
$scoreFields = @('qa_accuracy','qa_safety','qa_beginner_clarity','qa_educational_value','qa_structure','qa_seo','qa_visual_learning','qa_interactive_learning','qa_internal_linking','qa_proplogai_alignment')

$records = @()
foreach ($kind in @('brief','draft')) {
    $contentFolder = if ($kind -eq 'brief') { 'content\briefs' } else { 'content\drafts' }
    $dir = Join-Path $root $contentFolder
    Get-ChildItem -LiteralPath $dir -Recurse -File -Filter '*.md' | Where-Object Name -ne 'README.md' | ForEach-Object {
        $record = Read-Record $_ $kind
        if ($null -ne $record) { $records += $record }
    }
}

$sourceRows = @()
foreach ($file in Get-ChildItem (Join-Path $root 'content-map\source-registers') -File -Filter '*.csv') {
    foreach ($row in @(Import-Csv $file.FullName)) {
        $id = @($row.claim_id,$row.rule_id,$row.research_id | Where-Object { $_ })[0]
        if ($id) { $sourceRows += [pscustomobject]@{ id=$id; status=$row.status; review_by=$row.review_by; file=$file.Name } }
    }
}

foreach ($record in $records) {
    $requiredFields = if ($record.Kind -eq 'brief') { $briefFields } else { $draftFields }
    Require $record $requiredFields
    foreach ($field in @('item_id','title','status','content_type','content_role','topic_cluster','primary_keyword','search_intent','target_reader','keyword_evidence')) {
        if ((Is-Null $record.Meta[$field])) { Error "$($record.Path): '$field' must have a value" }
    }
    if ($record.Meta.item_id -notmatch '^proplogai-\d{4}-\d{2}-\d{2}-[a-z0-9-]+$') { Error "$($record.Path): invalid item_id '$($record.Meta.item_id)'" }
    if ($record.Meta.revision -notmatch '^\d+$' -or [int]$record.Meta.revision -lt 1) { Error "$($record.Path): revision must be a positive integer" }
    if ($record.Meta.status -notin $statuses) { Error "$($record.Path): unsupported status '$($record.Meta.status)'" }
    if ($record.Meta.content_type -notin @('Blog','Glossary')) { Error "$($record.Path): content_type must be Blog or Glossary" }
    if ($record.Meta.keyword_evidence -notin $keywordEvidenceValues) { Error "$($record.Path): invalid keyword_evidence '$($record.Meta.keyword_evidence)'" }
    if ($record.Meta.market_tier -notin @('Primary','Secondary')) { Error "$($record.Path): market_tier must be Primary or Secondary" }
    if (Is-Null $record.Meta.market_rationale) { Error "$($record.Path): market_rationale is required" }
    if ($record.Meta.market_tier -eq 'Primary' -and $record.Meta.keyword_market -ne 'India / English') { Error "$($record.Path): Primary content must use India / English" }
    if ($record.Meta.market_tier -eq 'Secondary' -and ($record.Meta.keyword_market -eq 'India / English' -or $record.Meta.keyword_evidence -eq 'Editorial hypothesis')) { Error "$($record.Path): Secondary content requires another named market and current evidence" }
    if ($record.Kind -eq 'brief' -and $record.Meta.product_mention_required -notin @('true','false')) { Error "$($record.Path): product_mention_required must be true or false" }
    if ($record.Kind -eq 'brief' -and $record.Meta.status -eq 'Ready for Production') {
        if ((Is-Null $record.Meta.brief_approved_by) -or $record.Meta.brief_approved_at -notmatch '^\d{4}-\d{2}-\d{2}$') { Error "$($record.Path): Ready for Production requires named human brief approval and date" }
        if ($record.Meta.brief_approved_by -match '(?i)AI|Codex|ChatGPT|assistant') { Error "$($record.Path): brief_approved_by must identify a human reviewer" }
    }
    $dateField = if ($record.Kind -eq 'brief') { 'updated_at' } else { 'last_updated' }
    if ($record.Meta[$dateField] -notmatch '^\d{4}-\d{2}-\d{2}$') { Error "$($record.Path): $dateField must use YYYY-MM-DD" }

    $recordSourceIds = @(Array-Values $record.Meta.source_ids)
    if ($recordSourceIds.Count -eq 0) { Error "$($record.Path): at least one approved source-register ID is required" }
    foreach ($sourceId in $recordSourceIds) {
        $source = @($sourceRows | Where-Object id -eq $sourceId)
        if ($source.Count -ne 1) { Error "$($record.Path): source ID '$sourceId' is missing or duplicated"; continue }
        $allowed = if ($sourceId -like 'PFR-*') { 'Verified' } else { 'Approved' }
        if ($source[0].status -ne $allowed) { Error "$($record.Path): source ID '$sourceId' must be $allowed, found $($source[0].status)" }
        if ($source[0].review_by -match '^\d{4}-\d{2}-\d{2}$' -and [datetime]$source[0].review_by -lt (Get-Date).Date) { Error "$($record.Path): source ID '$sourceId' expired on $($source[0].review_by)" }
    }

    if ($record.Kind -ne 'draft') { continue }
    if ($record.Meta.slug -notmatch '^[a-z0-9]+(?:-[a-z0-9]+)*$') { Error "$($record.Path): slug must be lowercase kebab-case" }
    if ($record.Meta.source_checked -notmatch '^\d{4}-\d{2}-\d{2}$') { Error "$($record.Path): source_checked must use YYYY-MM-DD" }
    if (-not (Is-Null $record.Meta.revision_hash)) {
        $actualHash = Get-RevisionHash $record.Raw
        if ($record.Meta.revision_hash -ne $actualHash) { Error "$($record.Path): revision_hash does not match the reviewable content" }
    }
    if ($record.Meta.fact_check_status -notin $factStatuses) { Error "$($record.Path): invalid fact_check_status" }
    if ($record.Meta.qa_decision -notin $qaStatuses) { Error "$($record.Path): invalid qa_decision" }
    if ($record.Meta.human_review_status -notin $humanStatuses) { Error "$($record.Path): invalid human_review_status" }
    if (@(Array-Values $record.Meta.sources).Count -eq 0) { Error "$($record.Path): at least one source URL is required" }
    $h1 = @($record.Body | Where-Object { $_ -match '^# ' }).Count
    if ($h1 -ne 1) { Error "$($record.Path): expected exactly one H1, found $h1" }

    if ($record.Meta.qa_decision -eq 'PASS') {
        $scores = @()
        foreach ($field in $scoreFields) {
            $number = 0.0
            if (-not [double]::TryParse($record.Meta[$field],[ref]$number) -or $number -lt 0 -or $number -gt 10) { Error "$($record.Path): $field must be 0-10 when QA passes" } else { $scores += $number }
        }
        if ($scores.Count -eq 10) {
            $sum = ($scores | Measure-Object -Sum).Sum
            if ([double]$record.Meta.qa_total -ne $sum) { Error "$($record.Path): qa_total must equal $sum" }
            if ($sum -lt 90 -or [double]$record.Meta.qa_accuracy -lt 9 -or [double]$record.Meta.qa_safety -lt 9) { Error "$($record.Path): QA PASS fails the 90/100 and Accuracy/Safety 9/10 gates" }
        }
        if ($record.Meta.fact_check_status -ne 'Passed') { Error "$($record.Path): QA cannot pass before fact-checking passes" }
    }
    if ($record.Meta.status -eq 'Human Review') {
        if ($record.Meta.qa_decision -ne 'PASS' -or $record.Meta.fact_check_status -ne 'Passed') { Error "$($record.Path): Human Review requires passed QA and fact-checking" }
        if ((Is-Null $record.Meta.revision_hash)) { Error "$($record.Path): Human Review requires the exact revision hash" }
    }
    if ($record.Meta.status -in @('Approved to Publish','Published')) {
        if ($record.Meta.qa_decision -ne 'PASS' -or $record.Meta.fact_check_status -ne 'Passed' -or $record.Meta.human_review_status -ne 'Approved') { Error "$($record.Path): approval requires passed QA, fact-checking, and human review" }
        if ((Is-Null $record.Meta.revision_hash) -or (Is-Null $record.Meta.approved_revision) -or (Is-Null $record.Meta.approved_revision_hash)) { Error "$($record.Path): approval requires current and approved revision values" }
        if ($record.Meta.approved_revision -ne $record.Meta.revision -or $record.Meta.approved_revision_hash -ne $record.Meta.revision_hash) { Error "$($record.Path): approved revision and hash must match the current revision" }
        if ((Is-Null $record.Meta.approved_by) -or (Is-Null $record.Meta.approved_at)) { Error "$($record.Path): named human approval and timestamp are required" }
        if ($record.Meta.approved_by -match '(?i)AI|Codex|ChatGPT|assistant') { Error "$($record.Path): approved_by must identify a human reviewer" }
    }
}

$briefIds = @($records | Where-Object Kind -eq 'brief' | ForEach-Object { $_.Meta.item_id })
foreach ($draft in @($records | Where-Object Kind -eq 'draft')) { if ($draft.Meta.item_id -notin $briefIds) { Error "$($draft.Path): no matching brief" } }
foreach ($group in @($records | Where-Object Kind -eq 'draft' | Group-Object { $_.Meta.slug } | Where-Object Count -gt 1)) { Error "Duplicate draft slug '$($group.Name)'" }

$seoPath = Join-Path $root 'content-map\seo-article-register.csv'
$linkPath = Join-Path $root 'content-map\internal-link-register.csv'
$seoRequired = @('item_id','title','url','content_status','canonical_url','category','primary_keyword','supporting_keywords','search_intent','content_role','topic_cluster','pillar_url','pillar_status','paired_content_urls','keyword_evidence','keyword_market','market_tier','market_rationale','keyword_volume','keyword_sd','keyword_cpc_usd','keyword_checked_on','canonical_action','gsc_market','gsc_top_query','gsc_clicks_period','gsc_impressions_period','gsc_ctr_percent_period','gsc_avg_position_period','gsc_period','priority','last_content_review','last_gsc_refresh','notes')
$linkRequired = @('source_item_id','source_url','source_primary_keyword','target_item_id','target_url','target_primary_keyword','anchor_text','link_context','relationship','status','destination_quality_status','destination_http_status','destination_canonical_url','last_verified','reason_or_follow_up')

foreach ($register in @(
    [pscustomobject]@{ Path=$seoPath; Required=$seoRequired },
    [pscustomobject]@{ Path=$linkPath; Required=$linkRequired }
)) {
    if (-not (Test-Path $register.Path)) { Error "Missing register: $($register.Path)"; continue }
    $firstRow = @(Import-Csv $register.Path | Select-Object -First 1)
    $headers = if ($firstRow.Count) {
        @($firstRow[0].PSObject.Properties.Name)
    } else {
        @(((Get-Content $register.Path -TotalCount 1) -split ',') | ForEach-Object { $_.Trim('"') })
    }
    foreach ($field in $register.Required) { if ($field -notin $headers) { Error "$($register.Path): missing column '$field'" } }
}
$seoRows = if (Test-Path $seoPath) { @(Import-Csv $seoPath) } else { @() }
$linkRows = if (Test-Path $linkPath) { @(Import-Csv $linkPath) } else { @() }
$queuePath = Join-Path $root 'automation\queue.csv'
$queueRows = if (Test-Path $queuePath) { @(Import-Csv $queuePath) } else { @() }
foreach ($group in @($seoRows | Group-Object item_id | Where-Object { $_.Name -and $_.Count -gt 1 })) { Error "SEO register duplicate item_id '$($group.Name)'" }
foreach ($row in $seoRows) {
    foreach ($field in @('item_id','url','canonical_url','category','primary_keyword','supporting_keywords','search_intent','content_role','topic_cluster','pillar_url','pillar_status','paired_content_urls','keyword_evidence','keyword_market','keyword_checked_on','canonical_action','priority')) {
        if ([string]::IsNullOrWhiteSpace([string]$row.$field)) { Error "SEO register row '$($row.item_id)' is missing '$field'" }
    }
    if ($row.url -notmatch '^https://proplogai\.com/' -or $row.canonical_url -ne $row.url) { Error "SEO register row '$($row.item_id)' has invalid URL ownership" }
    if ($row.pillar_url -notmatch '^https://proplogai\.com/') { Error "SEO register row '$($row.item_id)' has an invalid pillar URL" }
    if ($row.pillar_status -notin @('Current','Interim','Planned')) { Error "SEO register row '$($row.item_id)' has invalid pillar_status '$($row.pillar_status)'" }
    if ($row.keyword_evidence -notin @('GSC India','Current search review','GSC India + current search review','Editorial hypothesis')) { Error "SEO register row '$($row.item_id)' has invalid keyword_evidence '$($row.keyword_evidence)'" }
    if ($row.market_tier -notin @('Primary','Secondary') -or [string]::IsNullOrWhiteSpace($row.market_rationale)) { Error "SEO register row '$($row.item_id)' has incomplete market governance" }
    if ($row.market_tier -eq 'Primary' -and $row.keyword_market -ne 'India / English') { Error "SEO register row '$($row.item_id)' has an invalid primary market" }
    if ($row.market_tier -eq 'Secondary' -and ($row.keyword_market -eq 'India / English' -or $row.keyword_evidence -eq 'Editorial hypothesis')) { Error "SEO register row '$($row.item_id)' lacks evidence for a secondary market" }
    if ($row.keyword_checked_on -notmatch '^\d{4}-\d{2}-\d{2}$') { Error "SEO register row '$($row.item_id)' has invalid keyword_checked_on" }
    foreach ($metric in @('keyword_volume','keyword_sd','keyword_cpc_usd')) {
        if (-not [string]::IsNullOrWhiteSpace([string]$row.$metric)) {
            $metricValue = 0.0
            if (-not [double]::TryParse([string]$row.$metric,[ref]$metricValue) -or $metricValue -lt 0) { Error "SEO register row '$($row.item_id)' has invalid $metric" }
        }
    }
    if ($row.gsc_impressions_period -ne '' -and $row.gsc_market -ne 'India') { Error "SEO register row '$($row.item_id)' has active GSC data without the India market" }
    foreach ($pairedUrl in @($row.paired_content_urls -split '\s*\|\s*' | Where-Object { $_ })) {
        if (@($seoRows | Where-Object url -eq $pairedUrl).Count -ne 1) { Error "SEO register row '$($row.item_id)' has unknown paired URL '$pairedUrl'" }
    }
    if ($row.pillar_status -in @('Current','Interim') -and @($seoRows | Where-Object url -eq $row.pillar_url).Count -ne 1) { Error "SEO register row '$($row.item_id)' has unknown current pillar '$($row.pillar_url)'" }
}
foreach ($link in $linkRows) {
    if (-not $link.source_item_id -or $link.target_url -notmatch '^https://proplogai\.com/' -or -not $link.anchor_text) { Error 'Internal-link register contains an incomplete or off-property row' }
    if ($link.last_verified -notmatch '^\d{4}-\d{2}-\d{2}$') { Error "Internal-link row for '$($link.source_item_id)' has an invalid verification date" }
    if ($link.status -notin @('planned','inserted_in_draft','verified_in_draft','live_verified','blocked','remove','replace')) { Error "Internal-link row for '$($link.source_item_id)' has invalid status '$($link.status)'" }
}

foreach ($draft in @($records | Where-Object Kind -eq 'draft')) {
    $row = @($seoRows | Where-Object item_id -eq $draft.Meta.item_id)
    if ($row.Count -ne 1) { Error "$($draft.Path): expected one SEO register row"; continue }
    foreach ($field in @('primary_keyword','search_intent','content_role','topic_cluster','canonical_url','pillar_url')) {
        $a = if (Is-Null $draft.Meta[$field]) { '' } else { $draft.Meta[$field].Trim() }
        $b = if (Is-Null $row[0].$field) { '' } else { $row[0].$field.Trim() }
        if ($a -ne $b) { Error "$($draft.Path): '$field' does not match the SEO register" }
    }
    $draftLinks = @(Array-Values $draft.Meta.internal_links)
    foreach ($url in $draftLinks) {
        $matchingLinks = @($linkRows | Where-Object { $_.source_item_id -eq $draft.Meta.item_id -and $_.target_url -eq $url })
        if ($matchingLinks.Count -ne 1) { Error "$($draft.Path): internal link '$url' must have exactly one register row"; continue }
        if ($matchingLinks[0].status -notin @('inserted_in_draft','verified_in_draft','live_verified')) { Error "$($draft.Path): internal link '$url' is not marked as present in the draft" }
    }
    foreach ($registered in @($linkRows | Where-Object { $_.source_item_id -eq $draft.Meta.item_id -and $_.status -in @('inserted_in_draft','verified_in_draft','live_verified') })) {
        if ($registered.target_url -notin $draftLinks) { Error "$($draft.Path): register marks '$($registered.target_url)' in draft but front matter does not" }
    }
    if (Test-Path $queuePath) {
        $queueRecord = @($queueRows | Where-Object item_id -eq $draft.Meta.item_id)
        if ($queueRecord.Count -ne 1) { Error "$($draft.Path): expected one automation queue row" }
        elseif ($queueRecord[0].status -ne $draft.Meta.status -or $queueRecord[0].revision -ne $draft.Meta.revision -or $queueRecord[0].revision_hash -ne $draft.Meta.revision_hash) {
            Error "$($draft.Path): queue status, revision, or hash does not match the draft"
        }
    }
}

if ($CheckRemoteLinks) {
    foreach ($url in @($linkRows.target_url | Sort-Object -Unique)) {
        try { $response = Invoke-WebRequest -Uri $url -Method Head -MaximumRedirection 0 -SkipHttpErrorCheck -TimeoutSec 15; if ($response.StatusCode -ne 200) { Warn "$($response.StatusCode) $url" } } catch { Warn "Could not verify $url" }
    }
}

foreach ($warning in $warnings) { Write-Warning $warning }
if ($errors.Count) { Write-Host "CONTENT VALIDATION FAILED ($($errors.Count) errors)" -ForegroundColor Red; $errors | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }; exit 1 }
Write-Host 'CONTENT VALIDATION PASSED' -ForegroundColor Green
Write-Host "Validated $(@($records | Where-Object Kind -eq 'brief').Count) briefs, $(@($records | Where-Object Kind -eq 'draft').Count) drafts, $($seoRows.Count) SEO rows, and $($linkRows.Count) link rows."
if (-not $CheckRemoteLinks) { Write-Host 'Remote links were not checked. Use -CheckRemoteLinks for a live pass.' }
