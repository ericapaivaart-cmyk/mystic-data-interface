"use client"

import Link from "next/link"
import { ArrowRight, CalendarClock, Lock } from "lucide-react"
import {
  daysUntil,
  formatLongDate,
  type Consult,
} from "@/lib/data-astral"

export type PaywallReason =
  | { kind: "limit" }
  | { kind: "repeat"; consult: Consult }

type PaywallStepProps = {
  reason: PaywallReason
  onBack: () => void
}

/**
 * Bloqueio em dois casos:
 *  - "limit": os 3 usos grátis acabaram.
 *  - "repeat": tentou repetir a MESMA pergunta antes da data (a trava-ouro).
 *
 * Copy = só GESTÃO DE EXPECTATIVA (decisão travada com a usuária): sem foto de
 * autora, sem promessa. Reduz reembolso deixando claro o que a consulta é e o
 * que não é — método/planejamento, nunca adivinhação.
 */
export function PaywallStep({ reason, onBack }: PaywallStepProps) {
  if (reason.kind === "repeat") {
    const { consult } = reason
    const days = daysUntil(consult.result.favorableDate)
    return (
      <div className="flex flex-col items-center text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand/15 text-brand">
          <CalendarClock className="size-7" />
        </span>
        <h2 className="mt-6 max-w-[18rem] font-display text-[1.6rem] font-bold leading-[1.08] tracking-[-0.03em] text-balance">
          Você já perguntou isso.
        </h2>
        <p className="mt-4 max-w-[20rem] text-pretty text-[0.875rem] leading-relaxed text-muted-foreground">
          A data para <span className="text-foreground/90">“{consult.question}”</span>{" "}
          já está marcada:{" "}
          <span className="font-semibold text-foreground">
            {formatLongDate(consult.result.favorableDate)}
          </span>
          {days > 0 ? ` (em ${days} dias)` : ""}. O céu não muda de resposta a
          cada consulta — repetir antes da data não traria um dado novo, só
          ansiedade. Volte quando a janela chegar.
        </p>

        <div className="mt-8 flex w-full max-w-[300px] flex-col gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand px-5 text-sm font-semibold text-brand-foreground"
          >
            Fazer outra pergunta
          </button>
          <Link
            href="/planos"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#141826] px-5 text-[0.8125rem] font-semibold text-foreground transition-colors hover:bg-[#1c2233]"
          >
            Ver planos e créditos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-brand/15 text-brand">
        <Lock className="size-7" />
      </span>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
        Suas 3 datas grátis
      </p>
      <h2 className="mt-3 max-w-[18rem] font-display text-[1.6rem] font-bold leading-[1.08] tracking-[-0.03em] text-balance">
        Você usou suas consultas grátis.
      </h2>

      {/* gestão de expectativa — o que é e o que NÃO é */}
      <div className="mt-6 w-full max-w-[320px] rounded-2xl bg-[#0f1117] p-5 text-left">
        <p className="text-[0.8125rem] font-semibold text-foreground">
          Antes de continuar, alinhando expectativas:
        </p>
        <ul className="mt-3 flex flex-col gap-2.5 text-[0.8125rem] leading-snug text-muted-foreground">
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            Você recebe uma <span className="text-foreground/90">data favorável e um conselho</span> — direto, sem astrólogo nem mapa gigante para interpretar.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            É <span className="text-foreground/90">planejamento e método</span>, baseado no seu mapa e no céu real. Não é adivinhação nem garantia de resultado.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
            A mesma pergunta dá a mesma data até a janela chegar — você decide o que fazer com ela.
          </li>
        </ul>
      </div>

      <div className="mt-6 flex w-full max-w-[320px] flex-col gap-3">
        <Link
          href="/planos"
          className="group inline-flex h-12 items-center justify-between gap-2 rounded-2xl bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-[0_0_44px_-14px_var(--brand)]"
        >
          <span>Ver planos e créditos</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Voltar
        </button>
      </div>
    </div>
  )
}
