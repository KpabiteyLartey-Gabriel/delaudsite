"use client"

import { Leaf } from "lucide-react"
import { MARQUEE_ITEMS } from "@/components/landing/constants"

export function WellnessMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className="relative overflow-hidden border-y border-[#4a6741]/10 bg-gray-50 py-4"
      aria-hidden
    >
      <div className="flex animate-marquee whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#4a6741]/80"
          >
            <Leaf className="h-3.5 w-3.5 shrink-0 text-[#4a6741]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
