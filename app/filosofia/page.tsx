import type { Metadata } from "next"
import Link from "next/link"
import { EssayArticle } from "@/components/filosofia/essay"
import { essays, positioning } from "@/lib/filosofia-content"
import { WHATSAPP_URL } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Filosofia — Data Iris | Prever é planejar, não adivinhar",
  description:
    "O método Data Iris: a primeira astrologia com dados do nosso tempo. Astrologia como lógica dos ciclos e timing planetário para decidir — nunca adivinhação. Por Erica Iris.",
  alternates: { canonical: "/filosofia" },
  openGraph: {
    title: "Filosofia — Data Iris",
    description:
      "Prever é planejar. O método que separa o que funciona na astrologia do que é superstição — timing planetário para decisão, por Erica Iris.",
    type: "article",
  },
}

export default function FilosofiaPage() {
  return (
    <main className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead editorial */}
        <header>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            {positioning.brand} &middot; Filosofia
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance md:text-6xl">
            {positioning.line}
          </h1>
          <p className="mt-7 max-w-[36rem] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {positioning.lede}
          </p>
          <p className="mt-6 text-sm text-muted-foreground/80">{positioning.author}</p>
        </header>

        {/* Sumário — tom sobre tom, sem linhas divisórias */}
        <nav aria-label="Sumário" className="mt-14 flex flex-wrap gap-x-6 gap-y-2">
          {essays.map((e, i) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>{" "}
              {e.title}
            </a>
          ))}
        </nav>

        {/* Ensaios */}
        <div className="mt-16 space-y-16 md:space-y-24">
          {essays.map((e, i) => (
            <EssayArticle key={e.id} essay={e} index={i} />
          ))}
        </div>

        {/* Fechamento discreto */}
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
            Saiba o momento certo para as suas decisões.
          </h2>
          <p className="mt-4 max-w-[34rem] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            A consulta é gravada em áudios exclusivos e enviada pelo WhatsApp, no seu tempo. Acompanhamento
            nos retornos, sem custo extra.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar com Iris
            </a>
            <Link
              href="/data-astral"
              className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Ver a próxima data favorável
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
