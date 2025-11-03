import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getNoteArticles } from "@/services/note";
import { getQiitaArticles } from "@/services/qiita";

export default async function DemoPage() {
  const noteArticles = await getNoteArticles(5);
  const qiitaArticles = await getQiitaArticles(5);
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Demo</h1>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="my-10">
        {noteArticles.length > 0 ? (
          noteArticles.map((article) => (
          <div key={article.id} className="mb-4">
            <p>{article.title}</p>
            <p>{article.url}</p>
            <p>{article.publishedAt}</p>
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">記事がありません</p>
        )}
      </div>
      <div className="my-10">
        {qiitaArticles.length > 0 ? (
          qiitaArticles.map((article) => (
          <div key={article.id} className="mb-4">
            <p>{article.title}</p>
            <p>{article.url}</p>
            <p>{article.publishedAt}</p>
            <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">記事がありません</p>
        )}
      </div>
      <Link href="/" className="text-sm text-muted-foreground underline">
        Back to Home
      </Link>
    </main>
  );
}


