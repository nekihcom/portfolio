import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className={cn(
      "bg-gray-50",
      "border-t border-gray-200",
      "py-8"
    )}>
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 