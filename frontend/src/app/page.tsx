import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            ポートフォリオサイト
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Next.js + Django + Supabase で構築されたポートフォリオサイト
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">作品を見る</Button>
            <Button variant="outline" size="lg">ブログを読む</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          技術スタック
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>フロントエンド</CardTitle>
              <CardDescription>Next.js + TypeScript</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Next.js App Router</li>
                <li>• TypeScript</li>
                <li>• shadcn/ui</li>
                <li>• Storybook</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>バックエンド</CardTitle>
              <CardDescription>Django + DRF</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Django REST Framework</li>
                <li>• JWT認証</li>
                <li>• PostgreSQL</li>
                <li>• 画像アップロード</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>インフラ</CardTitle>
              <CardDescription>完全無料構成</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Vercel (フロントエンド)</li>
                <li>• Fly.io (バックエンド)</li>
                <li>• Supabase (DB + Storage)</li>
                <li>• 月額¥0</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
            <CardDescription>
              ご質問やお仕事のご相談はこちらから
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                お名前
              </label>
              <input
                id="name"
                type="text"
                className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                placeholder="山田太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                メッセージ
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                placeholder="メッセージを入力してください"
              />
            </div>
            <Button className="w-full">送信</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
