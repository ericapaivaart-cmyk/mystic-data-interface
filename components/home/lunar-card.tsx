"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { MOON_WEEK, MOON_TODAY, type MoonDay } from "@/lib/home-content"
import { SectionHeading } from "./section-heading"
import { ContentOverlay } from "./content-overlay"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function LunarCard() {
  const initial = MOON_WEEK.find((d) => d.today) ?? MOON_WEEK[0]
  const [active, setActive] = useState<MoonDay>(initial)
  const [overlay, setOverlay] = useState(false)

  return (
    <section aria-labelledby="lua-title" className="pt-20">
      <SectionHeading
        eyebrow="Lua"
        title="A fase da Lua e a semana."
        description="A Lua marca o ritmo do que começar, consolidar ou soltar. Percorra a semana — a agenda lunar é a bússola do seu tempo."
      />

      <Reveal className="mt-7 px-8 sm:px-12">
        <div className="rounded-3xl bg-[#0f1117] p-5">
          {/* fase de hoje */}
          <div className="flex items-center gap-4">
            <span
              className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[#141518] text-3xl"
              aria-hidden="true"
            >
              🌔
            </span>
            <div className="min-w-0">
              <p className="font-display text-[1.15rem] font-bold leading-tight tracking-[-0.02em] text-foreground">
                {MOON_TODAY.phase}
              </p>
              <p className="text-[0.8125rem] font-medium text-muted-foreground">
                {MOON_TODAY.sign} · {MOON_TODAY.illumination}% iluminada
              </p>
            </div>
          </div>

          {/* agenda linear da semana — a inovação boa */}
          <div className="mt-5 flex gap-1.5">
            {MOON_WEEK.map((d) => {
              const selected = d.day === active.day
              return (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setActive(d)}
                  aria-pressed={selected}
                  aria-label={`${d.weekday} ${d.day} — ${d.phase}`}
                  className={cn(
                    "flex flex-1 flex-col items-center gap-1 rounded-xl py-2 transition-colors",
                    selected ? "bg-brand text-brand-foreground" : "bg-[#141518] text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="text-[10px] font-medium uppercase tracking-wide">
                    {d.weekday}
                  </span>
                  <span className="text-base leading-none" aria-hidden="true">
                    {d.phaseGlyph}
                  </span>
                  <span className="text-[0.8125rem] font-semibold">{d.day}</span>
                  {d.today ? (
                    <span
                      className={cn(
                        "size-1 rounded-full",
                        selected ? "bg-brand-foreground" : "bg-brand",
                      )}
                    />
                  ) : (
                    <span className="size-1" />
                  )}
                </button>
              )
            })}
          </div>

          <p className="mt-4 px-1 text-[0.8125rem] leading-[1.35] text-muted-foreground">
            <span className="font-semibold text-foreground">
              {active.weekday} {active.day}:
            </span>{" "}
            {active.phase}.
          </p>

          <button
            type="button"
            onClick={() => setOverlay(true)}
            className="group mt-5 inline-flex w-full items-center justify-between rounded-2xl bg-[#141518] px-4 py-3 text-left transition-colors hover:bg-[#1c1d21]"
          >
            <span className="text-[0.8125rem] font-semibold text-foreground">
              O que fazer nesta fase
            </span>
            <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </Reveal>

      <ContentOverlay
        open={overlay}
        onClose={() => setOverlay(false)}
        eyebrow="Lua"
        title={MOON_TODAY.phase}
      >
        <div className="flex flex-col gap-3 pb-2">
          <p className="text-[0.875rem] leading-[1.5] text-muted-foreground">
            {MOON_TODAY.guidance}
          </p>
          <div className="rounded-2xl bg-[#141518] px-4 py-3">
            <p className="text-sm font-semibold text-foreground">A semana lunar</p>
            <div className="mt-2 flex flex-col gap-1.5">
              {MOON_WEEK.map((d) => (
                <p key={d.day} className="text-[0.8125rem] leading-[1.35] text-muted-foreground">
                  <span className="mr-1" aria-hidden="true">
                    {d.phaseGlyph}
                  </span>
                  <span className="font-medium text-foreground">
                    {d.weekday} {d.day}
                  </span>{" "}
                  — {d.phase}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ContentOverlay>
    </section>
  )
}
