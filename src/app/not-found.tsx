import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { DevEnvironment } from "@/components/ui/DevEnvironment"

export default function NotFound() {
  return (
    <>
      <DevEnvironment />
      <div className="h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3">
              404
            </h1>
            <p className="text-lg mb-6">
              お探しのページは、どこかへ行ってしまったようです...
            </p>
            <Link
              href="/"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105"
            >
              トップページへ戻る
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
} 