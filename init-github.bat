@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 GitHub 初始化脚本
echo ====================================
echo.

set /p repo_url="请输入你的GitHub仓库地址: "
set /p repo_name="请输入仓库名称: "

echo.
echo 正在初始化 Git 仓库...
git init

echo.
echo 添加所有文件到暂存区...
git add .

echo.
echo 创建第一次提交...
git commit -m "🚀 初始化项目：中国人才补贴政策地图"

echo.
echo 添加远程仓库...
git remote add origin %repo_url%

echo.
echo 推送到 GitHub...
git branch -M main
git push -u origin main

echo.
echo ====================================
echo ✅ 初始化完成！
echo ====================================
echo.
echo 接下来的步骤：
echo 1. 访问你的GitHub仓库: %repo_url%
echo 2. 点击 Settings > Pages
echo 3. 在 Branch 中选择 main 分支
echo 4. 点击 Save
echo 5. 等待1-2分钟，访问: https://你的用户名.github.io/%repo_name%/
echo.
pause
