@echo off
echo ------------------------------------
echo   Updating GitHub Pages site...
echo ------------------------------------

:: Automatically use the folder where this script lives
cd /d "%~dp0"

:: Show current status
git status

:: Stage all changes (ignoring anything in .gitignore)
git add .

:: Commit with a timestamped message
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set today=%%c-%%a-%%b
git commit -m "Auto update on %today%"

:: Pull latest changes to avoid conflicts
git pull origin main

:: Push updates to GitHub
git push origin main

echo ------------------------------------
echo ✅ Update complete! Check your site.
echo ------------------------------------
pause
