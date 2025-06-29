import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { microCMSClient } from "@/lib/microcms";
import { Work, BlogPost } from "@/types/type";
import { ContactButton } from "../components/ContactButton";

// スキルデータ
const skills = [
  { name: "Next.js", level: "上級", category: "フロントエンド" },
  { name: "React", level: "上級", category: "フロントエンド" },
  { name: "TypeScript", level: "上級", category: "フロントエンド" },
  { name: "Node.js", level: "中級", category: "バックエンド" },
  { name: "Python", level: "中級", category: "バックエンド" },
  { name: "PostgreSQL", level: "中級", category: "データベース" },
  { name: "AWS", level: "中級", category: "インフラ" },
  { name: "Docker", level: "中級", category: "インフラ" },
];

export default async function Home() {
  // microCMSからデータを取得
  let works: Work[] = [];
  let posts: BlogPost[] = [];

  try {
    // 環境変数の確認
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
      // 環境変数が未設定の場合は空配列のまま（メッセージを表示）
    } else {
      // APIからデータを取得
      const [worksData, postsData] = await Promise.allSettled([
        microCMSClient.getWorks(3),
        microCMSClient.getBlogPosts(3)
      ]);

      // 作品データの処理
      if (worksData.status === 'fulfilled' && worksData.value.length > 0) {
        works = worksData.value;
      } else {
        console.warn('Failed to fetch works from microCMS');
        // データが取得できない場合は空配列のまま（メッセージを表示）
      }

      // ブログ記事データの処理
      if (postsData.status === 'fulfilled' && postsData.value.length > 0) {
        posts = postsData.value;
      } else {
        console.warn('Failed to fetch blog posts from microCMS');
        // データが取得できない場合は空配列のまま（メッセージを表示）
      }
    }
  } catch (error) {
    console.error('Unexpected error while fetching data:', error);
    // エラーが発生した場合も空配列のまま（メッセージを表示）
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/api/placeholder/150/150" 
              alt="プロフィール画像" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            フロントエンドエンジニア
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Next.js、React、TypeScriptを中心としたモダンなWeb開発を専門としています。<br />
            ユーザー体験を重視した、保守性の高いアプリケーションの開発が得意です。
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="px-8">
              作品を見る
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              ブログを読む
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-slate-600 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-slate-600 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-slate-600 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          スキル・技術
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <Badge variant={skill.level === "上級" ? "default" : "secondary"}>
                    {skill.level}
                  </Badge>
                </div>
                <CardDescription>{skill.category}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            最近の作品
          </h2>
          <Button variant="outline">すべて見る</Button>
        </div>
        {works.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work) => (
              <Card key={work.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
                  {work.thumbnail ? (
                    <img 
                      src={work.thumbnail.url} 
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                      <span className="text-slate-600 text-sm">No Image</span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{work.title}</CardTitle>
                  <CardDescription>{work.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(work.technologies || []).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">準備中</h3>
            <p className="text-slate-500">作品の準備を進めています。もうしばらくお待ちください。</p>
          </div>
        )}
      </section>

      {/* Recent Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            最新のブログ記事
          </h2>
          <Button variant="outline">すべて見る</Button>
        </div>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                    <span>5分</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">執筆中</h3>
            <p className="text-slate-500">記事の執筆を進めています。もうしばらくお待ちください。</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">お問い合わせ</CardTitle>
            <CardDescription className="text-lg">
              ご質問やお仕事のご相談はお気軽に
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-slate-600 mb-6">
                フリーランスでのお仕事や、技術的な相談など、<br />
                どんなことでもお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactButton />
              </div>
              <p className="text-xs text-slate-500 mt-4">
                ※GoogleFormは新しいタブで開きます
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
