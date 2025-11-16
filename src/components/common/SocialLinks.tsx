import Link from "next/link";
import Image from "next/image";
import type { SocialLink } from "@/types/type";

interface SocialLinksProps {
  socialLinks: SocialLink[];
  iconPaths: {
    x: string;
    youtube: string;
    note: string;
    qiita: string;
  };
  className?: string;
  iconSize?: {
    x?: string;
    default?: string;
  };
}

export function SocialLinks({
  socialLinks,
  iconPaths,
  className = "",
  iconSize = { x: "size-5", default: "size-6" },
}: SocialLinksProps) {
  return (
    <nav className={`flex items-center justify-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
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
            className={link.platform === "x" ? iconSize.x : iconSize.default}
          />
        </Link>
      ))}
    </nav>
  );
}

