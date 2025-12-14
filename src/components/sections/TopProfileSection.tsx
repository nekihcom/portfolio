import { getProfile } from "@/services/profile";
import type { IProfile } from "@/types/type";
import SectionContainer from "@/components/common/SectionContainer";
import Profile from "@/components/features/profile/Profile";

export const TopProfileSection = async () => {

  const profile: IProfile | null = await getProfile();

  return (
    <SectionContainer className="py-10">
      <div className="flex flex-col items-center gap-4">
        {profile && <Profile profile={profile} />}
      </div>
    </SectionContainer>
  );
};