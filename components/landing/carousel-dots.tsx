"use client"

import { cn } from "@/lib/utils"
import type { CarouselApi } from "@/components/ui/carousel"

type CarouselDotsProps = {
  api: CarouselApi | undefined
  count: number
  selected: number
  className?: string
}

export function CarouselDots({
  api,
  count,
  selected,
  className,
}: CarouselDotsProps) {
  return (
    <div className={cn("flex justify-center gap-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => api?.scrollTo(i)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            selected === i
              ? "w-8 bg-[#4a6741]"
              : "w-2 bg-[#4a6741]/30 hover:bg-[#4a6741]/50"
          )}
        />
      ))}
    </div>
  )
}
