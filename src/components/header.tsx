import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between px-6 py-4 pc:py-5">
        <Link href="/" className="text-lg font-semibold">
          {SITE_NAME}
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
