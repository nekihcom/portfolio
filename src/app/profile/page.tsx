import { detailedProfile } from "@/constants/profile";
import { DetailedProfileSection } from "@/components/sections/DetailedProfileSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";

export default function ProfilePage() {
  return (
    <div className="dark:bg-black">
      <main className="px-8 sm:px-6">
        <DetailedProfileSection profile={detailedProfile} />
        {detailedProfile.skills && (
          <SkillsSection skills={detailedProfile.skills} />
        )}
        {detailedProfile.workExperience && (
          <WorkExperienceSection workExperience={detailedProfile.workExperience} />
        )}
        {detailedProfile.projects && (
          <ProjectsSection projects={detailedProfile.projects} />
        )}
        {detailedProfile.certifications && (
          <CertificationsSection certifications={detailedProfile.certifications} />
        )}
      </main>
    </div>
  );
}
