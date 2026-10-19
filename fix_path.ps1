$raw = [Environment]::GetEnvironmentVariable('Path', 'Machine')
$cleaned = ($raw -replace '\"set PATH=', '' -replace '\"', '' -split ';' | Where-Object { $_.Trim() -ne '' } | Select-Object -Unique) -join ';'
[Environment]::SetEnvironmentVariable('Path', $cleaned, 'Machine')
Write-Host "Machine PATH repaired successfully!"
