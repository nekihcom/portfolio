import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { profile } from "@/constants/profile";

export default async function Home() {

  return (
    <div className="min-h-screen dark:bg-black">
      <HeroSection profile={profile} />
      <main className="mx-auto w-full max-w-3xl px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <ProfileSection profile={profile} />
      </main>
    </div>
  );
}
