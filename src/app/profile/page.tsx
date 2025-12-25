import type { IProfile } from "@/types/type";
import CareerSection from "@/components/features/profile/CareerSection";
import SkillsSection from "@/components/features/profile/SkillsSection";
import CertificationsSection from "@/components/features/profile/CertificationsSection";
import SectionContainer from "@/components/common/SectionContainer";
import Profile from "@/components/features/profile/Profile";
import WorkSection from "@/components/sections/WorkSection";

const PROFILE_FILE_PATH = "@/data/profile.json";

export default async function ProfilePage() {
  const profile: IProfile = await import(PROFILE_FILE_PATH);

  return (
    <div className="min-h-screen">
      <SectionContainer className="py-10">
        <Profile profile={profile} />
      </SectionContainer>

      <SectionContainer className="py-10" title="略歴" subtitle="Career">
        <CareerSection career={profile.career} />
      </SectionContainer>

      <SectionContainer className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.certifications && (
            <CertificationsSection certifications={profile.certifications} />
          )}
          {profile.skills && (
            <SkillsSection skills={profile.skills} />
          )}
        </div>
      </SectionContainer>

      <WorkSection />
    </div>
  );
}
