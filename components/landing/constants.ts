import {
  Leaf,
  Sparkles,
  Droplets,
  HandHeart,
  Flower2,
  HeartPulse,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  accent: string
  /** Path under /public — replace with your own service photos anytime */
  image: string
  imageAlt: string
}

export const SERVICES: Service[] = [
  {
    icon: Leaf,
    title: "Naturopathy",
    description:
      "Whole-person healing with natural therapies that support your body's innate ability to restore balance.",
    accent: "from-emerald-600/20 to-emerald-800/5",
    image: "/natural.png",
    imageAlt: "Holistic naturopathy and natural wellness care",
  },
  {
    icon: HandHeart,
    title: "Therapeutic Massage",
    description:
      "Skilled touch to ease tension, improve circulation, and melt away stress from head to toe.",
    accent: "from-amber-700/15 to-amber-900/5",
    image: "/therapy.jpg",
    imageAlt: "Therapeutic massage and hands-on bodywork",
  },
  {
    icon: Droplets,
    title: "Detox & Cleanse",
    description:
      "Gentle herbal detox programs designed to refresh your system and renew your energy naturally.",
    accent: "from-teal-600/15 to-teal-900/5",
    image: "/detox.jpg",
    imageAlt: "Herbal detox and natural cleanse therapy",
  },
  {
    icon: Sparkles,
    title: "Acupuncture",
    description:
      "Traditional needle therapy to harmonize energy flow, relieve pain, and promote deep wellness.",
    accent: "from-lime-700/15 to-lime-900/5",
    image: "/acupunture.jpg",
    imageAlt: "Acupuncture and energy balancing treatment",
  },
  {
    icon: Flower2,
    title: "Herbal Medicine",
    description:
      "Time-tested plant remedies tailored to your constitution and health goals by our herbalists.",
    accent: "from-green-700/15 to-green-900/5",
    image: "/medicine.jpg",
    imageAlt: "Herbal medicine and plant-based remedies",
  },
  {
    icon: HeartPulse,
    title: "Wellness Consultation",
    description:
      "Personalized assessments and lifestyle guidance for lasting vitality and preventive care.",
    accent: "from-stone-600/15 to-stone-800/5",
    image: "/modalities/consult.png",
    imageAlt: "Wellness consultation with a healthcare practitioner",
  },
]

export const HERO_SLIDES = [
  {
    image: "/modalities/consult.png",
    title: "Where nature meets nurture",
    subtitle: "Trusted holistic care in the heart of Ghana",
  },
  {
    image: "/natural.png",
    title: "Ancient herbal wisdom",
    subtitle: "Plant-based remedies crafted for your unique healing path",
  },
  {
    image: "/medicine.jpg",
    title: "Expert, compassionate care",
    subtitle: "Practitioners devoted to your whole-body wellness",
  },
]

export const MARQUEE_ITEMS = [
  "Naturopathy",
  "Therapeutic Massage",
  "Herbal Detox",
  "Acupuncture",
  "Herbal Medicine",
  "Holistic Wellness",
  "Natural Healing",
  "Energy Balance",
]
