import type { IProfile } from "@/types/type";
import SectionContainer from "@/components/common/SectionContainer";
import Profile from "@/components/features/profile/Profile";

const PROFILE_FILE_PATH = "@/data/profile.json";

export const TopProfileSection = async () => {

  const profile: IProfile = await import(PROFILE_FILE_PATH);

  return (
    <SectionContainer className="py-10">
      <div className="flex flex-col items-center gap-4">
        {profile && <Profile profile={profile} />}
      </div>
    </SectionContainer>
  );
};