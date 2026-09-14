import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-2xl flex-col justify-center px-6 py-16">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
        <Sparkles className="size-3.5" />3 primeiras perguntas grátis
      </span>
      <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
        Qual a próxima data em que os astros estão a seu favor?
      </h1>
      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Astrologia como ferramenta de planejamento e gestão emocional — não
        adivinhação. Um método próprio, construído sobre dados e mais de 53 mil
        escutas de vidas reais.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
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

      <p className="mt-10 text-xs text-muted-foreground/70">
        Landing em construção — próxima etapa do redesign.
      </p>
    </main>
  )
}
