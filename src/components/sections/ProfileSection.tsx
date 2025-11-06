import Link from "next/link";
import Image from "next/image";
import type { Profile } from "@/types/type";

interface ProfileSectionProps {
  profile: Profile;
}

const iconPaths = {
  x: "/sns/x-icon.png",
  youtube: "/sns/youtube-icon.png",
  note: "/sns/note-icon.svg",
  qiita: "/sns/qiita-icon.png",
} as const;

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8">
      <div className="relative size-32 overflow-hidden rounded-full bg-black dark:bg-white sm:size-40">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="flex flex-col items-center gap-0 text-2xl font-semibold text-black dark:text-white sm:flex-row sm:gap-2 sm:text-3xl">
          {profile.name.split(" / ").map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="hidden sm:inline"> / </span>
              )}
            </span>
          ))}
        </h1>
        <p className="text-base text-black/60 dark:text-white/60 sm:text-lg">
          {profile.occupation}
        </p>
      </div>
      {profile.bio && (
        <p
          className="max-w-md text-center text-sm leading-relaxed text-black/70 dark:text-white/70 sm:text-base"
          dangerouslySetInnerHTML={{ __html: profile.bio }}
        />
      )}
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
    </section>
  );
}

