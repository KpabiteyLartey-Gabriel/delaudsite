"use client"

import { useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

export function useCarouselAutoplay(
  api: CarouselApi | undefined,
  intervalMs = 5000
) {
  useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, intervalMs)

    return () => clearInterval(timer)
  }, [api, intervalMs])
}
