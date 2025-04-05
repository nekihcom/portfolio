"use client"

interface DevEnvironmentProps {
  className?: string
}

export function DevEnvironment({ className }: DevEnvironmentProps) {
  const isDev = process.env.NODE_ENV === "development"

  if (!isDev) return null

  return (
    <div className={`fixed top-16 left-0 right-0 z-50 bg-teal-100 text-teal-800 text-center py-2 ${className || ""}`}>
      開発環境です
    </div>
  )
} 