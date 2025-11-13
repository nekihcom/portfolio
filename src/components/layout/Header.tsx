import Link from "next/link";
import { profile } from "@/constants/profile";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
        <Link
          href="/"
          className="text-lg font-semibold text-black transition-opacity hover:opacity-70 dark:text-white sm:text-xl"
        >
          {profile.name.split(" / ")[1]}
        </Link>
      </div>
    </header>
  );
}

