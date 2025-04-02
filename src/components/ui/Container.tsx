import { cn } from "@/lib/utils"
import { containerWidth } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className="container mx-auto px-4">
      <div className={cn(
        `${containerWidth.sm} md:${containerWidth.md} lg:${containerWidth.lg} mx-auto`,
        className
      )}>
        {children}
      </div>
    </div>
  )
} 