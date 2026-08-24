"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_FORM_URL, SITE_NAME, SNS_LINKS } from "@/lib/site";

const NAV_LINKS = [
  { label: "Profile", href: "/profile" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative border-b border-gray-divider">
      <div className="flex items-center justify-between px-6 py-4.5 pc:px-30 pc:py-6.5 max-w-360 mx-auto w-full">
        <Link
          href="/"
          className="font-mono text-[15px] font-medium text-foreground pc:text-[18px]"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium pc:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "border-b-2 border-accent pb-[3px] text-foreground"
                    : "pb-[3px] text-gray-sub transition-colors duration-150 hover:text-accent"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-sub transition-colors duration-150 hover:text-accent"
          >
            Contact ↗<span className="sr-only">（新しいタブで開きます）</span>
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-[22px] w-[22px] flex-col justify-center gap-[5px] pc:hidden"
        >
          {isMenuOpen ? (
            <span className="text-xl leading-none text-foreground">×</span>
          ) : (
            <>
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-full bg-foreground" />
            </>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-[59px] z-50 flex flex-col justify-between bg-background p-6 pc:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-foreground"
            >
              Contact ↗<span className="sr-only">（新しいタブで開きます）</span>
            </a>
          </nav>
          <div className="flex gap-3 font-mono text-xs">
            {SNS_LINKS.map((sns) => (
              <a
                key={sns.href}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sns.name}
                className="flex h-9 w-9 items-center justify-center border border-gray-border"
              >
                {sns.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
