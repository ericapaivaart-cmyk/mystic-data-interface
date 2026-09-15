"use client"

import { ArrowRight } from "lucide-react"
import type { Theme } from "@/lib/data-astral"
import { StepHeader } from "./step-header"

type QuestionStepProps = {
  theme: Theme
  onSelect: (question: string) => void
  onBack: () => void
}

/** Flashcards com as perguntas fixas do tema escolhido. */
export function QuestionStep({ theme, onSelect, onBack }: QuestionStepProps) {
  return (
    <div>
      <StepHeader
        step="Etapa 2 de 3"
        title="Qual é exatamente a sua pergunta?"
        hint={`[ÁUDIO] Escolha a pergunta de ${theme.label.toLowerCase()} que mais pesa agora. A data responde a ela — não a um palpite genérico.`}
        onBack={onBack}
      />

      <div className="mt-7 grid gap-3">
        {theme.questions.map((q, i) => (
          <button
            key={q}
            type="button"
            onClick={() => onSelect(q)}
            className="group flex items-center gap-4 rounded-2xl bg-[#0f1117] px-5 py-4 text-left transition-colors hover:bg-[#141826]"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/15 text-[0.8125rem] font-bold text-brand">
              {i + 1}
            </span>
            <span className="min-w-0 flex-1 text-[0.9375rem] font-medium leading-snug text-foreground">
              {q}
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
          </button>
        ))}
      </div>
    </div>
  )
}
