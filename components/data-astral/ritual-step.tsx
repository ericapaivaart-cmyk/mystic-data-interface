"use client"

import { ArrowRight, History } from "lucide-react"
import { OrbitSpheres } from "./orbit-spheres"

type RitualStepProps = {
  remaining: number
  hasHistory: boolean
  onStart: () => void
  onOpenHistory: () => void
}

/**
 * Abertura "respire". Clima calmo. Uma linha de microcopy explica o que é —
 * o passo a passo que "ninguém via" vira microcopy progressivo (1 linha por etapa).
 * [ÁUDIO] textos-placeholder para a autora substituir depois.
 */
export function RitualStep({
  remaining,
  hasHistory,
  onStart,
  onOpenHistory,
}: RitualStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mt-4 opacity-90">
        <OrbitSpheres size={148} />
      </div>

      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
        Data Astral
      </p>
      <h1 className="mt-3 max-w-[18rem] font-display text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-balance">
        Respire. A pergunta certa já é meio caminho.
      </h1>
      <p className="mt-4 max-w-[20rem] text-pretty text-[0.875rem] leading-relaxed text-muted-foreground">
        [ÁUDIO] Aqui a gente não adivinha nada. A gente cruza o seu mapa com o
        céu e encontra a próxima data favorável para o que te move — com um
        conselho para chegar nela inteiro.
      </p>

      <button
        type="button"
        onClick={onStart}
        className="group mt-9 inline-flex h-14 w-full max-w-[300px] items-center justify-between gap-2 rounded-2xl bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-[0_0_44px_-14px_var(--brand)] transition-shadow hover:shadow-[0_0_60px_-8px_var(--brand)]"
      >
        <span>Começar</span>
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-brand-foreground/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
            {remaining > 0 ? `${remaining} grátis` : "planos"}
          </span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </button>

      {hasHistory ? (
        <button
          type="button"
          onClick={onOpenHistory}
          className="mt-4 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <History className="size-4" />
          Suas datas
        </button>
      ) : null}
    </div>
  )
}
