import type { LucideIcon } from "lucide-react"
import {
  Sparkles,
  Star,
  Heart,
  Sun,
  Moon,
  Activity,
  CalendarDays,
  BookOpen,
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
    badge: "low ticket",
  },
  {
    label: "Mapa Astral Grátis",
    href: "/mapa-astral-gratis",
    hint: "Seu mapa natal completo, sem custo.",
    icon: Star,
  },
  {
    label: "Combinação de Amor",
    href: "/combinacao-de-amor",
    hint: "Sinastria: a compatibilidade entre dois mapas.",
    icon: Heart,
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
    label: "Trânsitos",
    href: "/transitos",
    hint: "Modular a energia: ação ou recolhimento.",
    icon: Activity,
  },
  {
    label: "Planner",
    href: "/app/planner",
    hint: "Organize a rotina com os ciclos a favor.",
    icon: CalendarDays,
    badge: "assinatura",
  },
  {
    label: "Artigos",
    href: "/artigos",
    hint: "O método, o escopo e o propósito.",
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

/** The two freemium links that live in Header 2. */
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
]

/** WhatsApp destination for sending info / scheduling with Iris. */
export const WHATSAPP_URL = "https://wa.me/message/DATAIRIS"
