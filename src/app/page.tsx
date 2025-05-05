// import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MainVisual } from "@/components/layout/MainVisual"
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
        <main>
          <MainVisual />
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
