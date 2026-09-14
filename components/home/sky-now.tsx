"use client"

import { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import { SKY_NOW, ZODIAC, TRANSITS, type Planet } from "@/lib/home-content"
import { SectionHeading } from "./section-heading"
import { ContentOverlay } from "./content-overlay"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const CENTER = 120
const SIGN_R = 104
const PLANET_R = 74

// Arredonda para 3 casas: server (Node) e client (V8) emitem a MESMA string
// nos atributos do SVG, evitando hydration mismatch por precisão de float.
const round3 = (n: number) => Math.round(n * 1000) / 1000

function polar(longitude: number, r: number) {
  // 0° Áries no topo, longitude cresce no sentido horário.
  const rad = ((longitude - 90) * Math.PI) / 180
  return { x: round3(CENTER + r * Math.cos(rad)), y: round3(CENTER + r * Math.sin(rad)) }
}

function signOf(longitude: number) {
  return ZODIAC[Math.floor((longitude % 360) / 30)]
}

export function SkyNow() {
  const [selected, setSelected] = useState<Planet>(SKY_NOW[0])
  const [openTheme, setOpenTheme] = useState<string>(TRANSITS[0].theme)
  const [overlay, setOverlay] = useState(false)

  const spokes = useMemo(
    () => ZODIAC.map((s) => polar(s.start, SIGN_R + 8)),
    [],
  )
  const activeTransit = TRANSITS.find((t) => t.theme === openTheme) ?? TRANSITS[0]

  return (
    <section aria-labelledby="ceu-title" className="pt-20">
      <SectionHeading
        eyebrow="Céu Agora"
        title="O mesmo céu, para todos, agora."
        description="Este é o mapa do céu deste momento — não é o seu mapa pessoal, é o clima astral que todos dividimos. Toque em cada astro para entender a energia."
      />

      <Reveal className="mt-7 px-8 sm:px-12">
        <div className="rounded-3xl bg-[#0f1117] p-5">
          {/* roda zodiacal */}
          <div className="mx-auto w-full max-w-[300px]">
            <svg viewBox="0 0 240 240" className="w-full" role="img" aria-label="Roda do céu atual">
              {/* anéis tom-sobre-tom */}
              <circle cx={CENTER} cy={CENTER} r={SIGN_R + 12} fill="none" stroke="var(--foreground)" strokeOpacity={0.06} />
              <circle cx={CENTER} cy={CENTER} r={PLANET_R + 14} fill="none" stroke="var(--foreground)" strokeOpacity={0.06} />

              {/* divisórias dos 12 signos */}
              {spokes.map((p, i) => (
                <line
                  key={i}
                  x1={CENTER}
                  y1={CENTER}
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--foreground)"
                  strokeOpacity={0.05}
                />
              ))}

              {/* glifos dos signos */}
              {ZODIAC.map((s) => {
                const pos = polar(s.start + 15, SIGN_R)
                const active = s.name === signOf(selected.longitude).name
                return (
                  <text
                    key={s.name}
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={cn(
                      "transition-colors",
                      active ? "fill-brand" : "fill-muted-foreground",
                    )}
                    style={{ fontSize: 13, opacity: active ? 1 : 0.55 }}
                  >
                    {s.glyph}
                  </text>
                )
              })}

              {/* planetas — interativos */}
              {SKY_NOW.map((planet) => {
                const pos = polar(planet.longitude, PLANET_R)
                const active = planet.id === selected.id
                return (
                  <g
                    key={planet.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${planet.name} em ${signOf(planet.longitude).name}`}
                    onClick={() => setSelected(planet)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setSelected(planet)
                      }
                    }}
                    className="cursor-pointer focus:outline-none"
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={active ? 15 : 12}
                      className={cn("transition-all", active ? "fill-brand" : "fill-[#1c1d21]")}
                    />
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className={active ? "fill-brand-foreground" : "fill-foreground"}
                      style={{ fontSize: 13 }}
                    >
                      {planet.glyph}
                    </text>
                  </g>
                )
              })}

              {/* núcleo */}
              <circle cx={CENTER} cy={CENTER} r={3} className="fill-muted-foreground" />
            </svg>
          </div>

          {/* nota didática curta do astro selecionado */}
          <div className="mt-2 rounded-2xl bg-[#141518] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-base text-brand" aria-hidden="true">
                {selected.glyph}
              </span>
              <p className="text-sm font-semibold text-foreground">
                {selected.name}{" "}
                <span className="font-medium text-muted-foreground">
                  em {signOf(selected.longitude).name}
                </span>
              </p>
            </div>
            <p className="mt-2 text-[0.8125rem] leading-[1.35] text-muted-foreground">
              {selected.note}
            </p>
          </div>

          {/* trânsitos — modulação de energia por tema */}
          <div className="mt-5">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
              Trânsitos · ação x recolhimento
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {TRANSITS.map((t) => {
                const active = t.theme === openTheme
                return (
                  <button
                    key={t.theme}
                    type="button"
                    onClick={() => setOpenTheme(t.theme)}
                    aria-expanded={active}
                    className={cn(
                      "rounded-xl px-3 py-2 text-left transition-colors",
                      active ? "bg-[#141518]" : "hover:bg-[#141518]/60",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-16 shrink-0 text-[0.8125rem] font-medium text-foreground">
                        {t.theme}
                      </span>
                      <span className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#1c1d21]">
                        <span
                          className="h-full bg-data-green transition-all"
                          style={{ width: `${t.action}%` }}
                        />
                        <span
                          className="h-full bg-data-red transition-all"
                          style={{ width: `${t.retreat}%` }}
                        />
                      </span>
                      <span className="w-9 shrink-0 text-right text-[11px] font-semibold text-data-green">
                        {t.action}%
                      </span>
                    </div>
                    {active ? (
                      <p className="mt-2 pl-[4.75rem] text-[0.75rem] leading-[1.35] text-muted-foreground">
                        {t.cue}
                      </p>
                    ) : null}
                  </button>
                )
              })}
            </div>
            <p className="mt-3 flex items-center gap-4 px-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground/60">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-data-green" /> ação
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-data-red" /> recolhimento
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOverlay(true)}
            className="group mt-5 inline-flex w-full items-center justify-between rounded-2xl bg-[#141518] px-4 py-3 text-left transition-colors hover:bg-[#1c1d21]"
          >
            <span className="text-[0.8125rem] font-semibold text-foreground">
              Ler a leitura completa do céu
            </span>
            <ArrowRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </Reveal>

      <ContentOverlay
        open={overlay}
        onClose={() => setOverlay(false)}
        eyebrow="Céu Agora"
        title="A leitura do céu deste momento"
      >
        <div className="flex flex-col gap-4 pb-2">
          <p className="text-[0.8125rem] leading-[1.4] text-muted-foreground">
            O céu de agora é o pano de fundo comum a todos. Ele não decide nada
            por você — é um dado. Serve para planejar melhor onde investir energia
            e onde recolher.
          </p>
          <div className="flex flex-col gap-2">
            {SKY_NOW.map((p) => (
              <div key={p.id} className="rounded-2xl bg-[#141518] px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  <span className="mr-1.5 text-brand" aria-hidden="true">
                    {p.glyph}
                  </span>
                  {p.name}{" "}
                  <span className="font-medium text-muted-foreground">
                    em {signOf(p.longitude).name}
                  </span>
                </p>
                <p className="mt-1 text-[0.8125rem] leading-[1.35] text-muted-foreground">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#141518] px-4 py-3">
            <p className="text-sm font-semibold text-foreground">
              Onde a energia pede ação hoje
            </p>
            <p className="mt-1 text-[0.8125rem] leading-[1.35] text-muted-foreground">
              {activeTransit.theme}: {activeTransit.cue}
            </p>
          </div>
        </div>
      </ContentOverlay>
    </section>
  )
}
