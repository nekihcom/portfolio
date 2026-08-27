import Link from "next/link";
import { getPublishedPosts, getWorks } from "@/lib/notion";
import { formatDate } from "@/lib/format";
import { PROFILE, CTA } from "@/lib/profile";
import { WorkCard } from "@/components/work-card";
import { CtaSection } from "@/components/cta-section";

export const revalidate = 3600;

export default async function Home() {
  const posts = (await getPublishedPosts()).slice(0, 3);
  const works = (await getWorks()).slice(0, 3);

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      {/* FV */}
      <section className="flex flex-col gap-[22px] px-6 py-12 pc:grid pc:grid-cols-[1fr_380px] pc:items-end pc:gap-20 pc:px-[120px] pc:py-[110px] pc:pt-[130px]">
        <div className="flex flex-col gap-4 pc:gap-8">
          <span className="font-mono text-[11px] tracking-[0.14em] text-gray-label pc:text-[13px]">
            {PROFILE.occupation}
          </span>
          <h1 className="text-[40px] font-bold leading-[1.2] pc:text-[76px] pc:leading-[1.15]">
            {PROFILE.nameJa}{" "}
            <span className="text-gray-sub text-2xl">{PROFILE.nameEn}</span>
          </h1>
          <p className="text-[15px] leading-[1.8] text-gray-text pc:max-w-[620px] pc:text-[17px]">
            {PROFILE.home.intro}
          </p>
        </div>
        <div className="flex flex-col gap-[10px] pt-2 font-mono text-xs text-gray-sub pc:gap-[14px] pc:pb-2 pc:text-[13px]">
          <div className="flex justify-between border-b border-gray-divider pb-2 pc:pb-[10px]">
            <span>BASE</span>
            <span>{PROFILE.home.base}</span>
          </div>
          <div className="hidden justify-between border-b border-gray-divider pb-[10px] pc:flex">
            <span>EXP</span>
            <span>{PROFILE.home.experience}</span>
          </div>
          <div className="flex justify-between border-b border-gray-divider pb-2 pc:pb-[10px]">
            <span>STATUS</span>
            <span>{PROFILE.home.status}</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="flex flex-col gap-5 border-t border-foreground px-6 py-10 pc:grid pc:grid-cols-[280px_1fr] pc:gap-15 pc:px-[120px] pc:pb-[110px] pc:pt-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold pc:text-[26px]">About</h2>
          {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
            はじめまして！
          </span> */}
        </div>
        <div className="flex flex-col items-start gap-5 pc:gap-7">
          <p className="whitespace-pre-line text-[15px] leading-[1.8] text-gray-text pc:max-w-[720px] pc:text-base">
            {PROFILE.home.about}
          </p>
          <Link
            href="/profile"
            className="self-end border-b border-accent pb-[2px] text-sm font-medium text-foreground transition-colors duration-150 hover:text-accent-hover"
          >
            More →
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="flex flex-col gap-5 border-t border-gray-divider px-6 py-10 pc:px-[120px] pc:pb-[110px] pc:pt-16">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold pc:text-[26px]">Blog</h2>
            {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
              技術や仕事、日常、いろいろ。
            </span> */}
          </div>
          <Link href="/blog" className="text-sm font-medium">
            More →
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-[13px] text-gray-sub pc:text-sm">
            表示できる記事がまだありません。
          </p>
        ) : (
          <div className="flex flex-col gap-4 pc:grid pc:grid-cols-3 pc:gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 border border-gray-divider bg-card p-5 pc:gap-4 pc:p-7 pc:pb-[28px]"
              >
                {post.publishedAt && (
                  <div className="flex items-center gap-[10px] font-mono text-[11px] text-gray-label pc:gap-3 pc:text-xs">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.tags[0] && (
                      <>
                        <span className="text-gray-border">|</span>
                        <span>{post.tags[0]}</span>
                      </>
                    )}
                  </div>
                )}
                <h3 className="text-[17px] font-bold leading-[1.55] group-hover:text-accent pc:text-[19px]">
                  {post.title}
                </h3>
                {post.summary && (
                  <p className="text-[13px] leading-[1.8] text-gray-sub pc:text-sm">
                    {post.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Work */}
      <section className="flex flex-col gap-5 border-t border-gray-divider px-6 py-10 pc:px-[120px] pc:pb-[110px] pc:pt-16">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold pc:text-[26px]">Work</h2>
            {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
              これまで達成した成果や作ったモノの記録
            </span> */}
          </div>
          <Link href="/work" className="text-sm font-medium">
            More →
          </Link>
        </div>
        {works.length === 0 ? (
          <p className="text-[13px] text-gray-sub pc:text-sm">
            表示できる実績がまだありません。
          </p>
        ) : (
          <div className="flex flex-col gap-4 pc:grid pc:grid-cols-3 pc:gap-8">
            {works.map((work) => (
              <div key={work.slug}>
                <WorkCard item={work} />
              </div>
            ))}
          </div>
        )}
      </section>

      <CtaSection
        heading={CTA.home.heading}
        description={CTA.home.description}
      />
    </div>
  );
}
