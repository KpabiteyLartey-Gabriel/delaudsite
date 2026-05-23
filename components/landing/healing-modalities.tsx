"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Sparkles,
  Vibrate,
  Droplets,
  Activity,
  Sun,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/landing/scroll-reveal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export type HealingModality = {
  icon: LucideIcon
  title: string
  description: string
  iconBg: string
  accent: string
  image: string
  imageAlt: string
}

/** Unsplash — free to use; swap URLs anytime or replace with your own /public/modalities/ photos */
const unsplash = (id: string) =>
  `/modalities/${id}.jpg`

export const HEALING_MODALITIES: HealingModality[] = [
  {
    icon: Sparkles,
    title: "Acupuncture",
    description:
      "Traditional Chinese medicine meets modern precision to stimulate the body's natural healing response, relieve pain, and restore energetic balance.",
    iconBg: "bg-[#4a6741]/10 text-[#4a6741]",
    accent: "from-emerald-600/15 to-transparent",
    image: "/modalities/acupuncture.png",
    imageAlt: "Acupuncture needles during a holistic treatment session",
  },
  {
    icon: Vibrate,
    title: "G5 Mechanical Massage",
    description:
      "A deep-tissue therapeutic system utilizing mechanical percussive vibration to improve circulation, relieve muscle tension, and accelerate lymphatic drainage.",
    iconBg: "bg-[#c17f59]/15 text-[#a86d4a]",
    accent: "from-amber-600/15 to-transparent",
    image: "modalities/g5.jpg",
    imageAlt: "Therapeutic deep-tissue massage treatment",
  },
  {
    icon: Droplets,
    title: "Ionic Detox Therapy",
    description:
      "A gentle foot-bath therapy that uses ionized warm salt water to support the body's natural detox pathways, ease fluid retention, improve circulation, and promote a lighter, more balanced feeling.",
    iconBg: "bg-teal-600/10 text-teal-700",
    accent: "from-teal-600/15 to-transparent",
    image:"modalities/detox.jpg",
    imageAlt: "Relaxing foot spa detox and wellness therapy",
  },
  {
    icon: Activity,
    title: "Biofeedback",
    description:
      "Real-time monitoring of physiological signals helps you understand stress patterns and train your body toward calmer, more balanced responses.",
    iconBg: "bg-violet-600/10 text-violet-700",
    accent: "from-violet-600/15 to-transparent",
    image: "/modalities/biofeedback.jpg",
    imageAlt: "Wellness practitioner reviewing health monitoring data",
  },
  {
    icon: Sun,
    title: "Naturopathic Consultation & Wellness Advice",
    description:
      "Partner with an experienced practitioner to evaluate your holistic health profile, uncover root causes, and co-create a personalized natural recovery roadmap.",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    image: "/modalities/consult.png",
    imageAlt: "Naturopathic practitioner conducting an individual holistic health assessment and wellness consultation",
  },
]

type HealingModalitiesProps = {
  className?: string
}

export function HealingModalities({ className }: HealingModalitiesProps) {
  const [activeModality, setActiveModality] =
    useState<HealingModality | null>(null)

  const getPreview = (text: string, max = 130) => {
    if (text.length <= max) {
      return text
    }

    return `${text.slice(0, max).trimEnd()}...`
  }

  return (
    <section
      id="modalities"
      className={cn(
        "scroll-mt-24 border-y border-[#4a6741]/8 bg-gradient-to-b from-[#f8faf8] via-white to-white py-20 lg:py-28",
        className
      )}
      aria-labelledby="modalities-heading"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4a6741]">
            Our healing modalities
          </p>
          <h2
            id="modalities-heading"
            className="mt-3 font-display text-3xl font-semibold text-[#2c3e2a] sm:text-4xl"
          >
            Modern Tools, Timeless Healing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5a6b56] sm:text-lg">
            We blend time-tested holistic traditions with modern, non-invasive
            technology to support your body&apos;s natural path to wellness.
            Explore the advanced systems we use to accelerate your healing.
          </p>
        </ScrollReveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {HEALING_MODALITIES.map((modality, index) => (
            <li key={modality.title} className="h-full">
              <ScrollReveal delay={index * 70} variant="up" className="h-full">
                <button
                  type="button"
                  onClick={() => setActiveModality(modality)}
                  className="h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a6741]/60 focus-visible:ring-offset-2"
                  aria-label={`Read more about ${modality.title}`}
                >
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#4a6741]/10 bg-white shadow-sm",
                      "transition-all duration-500 ease-out",
                      "hover:-translate-y-2 hover:border-[#4a6741]/20 hover:shadow-xl hover:shadow-[#4a6741]/15"
                    )}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={modality.image}
                        alt={modality.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#2c3e2a]/55 via-[#2c3e2a]/10 to-transparent"
                        aria-hidden
                      />
                      <div
                        className={cn(
                          "absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl shadow-md transition",
                          "bg-white/95 group-hover:scale-105",
                          modality.iconBg
                        )}
                      >
                        <modality.icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-5">
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                          modality.accent
                        )}
                        aria-hidden
                      />
                      <div className="relative flex h-full flex-col">
                        <h3 className="font-display text-xl font-semibold text-[#2c3e2a]">
                          {modality.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6b56]">
                          {getPreview(modality.description)}
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#4a6741]">
                          Read more
                        </p>
                      </div>
                    </div>
                  </article>
                </button>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <Dialog
          open={activeModality !== null}
          onOpenChange={(open) => {
            if (!open) {
              setActiveModality(null)
            }
          }}
        >
          <DialogContent className="max-w-2xl overflow-hidden border-[#4a6741]/20 p-0">
            {activeModality && (
              <>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={activeModality.image}
                    alt={activeModality.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42rem"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#2c3e2a]/70 via-[#2c3e2a]/20 to-transparent"
                    aria-hidden
                  />
                </div>
                <DialogHeader className="space-y-3 px-6 pb-6 pt-2 sm:px-8">
                  <DialogTitle className="font-display text-2xl text-[#2c3e2a]">
                    {activeModality.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-[#4b5f47]">
                    {activeModality.description}
                  </DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>

        <ScrollReveal delay={200} variant="fade">
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#6b7f63]">
            Every modality is selected for safety, comfort, and alignment with our
            naturopathic philosophy — never as a replacement for thoughtful,
            personalized care.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
