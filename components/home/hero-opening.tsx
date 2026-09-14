"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { LogoMark } from "@/components/brand/logo"
import { cn } from "@/lib/utils"

export function HeroOpening() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [faded, setFaded] = useState(false)
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const v = videoRef.current

    if (reduce) {
      // Sem movimento: já entra no estado final (fundo tênue + conteúdo visível).
      setFaded(true)
      setReveal(true)
      return
    }

    // Autoplay pode ser bloqueado — se falhar, cai direto no estado final.
    if (v) {
      const play = v.play()
      if (play && typeof play.catch === "function") {
        play.catch(() => {
          setFaded(true)
          setReveal(true)
        })
      }
    }

    // O vídeo começa sozinho; depois vai ficando transparente e então o título entra.
    const fade = window.setTimeout(() => setFaded(true), 1100)
    const show = window.setTimeout(() => setReveal(true), 1500)

    return () => {
      window.clearTimeout(fade)
      window.clearTimeout(show)
    }
  }, [])

  return (
    <section className="relative -mt-[100px] flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Vídeo de abertura — roda zodiacal, deslocada para a direita. */}
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 h-full w-full object-cover [object-position:78%_center] transition-opacity duration-[1600ms] ease-out",
          faded ? "opacity-[0.14]" : "opacity-100",
        )}
        src="/hero/opening.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
      />

      {/* Wash de legibilidade — mais forte à esquerda, deixa a mandala respirar à direita */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background"
      />

      {/* Conteúdo do hero — ancorado à esquerda, com margem lateral generosa */}
      <div className="relative w-full px-8 pb-32 pt-[168px] sm:px-12">
        <div className="max-w-md">
          {/* Título — wipe da esquerda para a direita */}
          <h1
            className="font-display text-[2.5rem] font-bold leading-[1.02] tracking-[-0.035em] text-balance text-foreground sm:text-[3.4rem]"
            style={{
              clipPath: reveal ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              opacity: reveal ? 1 : 0,
              transition: "clip-path 900ms ease-out, opacity 900ms ease-out",
            }}
          >
            Qual a próxima data em que os astros estão a seu favor?
          </h1>

          {/* Legenda — azul suave, entrelinha reduzida */}
          <p
            className={cn(
              "mt-7 max-w-[17rem] text-pretty text-[0.8125rem] font-medium leading-[1.35] text-hero-accent transition-all duration-700",
              reveal ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            O seu mapa mostra seus dons no amor, trabalho, financeiro, negócios,
            viagens e muito mais! A Data Astral revela quando é o momento exato
            de agir.
          </p>

          {/* Botão + selo — selo à direita, metade atrás do botão */}
          <div
            className={cn(
              "relative mt-12 flex items-center transition-all duration-700",
              reveal ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: "560ms" }}
          >
            <Link
              href="/data-astral"
              className="group relative z-20 inline-flex h-12 w-full max-w-[300px] items-center justify-between gap-2 rounded-[16px] bg-brand pl-3 pr-4 text-[0.8125rem] font-semibold text-brand-foreground shadow-[0_0_44px_-12px_var(--brand)] transition-shadow hover:shadow-[0_0_60px_-8px_var(--brand)]"
            >
              <LogoMark className="size-6 shrink-0 text-brand-foreground" />
              <span className="flex-1 whitespace-nowrap text-center">Descubra sua Data!</span>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <SpinningBadge />
          </div>
        </div>
      </div>
    </section>
  )
}

function SpinningBadge() {
  return (
    <span
      aria-hidden="true"
      className="relative z-10 -ml-7 grid size-[72px] shrink-0 place-items-center rounded-full bg-surface-dark/70 text-hero-accent backdrop-blur-sm"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-[spin_16s_linear_infinite]">
        <defs>
          <path id="badge-arc" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[9.5px] font-semibold uppercase tracking-[0.16em]">
          <textPath href="#badge-arc" startOffset="0%">
            3 primeiras perguntas grátis ·
          </textPath>
        </text>
      </svg>
      <LogoMark className="size-5 text-hero-accent" />
    </span>
  )
}
