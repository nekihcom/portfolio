import Image from "next/image"
import Link from "next/link"
import { Work } from "@/data/works"

export const WorkCard = (work: Work) => {
  return (
    <Link 
      href={work.url || "#"} 
      target={work.url ? "_blank" : undefined}
      rel={work.url ? "noopener noreferrer" : undefined}
      className="group relative block"
    >
      <div className="aspect-video relative">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">{work.title}</h3>
        </div>
      </div>
    </Link>
  )
} 