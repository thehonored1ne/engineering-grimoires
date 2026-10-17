[CmdletBinding()]
param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$errors = [System.Collections.Generic.List[string]]::new()

function Add-Error([string]$Message) {
    [void]$errors.Add($Message)
}

function Read-FrontMatter([string]$Path) {
    $lines = Get-Content -LiteralPath $Path
    if ($lines.Count -lt 3 -or $lines[0] -ne '---') { return $null }
    $end = [Array]::IndexOf($lines, '---', 1)
    if ($end -lt 0) { return $null }
    $fields = @{}
    foreach ($line in $lines[1..($end - 1)]) {
        if ($line -match '^([a-z_]+):\s*(.*)$') { $fields[$Matches[1]] = $Matches[2].Trim() }
    }
    return $fields
}

$skillFiles = Get-ChildItem -LiteralPath (Join-Path $Root 'grimoire') -Recurse -Filter 'SKILL.md' -File
$required = @('id', 'name', 'rank', 'class', 'target', 'tags')

foreach ($file in $skillFiles) {
    $meta = Read-FrontMatter $file.FullName
    if ($null -eq $meta) {
        Add-Error "$($file.FullName): missing YAML front matter"
        continue
    }
    foreach ($field in $required) {
        if (-not $meta.ContainsKey($field) -or [string]::IsNullOrWhiteSpace($meta[$field])) {
            Add-Error "$($file.FullName): missing metadata field '$field'"
        }
    }
    $folder = Split-Path -Leaf (Split-Path -Parent $file.FullName)
    if ($meta['id'] -ne $folder) { Add-Error "$($file.FullName): id does not match directory '$folder'" }

    $content = Get-Content -LiteralPath $file.FullName -Raw
    if ($content -notmatch '(?m)^## (Preconditions|Prerequisites)\s*$') { Add-Error "$($file.FullName): missing prerequisites section" }
    if ($content -notmatch '(?m)^## Post-Execution Verification\s*$') { Add-Error "$($file.FullName): missing verification section" }
    if ($file.FullName -match '\\combination-spells\\' -and $content -notmatch '(?m)^composes:\s*$') {
        Add-Error "$($file.FullName): combination spell missing composes metadata"
    }
}

$markdownFiles = Get-ChildItem -LiteralPath $Root -Recurse -Filter '*.md' -File
foreach ($file in $markdownFiles) {
    $content = Get-Content -LiteralPath $file.FullName -Raw
    foreach ($match in [regex]::Matches($content, '\]\(([^)#]+)(?:#[^)]+)?\)')) {
        $target = $match.Groups[1].Value
        if ($target -match '^(https?:|mailto:)') { continue }
        $resolved = Join-Path $file.DirectoryName $target
        if (-not (Test-Path -LiteralPath $resolved)) { Add-Error "$($file.FullName): broken link '$target'" }
    }
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

Write-Output "Library validation passed: $($skillFiles.Count) skills checked."
