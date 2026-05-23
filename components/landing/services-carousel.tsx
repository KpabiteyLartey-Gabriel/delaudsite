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
import { SERVICES } from "@/components/landing/constants"
import { CarouselDots } from "@/components/landing/carousel-dots"
import { useCarouselAutoplay } from "@/components/landing/use-carousel-autoplay"
import { cn } from "@/lib/utils"

export function ServicesCarousel() {
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

  useCarouselAutoplay(api, 4500)

  useEffect(() => {
    if (!api) return
    const timer = window.setTimeout(() => api.reInit(), 100)
    return () => window.clearTimeout(timer)
  }, [api])

  return (
    <div className="relative mt-14 px-10 md:px-14">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {SERVICES.map((service) => (
            <CarouselItem
              key={service.title}
              className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#4a6741]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4a6741]/10">
                {/* Service image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#2c3e2a]/50 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div
                    className={cn(
                      "absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl shadow-md transition",
                      "bg-white/95 text-[#4a6741] group-hover:bg-[#4a6741] group-hover:text-white"
                    )}
                  >
                    <service.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Text content */}
                <div className="relative flex flex-1 flex-col p-5">
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 group-hover:opacity-100",
                      service.accent
                    )}
                    aria-hidden
                  />
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold text-[#2c3e2a]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a6b56]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 top-[42%] border-[#4a6741]/25 bg-white text-[#4a6741] shadow-md" />
        <CarouselNext className="right-0 top-[42%] border-[#4a6741]/25 bg-white text-[#4a6741] shadow-md" />
      </Carousel>
      <CarouselDots
        api={api}
        count={SERVICES.length}
        selected={selected}
        className="mt-8"
      />
    </div>
  )
}
