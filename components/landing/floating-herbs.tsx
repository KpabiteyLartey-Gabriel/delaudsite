"use client"

import { Leaf, Flower2, Sprout, TreeDeciduous } from "lucide-react"
import { cn } from "@/lib/utils"

const HERBS = [
  { Icon: Leaf, className: "left-[6%] top-[22%]", delay: "0s", size: 32, opacity: 0.4 },
  { Icon: Flower2, className: "right-[10%] top-[14%]", delay: "1.2s", size: 28, opacity: 0.35 },
  { Icon: Sprout, className: "left-[14%] bottom-[28%]", delay: "2.4s", size: 24, opacity: 0.3 },
  { Icon: TreeDeciduous, className: "right-[6%] bottom-[22%]", delay: "0.8s", size: 36, opacity: 0.25 },
  { Icon: Leaf, className: "left-[42%] top-[8%]", delay: "1.8s", size: 20, opacity: 0.28 },
  { Icon: Flower2, className: "right-[38%] bottom-[12%]", delay: "3s", size: 22, opacity: 0.32 },
  { Icon: Leaf, className: "left-[78%] top-[38%]", delay: "2s", size: 26, opacity: 0.22 },
  { Icon: Sprout, className: "left-[4%] top-[52%]", delay: "1.5s", size: 30, opacity: 0.26 },
]

export function FloatingHerbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {HERBS.map(({ Icon, className: pos, delay, size, opacity }, i) => (
        <Icon
          key={i}
          className={cn("absolute text-[#4a6741] animate-herb-float", pos)}
          style={{
            width: size,
            height: size,
            opacity,
            animationDelay: delay,
          }}
        />
      ))}
    </div>
  )
}
