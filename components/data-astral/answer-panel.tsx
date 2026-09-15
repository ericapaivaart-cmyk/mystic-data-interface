"use client"

import Link from "next/link"
import { CalendarCheck, Check, History, RotateCcw } from "lucide-react"
import {
  daysUntil,
  formatLongDate,
  formatShortDate,
  formatWeekday,
  type Consult,
} from "@/lib/data-astral"
import { ShareActions } from "./share-card"

type AnswerPanelProps = {
  consult: Consult
  onNewQuestion: () => void
  onOpenHistory: () => void
}

/**
 * Resposta como PAINEL DE DADOS (não revelação de tarô): data favorável em
 * destaque + janela de dias + conselho autoral. Gráficos cortados nesta fase.
 * Salvamento no histórico é automático ao chegar aqui (chip "Salvo").
 */
export function AnswerPanel({
  consult,
  onNewQuestion,
  onOpenHistory,
}: AnswerPanelProps) {
  const { result, question, themeLabel } = consult
  const days = daysUntil(result.favorableDate)

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Sua Data Astral
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#141826] px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
          <Check className="size-3 text-data-green" />
          Salvo em Suas datas
        </span>
      </div>

      <p className="mt-3 text-[0.8125rem] text-muted-foreground">
        {themeLabel} · <span className="text-foreground/80">{question}</span>
      </p>

      {/* data favorável — o número que importa */}
      <div className="mt-5 overflow-hidden rounded-3xl bg-[#0f1117] p-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarCheck className="size-4 text-brand" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
            Data favorável
          </span>
        </div>
        <p className="mt-3 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.03em] text-foreground">
          {formatLongDate(result.favorableDate)}
        </p>
        <p className="mt-2 text-[0.9375rem] font-medium capitalize text-brand">
          {formatWeekday(result.favorableDate)}
          <span className="ml-2 font-normal lowercase text-muted-foreground">
            {days === 0
              ? "· é hoje"
              : days === 1
                ? "· amanhã"
                : `· em ${days} dias`}
          </span>
        </p>

        {/* janela de dias + confiança — leitura de dado, sem gráfico */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#141826] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground/70">
              Janela favorável
            </p>
            <p className="mt-1 text-[0.9375rem] font-semibold text-foreground">
              {formatShortDate(result.windowStart)} – {formatShortDate(result.windowEnd)}
            </p>
          </div>
          <div className="rounded-2xl bg-[#141826] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground/70">
              Força do momento
            </p>
            <p className="mt-1 text-[0.9375rem] font-semibold text-foreground">
              {result.confidence}
              <span className="text-muted-foreground">/100</span>
            </p>
          </div>
        </div>
      </div>

      {/* conselho autoral */}
      <div className="mt-3 rounded-3xl bg-[#0f1117] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          Conselho para chegar nela
        </p>
        <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-foreground/90">
          {result.advice}
        </p>
      </div>

      {/* ações */}
      <div className="mt-5">
        <ShareActions consult={consult} />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onNewQuestion}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#141826] text-[0.8125rem] font-semibold text-foreground transition-colors hover:bg-[#1c2233]"
        >
          <RotateCcw className="size-4" />
          Nova pergunta
        </button>
        <button
          type="button"
          onClick={onOpenHistory}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#141826] text-[0.8125rem] font-semibold text-foreground transition-colors hover:bg-[#1c2233]"
        >
          <History className="size-4" />
          Suas datas
        </button>
      </div>

      <Link
        href="/planos"
        className="mt-6 flex items-center justify-center rounded-2xl px-4 py-3 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Quer datas ilimitadas? Ver planos e créditos →
      </Link>
    </div>
  )
}
