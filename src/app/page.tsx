import { Profile } from "@/components/sections/Profile"
import Works from "@/components/sections/Works"
import Contact from "@/components/sections/Contact"
import Qiita from "@/components/sections/Qiita"

export default function Home() {
  return (
    <div>
      <main className="py-4 pt-24">
        <Profile />
        <Works />
        <Qiita />
        <Contact />
      </main>
    </div>
  )
}
