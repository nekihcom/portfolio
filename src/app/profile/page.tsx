import { detailedProfile } from "@/constants/profile";
import { DetailedProfileSection } from "@/components/sections/DetailedProfileSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkExperienceSection } from "@/components/sections/WorkExperienceSection";

export default function ProfilePage() {
  return (
    <div className="min-h-screen  dark:bg-black">
      <main className="px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <div className="pt-24 h-[calc(100vh-200px)]">
          <DetailedProfileSection profile={detailedProfile} />
        </div>
        {detailedProfile.skills && (
          <div className="h-[calc(100vh-200px)]">
            <SkillsSection skills={detailedProfile.skills} />
          </div>
        )}
        {detailedProfile.workExperience && (
          <div className="h-[calc(100vh-200px)]">
            <WorkExperienceSection
              workExperience={detailedProfile.workExperience}
            />
          </div>
        )}
        {detailedProfile.projects && (
          <div className="h-[calc(75vh-200px)]">
            <ProjectsSection projects={detailedProfile.projects} />
          </div>
        )}
        {detailedProfile.certifications && (
          <div className="h-[calc(100vh-200px)]">
            <CertificationsSection
              certifications={detailedProfile.certifications}
            />
          </div>
        )}
      </main>
    </div>
  );
}
