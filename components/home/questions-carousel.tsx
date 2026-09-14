"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { QUESTIONS } from "@/lib/home-content"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function QuestionsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % QUESTIONS.length),
      2600,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="funil-title" className="pt-8">
      <SectionHeading
        eyebrow="Data Astral"
        title="A dúvida por trás de toda pergunta é quando."
        description="A Data Astral encontra a próxima data favorável para o que te tira o sono. Sinta como funciona:"
      />

      <Reveal className="mt-7 px-8 sm:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#0f1117] px-6 py-8">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70"
            id="funil-title"
          >
            Muita gente pergunta
          </p>

          {/* pergunta rotativa — troca com fade + leve slide */}
          <div className="mt-3 h-[4.5rem] sm:h-[3.5rem]">
            {QUESTIONS.map((q, i) => (
              <p
                key={q}
                aria-hidden={i !== index}
                className="absolute font-display text-[1.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-balance text-foreground transition-all duration-500 ease-out sm:text-[1.75rem]"
                style={{
                  opacity: i === index ? 1 : 0,
                  transform:
                    i === index ? "translateY(0)" : "translateY(0.5rem)",
                }}
              >
                {q}
              </p>
            ))}
          </div>

          {/* pontos de progresso */}
          <div className="mt-5 flex items-center gap-1.5" role="tablist" aria-label="Perguntas">
            {QUESTIONS.map((q, i) => (
              <button
                key={q}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={q}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "1.5rem" : "0.375rem",
                  backgroundColor:
                    i === index ? "var(--brand)" : "var(--muted-foreground)",
                  opacity: i === index ? 1 : 0.35,
                }}
              />
            ))}
          </div>

          <Link
            href="/data-astral"
            className="group mt-7 inline-flex h-12 w-full max-w-[300px] items-center justify-between gap-2 rounded-2xl bg-brand px-4 text-[0.8125rem] font-semibold text-brand-foreground shadow-[0_0_44px_-14px_var(--brand)] transition-shadow hover:shadow-[0_0_60px_-8px_var(--brand)]"
          >
            <span>Descobrir minha data</span>
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-brand-foreground/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                3 grátis
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
