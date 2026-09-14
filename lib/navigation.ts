import type { LucideIcon } from "lucide-react"
import {
  Sparkles,
  Star,
  Heart,
  Sun,
  Moon,
  Activity,
  BookOpen,
  CalendarDays,
  CreditCard,
  MessageCircle,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  /** short didactic explanation shown under the label */
  hint: string
  icon: LucideIcon
  /** optional badge, e.g. monetization tier */
  badge?: string
}

/**
 * Right-side page menu — main links.
 * Order mirrors the live site's hamburger, restructured under the new routes.
 */
export const pageMenu: NavItem[] = [
  {
    label: "Data Astral",
    href: "/data-astral",
    hint: "A próxima data favorável para o que importa.",
    icon: Sparkles,
  },
  {
    label: "Mapa Astral Grátis",
    href: "/mapa-astral-gratis",
    hint: "Seu mapa natal completo, sem custo.",
    icon: Star,
  },
  {
    label: "Combinação de Mapas",
    href: "/combinacao-de-amor",
    hint: "Sinastria: a compatibilidade entre dois mapas.",
    icon: Heart,
  },
  {
    label: "Planner",
    href: "/app/planner",
    hint: "Organize a rotina com os ciclos a favor.",
    icon: CalendarDays,
    badge: "assinatura",
  },
  {
    label: "Horóscopo",
    href: "/horoscopo",
    hint: "Leitura autoral por Ascendente, Lua e Sol.",
    icon: Sun,
  },
  {
    label: "Lua",
    href: "/lua",
    hint: "Fase lunar e a agenda da semana.",
    icon: Moon,
  },
  {
    label: "Céu Agora",
    href: "/transitos",
    hint: "Modular a energia: ação ou recolhimento.",
    icon: Activity,
  },
  {
    label: "Filosofia",
    href: "/filosofia",
    hint: "O método: prever é planejar, nunca adivinhar.",
    icon: BookOpen,
  },
  {
    label: "Planos e Créditos",
    href: "/planos",
    hint: "Assinatura e créditos Data Astral.",
    icon: CreditCard,
  },
  {
    label: "Agendar",
    href: "/agendar",
    hint: "Consulta com Iris ou mentoria.",
    icon: MessageCircle,
  },
]

/** Header 2 freemium links — stacked, left-aligned under the logo. */
export const headerLinks: NavItem[] = [
  {
    label: "Mapa Astral Grátis",
    href: "/mapa-astral-gratis",
    hint: "Seu mapa natal completo, sem custo.",
    icon: Star,
  },
  {
    label: "Combinação de Amor",
    href: "/combinacao-de-amor",
    hint: "Sinastria entre dois mapas.",
    icon: Heart,
  },
  {
    label: "Planner",
    href: "/app/planner",
    hint: "Organize a rotina com os ciclos a favor.",
    icon: CalendarDays,
  },
]

/** WhatsApp destination for sending info / scheduling with Iris. */
export const WHATSAPP_URL = "https://wa.me/message/DATAIRIS"
