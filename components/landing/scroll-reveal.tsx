"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  /** Play entrance on mount (hero / above-the-fold) */
  immediate?: boolean
}

const VARIANT_HIDDEN: Record<RevealVariant, string> = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  scale: "scale-[0.96] opacity-0",
  fade: "opacity-0",
}

const VARIANT_VISIBLE: Record<RevealVariant, string> = {
  up: "translate-y-0 opacity-100",
  down: "translate-y-0 opacity-100",
  left: "translate-x-0 opacity-100",
  right: "translate-x-0 opacity-100",
  scale: "scale-100 opacity-100",
  fade: "opacity-100",
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "up",
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reveal = () => setVisible(true)

    if (immediate) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(reveal)
      })
      return () => cancelAnimationFrame(id)
    }

    const el = ref.current
    if (!el) return

    if (isInViewport(el)) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)

    const fallback = window.setTimeout(() => {
      if (isInViewport(el)) reveal()
    }, 800)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [immediate])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        visible ? VARIANT_VISIBLE[variant] : VARIANT_HIDDEN[variant],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
