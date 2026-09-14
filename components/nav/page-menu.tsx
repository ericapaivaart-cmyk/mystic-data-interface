"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserRound, LogIn, ChevronRight } from "lucide-react"
import { Drawer } from "./drawer"
import { pageMenu } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type PageMenuProps = {
  open: boolean
  onClose: () => void
  /** open the left user summary drawer */
  onOpenUser: () => void
}

export function PageMenu({ open, onClose, onOpenUser }: PageMenuProps) {
  const pathname = usePathname()

  return (
    <Drawer
      open={open}
      onClose={onClose}
      side="right"
      compact
      title="Navegar"
      subtitle="Tudo o que o Data Astral faz por você."
    >
      <nav className="flex flex-col gap-1">
        {pageMenu.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
                active ? "bg-brand/15" : "hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg transition-colors",
                  active
                    ? "bg-brand text-brand-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      active ? "text-brand" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                  {item.badge ? (
                    <span className="rounded-full bg-surface-dark px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-surface-dark-foreground">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground text-pretty">
                  {item.hint}
                </span>
              </span>
            </Link>
          )
        })}
      </nav>

      {/* account section — opens the LEFT user drawer, no separator line */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="px-3 pb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
          Sua conta
        </p>
        <button
          type="button"
          onClick={onOpenUser}
          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <UserRound className="size-4" />
          </span>
          <span className="flex-1 text-sm font-medium">Meus Dados</span>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>
        <button
          type="button"
          onClick={onOpenUser}
          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <LogIn className="size-4" />
          </span>
          <span className="flex-1 text-sm font-medium">Entrar ou criar conta</span>
          <ChevronRight className="size-4 text-muted-foreground" />
        </button>
      </div>
    </Drawer>
  )
}
