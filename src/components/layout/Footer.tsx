import { profile } from "@/constants/profile";
import { SocialLinks } from "@/components/common/SocialLinks";

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
      <div className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* SNSリンク */}
          <SocialLinks
            socialLinks={profile.socialLinks}
            iconPaths={iconPaths}
            className="flex-wrap"
          />

          {/* コピーライト */}
          <p className="text-sm text-white/70">
            © {currentYear} {profile.name.split(" / ")[1]}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

