import { Header } from "@/components/layout/Header"
import { MainVisual } from "@/components/layout/MainVisual"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  const isDev = process.env.NODE_ENV === "development"

  return (
    <main className="min-h-screen">
      <Header />
      {isDev && (
        <div className="fixed top-16 left-0 right-0 z-50 bg-yellow-100 text-yellow-800 text-center py-2">
          開発環境です
        </div>
      )}
      <MainVisual />
      <Footer />
    </main>
  )
}
