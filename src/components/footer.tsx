import Link from "next/link";
import { SITE_NAME, SNS_LINKS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-divider">
      <div className="flex flex-col gap-5 px-6 py-8 pc:flex-row pc:items-center pc:justify-between pc:px-[120px] pc:py-[44px]">
        <div className="flex gap-3 pc:order-2 pc:gap-[14px]">
          {SNS_LINKS.map((sns) => (
            <a
              key={sns.href}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.name}
              className="flex h-9 w-9 items-center justify-center border border-gray-border font-mono text-xs text-foreground transition-colors duration-150 hover:border-foreground pc:h-[38px] pc:w-[38px]"
            >
              {sns.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-[10px] text-xs text-gray-sub pc:order-1 pc:flex-row pc:items-center pc:gap-7 pc:text-[13px]">
          <Link
            href="/privacy"
            className="transition-colors duration-150 hover:text-accent pc:order-2"
          >
            Privacy
          </Link>
          <span className="font-mono pc:order-1">
            © {year} {SITE_NAME}
          </span>
        </div>
      </div>
    </footer>
  );
}
