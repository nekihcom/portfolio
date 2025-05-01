import Link from "next/link"
import { navigationLinks } from "@/data/navigation"

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Mochiken's Portfolio
              </Link>
            </div>
            {/* <nav className="ml-6 flex space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {link.name}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  )
} 