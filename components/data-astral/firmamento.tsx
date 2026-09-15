"use client"

/**
 * Firmamento — céu flat minimalista (substitui a antiga órbita/espiral).
 * A maioria das estrelas fica quieta; 3 "escolhidas" se acendem em sequência e
 * uma linha fina liga elas, como quem lê o céu e encontra a janela favorável.
 * Sem rotação, sem espiral (espiral lembra hipnose/enrolação), sem órbita
 * (real, mas longe do conhecimento popular). Puro SVG/CSS.
 * `prefers-reduced-motion` congela tudo no estado final (regra no globals.css).
 */

type Star = {
  x: number
  y: number
  r: number
  /** opacidade de base (atributo) — usada também quando o movimento é congelado */
  o: number
  /** atraso e duração do cintilar, em segundos */
  delay: number
  dur: number
}

/** Coordenadas fixas (determinísticas) no viewBox 240×150 — evita mismatch de hidratação. */
const STARS: Star[] = [
  { x: 20, y: 26, r: 0.9, o: 0.18, delay: 0.2, dur: 4.5 },
  { x: 48, y: 14, r: 0.7, o: 0.14, delay: 1.4, dur: 5.2 },
  { x: 70, y: 40, r: 1.1, o: 0.24, delay: 0.8, dur: 4.0 },
  { x: 95, y: 20, r: 0.8, o: 0.16, delay: 2.1, dur: 5.6 },
  { x: 120, y: 12, r: 0.7, o: 0.13, delay: 1.0, dur: 4.8 },
  { x: 150, y: 34, r: 1.0, o: 0.2, delay: 0.4, dur: 4.3 },
  { x: 176, y: 18, r: 0.8, o: 0.15, delay: 1.8, dur: 5.4 },
  { x: 205, y: 30, r: 1.1, o: 0.22, delay: 0.6, dur: 4.1 },
  { x: 224, y: 54, r: 0.7, o: 0.14, delay: 2.4, dur: 5.8 },
  { x: 200, y: 82, r: 0.9, o: 0.18, delay: 1.2, dur: 4.6 },
  { x: 168, y: 100, r: 0.7, o: 0.13, delay: 0.9, dur: 5.0 },
  { x: 135, y: 116, r: 1.0, o: 0.2, delay: 2.0, dur: 4.4 },
  { x: 104, y: 128, r: 0.8, o: 0.15, delay: 0.3, dur: 5.3 },
  { x: 74, y: 112, r: 0.9, o: 0.17, delay: 1.6, dur: 4.7 },
  { x: 44, y: 92, r: 1.0, o: 0.21, delay: 0.7, dur: 4.2 },
  { x: 24, y: 66, r: 0.7, o: 0.13, delay: 2.2, dur: 5.5 },
]

/** As 3 estrelas que se destacam — sobem para a direita (a janela que se aproxima). */
const HERO = [
  { x: 78, y: 92, delay: 0.3 },
  { x: 128, y: 64, delay: 0.9 },
  { x: 176, y: 50, delay: 1.5 },
]

const CONSTELLATION = HERO.map((h) => `${h.x},${h.y}`).join(" ")

export function Firmamento({ height = 150 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }} aria-hidden="true">
      <svg
        viewBox="0 0 240 150"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full overflow-visible"
      >
        {/* estrelas quietas do firmamento */}
        {STARS.map((s, i) => (
          <circle
            key={i}
            className="da-star"
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="var(--foreground)"
            opacity={s.o}
            style={{ animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s` }}
          />
        ))}

        {/* constelação: linha fina que se desenha ligando as escolhidas */}
        <polyline
          className="da-line"
          points={CONSTELLATION}
          fill="none"
          stroke="var(--foreground)"
          strokeWidth={0.5}
          strokeOpacity={0.22}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 130, strokeDashoffset: 130 }}
        />

        {/* as 3 estrelas que se acendem */}
        {HERO.map((h, i) => (
          <g key={i} className="da-hero" style={{ animationDelay: `${h.delay}s` }}>
            <circle
              className="da-hero-glow"
              cx={h.x}
              cy={h.y}
              r={7}
              fill="var(--brand)"
              opacity={0.16}
            />
            <circle cx={h.x} cy={h.y} r={2.4} fill="var(--brand)" />
            <circle cx={h.x} cy={h.y} r={0.9} fill="var(--brand-foreground)" />
          </g>
        ))}
      </svg>
    </div>
  )
}
