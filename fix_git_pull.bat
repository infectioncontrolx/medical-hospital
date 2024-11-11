@echo off

REM Set the repository URL
set REPO_URL=git@github.com:Amubasshir/medical.git

REM Increase buffer size
git config --global http.postBuffer 524288000

REM Increase timeout settings
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

REM Change the remote URL to SSH
git remote set-url origin %REPO_URL%

REM Attempt to pull with the new settings
git pull
