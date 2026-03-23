[繁體中文](./README_zh.md) | [日本語](./README.md)
# BirthPlan<sup>+</sup>Subscrybebe
這是一個為提供未來「育兒訂閱制」服務的虛擬公司所設計的官方網站。<br>
[BirthPlan<sup>+</sup>Subscrybebe](https://birthplansubscrybebe.web.app/#/)
## 作品概要 | Project Overview
BirthPlan<sup>+</sup>Subscrybebe 是一個虛構的 Web 平台，提供在未來社會中「透過訂閱制獲得孩子」的虛擬服務。<br>
本專案不僅僅是網頁設計，其核心目的在於諷刺當前現代社會中隱含的以下「三角關係」：
   1. **生育商品化 (Commodification of Birth)**
   2. **貧富差距 (Wealth Disparity)**
   3. **階級複製 (Class Reproduction)**
  
透過讓使用者體驗「打造理想孩子」的過程，將未來可能發生的、令人恐懼的「階級固化」結構進行具象化的隱喻，從而向使用者提出倫理性的詰問。
## 系統架構 | System Architecture
為了讓使用者產生這是一個「真實存在的服務」的錯覺，本專案實作了自動化的後端系統。
1. **Frontend**: React 
2. **Backend Integration**: 運用 Google Apps Script 構建的無伺服器架構
3. **Automation**: 在表單送出後，系統會立即自動向使用者發送詳細的「契約確認郵件」
4. **Security**: 實作了用來防禦惡意機器人的 Honeypot 技術
## 技術亮點 | Technical Highlights
1. **Vibe Coding**<br>
   採用了結合 Google AI Studio 的 Vibe Coding 開發流程。透過自然語言指令，在短時間內完成了複雜的 UI 設計與邏輯實作。
2. **自動化流程**<br>
   當使用者選擇方案（A/B/C/D）並送出表單後，GAS 會即時執行以下處理：
      - 自動將顧客資料記錄至 Google Sheets
      - 利用 GmailApp 發送個人化的自動回覆郵件
4. **安全性實作 (Honeypot)**<br>
   為保護系統免於垃圾郵件攻擊，我設置了人類肉眼無法看見、但機器人會自動反應的 Honeypot Field。<br>
   此舉能有效阻斷來自機器人的無差別數據輸入。
## 設計 | Design
<p align="center">
  <img src="/docs/02-color-logo.png" width="48%" />
  <img src="/docs/01-homepage.png" width="48%" />
</p>
<p align="center">
  <img src="/docs/03-plan.png" width="48%" />
  <img src="/docs/04-gene.png" width="48%" />
</p>
<p align="center">
  <img src="/docs/05-form.png" width="48%" />
  <img src="/docs/06-service.png" width="48%" />
</p>

## 作品反思 | Reflections
這件作品是對「技術可能非但無法消除社會差距，反而會加速其擴大」所提出的警告。<br>
在少子化、懷孕責任歸屬、代理孕母等生育議題層出不窮的現狀下，出現這類服務或許只是時間問題。當看似便利的「訂閱制」與「客製化」系統開始介入生命本身時，我們將面臨什麼樣的境地？<br>
我以程式設計為手段，將這份訊息具象化為作品。
