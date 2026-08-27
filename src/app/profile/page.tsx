import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getWorks } from "@/lib/notion";
import { PROFILE, CAREER, TECH_STACK, CTA } from "@/lib/profile";
import { WorkCard } from "@/components/work-card";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Profile",
  description: `${PROFILE.nameJa}のプロフィール、経歴、技術スタック、実績を紹介します。`,
};

export const revalidate = 3600;

export default async function ProfilePage() {
  const works = (await getWorks()).slice(0, 3);
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      {/* ヒーロー */}
      <section className="flex flex-col gap-6 px-6 py-10 pc:grid pc:grid-cols-[280px_1fr] pc:items-start pc:gap-20 pc:px-[120px] pc:py-20">
        <div className="relative h-[140px] w-[140px] border border-gray-border pc:h-[280px] pc:w-[280px]">
          <Image
            src="/profile/icon.png"
            alt={PROFILE.nameJa}
            fill
            className="object-cover"
            sizes="(min-width: 960px) 280px, 140px"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 pc:gap-7">
          {/* <span className="font-mono text-[11px] tracking-[0.14em] text-gray-label pc:text-[13px]">
            PROFILE
          </span> */}
          <h1 className="text-[34px] font-bold leading-[1.25] pc:text-[52px]">
            {PROFILE.nameJa}{" "}
            <span className="font-mono text-sm font-normal text-gray-label pc:text-xl">
              {PROFILE.nameEn}
            </span>
          </h1>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-gray-text pc:max-w-[760px] pc:text-base">
            {PROFILE.profilePage.intro.map((paragraph) => (
              <p key={paragraph} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="flex flex-col gap-6 border-t border-foreground px-6 py-10 pc:grid pc:grid-cols-[280px_1fr] pc:gap-20 pc:px-[120px] pc:pb-[100px] pc:pt-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold pc:text-[26px]">Career</h2>
          {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
            経歴
          </span> */}
        </div>
        <div className="flex flex-col">
          {CAREER.map((item, index) => (
            <div
              key={item.period}
              className={`relative flex flex-col gap-2 pb-7 pl-6 pc:grid pc:grid-cols-[150px_1fr] pc:gap-10 pc:pb-10 pc:pl-8 ${
                index === CAREER.length - 1
                  ? "border-l border-transparent"
                  : "border-l border-gray-border"
              }`}
            >
              <span
                className={`absolute left-[-4px] top-[6px] h-[7px] w-[7px] ${
                  item.isLatest ? "bg-accent" : "bg-gray-border"
                }`}
              />
              <span className="font-mono text-[13px] text-gray-label pc:pt-[2px]">
                {item.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold pc:text-[19px]">
                  {item.role}
                </h3>
                <p className="whitespace-pre-line text-sm leading-[1.8] text-gray-sub pc:text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="flex flex-col gap-6 border-t border-gray-divider px-6 py-10 pc:grid pc:grid-cols-[280px_1fr] pc:gap-20 pc:px-[120px] pc:pb-[100px] pc:pt-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold pc:text-[26px]">Tech Stack</h2>
          {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
            技術スタック
          </span> */}
        </div>
        <div className="flex flex-col gap-7 pc:grid pc:grid-cols-2 pc:gap-x-15 pc:gap-y-11">
          {TECH_STACK.map((category) => (
            <div key={category.en} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-[10px] border-b border-foreground pb-[10px]">
                <span className="text-base font-bold">{category.ja}</span>
                <span className="font-mono text-[11px] text-gray-label">
                  {category.en}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs pc:text-[13px]">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="border border-gray-border px-[10px] py-[6px] pc:px-3 pc:py-[7px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="flex flex-col gap-6 border-t border-gray-divider px-6 py-10 pc:grid pc:grid-cols-[280px_1fr] pc:gap-20 pc:px-[120px] pc:pb-[100px] pc:pt-16"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold pc:text-[26px]">Work</h2>
          {/* <span className="font-mono text-[11px] text-gray-label pc:text-xs">
            制作実績
          </span> */}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 pc:grid pc:grid-cols-2 pc:gap-7">
            {works.map((work) => (
              <WorkCard key={work.slug} item={work} size="compact" />
            ))}
          </div>
          <Link href="/work" className="text-sm font-medium">
            実績をすべて見る →
          </Link>
        </div>
      </section>

      <CtaSection
        heading={CTA.profile.heading}
        description={CTA.profile.description}
        headingSize="md"
        compactPadding
      />
    </div>
  );
}
