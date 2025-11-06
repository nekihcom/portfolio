import { ProfileSection } from "@/components/sections/ProfileSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { detailedProfile } from "@/constants/profile";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <ProfileSection profile={detailedProfile} />
        <div className="space-y-[4.5rem] pt-12 sm:pt-16">
          {detailedProfile.skills && (
            <SkillsSection skills={detailedProfile.skills} />
          )}
          {detailedProfile.workExperience && (
            <WorkExperienceSection
              workExperience={detailedProfile.workExperience}
            />
          )}
          {detailedProfile.projects && (
            <ProjectsSection projects={detailedProfile.projects} />
          )}
          {detailedProfile.certifications && (
            <CertificationsSection
              certifications={detailedProfile.certifications}
            />
          )}
        </div>
      </main>
    </div>
  );
}
