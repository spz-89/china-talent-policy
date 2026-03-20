@echo off
chcp 65001 >nul
cls
echo ====================================
echo 🔍 GitHub Pages 状态检查
echo ====================================
echo.
echo 仓库信息：
echo 用户名: spz-89
echo 仓库名: china-talent-policy
echo.
echo ====================================
echo.

echo 📂 本地文件检查:
echo ───────────────────────────
cd /d "C:\3-学习\17-人才政策地区"

if exist display.html (
    echo ✅ display.html
) else (
    echo ❌ display.html (缺失)
)

if exist china.json (
    echo ✅ china.json
) else (
    echo ❌ china.json (缺失)
)

if exist landmarks.js (
    echo ✅ landmarks.js
) else (
    echo ❌ landmarks.js (缺失)
)

if exist "各地人才补贴.xlsx" (
    echo ✅ 各地人才补贴.xlsx
) else (
    echo ❌ 各地人才补贴.xlsx (缺失)
)

if exist debug.html (
    echo ✅ debug.html
) else (
    echo ⚪ debug.html (可选)
)

echo.
echo ====================================
echo.

echo 🔗 GitHub Pages 地址测试:
echo ───────────────────────────
echo 1. 主页面:
echo    https://spz-89.github.io/china-talent-policy/
echo.
echo 2. 调试页面:
echo    https://spz-89.github.io/china-talent-policy/debug.html
echo.
echo 3. 文件直接访问测试:
echo    https://spz-89.github.io/china-talent-policy/china.json
echo    https://spz-89.github.io/china-talent-policy/landmarks.js
echo.

echo ====================================
echo.

set /p open_repo="按 R 访问 GitHub 仓库，按 D 访问 Debug 页面，按 Q 退出: "

if /i "%open_repo%"=="R" (
    start https://github.com/spz-89/china-talent-policy
) else if /i "%open_repo%"=="D" (
    start https://spz-89.github.io/china-talent-policy/debug.html
)

echo.
pause
