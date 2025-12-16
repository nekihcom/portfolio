import Image from "next/image";

import type { IProfile } from "@/types/type";
import SocialLinkList from "@/components/common/SocialLinkList";

type Props = {
  profile: IProfile;
}
const ProfileCard = ({ profile }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-[95%] max-w-[350px] pb-8 overflow-hidden">
      <div className="relative h-48 rounded-t-lg overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-br from-white via-gray-300 to-black-600"></div>
        <div className="relative z-10">
          <Image src={process.env.PROFILE_IMAGE_PATH ?? ''} alt={"プロフィール画像"} width={96} height={96}
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover mx-auto" />
        </div>
      </div>
      <div className="mt-8 text-center px-6">
        <h2 className="text-lg font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-500 text-sm mt-1">{profile.job}</p>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <SocialLinkList links={profile.link} />
      </div>
      <div className="mt-6 px-6 text-center text-gray-700 text-sm">
        <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
      </div>
    </div>

  );
};

export default ProfileCard;