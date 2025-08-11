import { ProfileData } from "@/data/ProfileData";
import { socialLinksData } from "@/data/SocialLinkData";
import { SocialLink } from "@/types/type";
import { SectionContainer } from "@/components/features/SectionContainer";
import Image from "next/image";

export function HeroSection() {
  return (
    <SectionContainer titleEn="ABOUT" className="mt-[7rem] ">
      <div className="max-w-[700px] mx-auto">
        <div className="flex justify-between">
          <Image
            src={ProfileData.profileImage} 
            alt="mchkn" 
            width={256}
            height={256}
            className={`w-64 h-64 mx-auto`}
          />
          <div className="w-[66%]">
            {/* 名前とSNSアイコン */}
            <div className="flex flex-row items-end justify-end border-b border-gray-800">
              <h1 className="mr-auto font-bold text-2xl">{ProfileData.name}</h1>
              {socialLinksData.map((link: SocialLink, index) => (
                <div key={index} className="mx-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
            {/* 職種 */}
            <div className="mb-4 font-bold text-xl">
              <p>{ProfileData.jobTitle}</p>
            </div>
            {/* 趣味 */}
            <div className="mb-4">
              <p>{ProfileData.hobbies}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
} 