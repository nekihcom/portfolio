import Link from "next/link";
import type { Metadata } from "next";
import { getWorks } from "@/lib/notion";
import { WorkCard } from "@/components/work-card";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Work",
  description: "これまでの制作実績・主な仕事の一覧です。",
};

function buildHref(tag: string | undefined): string {
  const params = new URLSearchParams();
  if (tag) params.set("tag", tag);
  const query = params.toString();
  return query ? `/work?${query}` : "/work";
}

export default async function WorkPage(props: PageProps<"/work">) {
  const searchParams = await props.searchParams;
  const tagParam =
    typeof searchParams.tag === "string" ? searchParams.tag : undefined;

  const works = await getWorks();

  const tagCounts = new Map<string, number>();
  for (const work of works) {
    for (const tag of work.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }
  const tags = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]);

  const filteredWorks = tagParam
    ? works.filter((work) => work.tags.includes(tagParam))
    : works;

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      <section className="flex flex-col gap-4 px-6 py-10 pc:px-[120px] pc:pb-12 pc:pt-20">
        <span className="font-mono text-xs tracking-[0.08em] text-gray-label">
          WORK
        </span>
        <h1 className="text-[34px] font-bold pc:text-[52px]">制作実績</h1>
        <p className="text-sm leading-[1.8] text-gray-text pc:max-w-[680px] pc:text-base">
          これまでの制作実績・主な仕事の一覧です。全{works.length}件。
        </p>
      </section>

      {tags.length > 0 && (
        <section className="flex flex-col gap-3 px-6 pb-9 pc:px-[120px] pc:pb-14">
          <span className="font-mono text-xs text-gray-label">
            FILTER BY TAG
          </span>
          <div className="flex flex-wrap gap-[10px] font-mono text-[13px]">
            <Link
              href={buildHref(undefined)}
              className={
                !tagParam
                  ? "bg-foreground px-4 py-2 text-background"
                  : "border border-gray-border px-4 py-2 transition-colors duration-150 hover:border-foreground"
              }
            >
              All{" "}
              <span className={!tagParam ? "text-gray-disabled" : "text-gray-label"}>
                {works.length}
              </span>
            </Link>
            {tags.map(([tag, count]) => {
              const isActive = tag === tagParam;
              return (
                <Link
                  key={tag}
                  href={buildHref(tag)}
                  className={
                    isActive
                      ? "bg-foreground px-4 py-2 text-background"
                      : "border border-gray-border px-4 py-2 transition-colors duration-150 hover:border-foreground"
                  }
                >
                  {tag}{" "}
                  <span
                    className={isActive ? "text-gray-disabled" : "text-gray-label"}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="border-t border-gray-divider px-6 pc:px-[120px]">
        {filteredWorks.length === 0 && (
          <p className="py-10 text-base text-gray-sub">
            該当する実績がありません
          </p>
        )}
        <div className="flex flex-col gap-5 py-9 pc:grid pc:grid-cols-3 pc:gap-8 pc:py-14">
          {filteredWorks.map((work) => (
            <WorkCard key={work.slug} item={work} />
          ))}
        </div>
      </section>
    </div>
  );
}
