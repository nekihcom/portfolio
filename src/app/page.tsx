import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Profile } from "@/components/sections/Profile"
import { Projects } from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import { DevEnvironment } from "@/components/ui/DevEnvironment"
import Note from "@/components/sections/Note"
import Qiita from "@/components/sections/Qiita"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <DevEnvironment /> */}
      <div>
        <main className="m-auto py-4 md:min-w-3xl md:w-2/3">
          <Profile />
          <Projects />
          <Qiita />
          <Note />
          <Contact />
        </main>
      </div>
      <Footer />

      
      {/* <div className="mt-28"> */}
        {/* <Projects /> */}
        {/* <Qiita /> */}
        {/* <Note /> */}
        {/* <Contact /> */}
      {/* </div> */}
    {/* </main> */}
    </>
  )
}
