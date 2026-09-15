"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { SPHERES, THEMES, type SphereId, type Theme } from "@/lib/data-astral"
import { cn } from "@/lib/utils"
import { StepHeader } from "./step-header"

type ThemeStepProps = {
  onSelect: (theme: Theme) => void
  onBack: () => void
}

/**
 * 2 esferas/agrupadores → revelam os 6 temas. Sinastria marcada como
 * consulta especial (high ticket, fora dos 3 grátis).
 */
export function ThemeStep({ onSelect, onBack }: ThemeStepProps) {
  const [sphere, setSphere] = useState<SphereId | null>(null)
  const themes = sphere ? THEMES.filter((t) => t.sphere === sphere) : []

  return (
    <div>
      <StepHeader
        step="Etapa 1 de 3"
        title="Sobre o que é a sua pergunta?"
        hint="[ÁUDIO] Escolha o campo da vida. Depois eu te mostro as perguntas que a gente mais responde aqui."
        onBack={sphere ? () => setSphere(null) : onBack}
      />

      {!sphere ? (
        <div className="mt-7 grid gap-3">
          {SPHERES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSphere(s.id)}
              className="group flex items-center justify-between gap-4 rounded-2xl bg-[#0f1117] px-5 py-5 text-left transition-colors hover:bg-[#141826]"
            >
              <span className="min-w-0">
                <span className="block font-display text-lg font-bold leading-tight tracking-tight">
                  {s.label}
                </span>
                <span className="mt-1 block text-[0.8125rem] leading-snug text-muted-foreground">
                  {s.hint}
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-2 gap-3">
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t)}
              className={cn(
                "group relative flex flex-col justify-between gap-6 rounded-2xl bg-[#0f1117] p-4 text-left transition-colors hover:bg-[#141826]",
                t.premium && "ring-1 ring-brand/40",
              )}
            >
              {t.premium ? (
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                  <Sparkles className="size-3" />
                  especial
                </span>
              ) : (
                <span className="h-5" aria-hidden="true" />
              )}
              <span>
                <span className="block font-display text-[0.95rem] font-bold leading-tight tracking-tight">
                  {t.label}
                </span>
                <span className="mt-1 block text-[0.75rem] leading-snug text-muted-foreground">
                  {t.hint}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      {!sphere ? (
        <button
          type="button"
          onClick={onBack}
          className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar ao início
        </button>
      ) : null}
    </div>
  )
}
