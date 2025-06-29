# ポートフォリオサイト

個人のスキルや制作実績、アウトプットを発信することを目的としたポートフォリオサイトです。  
Next.jsフロントエンドとDjangoバックエンドのモノレポ構成で、ブログ記事、作品紹介、お問い合わせ機能を備えています。

## 技術スタック

### フロントエンド
- **Next.js** (App Router)
- **TypeScript**
- **shadcn/ui**
- **Storybook**

### バックエンド
- **Django** + **Django REST Framework**
- **djoser** (JWT認証)
- **Pillow** (画像処理)

### データベース
- **SQLite** (開発環境)

## ディレクトリ構造

```
portfolio/
├── backend/           # Djangoバックエンド
│   ├── apps/         # Djangoアプリケーション
│   ├── portfolio_api/ # Djangoプロジェクト設定
│   ├── venv/         # Python仮想環境
│   ├── manage.py     # Django管理コマンド
│   └── requirements.txt # Python依存関係
├── docs/             # プロジェクトドキュメント
│   ├── requirements.md      # 要件定義書
│   ├── model_api_design.md  # モデル・API設計
│   └── git-workflow.md      # Git運用ルール
├── log/              # 実装ログファイル
│   ├── 2025-06-27.md # 日付別ログ
│   └── 2025-06-29.md
├── evidence/         # 証跡ファイル
│   └── evidence_20250628.md
├── .git/            # Gitリポジトリ
├── .cursor/         # Cursor IDE設定
├── .gitignore       # Git除外設定
└── README.md        # このファイル
```

## セットアップ

### バックエンド（Django）

1. **仮想環境の有効化**
   ```bash
   source backend/venv/bin/activate
   ```

2. **依存関係のインストール**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **データベースマイグレーション**
   ```bash
   python manage.py migrate
   ```

4. **開発サーバー起動**
   ```bash
   python manage.py runserver
   ```

### フロントエンド（Next.js）

*フロントエンドは未実装です*

## API エンドポイント

### 認証
- `POST /api/auth/jwt/create/` - JWTトークン取得

### ブログ
- `GET /api/blogs/` - ブログ記事一覧
- `POST /api/blogs/` - ブログ記事作成（管理者のみ）
- `GET /api/blogs/{id}/` - ブログ記事詳細
- `PUT/PATCH /api/blogs/{id}/` - ブログ記事更新（管理者のみ）
- `DELETE /api/blogs/{id}/` - ブログ記事削除（管理者のみ）

### 作品
- `GET /api/works/` - 作品一覧
- `POST /api/works/` - 作品作成（管理者のみ）
- `GET /api/works/{id}/` - 作品詳細
- `PUT/PATCH /api/works/{id}/` - 作品更新（管理者のみ）
- `DELETE /api/works/{id}/` - 作品削除（管理者のみ）

### お問い合わせ
- `POST /api/contacts/` - お問い合わせ送信

## ドキュメント

- [要件定義書](./docs/requirements.md) - プロジェクトの要件と技術選定
- [モデル・API設計](./docs/model_api_design.md) - データモデルとAPI設計方針
- [Git運用ルール](./docs/git-workflow.md) - ブランチ戦略とコミット規約

## 開発状況

### 完了済み
- ✅ Djangoプロジェクト構築
- ✅ モデル設計・実装
- ✅ API実装（ブログ、作品、お問い合わせ）
- ✅ JWT認証設定
- ✅ CORS設定
- ✅ 画像アップロード機能
- ✅ 管理者認証必須のAPI制御

### 未実装
- 🔄 Next.jsフロントエンド
- 🔄 Storybook設定
- 🔄 CI/CD設定
- 🔄 本番環境デプロイ

## ライセンス

このプロジェクトは個人のポートフォリオサイトとして作成されています。 