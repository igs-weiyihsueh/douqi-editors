# 鬥氣割草 編輯器套件 - 線上版

> 🎮 **鬥氣割草** H5 遊戲的專業級編輯器工具套件，透過瀏覽器即可使用，無需安裝任何軟體。

## 🌐 線上使用

### 直接存取
**網址**：[https://igs-weiyihsueh.github.io/douqi-editors/](https://igs-weiyihsueh.github.io/douqi-editors/)

### 編輯器清單
- 🏗️ **[場景編輯器](https://igs-weiyihsueh.github.io/douqi-editors/scene-editor/)**：3D 場景設計、物件擺放、材質光照
- 🎯 **[關卡編輯器](https://igs-weiyihsueh.github.io/douqi-editors/level-editor/)**：關卡邏輯、敵人配置、事件觸發

## 📋 功能特色

### 🏗️ 場景編輯器
- **3D 場景編輯**：實時 3D 場景預覽和編輯
- **物件管理**：模型載入、位置調整、縮放旋轉
- **材質系統**：貼圖映射、UV 調整、材質參數
- **光照配置**：環境光、太陽光、點光源設定
- **特效編輯**：粒子系統、視覺效果配置
- **碰撞設定**：碰撞盒配置、物理屬性

### 🎯 關卡編輯器
- **關卡邏輯設計**：遊戲目標、勝利條件、時間限制
- **敵人配置**：敵人類型、巡邏路徑、AI 行為
- **道具系統**：收集品、強化道具、隱藏物品
- **事件觸發**：時間事件、條件事件、劇情觸發
- **遊戲平衡**：數值調整、難度曲線、獎勵機制
- **場景整合**：基於場景編輯器輸出進行關卡設計

## 🚀 快速開始

### 系統需求
- **瀏覽器**：Chrome 90+、Firefox 88+、Safari 14+
- **WebGL 支援**：必須支援 WebGL 2.0
- **網路連線**：穩定的網際網路連線
- **螢幕解析度**：建議 1280x720 或更高

### 使用步驟

1. **開啟編輯器**
   - 點擊 [編輯器套件首頁](https://igs-weiyihsueh.github.io/douqi-editors/)
   - 選擇需要的編輯器 (場景/關卡)
   - 等待編輯器載入完成

2. **場景設計流程**
   ```
   場景編輯器 → 建立 3D 環境 → 匯出 .douqi.json
                     ↓
   關卡編輯器 → 載入場景檔案 → 配置遊戲邏輯 → 匯出關卡檔案
   ```

3. **檔案管理**
   - **場景檔案**：`.douqi.json` 格式
   - **關卡檔案**：`.json` 格式  
   - **本地儲存**：透過瀏覽器下載到本地
   - **載入檔案**：拖放或點選上傳

## 📁 檔案格式說明

### 場景檔案 (.douqi.json)
```json
{
  "_format": "douqi-scene",
  "_version": "1.0.0",
  "metadata": {
    "name": "場景名稱",
    "description": "場景描述"
  },
  "scene": {
    "ambientColor": "#ffffff",
    "sunDirection": [100, 300, 150]
  },
  "objects": [
    {
      "id": "obj_001",
      "name": "地面", 
      "position": [0, 0, 0],
      "modelPath": "ground.fbx"
    }
  ]
}
```

### 關卡檔案 (.json)
```json
{
  "_format": "douqi-level",
  "_version": "1.0.0", 
  "metadata": {
    "name": "關卡名稱",
    "baseScene": "場景檔案名"
  },
  "level": {
    "timeLimit": 300,
    "scoreTarget": 1000
  },
  "entities": [
    {
      "type": "enemy",
      "position": [3, 0, 3],
      "properties": {
        "health": 100,
        "aiType": "patrol"
      }
    }
  ]
}
```

## 🎨 操作指南

### 場景編輯器操作
- **視角控制**：
  - 滑鼠左鍵拖拽：旋轉視角
  - 滑鼠右鍵拖拽：平移視圖  
  - 滑鼠滾輪：縮放視圖
- **物件操作**：
  - 左鍵點擊：選擇物件
  - 拖拽控制軸：移動位置
  - R 鍵：切換到旋轉模式
  - S 鍵：切換到縮放模式

### 關卡編輯器操作
- **基本設定**：填寫關卡名稱、時間限制、目標分數
- **敵人配置**：設定敵人類型、位置、AI 行為
- **事件設定**：配置時間觸發、條件觸發事件
- **檔案操作**：儲存工作檔、匯出遊戲場景

## 📖 詳細文檔

完整的使用指南和技術文檔請參考：
- **[專案主頁](https://github.com/igs-weiyihsueh/douqi)**
- **[完整文檔](https://github.com/igs-weiyihsueh/douqi/tree/main/tools/docs)**
- **[場景編輯器指南](https://github.com/igs-weiyihsueh/douqi/blob/main/tools/docs/SCENE_EDITOR.md)**
- **[關卡編輯器指南](https://github.com/igs-weiyihsueh/douqi/blob/main/tools/docs/LEVEL_EDITOR.md)**
- **[工作流程說明](https://github.com/igs-weiyihsueh/douqi/blob/main/tools/docs/WORKFLOW.md)**
- **[檔案格式規範](https://github.com/igs-weiyihsueh/douqi/blob/main/tools/docs/FILE_FORMAT.md)**

## 🔧 技術規格

### 前端技術
- **遊戲引擎**：Phaser 3.90.0
- **3D 引擎**：Three.js 0.182.0
- **程式語言**：TypeScript 5.4.0
- **建置工具**：Vite 5.4.0
- **粒子系統**：three.quarks 0.17.1

### 建置產物
- **場景編輯器**：988KB JS + 54KB HTML
- **關卡編輯器**：548KB JS + 9.21KB HTML
- **總大小**：約 1.6MB (已壓縮)

### 瀏覽器支援
| 瀏覽器 | 最低版本 | WebGL 2.0 | 狀態 |
|--------|----------|-----------|------|
| Chrome | 90+ | ✅ | 完全支援 |
| Firefox | 88+ | ✅ | 完全支援 |
| Safari | 14+ | ✅ | 完全支援 |
| Edge | 90+ | ✅ | 完全支援 |

## ⚠️ 注意事項

### 效能建議
- **模型複雜度**：建議單個模型不超過 10K 面數
- **貼圖解析度**：建議 1024x1024 或以下
- **記憶體使用**：建議可用記憶體 > 4GB
- **網路頻寬**：初次載入需下載約 1.6MB 資源

### 檔案限制
- **單檔案大小**：建議 < 10MB
- **總專案大小**：建議 < 100MB
- **檔案格式**：支援 FBX (模型)、JPG/PNG (貼圖)、OGG (音效)

### 相容性提醒
- 需要現代瀏覽器支援 ES2020 語法
- 必須啟用 JavaScript
- 需要穩定的網路連線進行初始載入
- 部分功能需要檔案系統存取權限

## 🐛 問題排除

### 常見問題

**Q: 編輯器載入緩慢或失敗？**
A: 檢查網路連線，嘗試重新整理頁面，或使用 Chrome/Firefox 最新版本。

**Q: 3D 場景顯示異常或黑屏？**
A: 確認瀏覽器支援 WebGL 2.0，更新顯示卡驅動程式。

**Q: 檔案無法匯出或下載？**
A: 檢查瀏覽器下載權限設定，確認允許自動下載檔案。

**Q: 編輯器功能按鈕無反應？**
A: 檢查瀏覽器主控台是否有錯誤訊息，嘗試重新載入頁面。

### 技術支援
如遇到其他問題，請：
1. 檢查瀏覽器主控台錯誤訊息
2. 確認系統符合最低需求
3. 提供詳細的錯誤描述和瀏覽器資訊
4. 至 [GitHub Issues](https://github.com/igs-weiyihsueh/douqi/issues) 回報問題

## 📞 開發團隊

**地球宿舍 AI 開發團隊**：
- **異靈**：專案統籌、需求分析
- **翼騎**：主力開發、編輯器移植
- **征騎**：副手開發、測試調試  
- **零式**：數值設計、遊戲平衡
- **陀螺**：技術顧問、經驗分享

## 📄 授權資訊

本專案採用 **MIT 授權**，您可以自由使用、修改和分發。

---

**🎮 鬥氣割草編輯器套件 - 讓遊戲開發更簡單，創意無限！**

*最後更新：2026-09-24*
