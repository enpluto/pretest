# My Todo List 
以 localStorage 儲存待辦事項。

## 功能清單
- 新增事項（使用按鈕或 enter 鍵送出）
- 編輯事項
- 變更事項狀態（已完成／未完成）
- 刪除事項
- 刪除所有完成事項，包含 sweetAlert2 提示
- 查看不同狀態（全部／已完成／未完成）的事項

## 專案架構
```
src  
├── components  // UI 元件
├── containers  // 邏輯層元件
├── context     // 全局狀態管理
└── reducer     // 狀態更新邏輯
```

## Git 規範
### Branch
| Branch | Description |
| ------ | ----------- |
| `dev` | 開發中的分支 |
| `layout` | 新增頁面樣式 |
| `feature/-*` | 新增功能 |
| `refactor/-*` | 重構功能 |
| `fix/-*` | 修復 |
| `chore/-*` | 維護 |

### Commits
| Type | Description |
| ---- | ----------- |
| `feat` | 新增功能 |
| `fix` | 修正現有功能的錯誤 |
| `refactor` | 不影響現有功能的重構 |
| `chore` | 維護 (安裝套件、移動資料夾等) |
| `style` |	修正樣式 |


## 技術規格
### 前端
- React.js
- TypeScript
- SweetAlert2
- Chakra UI
- Vite
