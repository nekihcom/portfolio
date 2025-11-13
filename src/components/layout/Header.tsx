"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { profile } from "@/constants/profile";

const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "PROFILE", href: "#" },
  { label: "WORKS", href: "#" },
  { label: "CONTACT", href: "#" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <header
      className={`max-w-[960px] rounded-b-xl rounded-bl-xl mx-auto fixed top-0 left-0 right-0 z-50 border-b border-black/10 shadow-lg transition-all duration-300 dark:border-white/10 backdrop-blur-sm ${
        isScrolled
          ? "h-[60px] bg-transparent"
          : "top-[-70px] h-[80px] bg-white/95 dark:bg-black/95"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          {/* <Link
            href="/"
            className={`text-black hover:opacity-70 dark:text-white transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}
          >
            {profile.name.split(" / ")[1]}
          </Link> */}

          {/* PC用ナビゲーション（左側） */}
          <nav className="hidden@md: flex @md: items-center @md: gap-6">
            {leftNavigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={`font-medium text-black hover:opacity-70 dark:text-white ${
                  isScrolled ? "text-sm" : "text-base"
                } transition-all duration-300`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* PC用ナビゲーション（右側） */}
        <nav className="hidden@md:flex@md: items-center">
          {rightNavigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className={`font-medium text-black hover:opacity-70 dark:text-white ${
                isScrolled ? "text-sm" : "text-base"
              } transition-all duration-300`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイル用ハンバーガーボタン */}
        {/* <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-black dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-black dark:text-white" />
          )}
        </button> */}
      </div>

      {/* モバイル用メニュー */}
      {/* {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 border-b border-black/10 bg-white dark:border-white/10 dark:bg-black md:hidden">
          <div className="mx-auto w-full max-w-4xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleLinkClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="text-base font-medium text-black transition-opacity hover:opacity-70 dark:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )} */}
    </header>
  );
}

