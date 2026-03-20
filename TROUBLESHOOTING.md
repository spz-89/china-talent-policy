# GitHub Pages 404 问题排查指南

## 🎯 你的信息
- **仓库地址：** https://github.com/spz-89/china-talent-policy
- **Pages地址：** https://spz-89.github.io/china-talent-policy/
- **Debug页面：** https://spz-89.github.io/china-talent-policy/debug.html

---

## 🚨 当前问题：所有文件都显示 404

这说明**文件没有正确部署到GitHub Pages**，请按以下步骤逐一排查：

---

## ✅ 步骤1：检查GitHub仓库

### 1. 访问你的GitHub仓库
```
https://github.com/你的用户名/你的仓库名
```

### 2. 查看 Code 页面的文件列表
确认以下文件都在仓库的**根目录**：

```
你的仓库名/
├── display.html          ✅ 必需
├── china.json            ✅ 必需
├── landmarks.js          ✅ 必需
├── 各地人才补贴.xlsx    ✅ 必需
├── debug.html            ✅ 推荐
└── README.md              ✅ 推荐
```

### 3. 如果文件不在仓库中
**操作步骤：**
1. 点击绿色按钮 "Upload files"
2. 将本地文件拖拽到上传区域
3. 文件说明中填写：`添加项目文件`
4. 点击绿色 "Commit changes" 按钮
5. 等待1-2分钟

---

## ✅ 步骤2：检查GitHub Pages配置

### 1. 进入仓库设置
- 点击仓库顶部的 "Settings" 标签

### 2. 配置Pages
- 左侧菜单找到 "Pages"
- 确认以下配置：

```
Build and deployment
└── Source: Deploy from a branch
    └── Branch: main (或 master)
        └── Folder: / (root) ✅ 必须是根目录
```

**关键点：Folder 必须是 `/ (root)`，不能是 `/docs`**

### 3. 保存并等待
- 如果修改了配置，点击 "Save"
- 等待1-3分钟重新部署

---

## ✅ 步骤3：检查部署状态

### 在 Pages 设置页面查看：
```
🟢 Your site is live at:
https://你的用户名.github.io/你的仓库名/
```

如果是红色的错误信息，说明部署失败，查看错误日志。

### 查看部署日志
1. Pages设置页面向下滚动
2. 找到 "Deployments" 部分
3. 点击最新的部署条目
4. 查看错误信息

---

## ✅ 步骤4：清除浏览器缓存

Chrome/Edge:
```
Ctrl + Shift + Delete → 选择"缓存的图片和文件" → 清除数据
```

或使用无痕模式测试：
```
Ctrl + Shift + N
```

---

## ✅ 步骤5：重新测试

### 访问以下URL测试：
1. 主页面：`https://你的用户名.github.io/你的仓库名/`
2. 调试页面：`https://你的用户名.github.io/你的仓库名/debug.html`

### 打开浏览器控制台：
按 `F12` → 查看 Console 标签的错误信息

---

## 📝 常见错误及解决方案

### 错误1：文件在子目录中
**症状：** 所有文件404

**原因：** 文件上传到了 `/docs` 或其他子目录

**解决：**
1. 在GitHub仓库中，将文件移动到根目录
2. 或修改Pages配置为 `/docs`

### 错误2：分支名称错误
**症状：** Site not live

**原因：** Pages配置分支不是 `main` 或 `master`

**解决：**
1. 查看仓库默认分支名称
2. 在Pages设置中选择正确的分支

### 错误3：文件编码问题
**症状：** 页面显示乱码

**原因：** Excel文件编码不是UTF-8

**解决：** 使用Excel另存为UTF-8格式

### 错误4：CDN被墙
**症状：** SheetJS加载失败

**原因：** `cdn.jsdelivr.net` 在国内访问不稳定

**解决：**
1. 在 `display.html` 顶部添加备用CDN：
   ```html
   <script src="https://cdn.bootcdn.net/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
   ```

---

## 🔧 手动验证文件URL

在浏览器地址栏中直接访问以下URL，看是否正常：

```
https://你的用户名.github.io/你的仓�名/china.json
https://你的用户名.github.io/你的仓�名/landmarks.js
https://你的用户名.github.io/你的仓庛/各地人才补贴.xlsx
```

**如果直接打开Excel文件显示"无法预览"，这是正常的，但应该能下载。**

---

## 🆘 仍然无法解决？

### 收集以下信息：

1. **GitHub仓库地址**
   ```
   https://github.com/用户名/仓库名
   ```

2. **GitHub Pages地址**
   ```
   https://用户名.github.io/仓库名/
   ```

3. **浏览器控制台错误**
   - 按F12打开开发者工具
   - Console标签中的错误信息截图

4. **GitHub Pages部署日志**
   - Settings → Pages → Deployments
   - 最新部署的错误日志截图

### 在debug页面查看诊断结果：
访问 `.../debug.html` 查看：
- 当前Origin是什么
- 尝试访问的完整URL
- 404错误的具体信息

---

## ⚡ 快速检查清单

- [ ] 文件在GitHub仓库根目录（不是子目录）
- [ ] GitHub Pages配置：Source = Deploy from a branch
- [ ] GitHub Pages配置：Branch = main/master
- [ ] GitHub Pages配置：Folder = / (root)
- [ ] 等待1-3分钟部署完成
- [ ] 清除浏览器缓存
- [ ] 使用无痕模式测试
- [ ] 检查网络连接
- [ ] 查看浏览器控制台错误

---

**完成以上步骤后，如果还有问题，请提供错误截图以便进一步排查。**
