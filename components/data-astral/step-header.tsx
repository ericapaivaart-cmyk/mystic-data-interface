"use client"

import { ArrowLeft } from "lucide-react"

type StepHeaderProps = {
  /** progresso textual discreto, ex.: "Etapa 2 de 3" */
  step: string
  title: string
  /** 1 linha de microcopy (placeholder do áudio) */
  hint?: string
  onBack?: () => void
}

/** Cabeçalho consistente das etapas do fluxo — voltar + progresso + título. */
export function StepHeader({ step, title, hint, onBack }: StepHeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Voltar"
            className="grid size-9 shrink-0 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-5" />
          </button>
        ) : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          {step}
        </p>
      </div>
      <h2 className="mt-3 max-w-[19rem] font-display text-[1.6rem] font-bold leading-[1.08] tracking-[-0.03em] text-balance">
        {title}
      </h2>
      {hint ? (
        <p className="mt-3 max-w-[21rem] text-pretty text-[0.8125rem] leading-relaxed text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
