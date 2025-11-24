"use client";

import Link from "next/link";
import { SectionContainer } from "../common/SectionContainer";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "PROFILE", href: "/profile" },
  { label: "ARTICLES", href: "/articles" },
];

// PC用：左側に表示するリンク（HOME、お問い合わせ以外）
const leftNavigationItems = navigationItems.filter(
  (item) => item.label !== "CONTACT"
);

// PC用：右側に表示するリンク（お問い合わせ）
const rightNavigationItems = navigationItems.filter(
  (item) => item.label === "CONTACT"
);

export function Header() {

  return (
    <header
      className="max-w-6xl rounded-b-xl rounded-bl-xl mx-auto fixed top-0 left-0 right-0 z-50 border-b border-black/10 shadow-2xl transition-all duration-300 dark:border-white/10 backdrop-blur-sm h-[60px] bg-transparent"
    >
      <SectionContainer className="flex h-full items-center justify-between w-[90%]!">
        <div className="flex items-center gap-6">
          {/* PC用ナビゲーション（左側） */}
          <nav className="flex items-center gap-6">
            {leftNavigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-bold hover:opacity-70 dark:text-white text-lg transition-all duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* PC用ナビゲーション（右側） */}
        <nav className="">
          {rightNavigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium hover:opacity-70 dark:text-white text-sm transition-all duration-300"
              >
                {item.label}
              </Link>
          ))}
        </nav>
      </SectionContainer>
    </header>
  );
}

