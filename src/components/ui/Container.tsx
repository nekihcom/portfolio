import { cn } from "@/lib/utils"
import { containerWidth } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className="w-full flex justify-center">
      <div className={cn(
        `${containerWidth.sm} md:${containerWidth.md} lg:${containerWidth.lg}`,
        className
      )}>
        {children}
      </div>
    </div>
  )
} 