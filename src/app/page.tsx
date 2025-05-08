import { Profile } from "@/components/sections/Profile"
import Works from "@/components/sections/Works"
import Contact from "@/components/sections/Contact"
import Blog from "@/components/sections/Blog"

export default function Home() {
  return (
    <div>
      <main className="py-4 pt-24">
        <Profile />
        <Works />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}
