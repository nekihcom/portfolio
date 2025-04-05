import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Profile } from "@/components/sections/Profile"
import { Projects } from "@/components/sections/Projects"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"
import { DevEnvironment } from "@/components/ui/DevEnvironment"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <DevEnvironment />
      <Profile />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
