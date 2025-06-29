# デプロイガイド - 完全無料構成

## 概要

ポートフォリオサイトを完全無料でデプロイするための手順書です。

### デプロイ構成
```
フロントエンド: Vercel (Next.js) - 無料
バックエンド: Fly.io (Django) - 無料
データベース: Supabase (PostgreSQL) - 無料
画像ストレージ: Supabase Storage - 無料
```

### 費用
- **月額費用**: ¥0
- **制限**: 各サービスの無料プラン制限内

---

## 1. Supabase セットアップ

### 1.1 プロジェクト作成
1. [Supabase](https://supabase.com)にアクセス
2. GitHubアカウントでログイン
3. 「New Project」をクリック
4. プロジェクト名: `portfolio-api`
5. データベースパスワードを設定（メモしておく）
6. リージョン: `Northeast Asia (Tokyo)`を選択
7. 「Create new project」をクリック

### 1.2 データベース接続情報の取得
1. プロジェクトダッシュボードで「Settings」→「Database」
2. 以下の情報をメモ:
   - Host: `db.xxxxxxxxxxxxx.supabase.co`
   - Database name: `postgres`
   - Port: `5432`
   - User: `postgres`
   - Password: 作成時に設定したパスワード

### 1.3 環境変数の設定
```bash
# backend/.env ファイルを作成
DATABASE_URL=postgresql://postgres:your_password@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## 2. Fly.io セットアップ

### 2.1 Fly CLI インストール
```bash
# macOS
brew install flyctl

# または公式インストーラー
curl -L https://fly.io/install.sh | sh
```

### 2.2 アカウント作成・ログイン
```bash
fly auth signup
# または既存アカウントの場合
fly auth login
```

### 2.3 Django アプリの準備

#### 2.3.1 requirements.txt の更新
```bash
cd backend
# 本番用の依存関係を追加
echo "gunicorn==21.2.0" >> requirements.txt
echo "psycopg2-binary==2.9.9" >> requirements.txt
echo "whitenoise==6.6.0" >> requirements.txt
```

#### 2.3.2 Dockerfile の作成
```dockerfile
# backend/Dockerfile
FROM python:3.9-slim

WORKDIR /app

# システム依存関係のインストール
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Python依存関係のインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードのコピー
COPY . .

# 静的ファイルの収集
RUN python manage.py collectstatic --noinput

# ポート8000を公開
EXPOSE 8000

# アプリケーション起動
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "portfolio_api.wsgi:application"]
```

#### 2.3.3 fly.toml の作成
```bash
cd backend
fly launch --no-deploy
```

生成された `fly.toml` を編集:
```toml
app = "portfolio-api-backend"
primary_region = "nrt"

[build]

[env]
  DJANGO_SETTINGS_MODULE = "portfolio_api.settings"
  DATABASE_URL = "postgresql://postgres:your_password@db.xxxxxxxxxxxxx.supabase.co:5432/postgres"
  SECRET_KEY = "your-secret-key-here"
  ALLOWED_HOSTS = "portfolio-api-backend.fly.dev"
  CORS_ALLOWED_ORIGINS = "https://your-frontend-domain.vercel.app"

[http_service]
  internal_port = 8000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[http_service.checks]]
  grace_period = "10s"
  interval = "30s"
  method = "GET"
  timeout = "5s"
  path = "/api/"
```

### 2.4 データベースマイグレーション
```bash
# マイグレーション実行
fly ssh console -C "python manage.py migrate"

# スーパーユーザー作成
fly ssh console -C "python manage.py createsuperuser"
```

### 2.5 デプロイ
```bash
fly deploy
```

---

## 3. Vercel セットアップ

### 3.1 Next.js プロジェクトの準備
```bash
# フロントエンドディレクトリ作成
mkdir frontend
cd frontend

# Next.js プロジェクト作成
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

### 3.2 環境変数の設定
```bash
# frontend/.env.local ファイルを作成
NEXT_PUBLIC_API_URL=https://portfolio-api-backend.fly.dev
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3.3 Vercel デプロイ
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでログイン
3. 「New Project」をクリック
4. GitHubリポジトリを選択
5. ルートディレクトリを `frontend` に設定
6. 環境変数を設定
7. 「Deploy」をクリック

---

## 4. 設定ファイルの更新

### 4.1 Django 設定の更新

#### backend/portfolio_api/settings.py
```python
import os
from pathlib import Path

# 本番環境判定
DEBUG = os.getenv('DEBUG', 'False') == 'True'

# 許可されたホスト
ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', 'localhost,127.0.0.1').split(',')

# データベース設定
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'postgres'),
        'USER': os.getenv('DB_USER', 'postgres'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}

# 静的ファイル設定
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# メディアファイル設定（Supabase Storage使用）
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# CORS設定
CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '').split(',')
CORS_ALLOW_CREDENTIALS = True

# セキュリティ設定
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
```

### 4.2 画像アップロード設定

#### backend/apps/works/models.py の更新
```python
import os
from django.conf import settings

def work_image_path(instance, filename):
    return f'works/{instance.work.id}/{filename}'

class WorkImage(models.Model):
    work = models.ForeignKey(Work, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=work_image_path)
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
```

---

## 5. デプロイ後の確認

### 5.1 バックエンド確認
```bash
# API エンドポイントの確認
curl https://portfolio-api-backend.fly.dev/api/

# 管理者画面の確認
# https://portfolio-api-backend.fly.dev/admin/
```

### 5.2 フロントエンド確認
- VercelでデプロイされたURLにアクセス
- APIとの通信確認
- 画像アップロード機能の確認

### 5.3 データベース確認
- Supabaseダッシュボードでテーブル確認
- データの挿入・取得確認

---

## 6. トラブルシューティング

### 6.1 よくある問題

#### データベース接続エラー
```bash
# Fly.ioでログ確認
fly logs

# データベース接続テスト
fly ssh console -C "python manage.py dbshell"
```

#### CORS エラー
- フロントエンドのドメインがCORS設定に含まれているか確認
- 環境変数の設定を確認

#### 静的ファイルエラー
```bash
# 静的ファイルの再収集
fly ssh console -C "python manage.py collectstatic --noinput"
```

### 6.2 ログ確認
```bash
# Fly.io ログ
fly logs

# Vercel ログ
# Vercelダッシュボードで確認
```

---

## 7. 運用・保守

### 7.1 定期メンテナンス
- データベースのバックアップ
- ログの確認
- 依存関係の更新

### 7.2 監視
- UptimeRobotで可用性監視
- Supabaseダッシュボードでリソース使用量確認

### 7.3 スケーリング
- アクセス増加時の対応
- 有料プランへの移行検討

---

## 8. セキュリティ

### 8.1 環境変数の管理
- 機密情報は環境変数で管理
- 本番環境のSECRET_KEYは強力なものを使用

### 8.2 アクセス制御
- 管理者APIは認証必須
- CORS設定の適切な管理

### 8.3 データ保護
- 定期的なバックアップ
- 個人情報の適切な管理

---

## 参考リンク

- [Supabase Documentation](https://supabase.com/docs)
- [Fly.io Documentation](https://fly.io/docs/)
- [Vercel Documentation](https://vercel.com/docs)
- [Django Deployment](https://docs.djangoproject.com/en/4.2/howto/deployment/)

---

## 更新履歴

| 日付 | バージョン | 変更内容 | 更新者 |
|------|------------|----------|--------|
| 2025-06-29 | 1.0.0 | 初版作成 | チーム | 