# コンポーネント分割方針

## 概要
このドキュメントは、ポートフォリオサイトにおけるコンポーネント分割の方針とアーキテクチャを定義します。保守性、再使用性、可読性を重視した設計を目指します。

---

## 1. コンポーネント階層構造

### 1.1 階層レベル
```
Page Components (pages)
├── Section Components (sections)
├── Feature Components (features)
├── UI Components (ui)
└── Layout Components (layout)
```

### 1.2 ディレクトリ構成
```
frontend/src/components/
├── ui/                    # shadcn/ui コンポーネント
├── layout/                # レイアウト関連コンポーネント
├── sections/              # ページセクションコンポーネント
├── features/              # 機能別コンポーネント
└── common/                # 共通コンポーネント
```

---

## 2. コンポーネント分類

### 2.1 UI Components (`/ui`)
- **役割**: 基本的なUI要素
- **特徴**: 再利用性が高く、ビジネスロジックを持たない
- **例**: Button, Card, Badge, Input, Modal
- **依存関係**: shadcn/ui ベース

### 2.2 Layout Components (`/layout`)
- **役割**: ページ全体のレイアウト構造
- **特徴**: ナビゲーション、フッター、サイドバーなど
- **例**: Header, Footer, Sidebar, Navigation
- **依存関係**: UI Components

### 2.3 Section Components (`/sections`)
- **役割**: ページ内の大きなセクション
- **特徴**: 特定のページに特化した大きなブロック
- **例**: HeroSection, SkillsSection, WorksSection, BlogSection
- **依存関係**: Feature Components, UI Components

### 2.4 Feature Components (`/features`)
- **役割**: 特定の機能を提供するコンポーネント
- **特徴**: ビジネスロジックを含み、再利用可能
- **例**: WorkCard, BlogCard, SkillCard, ContactButton
- **依存関係**: UI Components

### 2.5 Common Components (`/common`)
- **役割**: 複数の場所で使用される共通コンポーネント
- **特徴**: 汎用的で、特定の機能に依存しない
- **例**: LoadingSpinner, ErrorBoundary, SEO
- **依存関係**: UI Components

---

## 3. 分割方針

### 3.1 単一責任の原則
- 各コンポーネントは1つの明確な責任を持つ
- 複数の責任を持つ場合は分割を検討

### 3.2 再利用性の向上
- 汎用的なコンポーネントは `/features` または `/common` に配置
- props による柔軟なカスタマイズを可能にする
- コンポーネントにマージンを持たない
- マージンを持たせる場合、呼び出し元をラッパーで囲み、ラッパーにマージンを持たせる

### 3.3 保守性の向上
- 関連する機能は同じディレクトリに配置
- 明確な命名規則を採用

### 3.4 可読性の向上
- コンポーネント名は機能を明確に表現
- 適切なコメントとドキュメントを追加

---

## 4. 命名規則

### 4.1 コンポーネント名
- **PascalCase**: `WorkCard`, `BlogSection`
- **機能を明確に表現**: `ContactButton`, `SkillCard`
- **接尾辞の使用**: `Section`, `Card`, `Button`, `Form`

### 4.2 ファイル名
- **PascalCase**: `WorkCard.tsx`, `BlogSection.tsx`
- **index.tsx**: ディレクトリのエントリーポイント

### 4.3 ディレクトリ名
- **kebab-case**: `work-card/`, `blog-section/`
- **機能別**: `features/`, `sections/`

---

## 5. Props設計

### 5.1 型安全性
- TypeScript の型定義を必ず使用
- インターフェースは明確に定義

### 5.2 デフォルト値
- 適切なデフォルト値を設定
- 必須propsとオプションpropsを明確に区別

### 5.3 バリデーション
- 必要に応じてpropsのバリデーションを実装
- 開発時のエラーを早期に発見

---

## 6. 状態管理

### 6.1 ローカル状態
- コンポーネント固有の状態は useState で管理
- 複雑な状態は useReducer を検討

### 6.2 グローバル状態
- 複数のコンポーネントで共有される状態は Context または Zustand を使用
- 最小限のグローバル状態を維持

---

## 7. パフォーマンス最適化

### 7.1 メモ化
- 重い計算やレンダリングは useMemo, useCallback で最適化
- React.memo で不要な再レンダリングを防止

### 7.2 遅延読み込み
- 大きなコンポーネントは動的インポートで遅延読み込み
- ページ分割による初期読み込み時間の短縮

---

## 8. テスト戦略

### 8.1 単体テスト
- 各コンポーネントの単体テストを実装
- Storybook でのビジュアルテスト

### 8.2 統合テスト
- 複数のコンポーネントの連携テスト
- ユーザーインタラクションのテスト

---

## 9. ドキュメント化

### 9.1 Storybook
- 各コンポーネントのStorybookストーリーを作成
- 使用方法とpropsの説明を記載

### 9.2 コメント
- 複雑なロジックには適切なコメントを追加
- JSDoc 形式でのドキュメント化

---

## 10. 具体的な分割例

### 10.1 現在のpage.tsxの分割
```
page.tsx (メインページ)
├── sections/
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── WorksSection.tsx
│   ├── BlogSection.tsx
│   └── ContactSection.tsx
├── features/
│   ├── WorkCard.tsx
│   ├── BlogCard.tsx
│   ├── SkillCard.tsx
│   └── ContactButton.tsx
└── layout/
    └── SocialLinks.tsx
```

### 10.2 各セクションの責任
- **HeroSection**: ヒーローエリアの表示
- **SkillsSection**: スキル一覧の表示
- **WorksSection**: 作品一覧の表示と管理
- **BlogSection**: ブログ記事一覧の表示と管理
- **ContactSection**: お問い合わせフォームの表示

---

## 11. 実装順序

1. **型定義の整理**: 共通の型定義を確認・整理
2. **UI Components**: 基本的なUIコンポーネントの確認
3. **Feature Components**: 機能別コンポーネントの作成
4. **Section Components**: セクション別コンポーネントの作成
5. **統合**: メインページでの統合
6. **テスト**: 各コンポーネントのテスト実装
7. **ドキュメント**: Storybookでのドキュメント化

---

## 12. 注意事項

- 過度な分割は避け、適切な粒度を保つ
- コンポーネント間の依存関係を最小限に抑える
- パフォーマンスを考慮した設計を行う
- アクセシビリティを考慮した実装を行う

---

## 更新履歴

| 日付 | バージョン | 変更内容 | 更新者 |
|------|------------|----------|--------|
| 2025-10-30 | 1.0.0 | 初版作成 | チーム | 