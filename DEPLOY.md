# 鬥氣割草編輯器套件 GitHub Pages 部署指令

## 🚀 部署步驟

### 1. 建立 GitHub Repository
1. 前往 https://github.com/igs-weiyihsueh
2. 點擊 "New repository"
3. Repository 名稱：`douqi-editors`
4. 設為 Public repository
5. 不要初始化 README, .gitignore 或 LICENSE (已有檔案)
6. 點擊 "Create repository"

### 2. 推送程式碼
在當前目錄 `/mnt/d/3C/douqi-editors` 執行：

```bash
# 設定遠端 repository
git remote add origin https://github.com/igs-weiyihsueh/douqi-editors.git

# 推送到主分支 (需要 PAT)
git push -u origin master
```

### 3. 設定 GitHub Pages
1. 前往 repository 頁面
2. 點擊 "Settings" 標籤
3. 在左側選單點選 "Pages"
4. 在 "Source" 下拉選單選擇 "Deploy from a branch"
5. Branch 選擇 "master"
6. Folder 選擇 "/ (root)"
7. 點擊 "Save"

### 4. 等待部署完成
- GitHub 會自動建置和部署
- 通常需要 2-5 分鐘
- 完成後會顯示綠色勾勾

## 🌐 部署後網址

主要網址：`https://igs-weiyihsueh.github.io/douqi-editors/`

直接編輯器連結：
- 場景編輯器：`https://igs-weiyihsueh.github.io/douqi-editors/scene-editor/`
- 關卡編輯器：`https://igs-weiyihsueh.github.io/douqi-editors/level-editor/`

## ✅ 驗證清單

部署完成後請檢查：
- [ ] 首頁正常顯示
- [ ] 兩個編輯器按鈕可以點擊
- [ ] 場景編輯器可以載入 (3D 場景顯示)
- [ ] 關卡編輯器可以載入 (編輯界面顯示)
- [ ] 瀏覽器相容性檢查通過
- [ ] 手機版響應式設計正常

## 🔧 如果遇到問題

### 常見問題排除
1. **404 錯誤**：確認 GitHub Pages 設定正確
2. **編輯器載入失敗**：檢查瀏覽器主控台錯誤
3. **3D 場景黑屏**：確認瀏覽器支援 WebGL 2.0
4. **推送失敗**：檢查 PAT 權限和網路連線

### 需要的 PAT 權限
Personal Access Token 需要以下權限：
- `repo` (Full control of private repositories)
- `workflow` (Update GitHub Action workflows)

## 📊 部署統計

總檔案數：10 個
總大小：1.7MB
主要檔案：
- index.html (8.3KB) - 套件首頁
- scene-editor/assets/editor-pP2H_ajB.js (968KB)
- level-editor/assets/index-aEbbwrnE.js (548KB)
- README.md (6.9KB)

---

**🎯 部署準備完成！執行上述步驟即可將編輯器套件發佈到 GitHub Pages。**
