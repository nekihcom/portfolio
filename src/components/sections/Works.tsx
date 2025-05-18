import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { WorkCard } from "@/components/ui/WorkCard"
import { getWorks } from "@/lib/microcms"

export default async function Works() {
  const works = await getWorks();

  return (
    <SectionContainer id="works" className="my-24">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]"
          >
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
} 