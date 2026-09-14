import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import type { FreemiumContent } from "@/lib/freemium-content"
import { WHATSAPP_URL } from "@/lib/navigation"

/**
 * Landing freemium (tela branca, editorial). Termo de busca no H1 para GEO/SEO.
 * Rampa neutra: branco → cinza; um único azul de destaque. Vazio faz o ritmo.
 */
export function FreemiumLanding({ content }: { content: FreemiumContent }) {
  return (
    <main className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        {/* Masthead */}
        <header>
          <p className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-balance md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-7 max-w-[38rem] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.lede}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={content.primary.href}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.primary.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/filosofia"
              className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Entender o método
            </Link>
          </div>
        </header>

        {/* O que você recebe */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
            O que você recebe
          </h2>
          <ul className="mt-8 grid max-w-[38rem] gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.benefits.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-snug text-foreground">
                <Star aria-hidden className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span className="text-pretty">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Como funciona */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
            Como funciona
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {content.steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-display text-2xl font-bold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Fechamento */}
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance md:text-3xl">
            Saiba o momento certo para as suas decisões.
          </h2>
          <p className="mt-4 max-w-[34rem] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            É grátis para começar. Do seu mapa nasce o Data Astral — a próxima data em que a energia está a
            seu favor.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={content.primary.href}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {content.primary.label}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Falar com Iris no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
