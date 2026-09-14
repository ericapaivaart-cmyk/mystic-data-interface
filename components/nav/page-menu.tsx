"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserRound, LogIn, Mail, MessageCircle } from "lucide-react"
import { Drawer } from "./drawer"
import { pageMenu, WHATSAPP_URL } from "@/lib/navigation"
import { cn } from "@/lib/utils"

/** lucide-style stroke Instagram glyph (not shipped in this lucide version). */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

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
      hideTitle
      title="Menu"
      subtitle="Tudo que Iris faz por você"
      footer={
        <div className="flex items-center justify-end gap-4 pr-1">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <MessageCircle className="size-6" />
          </a>
          <a
            href="https://instagram.com/datairis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <InstagramIcon className="size-6" />
          </a>
          <a
            href="mailto:contato@datairis.app"
            aria-label="E-mail"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <Mail className="size-6" />
          </a>
        </div>
      }
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
                "group flex w-fit max-w-[16rem] items-start gap-2.5 rounded-lg py-1 pl-2 pr-4 transition-colors",
                active ? "bg-brand/15" : "hover:bg-muted",
              )}
            >
              <span
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-lg transition-colors",
                  active
                    ? "bg-brand text-brand-foreground"
                    : "bg-muted text-muted-foreground group-hover:text-foreground",
                )}
              >
                <Icon className="size-[18px]" />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span
                  className={cn(
                    "block text-sm font-medium leading-tight",
                    active ? "text-brand" : "text-foreground",
                  )}
                >
                  {item.label}
                </span>
                <span className="block text-[11px] leading-tight text-muted-foreground/70 text-pretty">
                  {item.hint}
                </span>
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
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <UserRound className="size-[18px]" />
          </span>
          <span className="text-sm font-medium">Meus Dados</span>
        </button>
        <button
          type="button"
          onClick={onOpenUser}
          className="group flex w-fit max-w-[15rem] items-center gap-2.5 rounded-lg py-1.5 pl-2 pr-4 text-left transition-colors hover:bg-muted"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <LogIn className="size-[18px]" />
          </span>
          <span className="text-sm font-medium">Entrar ou criar conta</span>
        </button>
      </div>
    </Drawer>
  )
}
