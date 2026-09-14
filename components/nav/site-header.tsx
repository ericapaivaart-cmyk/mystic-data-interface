"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Globe } from "lucide-react"
import { lightRoutes } from "@/lib/navigation"
import { LogoMark } from "@/components/brand/logo"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  onOpenPageMenu: () => void
}

export function SiteHeader({ onOpenPageMenu }: SiteHeaderProps) {
  const pathname = usePathname()
  const [lang, setLang] = useState<"PT" | "EN">("PT")
  const [scrolled, setScrolled] = useState(false)

  // Telas brancas: cabeçalho ganha fundo branco discreto ao rolar, para não
  // flutuar sobre o texto editorial. Telas escuras ficam sempre transparentes.
  const isLight = lightRoutes.some((r) => pathname === r || pathname.startsWith(`${r}/`))

  useEffect(() => {
    if (!isLight) {
      setScrolled(false)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isLight])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Menu universal — transparente e minimalista: logo + idioma + hambúrguer.
          Nas telas brancas, ganha fundo branco discreto ao rolar (tom sobre tom). */}
      <div
        className={cn(
          "flex h-14 items-center justify-between px-4 transition-colors duration-300",
          isLight && scrolled
            ? "bg-background/85 backdrop-blur-md [border-bottom:1px_solid_var(--border)]"
            : "bg-transparent",
        )}
      >
        <Link
          href="/"
          aria-label="Data Iris — início"
          className="flex items-center gap-2 rounded-xl py-1 pr-2 transition-opacity hover:opacity-80"
        >
          <LogoMark className="size-8 text-muted-foreground" />
          <span className="font-display text-sm font-semibold tracking-tight text-muted-foreground/50">
            Data Iris
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLang((l) => (l === "PT" ? "EN" : "PT"))}
            aria-label={`Idioma: ${lang}. Alternar.`}
            className="flex items-center gap-1 rounded-xl px-2.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Globe className="size-4" />
            {lang}
          </button>
          <button
            type="button"
            onClick={onOpenPageMenu}
            aria-label="Abrir menu"
            className="grid size-9 place-items-center rounded-xl text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
