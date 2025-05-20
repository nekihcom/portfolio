import { Profile } from "@/components/sections/Profile"
import Works from "@/components/sections/Works"
import Contact from "@/components/sections/Contact"
import Qiita from "@/components/sections/Qiita"
import Note from "@/components/sections/Note"
export default function Home() {
  return (
    <div>
      <main className="py-4 pt-24">
        <Profile />
        <Works />
        <Qiita />
        <Note />
        <Contact />
      </main>
    </div>
  )
}
