"use client"

import { useEffect, type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type ContentOverlayProps = {
  open: boolean
  onClose: () => void
  title: string
  /** linha curta tom-sobre-tom sob o título */
  eyebrow?: string
  children: ReactNode
  footer?: ReactNode
}

/**
 * Overlay didático da home — bottom-sheet que sobe suave sobre o void.
 * Mostra a leitura/explicação completa; a tela guarda só a versão compacta.
 */
export function ContentOverlay({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
}: ContentOverlayProps) {
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
      className={cn("fixed inset-0 z-[70]", !open && "pointer-events-none")}
      aria-hidden={!open}
      inert={!open}
    >
      <button
        type="button"
        aria-label="Fechar"
        tabIndex={-1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 h-full w-full cursor-default bg-background/75 backdrop-blur-sm transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute inset-x-0 bottom-0 mx-auto flex max-h-[86svh] w-full max-w-lg flex-col rounded-t-3xl bg-[#0f1117] text-card-foreground shadow-2xl shadow-black/60 transition-transform duration-300 ease-out sm:inset-x-0 sm:bottom-4 sm:rounded-3xl",
          open ? "translate-y-0" : "translate-y-[105%]",
        )}
      >
        {/* pega do sheet */}
        <div className="flex justify-center pt-3" aria-hidden="true">
          <span className="h-1 w-9 rounded-full bg-muted-foreground/25" />
        </div>

        <header className="flex items-start justify-between gap-3 px-6 pb-4 pt-3">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="text-[11px] font-medium uppercase tracking-wide text-brand">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight text-balance">
              {title}
            </h2>
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

        <div className="flex-1 overflow-y-auto px-6 pb-2">{children}</div>

        {footer ? <div className="px-6 pb-7 pt-3">{footer}</div> : null}
      </div>
    </div>
  )
}
