"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { HERO_SLIDES } from "@/components/landing/constants"
import { CarouselDots } from "@/components/landing/carousel-dots"
import { useCarouselAutoplay } from "@/components/landing/use-carousel-autoplay"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setSelected(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  useCarouselAutoplay(api, 5500)

  useEffect(() => {
    if (!api) return
    const timer = window.setTimeout(() => api.reInit(), 150)
    return () => window.clearTimeout(timer)
  }, [api])

  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#4a6741]/20 via-transparent to-[#c17f59]/15 blur-2xl animate-pulse-soft" />
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-2xl shadow-[#2c3e2a]/15"
      >
        <CarouselContent className="ml-0">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.image} className="pl-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={cn(
                    "object-cover transition-transform ease-out",
                    selected === index ? "scale-105" : "scale-100"
                  )}
                  style={{ transitionDuration: "5.5s" }}
                  priority={index === 0}
                />
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2c3e2a]/85 via-[#2c3e2a]/45 to-transparent p-6 pt-24 transition-all duration-500",
                    selected === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  )}
                >
                  <p className="font-display text-xl font-medium text-[#eefbf2]">
                    {slide.title}
                  </p>
                  <p className="mt-1 text-sm text-[#dcefe0]">{slide.subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-[#4a6741]/20 bg-white/90 text-[#4a6741] hover:bg-white" />
        <CarouselNext className="right-3 border-[#4a6741]/20 bg-white/90 text-[#4a6741] hover:bg-white" />
      </Carousel>
      <CarouselDots
        api={api}
        count={HERO_SLIDES.length}
        selected={selected}
        className="mt-4"
      />
      <div
        className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-[#4a6741]/10 bg-white/90 p-4 shadow-xl backdrop-blur-sm lg:block animate-float-slow"
        aria-hidden
      >
        <p className="font-display text-3xl font-semibold text-[#4a6741]">15+</p>
        <p className="text-xs font-medium uppercase tracking-wider text-[#6b7f63]">
          Years of care
        </p>
      </div>
    </div>
  )
}
