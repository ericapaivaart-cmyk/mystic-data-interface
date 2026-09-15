"use client"

/**
 * Órbita MUITO sutil — sensação de cálculo, nunca roleta/calendário girando.
 * Anéis finos girando devagar + núcleo que respira. Puro CSS/motion (sem Lottie).
 * `prefers-reduced-motion` congela o movimento (regra no globals.css).
 */

type Ring = {
  /** fração do tamanho total (0–1) */
  scale: number
  /** duração da volta, em segundos (quanto maior, mais calmo) */
  duration: number
  /** raio da esfera, px */
  sphere: number
  /** sentido — anti-horário quebra a monotonia sem virar "roleta" */
  reverse?: boolean
}

const RINGS: Ring[] = [
  { scale: 1, duration: 32, sphere: 5 },
  { scale: 0.68, duration: 24, sphere: 4, reverse: true },
  { scale: 0.4, duration: 18, sphere: 3 },
]

export function OrbitSpheres({ size = 168 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {RINGS.map((ring, i) => {
        const d = size * ring.scale
        return (
          <div
            key={i}
            className="da-orbit absolute left-1/2 top-1/2 rounded-full border border-foreground/10"
            style={{
              width: d,
              height: d,
              marginLeft: -d / 2,
              marginTop: -d / 2,
              animation: `da-orbit ${ring.duration}s linear infinite${ring.reverse ? " reverse" : ""}`,
            }}
          >
            <span
              className="absolute left-1/2 top-0 rounded-full bg-brand"
              style={{
                width: ring.sphere * 2,
                height: ring.sphere * 2,
                marginLeft: -ring.sphere,
                marginTop: -ring.sphere,
                boxShadow: "0 0 12px -2px var(--brand)",
                opacity: 0.85,
              }}
            />
          </div>
        )
      })}

      {/* núcleo que respira */}
      <span
        className="da-breathe absolute left-1/2 top-1/2 rounded-full bg-brand/80"
        style={{
          width: 10,
          height: 10,
          marginLeft: -5,
          marginTop: -5,
          animation: "da-breathe 3.4s ease-in-out infinite",
        }}
      />
    </div>
  )
}
