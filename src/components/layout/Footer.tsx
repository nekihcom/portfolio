import { cn } from "@/lib/utils"
import { profileData } from "@/data/profile"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className={cn(
      "bg-teal-600",
      "border-t border-teal-700",
      "py-8"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {profileData.socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity text-white"
              >
                {link.iconImage ? (
                  <Image
                    src={link.iconImage}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.icon} />
                  </svg>
                )}
              </Link>
            ))}
          </div>
          <p className="text-center text-teal-100">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 