import Image from "next/image";
import type { WorkItem } from "@/lib/notion";

type WorkCardProps = {
  item: WorkItem;
  size?: "default" | "compact";
};

export function WorkCard({ item, size = "default" }: WorkCardProps) {
  const imageHeight =
    size === "default"
      ? "h-[130px] pc:h-[170px]"
      : "h-[130px] pc:h-[150px]";
  const headingSize =
    size === "default" ? "text-[17px] pc:text-[19px]" : "text-[17px] pc:text-[18px]";

  return (
    <div className="flex flex-col border border-gray-divider bg-card pc:pb-7">
      {item.thumbnailUrl ? (
        <div
          className={`relative ${imageHeight}`}
          style={{ borderBottom: "1px solid var(--gray-divider)" }}
        >
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={`flex items-end p-[10px] pc:p-3 ${imageHeight}`}
          style={{
            background:
              "repeating-linear-gradient(135deg,#efefef 0 8px,#fafafa 8px 16px)",
            borderBottom: "1px solid var(--gray-divider)",
          }}
        >
          <span className="font-mono text-[10px] text-gray-label pc:text-[11px]">
            screenshot 16:9
          </span>
        </div>
      )}
      <div className="flex flex-col gap-[10px] p-5 pc:gap-3 pc:p-0 pc:pt-[26px] pc:pl-7 pc:pr-7">
        <span className="font-mono text-[11px] text-gray-label">
          {item.year} / {item.engagement}
        </span>
        <h4 className={`font-bold leading-[1.55] ${headingSize}`}>
          {item.title}
        </h4>
        <p className="text-[13px] leading-[1.8] text-gray-sub pc:text-sm">
          {item.description}
        </p>
        {/* <div className="flex flex-wrap gap-[6px] font-mono text-[11px] text-gray-sub">
          {item.tags.map((tag) => (
            <span key={tag} className="border border-gray-border-weak px-2 py-1">
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
