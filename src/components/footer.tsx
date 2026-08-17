import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex w-full max-w-240 items-center justify-between px-6 py-4 pc:py-5 text-sm text-foreground/70">
        <p>
          © {year} {SITE_NAME}
        </p>
        <Link href="/privacy" className="hover:text-accent">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
