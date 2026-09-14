"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserRound, LogIn } from "lucide-react"
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
      <nav className="flex flex-col gap-0.5">
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
                "group flex w-fit max-w-[15rem] items-center gap-2.5 rounded-lg py-1.5 pl-2 pr-4 transition-colors",
                active ? "bg-brand/15" : "hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-md transition-colors",
                  active
                    ? "bg-brand text-brand-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground",
                )}
              >
                <Icon className="size-3.5" />
              </span>
              <span
                className={cn(
                  "text-sm font-medium",
                  active ? "text-brand" : "text-foreground",
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* account section — opens the LEFT user drawer, no separator line */}
      <div className="mt-5 flex flex-col gap-0.5">
        <p className="pb-1 pl-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
          Sua conta
        </p>
        <button
          type="button"
          onClick={onOpenUser}
          className="group flex w-fit max-w-[15rem] items-center gap-2.5 rounded-lg py-1.5 pl-2 pr-4 text-left transition-colors hover:bg-muted"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground group-hover:text-foreground">
            <UserRound className="size-3.5" />
          </span>
          <span className="text-sm font-medium">Meus Dados</span>
        </button>
        <button
          type="button"
          onClick={onOpenUser}
          className="group flex w-fit max-w-[15rem] items-center gap-2.5 rounded-lg py-1.5 pl-2 pr-4 text-left transition-colors hover:bg-muted"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground group-hover:text-foreground">
            <LogIn className="size-3.5" />
          </span>
          <span className="text-sm font-medium">Entrar ou criar conta</span>
        </button>
      </div>
    </Drawer>
  )
}
