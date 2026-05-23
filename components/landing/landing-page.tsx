"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FloatingHerbs } from "@/components/landing/floating-herbs"
import { HeroCarousel } from "@/components/landing/hero-carousel"
import { ServicesCarousel } from "@/components/landing/services-carousel"
import { WellnessMarquee } from "@/components/landing/wellness-marquee"
import { ScrollReveal } from "@/components/landing/scroll-reveal"
import { HealingModalities } from "@/components/landing/healing-modalities"

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#modalities", label: "Technologies" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact" },
]

const PILLARS = [
  "Rooted in nature, backed by experience",
  "Personalized care for every patient",
  "Holistic mind–body–spirit wellness",
  "Safe, gentle, time-honored therapies",
]

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className="min-h-screen bg-white text-[#2c3e2a] selection:bg-[#4a6741]/25">
      {/* Navigation */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-sm shadow-[#2c3e2a]/5 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.jpg"
              alt="Delauds Herbal Healthcare"
              width={500}
              height={146}
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:brightness-105 sm:h-20"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-[#4a5d47] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#4a6741] after:transition-transform after:duration-300 hover:text-[#4a6741] hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            {/* <Button
              asChild
              variant="outline"
              className="border-[#4a6741]/30 bg-transparent text-[#4a6741] hover:bg-[#4a6741]/10"
            >
              <Link href="/dashboard">Provider Login</Link>
            </Button> */}
            <Button
              asChild
              className="group bg-[#4a6741] text-[#eefbf2] shadow-md shadow-[#4a6741]/25 transition-transform duration-300 hover:scale-[1.03] hover:bg-[#3d5636] active:scale-[0.98]"
            >
              <Link href="/register">
                Book Consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-[#4a6741] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#4a6741]/10 bg-white px-5 py-6 md:hidden">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-[#2c3e2a]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild className="w-full bg-[#4a6741] text-[#eefbf2]">
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#4a6741]/30">
                <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                  Provider Login
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-x-clip pt-28 pb-20 lg:pt-36 lg:pb-28">
        <FloatingHerbs className="z-0" />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#8b9a7d]/20 blur-3xl animate-pulse-soft"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-[#c17f59]/10 blur-3xl animate-blob-drift"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a6741' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-xl">
            <ScrollReveal immediate delay={0} variant="fade">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4a6741]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4a6741] shadow-sm">
                <Leaf className="h-3.5 w-3.5 animate-wiggle" />
                Natural healing in Accra
              </p>
            </ScrollReveal>
            <ScrollReveal immediate delay={80} variant="up">
              <h1 className="font-display text-4xl font-semibold leading-[1.15] text-[#2c3e2a] sm:text-5xl lg:text-[3.25rem]">
                Restore balance with{" "}
                <span className="bg-gradient-to-r from-[#4a6741] via-[#5a7d52] to-[#4a6741] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                  herbal wisdom
                </span>{" "}
                & holistic care
              </h1>
            </ScrollReveal>
            <ScrollReveal immediate delay={160} variant="up">
              <p className="mt-6 text-lg leading-relaxed text-[#5a6b56]">
                At Delauds Herbal Healthcare, we blend naturopathy, massage,
                detox, acupuncture, and plant-based medicine to help you feel
                whole again — naturally.
              </p>
            </ScrollReveal>
            <ScrollReveal immediate delay={240} variant="up">
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 bg-[#4a6741] px-8 text-base text-[#eefbf2] shadow-lg shadow-[#4a6741]/20 transition-transform duration-300 hover:scale-[1.03] hover:bg-[#3d5636] active:scale-[0.98]"
                >
                  <Link href="/register">
                    Start Your Wellness Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-[#4a6741]/30 bg-white/50 px-8 text-base text-[#4a6741] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] hover:bg-white"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal immediate delay={320} variant="up">
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6b7f63]">
                {["Licensed practitioners", "Herbal remedies", "Holistic plans"].map(
                  (item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5"
                      style={{ animationDelay: `${400 + i * 80}ms` }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#4a6741] transition-transform duration-300 hover:scale-110" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal immediate delay={120} variant="scale" className="relative min-h-[320px] sm:min-h-[400px]">
            <HeroCarousel />
          </ScrollReveal>
        </div>
      </section>

      <WellnessMarquee />


      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c17f59]">
              What we offer
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c3e2a] sm:text-4xl">
              Holistic therapies for every season of life
            </h2>
            <p className="mt-4 text-[#5a6b56]">
              From deep tissue relief to gentle detox and energy balancing — our
              treatments are crafted to heal you at the root.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} variant="scale">
            <ServicesCarousel />
          </ScrollReveal>
        </div>
      </section>

      <HealingModalities />

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <ScrollReveal variant="left" className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group overflow-hidden rounded-2xl border border-[#4a6741]/10 shadow-md">
                  <Image
                    src="/logo1.jpeg"
                    alt="Herbal ingredients"
                    width={280}
                    height={320}
                    className="aspect-[7/8] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <ScrollReveal delay={120} variant="scale">
                  <div className="rounded-2xl border border-[#c17f59]/20 bg-[#c17f59]/10 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Leaf className="h-8 w-8 text-[#c17f59] transition-transform duration-500 hover:rotate-12" />
                    <p className="mt-2 font-display text-lg font-medium text-[#2c3e2a]">
                      100% natural focus
                    </p>
                    <p className="mt-1 text-sm text-[#5a6b56]">
                      Plant-based remedies & gentle therapies
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="pt-8">
                <div className="group overflow-hidden rounded-2xl border border-[#4a6741]/10 shadow-md">
                  <Image
                    src="/profile.png"
                    alt="Wellness practitioner"
                    width={280}
                    height={360}
                    className="aspect-[7/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={80} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4a6741]">
              About Delauds
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#2c3e2a] sm:text-4xl">
              Healing rooted in nature, guided by compassion
            </h2>
            <p className="mt-6 leading-relaxed text-[#5a6b56]">
              Delauds Herbal Healthcare is a sanctuary for those seeking
              alternatives to conventional medicine. We believe the earth
              provides everything needed for vitality — and our role is to
              listen, assess, and apply those gifts with skill and care.
            </p>
            <p className="mt-4 leading-relaxed text-[#5a6b56]">
              Whether you need relief from chronic pain, support through a
              cleanse, or balance through acupuncture, our team creates a path
              that honors your body and your story.
            </p>
            <Button
              asChild
              className="mt-8 bg-[#4a6741] text-[#eefbf2] transition-transform duration-300 hover:scale-[1.03] hover:bg-[#3d5636] active:scale-[0.98]"
            >
              <Link href="/register">Register as a New Patient</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="scroll-mt-24 bg-[#4a6741] py-20 text-[#eefbf2] lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8c4a8]">
                Our philosophy
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Why patients choose natural care
              </h2>
              <p className="mt-4 text-[#d4dcc8]">
                We treat symptoms and their sources — using therapies that work
                with your body, not against it.
              </p>
            </ScrollReveal>
            <ul className="space-y-4">
              {PILLARS.map((pillar, i) => (
                <li key={pillar}>
                  <ScrollReveal delay={i * 90} variant="right">
                    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform duration-300 hover:translate-x-1 hover:bg-white/10">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eefbf2]/15 font-display text-sm font-semibold text-[#e8e0d4]">
                        {i + 1}
                      </span>
                      <span className="font-medium text-[#eefbf2]">{pillar}</span>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <ScrollReveal variant="scale">
            <div className="overflow-hidden rounded-3xl border border-[#4a6741]/15 bg-white p-8 shadow-xl shadow-[#4a6741]/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#4a6741]/10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <ScrollReveal variant="up" delay={80}>
                  <div>
                    <h2 className="font-display text-3xl font-semibold text-[#2c3e2a] sm:text-4xl">
                      Visit us in Adenta
                    </h2>
                    <p className="mt-4 text-[#5a6b56]">
                      Ready to begin? Book your consultation online or reach out —
                      we&apos;re here to welcome you on your healing journey.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="group mt-8 bg-[#c17f59] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-[#a86d4a] active:scale-[0.98]"
                    >
                      <Link href="/register">
                        Book Your First Visit
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>

                <ul className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "Adenta SSNIT Flats, 75 Junction, Accra — Ghana",
                      href: undefined,
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "0244 138 296",
                      href: "tel:+233244138296",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "alwayscan24@gmail.com",
                      href: "mailto:alwayscan24@gmail.com",
                    },
                  ].map((item, i) => (
                    <li key={item.title}>
                      <ScrollReveal delay={120 + i * 80} variant="right">
                        <div className="flex gap-4 transition-transform duration-300 hover:translate-x-1">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4a6741]/10 text-[#4a6741] transition-colors duration-300 hover:bg-[#4a6741]/20">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-[#2c3e2a]">{item.title}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm text-[#4a6741] hover:underline"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-sm text-[#5a6b56]">{item.content}</p>
                            )}
                          </div>
                        </div>
                      </ScrollReveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4a6741]/10 bg-[#2c3e2a] py-12 text-[#b8c4a8]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Image
              src="/logo.jpg"
              alt="Delauds Herbal Healthcare"
              width={500}
              height={146}
              className="h-16 w-auto rounded-md bg-white/95 object-contain p-1 sm:h-20"
            />
            <p className="text-xs">Naturopathy · Massage · Detox · Acupuncture</p>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Delauds. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
