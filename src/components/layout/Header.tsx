import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-white/40 backdrop-blur-sm",
      "border-b border-gray-200",
      "px-4 py-4"
    )}>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
    </header>
  )
} 