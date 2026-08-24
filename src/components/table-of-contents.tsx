"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type TocItem = {
  id: string;
  text: string;
  level: 1 | 2;
};

function TocList({
  items,
  activeId,
  onItemClick,
}: {
  items: TocItem[];
  activeId: string | null;
  onItemClick: (id: string) => (event: React.MouseEvent) => void;
}) {
  return (
    <ol className="flex flex-col gap-[14px]">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id} style={{ paddingLeft: item.level === 2 ? 24 : 0 }}>
            <a
              href={`#${item.id}`}
              onClick={onItemClick(item.id)}
              className={`-ml-[14px] block border-l-2 pl-3 leading-[1.6] transition-colors duration-150 ${
                item.level === 1 ? "text-sm" : "text-[13px]"
              } ${
                isActive
                  ? "border-accent font-medium text-foreground"
                  : "border-transparent text-gray-sub hover:text-foreground"
              }`}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function ArticleWithToc({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLElement>(".notion-h1, .notion-h2"),
    );

    const nextItems = headings
      .map((heading) => {
        const id = heading.dataset.id;
        const text = heading
          .querySelector(".notion-h-title")
          ?.textContent?.trim();
        if (!id || !text) return null;
        const level: 1 | 2 = heading.classList.contains("notion-h1") ? 1 : 2;
        return { id, text, level };
      })
      .filter((item): item is TocItem => item !== null);

    setItems(nextItems);
    if (nextItems.length === 0) return;

    const anchors = headings
      .map((heading) => {
        const anchor = heading.querySelector<HTMLElement>(
          ".notion-header-anchor",
        );
        if (anchor && heading.dataset.id) {
          anchor.id = heading.dataset.id;
        }
        return anchor;
      })
      .filter((anchor): anchor is HTMLElement => anchor !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );

    anchors.forEach((anchor) => observer.observe(anchor));
    return () => observer.disconnect();
  }, []);

  const handleItemClick = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const target = containerRef.current?.querySelector(`#${CSS.escape(id)}`);
    if (!(target instanceof HTMLElement)) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      {items.length > 0 && (
        <div className="mx-6 mb-7 border border-gray-divider bg-card p-5 pc:hidden">
          <span className="mb-4 block font-mono text-xs tracking-[0.08em] text-gray-label">
            CONTENTS
          </span>
          <TocList
            items={items}
            activeId={activeId}
            onItemClick={handleItemClick}
          />
        </div>
      )}

      <div ref={containerRef} className="article-body">
        {children}
      </div>

      {items.length > 0 && (
        <aside className="sticky top-6 hidden self-start border-l border-gray-divider pl-8 pc:block">
          <span className="mb-[14px] block font-mono text-xs tracking-[0.08em] text-gray-label">
            CONTENTS
          </span>
          <TocList
            items={items}
            activeId={activeId}
            onItemClick={handleItemClick}
          />
        </aside>
      )}
    </>
  );
}
