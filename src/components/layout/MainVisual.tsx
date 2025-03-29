import { cn } from "@/lib/utils"

export function MainVisual() {
  return (
    <section className={cn(
      "relative h-screen",
      "flex items-center justify-center",
      "bg-gradient-to-b from-gray-50 to-white"
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-600">I'm a Full Stack Developer</p>
        </div>
      </div>
    </section>
  )
} 