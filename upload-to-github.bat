@echo off
chcp 65001 >nul
cls
echo ====================================
echo 🚀 GitHub 上传脚本
echo ====================================
echo.
echo 仓库信息：
echo 用户名: spz-89
echo 仓库名: china-talent-policy
echo.
echo ====================================
echo.

set repo_url=https://github.com/spz-89/china-talent-policy.git

cd /d "C:\3-学习\17-人才政策地区"

echo 📂 当前目录: %CD%
echo.

:: 检查是否已初始化Git
if not exist .git (
    echo 🔧 初始化 Git 仓库...
    git init
    git branch -M main
) else (
    echo ✅ Git 仓库已存在
)

echo.
echo 📊 检查远程仓库...
git remote -v | findstr "%repo_url%" >nul
if %errorlevel% neq 0 (
    echo ⚠️ 远程仓库未配置
    echo.
    set /p setup_remote="是否添加远程仓库 "%repo_url%"? (Y/N): "
    if /i "%setup_remote%"=="Y" (
        git remote add origin %repo_url%
        echo ✅ 远程仓库已添加
    )
) else (
    echo ✅ 远程仓库已配置
)

echo.
echo 📋 当前文件列表:
dir /b *.html *.js *.json *.xlsx *.md .gitignore 2>nul

echo.
echo ====================================
echo 准备上传文件到 GitHub
echo ====================================
echo.
set /p confirm="确认上传所有文件到 GitHub? (Y/N): "

if /i not "%confirm%"=="Y" (
    echo ❌ 已取消
    pause
    exit /b
)

echo.
echo 📤 开始上传...
echo.

:: 添加所有文件
git add .

:: 提交
git commit -m "🚀 中国人才补贴政策地图 - 初始部署

- 添加主页 display.html
- 添加地图数据 china.json
- 添加地标配置 landmarks.js
- 添加Excel数据文件
- 添加管理后台 admin-v2.0.html
- 添加调试工具 debug.html"

:: 推送
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ====================================
    echo ✅ 上传成功！
    echo ====================================
    echo.
    echo 📦 GitHub仓库地址:
    echo %repo_url%
    echo.
    echo 🌐 GitHub Pages地址:
    echo https://spz-89.github.io/china-talent-policy/
    echo.
    echo 📄 Debug页面:
    echo https://spz-89.github.io/china-talent-policy/debug.html
    echo.
    echo ⏱️ 等待1-2分钟后访问以下地址:
    echo https://spz-89.github.io/china-talent-policy/
    echo.
) else (
    echo ====================================
    echo ❌ 上传失败
    echo ====================================
    echo.
    echo 可能的原因:
    echo 1. 仓库未在GitHub创建，请先访问
    echo    https://github.com/spz-89/china-talent-policy
    echo 2. 未配置GitHub身份验证
    echo 3. 网络连接问题
    echo.
    echo 详细错误信息请看上方
)

echo.
pause
