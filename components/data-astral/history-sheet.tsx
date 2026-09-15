"use client"

import { CalendarCheck } from "lucide-react"
import { ContentOverlay } from "@/components/home/content-overlay"
import {
  daysUntil,
  formatLongDate,
  formatWeekday,
  type Consult,
} from "@/lib/data-astral"

type HistorySheetProps = {
  open: boolean
  onClose: () => void
  history: Consult[]
}

/** Bottom-sheet "Suas datas" — histórico persistido no navegador. */
export function HistorySheet({ open, onClose, history }: HistorySheetProps) {
  return (
    <ContentOverlay
      open={open}
      onClose={onClose}
      eyebrow="Data Astral"
      title="Suas datas"
    >
      {history.length === 0 ? (
        <p className="pb-4 text-[0.875rem] leading-relaxed text-muted-foreground">
          Você ainda não guardou nenhuma data. Cada consulta fica salva aqui —
          para você voltar quando a janela chegar.
        </p>
      ) : (
        <div className="flex flex-col gap-3 pb-2">
          {history.map((c) => {
            const days = daysUntil(c.result.favorableDate)
            const upcoming = days > 0
            return (
              <div key={c.id} className="rounded-2xl bg-[#141518] px-4 py-3.5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                    {c.themeLabel}
                  </p>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{
                      backgroundColor: upcoming
                        ? "color-mix(in oklab, var(--brand) 15%, transparent)"
                        : "var(--muted)",
                      color: upcoming ? "var(--brand)" : "var(--muted-foreground)",
                    }}
                  >
                    {upcoming
                      ? days === 1
                        ? "amanhã"
                        : `em ${days} dias`
                      : "passada"}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.875rem] font-medium leading-snug text-foreground">
                  {c.question}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground">
                  <CalendarCheck className="size-3.5 text-brand" />
                  <span className="capitalize">
                    {formatWeekday(c.result.favorableDate)},{" "}
                  </span>
                  {formatLongDate(c.result.favorableDate)}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </ContentOverlay>
  )
}
