import type { Profile } from "@/types/type";
import { SocialLinks } from "@/components/common/SocialLinks";
import { SectionContainer } from "@/components/common/SectionContainer";

interface ProfileSectionProps {
  profile: Profile;
}

const iconPaths = {
  x: "/sns/x-icon.png",
  youtube: "/sns/youtube-icon.png",
  note: "/sns/note-icon.svg",
  qiita: "/sns/qiita-icon.png",
} as const;

const sectionTitle = "PROFILE";

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <SectionContainer sectionTitle={sectionTitle} className="flex flex-col gap-6 sm:gap-8 mb-[300px]">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* 左側: プロフィール画像 */}
        <div className="relative mx-auto size-60 shrink-0 overflow-hidden rounded-full bg-black dark:bg-white md:mx-0">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="size-full object-cover"
          />
        </div>
        {/* 右側: 名前、職業、SNSリンク、bio、リンク */}
        <div className="flex w-full flex-col gap-7 md:items-start">
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
            <div className="flex justify-center md:block">
              <p
                className="max-w-md leading-relaxed dark:text-white/70 sm:text-base"
                dangerouslySetInnerHTML={{ __html: profile.bio }}
              />
            </div>
          )}
          {/* <div className="flex justify-end pt-2 md:justify-start">
            <MoreLink href="/profile" />
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
}

