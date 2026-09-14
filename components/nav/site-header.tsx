"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Globe, Star } from "lucide-react"
import { headerLinks } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  onOpenPageMenu: () => void
}

export function SiteHeader({ onOpenPageMenu }: SiteHeaderProps) {
  const pathname = usePathname()
  const [lang, setLang] = useState<"PT" | "EN">("PT")

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Header 1 — transparent, minimalist, no lines, 3 icons */}
      <div className="flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          aria-label="Data Astral — início"
          className="flex items-center gap-2 rounded-xl py-1 pr-2 transition-opacity hover:opacity-80"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-brand text-brand-foreground">
            <Star className="size-4" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Data Astral
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

      {/* Header 2 — the two freemium links */}
      <div className="flex h-11 items-center gap-2 px-4">
        {headerLinks.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "bg-brand/15 text-brand"
                  : "bg-card/70 text-muted-foreground backdrop-blur-sm hover:text-foreground",
              )}
            >
              <Icon className="size-3.5" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </header>
  )
}
