"use client"

import { useEffect, useState } from "react"
import { OrbitSpheres } from "./orbit-spheres"

type WaitingStepProps = {
  onDone: () => void
}

/**
 * Espera = motion minimalista (órbita sutil) + 1 linha do método por vez.
 * Tempo simulado (~2.6s). No deploy real, resolve quando o algoritmo responder.
 * Nada de roleta/calendário girando — isso lembraria sorte/adivinhação.
 */
const LINES = [
  "Lendo o céu do momento…",
  "Cruzando com o seu mapa…",
  "Encontrando a próxima janela favorável…",
]

export function WaitingStep({ onDone }: WaitingStepProps) {
  const [line, setLine] = useState(0)

  useEffect(() => {
    const rotate = window.setInterval(() => {
      setLine((l) => Math.min(l + 1, LINES.length - 1))
    }, 850)
    const done = window.setTimeout(onDone, 2600)
    return () => {
      window.clearInterval(rotate)
      window.clearTimeout(done)
    }
  }, [onDone])

  return (
    <div
      className="flex flex-col items-center py-6 text-center"
      role="status"
      aria-live="polite"
    >
      <OrbitSpheres size={176} />

      <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
        Calculando
      </p>
      <p className="mt-3 h-6 max-w-[18rem] text-[0.9375rem] font-medium text-foreground transition-opacity duration-300">
        {LINES[line]}
      </p>
      <p className="mt-2 max-w-[19rem] text-[0.75rem] leading-snug text-muted-foreground/70">
        Método, não sorte: é o seu mapa cruzado com o céu real.
      </p>
    </div>
  )
}
