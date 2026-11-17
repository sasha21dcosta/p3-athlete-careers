# Copy prerendered client output into deployment-ready/ (no server bundle).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root "dist\client"
$dest = Join-Path $root "deployment-ready"

if (-not (Test-Path $src)) {
  throw "Missing $src — run npm run build first."
}

if (Test-Path $dest) {
  Remove-Item -LiteralPath $dest -Recurse -Force
}

New-Item -ItemType Directory -Path $dest | Out-Null
Copy-Item -Path (Join-Path $src "*") -Destination $dest -Recurse -Force

# TanStack sitemap helper — not required on Apache docroot
$pagesJson = Join-Path $dest "pages.json"
if (Test-Path $pagesJson) {
  Remove-Item -LiteralPath $pagesJson -Force
}

Write-Host "Packed static site to $dest"