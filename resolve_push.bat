@echo off
REM ========================================================
REM Git rebase auto-resolve script for keeping local versions
REM ========================================================

echo Resolving rebase conflicts by keeping LOCAL versions...

REM Step 1: Checkout LOCAL version for all conflicted files
git diff --name-only --diff-filter=U > conflicted_files.txt
for /f "tokens=*" %%f in (conflicted_files.txt) do (
    echo Keeping local version for %%f
    git checkout --ours %%f
    git add %%f
)

REM Step 2: Continue the rebase
git rebase --continue

REM Step 3: Push to GitHub
git push origin main --force

REM Clean up
del conflicted_files.txt

echo All done! Local versions kept, rebase finished, changes pushed to GitHub.
pause
