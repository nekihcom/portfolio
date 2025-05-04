"use client"

import { lazy, Suspense } from "react"

const ParallaxProvider = lazy(() => import("react-scroll-parallax").then((mod) => ({ default: mod.ParallaxProvider })))

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </Suspense>
  )
} 