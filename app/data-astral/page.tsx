"use client"

import { useEffect, useState } from "react"
import {
  computeNextDate,
  findRecentSameQuestion,
  getHistory,
  incUsage,
  makeId,
  remainingFree,
  saveConsult,
  type Birth,
  type Consult,
  type StepId,
  type Theme,
} from "@/lib/data-astral"
import { cn } from "@/lib/utils"
import { RitualStep } from "@/components/data-astral/ritual-step"
import { ThemeStep } from "@/components/data-astral/theme-step"
import { QuestionStep } from "@/components/data-astral/question-step"
import { BirthStep } from "@/components/data-astral/birth-step"
import { WaitingStep } from "@/components/data-astral/waiting-step"
import { AnswerPanel } from "@/components/data-astral/answer-panel"
import {
  PaywallStep,
  type PaywallReason,
} from "@/components/data-astral/paywall-step"
import { HistorySheet } from "@/components/data-astral/history-sheet"

/** Etapas centralizadas na vertical (clima de ritual). As demais rolam do topo. */
const CENTERED: StepId[] = ["ritual", "espera", "paywall"]

export default function DataAstralPage() {
  const [step, setStep] = useState<StepId>("ritual")
  const [theme, setTheme] = useState<Theme | null>(null)
  const [question, setQuestion] = useState("")
  const [birth, setBirth] = useState<Birth | null>(null)
  const [partnerBirth, setPartnerBirth] = useState<Birth | null>(null)
  const [consult, setConsult] = useState<Consult | null>(null)
  const [paywall, setPaywall] = useState<PaywallReason>({ kind: "limit" })

  const [historyOpen, setHistoryOpen] = useState(false)
  const [history, setHistory] = useState<Consult[]>([])
  const [remaining, setRemaining] = useState(3)

  // localStorage só existe no cliente — hidrata depois da montagem.
  useEffect(() => {
    setHistory(getHistory())
    setRemaining(remainingFree())
  }, [])

  function refreshLocal() {
    setHistory(getHistory())
    setRemaining(remainingFree())
  }

  function go(next: StepId) {
    setStep(next)
  }

  function handleStart() {
    setTheme(null)
    setQuestion("")
    setBirth(null)
    setPartnerBirth(null)
    setConsult(null)
    go("tema")
  }

  function handleSelectTheme(t: Theme) {
    setTheme(t)
    go("pergunta")
  }

  function handleSelectQuestion(q: string) {
    // trava-ouro: mesma pergunta antes da data → paywall "repeat"
    const recent = findRecentSameQuestion(q)
    if (recent) {
      setPaywall({ kind: "repeat", consult: recent })
      go("paywall")
      return
    }
    setQuestion(q)
    setBirth(null)
    setPartnerBirth(null)
    go("dados")
  }

  function handleBirth1(b: Birth) {
    setBirth(b)
    // Sinastria é premium (pede 2ª pessoa e não consome os 3 grátis).
    if (theme?.premium) {
      go("dados2")
      return
    }
    // Demais respeitam o limite de grátis.
    if (remainingFree() <= 0) {
      setPaywall({ kind: "limit" })
      go("paywall")
    } else {
      go("espera")
    }
  }

  function handleBirth2(b: Birth) {
    setPartnerBirth(b)
    go("espera")
  }

  function handleWaitingDone() {
    if (!theme || !birth) return
    const result = computeNextDate(question, birth, partnerBirth ?? undefined)
    const record: Consult = {
      id: makeId(),
      themeId: theme.id,
      themeLabel: theme.label,
      question,
      birth,
      partnerBirth: partnerBirth ?? undefined,
      result,
      createdAt: new Date().toISOString(),
    }
    saveConsult(record)
    if (!theme.premium) incUsage()
    setConsult(record)
    refreshLocal()
    go("resposta")
  }

  const centered = CENTERED.includes(step)

  return (
    <main
      className={cn(
        "mx-auto flex w-full max-w-md flex-col px-6 pb-20",
        centered
          ? "min-h-[calc(100vh-4rem)] justify-center pt-6"
          : "pt-10",
      )}
    >
      <div key={step} className="animate-in fade-in duration-500">
        {step === "ritual" ? (
          <RitualStep
            remaining={remaining}
            hasHistory={history.length > 0}
            onStart={handleStart}
            onOpenHistory={() => setHistoryOpen(true)}
          />
        ) : null}

        {step === "tema" ? (
          <ThemeStep onSelect={handleSelectTheme} onBack={() => go("ritual")} />
        ) : null}

        {step === "pergunta" && theme ? (
          <QuestionStep
            theme={theme}
            onSelect={handleSelectQuestion}
            onBack={() => go("tema")}
          />
        ) : null}

        {step === "dados" && theme ? (
          <BirthStep
            step={theme.premium ? "Você · etapa 3 de 3" : "Etapa 3 de 3"}
            personLabel="você"
            onComplete={handleBirth1}
            onBack={() => go("pergunta")}
          />
        ) : null}

        {step === "dados2" && theme ? (
          <BirthStep
            step="A outra pessoa · sinastria"
            personLabel="a outra pessoa"
            onComplete={handleBirth2}
            onBack={() => go("dados")}
          />
        ) : null}

        {step === "espera" ? <WaitingStep onDone={handleWaitingDone} /> : null}

        {step === "resposta" && consult ? (
          <AnswerPanel
            consult={consult}
            onNewQuestion={handleStart}
            onOpenHistory={() => setHistoryOpen(true)}
          />
        ) : null}

        {step === "paywall" ? (
          <PaywallStep
            reason={paywall}
            onBack={() =>
              paywall.kind === "repeat" ? go("tema") : go("ritual")
            }
          />
        ) : null}
      </div>

      <HistorySheet
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        history={history}
      />
    </main>
  )
}
