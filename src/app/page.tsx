import { Footer } from "@/components/layout/Footer"
import { Profile } from "@/components/sections/Profile"
import Works from "@/components/sections/Works"
import Contact from "@/components/sections/Contact"
import { DevEnvironment } from "@/components/ui/DevEnvironment"
import Note from "@/components/sections/Note"
import Qiita from "@/components/sections/Qiita"

export default function Home() {
  return (
    <>
      <DevEnvironment />
      <div>
        <main className="py-4">
          <Profile />
          <Works />
          <Qiita />
          <Note />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}
