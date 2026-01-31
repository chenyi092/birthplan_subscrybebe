# BirthPlan<sup>+</sup>Subscrybebe
未来の「育児サブスクリプション」サービスを提供する架空会社のWebサイト<br>
[BirthPlan<sup>+</sup>Subscrybebe](https://birthplansubscrybebe.web.app/#/)
## プロジェクト概要 | Project Overview
BirthPlan<sup>+</sup>Subscrybebe は、未来の社会において「子供をサブスクリプションで手に入れる」という架空のサービスを提供するWebプラットフォームです。<br>
このプロジェクトは、単なるWebデザインではなく、現代社会に潜む以下の三角関係に対する皮肉を目的としています。
   1. **生育の商品化 (Commodification of Birth)**
   2. **貧富の格差 (Wealth Disparity)**
   3. **階級の複製 (Class Reproduction)** 
   
「理想の子供を作る」という体験を通じて、将来起こりうる恐ろしい階級固定化のメタファーを視覚化し、ユーザーに倫理的な問いを投げかけます。
## システム構成 | System Architecture
このプロジェクトは、ユーザーに「実在するサービス」であると錯覚させるため、高度なバックエンド自動化を実装しています。
1. **Frontend**: React / Vite
2. **Backend Integration**: Google Apps Script (GAS) を活用したサーバーレスアーキテクチャ
3. **Automation**: フォーム送信後、即座に詳細な「契約確認メール」をユーザーに自動送信
4. **Security**: 悪意のあるボットを防ぐための Honeypot 技術の実装
## 技術的特徴 | Technical Highlights
1. **Vibe Coding**<br>
   Google AI Studio を活用した Vibe Coding プロセスを採用。自然言語による指示で、複雑なUI設計とロジックの実装を短期間で行いました。
2. **自動化ワークフロー (GAS)**<br>
   ユーザーがプラン（A/B/C/D）を選択し、フォームを送信すると、GAS が以下の処理をリアルタイムで実行します。
      - Google Sheets への顧客データの自動記録
      - GmailApp を利用したパーソナライズされた自動返信メールの送信
4. **セキュリティ実装 (Honeypot)**<br>
   スパム攻撃からシステムを守るため、人間の目には見えないがボットが反応してしまう Honeypotフィールドを設置。ボットによる無差別なデータ入力を効果的に遮断しています。
## デザイン | Design
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

## 作品の思い | Reflections
この作品は、技術が社会の格差を解消するのではなく、加速させてしまう可能性への警告です。<br>
少子化や妊娠責任問題、代理懐胎など、生育関係の問題が多々ある中、こういったサービスが出てくるのも時間の問題ではないでしょうか。<br>
一見便利な「サブスクリプション」や「カスタマイズ」というシステムが、命そのものを扱うようになった時、私たちは何に直面するのか。<br>
プログラミングという手段を用いて、このメッセージを形にしました。
