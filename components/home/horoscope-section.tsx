"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HOROSCOPES, type Horoscope } from "@/lib/home-content"
import { SectionHeading } from "./section-heading"
import { ContentOverlay } from "./content-overlay"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function HoroscopeSection() {
  const [active, setActive] = useState<Horoscope>(HOROSCOPES[0])
  const [overlay, setOverlay] = useState(false)

  return (
    <section aria-labelledby="horoscopo-title" className="pt-20">
      <SectionHeading
        eyebrow="Horóscopo"
        title="Leitura autoral por três eixos."
        description="Ascendente, Lua e Sol dizem coisas diferentes sobre o mesmo dia. Escolha um eixo e leia a previsão de Iris — como planejar, não como adivinhar."
      />

      <Reveal className="mt-7 px-8 sm:px-12">
        <div className="rounded-3xl bg-[#0f1117] p-5">
          {/* seletor de eixo */}
          <div className="flex gap-2" role="tablist" aria-label="Eixo do horóscopo">
            {HOROSCOPES.map((h) => {
              const selected = h.id === active.id
              return (
                <button
                  key={h.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(h)}
                  className={cn(
                    "flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-3 transition-colors",
                    selected ? "bg-brand text-brand-foreground" : "bg-[#141518] text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="text-lg leading-none" aria-hidden="true">
                    {h.glyph}
                  </span>
                  <span className="text-[0.8125rem] font-semibold">{h.label}</span>
                </button>
              )
            })}
          </div>

          {/* teaser compacto */}
          <p className="mt-4 px-1 font-display text-[1.15rem] font-bold leading-[1.15] tracking-[-0.02em] text-balance text-foreground">
            {active.teaser}
          </p>
          <p className="mt-2 px-1 text-[0.8125rem] leading-[1.35] text-muted-foreground line-clamp-2">
            {active.full[0]}
          </p>

          <button
            type="button"
            onClick={() => setOverlay(true)}
            className="group mt-5 inline-flex w-full items-center justify-between rounded-2xl bg-[#141518] px-4 py-3 text-left transition-colors hover:bg-[#1c1d21]"
          >
            <span className="text-[0.8125rem] font-semibold text-foreground">
              Ler previsão completa · {active.label}
            </span>
            <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </Reveal>

      <ContentOverlay
        open={overlay}
        onClose={() => setOverlay(false)}
        eyebrow={`Horóscopo · ${active.label}`}
        title={active.teaser}
      >
        <div className="flex flex-col gap-3 pb-2">
          {active.full.map((paragraph, i) => (
            <p key={i} className="text-[0.875rem] leading-[1.5] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </ContentOverlay>
    </section>
  )
}
