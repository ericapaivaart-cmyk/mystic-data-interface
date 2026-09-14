"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { LogoMark } from "@/components/brand/logo"
import { cn } from "@/lib/utils"

export function HeroOpening() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [frozen, setFrozen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const v = videoRef.current
    if (!v) return

    if (reduce) {
      // Sem movimento: já entra no estado congelado (fundo tênue).
      setFrozen(true)
      return
    }

    const onEnded = () => setFrozen(true)
    v.addEventListener("ended", onEnded)

    // Autoplay pode ser bloqueado — se falhar, cai direto no fundo tênue.
    const play = v.play()
    if (play && typeof play.catch === "function") {
      play.catch(() => setFrozen(true))
    }

    return () => v.removeEventListener("ended", onEnded)
  }, [])

  return (
    <section className="relative -mt-[100px] flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Vídeo de abertura — roda zodiacal. Toca, esvanece e congela. */}
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out",
          frozen ? "opacity-[0.12]" : "opacity-100",
        )}
        src="/hero/opening.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
      />

      {/* Wash de legibilidade — escurece base e topo, deixa o miolo respirar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background"
      />

      {/* Conteúdo do hero */}
      <div className="relative mx-auto w-full max-w-2xl px-6 pb-16 pt-[120px]">
        <span
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand transition-all duration-700",
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
        >
          3 primeiras perguntas grátis
        </span>

        <h1
          className={cn(
            "mt-5 font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance text-foreground transition-all duration-700 md:text-6xl",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "120ms" }}
        >
          Qual a próxima data em que os astros estão a seu favor?
        </h1>

        <p
          className={cn(
            "mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-brand transition-all duration-700",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "240ms" }}
        >
          O seu mapa mostra seus dons no amor, trabalho, financeiro, negócios,
          viagens e muito mais! A Data Astral revela quando é o momento exato de
          agir.
        </p>

        <div
          className={cn(
            "relative mt-8 flex flex-wrap items-center gap-3 transition-all duration-700",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "360ms" }}
        >
          <Link
            href="/data-astral"
            className="group relative inline-flex items-center gap-3 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-8px_var(--brand)] transition-all hover:shadow-[0_0_56px_-6px_var(--brand)]"
          >
            <LogoMark className="size-5 text-brand-foreground" />
            Descubra agora a sua Data!
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <SpinningBadge />
        </div>
      </div>
    </section>
  )
}

function SpinningBadge() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-16 shrink-0 place-items-center rounded-full bg-surface-dark/70 text-surface-dark-foreground backdrop-blur-sm"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-[spin_14s_linear_infinite]">
        <defs>
          <path id="badge-arc" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-current text-[10px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#badge-arc" startOffset="0%">
            3 grátis · primeiras perguntas ·
          </textPath>
        </text>
      </svg>
      <LogoMark className="size-5 text-brand" />
    </span>
  )
}
