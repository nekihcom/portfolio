interface DevEnvironmentProps {
  className?: string
}

export function DevEnvironment({ className }: DevEnvironmentProps) {
  const isDev = process.env.NODE_ENV === "development"

  if (!isDev) return null

  return (
    <div className={`bg-teal-100 text-teal-800 text-center py-2 z-40 ${className || ""}`}>
      開発環境です
    </div>
  )
} 