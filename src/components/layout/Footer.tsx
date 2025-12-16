import Container from "@/components/common/Container";
import SocialLinkList from "@/components/common/SocialLinkList";
import type { IProfile } from "@/types/type";

const PROFILE_FILE_PATH = "@/data/profile.json";

export const Footer = async () => {
  const profile: IProfile = await import(PROFILE_FILE_PATH);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <Container>
        {/* スマートフォン・タブレット表示: SNSリンク → コピーライト（縦並び） */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* SNSリンク */}
          {profile?.link && Object.keys(profile.link).length > 0 && (
            <div>
              <SocialLinkList links={profile.link} />
            </div>
          )}
          {/* コピーライト */}
          <div className="text-sm text-gray-600">
            © {currentYear} {profile?.name} All rights reserved.
          </div>
        </div>
        
        {/* PC表示: コピーライト（左）とSNSリンク（右）を横並び */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* コピーライト（左側） */}
          <div className="text-sm text-gray-600">
            © {currentYear} {profile?.name.split('/ ')[1]} All rights reserved.
          </div>
          
          {/* SNSリンク（右側） */}
          {profile?.link && Object.keys(profile.link).length > 0 && (
            <div>
              <SocialLinkList links={profile.link} />
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

