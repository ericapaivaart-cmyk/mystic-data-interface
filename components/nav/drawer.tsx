"use client"

import { useEffect, type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type DrawerProps = {
  open: boolean
  onClose: () => void
  side?: "left" | "right"
  title: string
  /** small line under the title, tone-on-tone */
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  /** compact = narrower panel + tighter spacing (page menu) */
  compact?: boolean
  /** keep title for aria-label but don't render it visibly */
  hideTitle?: boolean
}

export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  subtitle,
  children,
  footer,
  compact = false,
  hideTitle = false,
}: DrawerProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  return (
    <div
      className={cn("fixed inset-0 z-[60]", !open && "pointer-events-none")}
      aria-hidden={!open}
      inert={!open}
    >
      {/* backdrop — solid tint over the void, gentle fade */}
      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 h-full w-full cursor-default bg-background/70 backdrop-blur-sm transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "dark absolute inset-y-0 flex h-full flex-col bg-[#141518] text-card-foreground shadow-2xl shadow-black/50 transition-transform duration-300 ease-out",
          side === "right" ? "right-0 rounded-l-3xl" : "left-0 rounded-r-3xl",
          compact ? "w-[80%] max-w-xs" : "w-[86%] max-w-sm",
          open
            ? "translate-x-0"
            : side === "right"
              ? "translate-x-[105%]"
              : "-translate-x-[105%]",
        )}
      >
        <header
          className={cn(
            "flex items-start justify-between gap-3",
            compact ? "px-5 pb-3 pt-6" : "px-6 pb-4 pt-7",
          )}
        >
          <div className="min-w-0">
            {hideTitle ? (
              <h2 className="sr-only">{title}</h2>
            ) : (
              <h2 className="font-display text-lg font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle ? (
              <p
                className={cn(
                  "text-pretty text-muted-foreground",
                  hideTitle
                    ? "text-sm font-medium leading-snug text-foreground/90"
                    : "mt-1 text-xs leading-relaxed",
                )}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid size-9 shrink-0 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <X className="size-5" />
          </button>
        </header>

        <div
          className={cn(
            "flex-1 overflow-y-auto",
            compact ? "px-4 pb-5" : "px-4 pb-6",
          )}
        >
          {children}
        </div>

        {footer ? (
          <div className={cn(compact ? "px-4 pb-6 pt-2" : "px-5 pb-7 pt-2")}>
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}
