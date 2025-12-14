import Container from "@/components/common/Container";
import { getProfile } from "@/services/profile";
import SocialLinkList from "@/components/common/SocialLinkList";

export const Footer = async () => {
  const profile = await getProfile();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <Container>
        {/* スマートフォン・タブレット表示: SNSリンク → コピーライト（縦並び） */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* SNSリンク */}
          {profile?.field_link && Object.keys(profile.field_link).length > 0 && (
            <div>
              <SocialLinkList links={profile.field_link} />
            </div>
          )}
          {/* コピーライト */}
          <div className="text-sm text-gray-600">
            © {currentYear} {profile?.title.split('/ ')[1]} All rights reserved.
          </div>
        </div>
        
        {/* PC表示: コピーライト（左）とSNSリンク（右）を横並び */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* コピーライト（左側） */}
          <div className="text-sm text-gray-600">
            © {currentYear} {profile?.title.split('/ ')[1]} All rights reserved.
          </div>
          
          {/* SNSリンク（右側） */}
          {profile?.field_link && Object.keys(profile.field_link).length > 0 && (
            <div>
              <SocialLinkList links={profile.field_link} />
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

