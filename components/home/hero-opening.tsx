"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroOpening() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [frozen, setFrozen] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    // Reveal the titles shortly after mount so they enter over the video.
    const revealTimer = window.setTimeout(
      () => setRevealed(true),
      prefersReduced ? 0 : 500,
    )

    if (prefersReduced) {
      // Respect reduced motion: freeze immediately on the first frame.
      video.pause()
      setFrozen(true)
      return () => window.clearTimeout(revealTimer)
    }

    function freeze() {
      const v = videoRef.current
      if (!v) return
      v.pause()
      setFrozen(true)
    }

    function handleTimeUpdate() {
      const v = videoRef.current
      if (!v || !v.duration) return
      // Begin the fade slightly before the end, then freeze on the last frame.
      if (v.currentTime >= v.duration - 0.5) {
        setFrozen(true)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", freeze)

    const play = video.play()
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        // Autoplay blocked — just show the frozen frame with titles.
        setFrozen(true)
      })
    }

    return () => {
      window.clearTimeout(revealTimer)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", freeze)
    }
  }, [])

  return (
    <section className="relative -mt-[100px] flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-out"
        style={{ opacity: frozen ? 0.12 : 1 }}
        src="/hero/opening.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Legibility wash: solid color over the video, deepening toward the copy. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 transition-opacity duration-[1400ms]"
        style={{ opacity: frozen ? 1 : 0.55 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-2xl px-6 pb-20 pt-[120px]">
        <span
          className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand transition-all duration-700"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(12px)",
          }}
        >
          <Sparkles className="size-3.5" />3 primeiras perguntas grátis
        </span>
        <h1
          className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-balance transition-all duration-700 md:text-6xl"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(16px)",
            transitionDelay: "120ms",
          }}
        >
          Qual a próxima data em que os astros estão a seu favor?
        </h1>
        <p
          className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground transition-all duration-700"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(16px)",
            transitionDelay: "240ms",
          }}
        >
          Astrologia como ferramenta de planejamento e gestão emocional — não
          adivinhação. Um método próprio, construído sobre dados e mais de 53 mil
          escutas de vidas reais.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-3 transition-all duration-700"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(16px)",
            transitionDelay: "360ms",
          }}
        >
          <Link
            href="/data-astral"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Descubra sua Data
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/mapa-astral-gratis"
            className="inline-flex items-center gap-2 rounded-2xl bg-muted px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Mapa Astral Grátis
          </Link>
        </div>
      </div>
    </section>
  )
}
