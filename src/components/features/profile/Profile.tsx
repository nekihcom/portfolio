import Image from "next/image";

import type { IProfile } from "@/types/type";
import SocialLinkList from "@/components/common/SocialLinkList";

type Props = {
  profile: IProfile;
}

const Profile = ({ profile }: Props) => {
  return (
    <div className="w-full max-w-lg mx-auto p-6">
      {/* 上段：プロフィール画像と基本情報 */}
      <div className="flex flex-col items-center gap-4 mb-6@ md:flex-row md:items-start md:gap-6">
        {/* 左側：プロフィール画像 */}
        {profile.thumbnail && (
          <div className="shrink-0">
            <Image
              src={profile.thumbnail}
              alt={profile.name || "プロフィール画像"}
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-gray-300"
            />
          </div>
        )}
        
        {/* 右側：名前、職業、SNSリンク */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {profile.name}
          </h2>
          {profile.job && (
            <p className="text-sm text-gray-600 mb-4">
              {profile.job}
            </p>
          )}
          
          {/* ソーシャルリンク */}
          {profile.link && Object.keys(profile.link).length > 0 && (
            <div className="flex justify-center md:justify-start">
              <SocialLinkList links={profile.link} />
            </div>
          )}
        </div>
      </div>
      
      {/* 下段：BIO */}
      {profile.bio && (
        <div className="pt-6">
          <div
            className=" text-gray-700 leading-relaxed flex justify-center"
            dangerouslySetInnerHTML={{ __html: profile.bio }}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;