import Link from "next/link";
import type { Profile } from "@/types/type";
import { SectionTitle } from "../common/SectionTitle";
import { SocialLinks } from "../common/SocialLinks";

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
    <section className="flex flex-col gap-6 sm:gap-8 mb-[300px]">
      <SectionTitle>PROFILE</SectionTitle>
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
        {/* 左側: プロフィール画像 */}
        <div className="relative mx-auto size-48 shrink-0 overflow-hidden rounded-full bg-black dark:bg-white md:mx-0 sm:size-40">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="size-full object-cover"
          />
        </div>
        {/* 右側: 名前、職業、SNSリンク、bio、リンク */}
        <div className="flex w-full flex-col gap-8 md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold dark:text-white sm:text-3xl">
                {profile.name}
              </h1>
              <p className="text-base dark:text-white/60 sm:text-lg">
                - {profile.occupation} -
              </p>
            </div>
            <SocialLinks
              socialLinks={profile.socialLinks}
              iconPaths={iconPaths}
              className="md:justify-start"
            />
          </div>
          {profile.bio && (
            <>
              <p
                className="max-w-md leading-relaxed dark:text-white/70 sm:text-base"
                dangerouslySetInnerHTML={{ __html: profile.bio }}
              />
            </>
          )}
          {/* <div className="flex justify-center pt-2 md:justify-start">
            <Link
              href="/profile"
              className="text-sm text-primary underline-offset-4 transition-opacity hover:underline hover:opacity-70 dark:text-primary"
            >
              もっと知りたい →
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

