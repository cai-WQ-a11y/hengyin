@echo off
setlocal
cd /d "%~dp0dist"
where node >nul 2>nul
if not errorlevel 1 (
  node "%~dp0local-preview-server.js"
  exit /b %errorlevel%
)
set "CODEX_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CODEX_NODE%" (
  "%CODEX_NODE%" "%~dp0local-preview-server.js"
  exit /b %errorlevel%
)
echo Node.js was not found. Open dist\index.html directly instead.
pause
