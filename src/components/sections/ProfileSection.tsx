import Link from "next/link";
import { Twitter, Youtube, ExternalLink } from "lucide-react";
import type { Profile } from "@/types/profile";

interface ProfileSectionProps {
  profile: Profile;
}

const iconMap = {
  x: Twitter,
  youtube: Youtube,
  note: ExternalLink,
  qiita: ExternalLink,
};

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 pb-12 sm:gap-8">
      <div className="relative size-32 overflow-hidden rounded-full bg-black dark:bg-white sm:size-40">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold text-black dark:text-white sm:text-3xl">
          {profile.name}
        </h1>
        <p className="text-base text-black/60 dark:text-white/60 sm:text-lg">
          {profile.occupation}
        </p>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4">
        {profile.socialLinks.map((link) => {
          const Icon = iconMap[link.platform];
          return (
            <Link
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-black hover:text-black/60 dark:text-white dark:hover:text-white/60 transition-colors"
              aria-label={`${link.platform}のプロフィール`}
            >
              <Icon className="size-5" />
              <span className="capitalize">{link.platform}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

