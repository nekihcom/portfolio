import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";

export const revalidate = 3600;

const SNS_LINKS = [
  { label: "X", href: "https://x.com/nekihcom" },
  { label: "note", href: "https://note.com/nekihcom" },
  { label: "GitHub", href: "https://github.com/nekihcom" },
];

export default async function Home() {
  const posts = (await getPublishedPosts()).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-240 px-6 py-8 pc:py-16">
      <section>
        <h1 className="text-3xl font-semibold">はじめまして、nekihcomです。</h1>
        <p className="mt-4 text-foreground/70">
          普段はエンジニアとして働きながら、個人事業の獲得を目指してX・note・ブログで発信活動をしています。仕事や技術の中で得た知見を、わかりやすく届けることを心がけています。
        </p>
        <ul className="mt-6 flex gap-4 text-sm font-medium">
          {SNS_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="mt-16">
        <h2 className="text-xl font-semibold">最新記事</h2>
        <ul className="mt-6 flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h3 className="font-medium group-hover:text-accent">
                  {post.title}
                </h3>
                {post.publishedAt && (
                  <p className="mt-1 text-sm text-foreground/60">
                    {post.publishedAt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4 hover:text-accent"
        >
          記事一覧を見る
        </Link>
      </section> */}
    </div>
  );
}
