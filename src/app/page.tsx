import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Profile } from "@/components/sections/Profile"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { DevEnvironment } from "@/components/ui/DevEnvironment"
import Note from "@/components/sections/Note"
import Qiita from "@/components/sections/Qiita"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <DevEnvironment />
      <Profile />
      <Projects />
      <Qiita />
      <Note />
      <Contact />
      <Footer />
    </main>
  )
}
