import type { Profile } from "@/types/type";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-[100px]">
      <div className="flex min-h-[80vh] items-center justify-center dark:bg-black">
        <div className="w-full">
          <h1 className="mb-4 text-7xl font-bold text-black dark:text-white sm:text-8xl md:text-9xl">
            MOCHIKEN
          </h1>
          <p className="text-5xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
            SOFTWARE ENGINEER
          </p>
        </div>
      </div>
    </section>
  );
}

