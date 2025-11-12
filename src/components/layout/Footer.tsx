import Link from "next/link";
import Image from "next/image";
import { profile } from "@/constants/profile";

const iconPaths = {
  x: "/sns/x-icon.svg",
  youtube: "/sns/youtube-icon-white.svg",
  note: "/sns/note-icon.svg",
  qiita: "/sns/qiita-icon-white.png",
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-black/95 text-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* SNSリンク */}
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {profile.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-60"
                aria-label={`${link.platform}のプロフィール`}
              >
                <Image
                  src={iconPaths[link.platform]}
                  alt={link.platform}
                  width={24}
                  height={24}
                  className="size-6"
                />
              </Link>
            ))}
          </nav>

          {/* コピーライト */}
          <p className="text-sm text-white/70">
            © {currentYear} {profile.name.split(" / ")[1]}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

