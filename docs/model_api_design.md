# モデル・API設計方針

## 1. モデル設計方針

### 1-1. ブログ記事（BlogPost）
- タイトル（title）
- 本文（body）
- 作成日・更新日（created_at, updated_at）
- 著者（author: User, 管理者ユーザー）
- 公開/非公開（is_published）
- カテゴリ（category: BlogCategory, 外部キー）

#### BlogCategory
- カテゴリ名（name）

---

### 1-2. 作品（Work）
- タイトル（title）
- 概要（summary）
- 詳細説明（description）
- 公開日（published_at）
- 外部リンク（external_url）
- カテゴリ（category: WorkCategory, 外部キー）

#### WorkCategory
- カテゴリ名（name）

#### WorkImage
- 作品（work: Work, 外部キー）
- 画像ファイル（image）
- 並び順（order）

---

### 1-3. お問い合わせ（Contact）
- 名前（name）
- メールアドレス（email）
- メッセージ本文（message）
- 送信日時（created_at）

---

## 2. API設計方針

### 2-1. ブログAPI
- 一覧取得（GET /api/blogs/）
- 詳細取得（GET /api/blogs/{id}/）
- 新規作成（POST /api/blogs/）※管理者のみ
- 更新（PUT/PATCH /api/blogs/{id}/）※管理者のみ
- 削除（DELETE /api/blogs/{id}/）※管理者のみ
- カテゴリ一覧（GET /api/blog-categories/）

### 2-2. 作品API
- 一覧取得（GET /api/works/）
- 詳細取得（GET /api/works/{id}/）
- 新規作成（POST /api/works/）※管理者のみ
- 更新（PUT/PATCH /api/works/{id}/）※管理者のみ
- 削除（DELETE /api/works/{id}/）※管理者のみ
- カテゴリ一覧（GET /api/work-categories/）
- 画像アップロード（POST /api/works/{id}/images/）※管理者のみ

### 2-3. お問い合わせAPI
- 送信（POST /api/contacts/）
  - DB保存＋メール送信

---

## 3. 補足
- 認証が必要なAPIはJWT認証（djoser/simplejwt）を利用
- 一般ユーザーはGET系APIのみ利用可能
- 管理者ユーザーのみPOST/PUT/PATCH/DELETEが可能
- 画像ファイルはMEDIA_ROOTに保存
- カテゴリはマスタ管理（追加・編集は管理者のみ） 