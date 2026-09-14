import { Star } from "lucide-react"
import type { Essay } from "@/lib/filosofia-content"

/**
 * Ensaio editorial (tela branca). Headings reais para GEO/SEO.
 * Rampa neutra: branco → cinza; um único azul de destaque. Vazio faz o ritmo.
 */
export function EssayArticle({ essay, index }: { essay: Essay; index: number }) {
  return (
    <article id={essay.id} className="scroll-mt-24 border-t border-border pt-12 md:pt-16">
      <p className="flex items-baseline gap-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <span className="tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span>
        {essay.kicker}
      </p>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {essay.title}
      </h2>

      <p className="mt-5 max-w-[38rem] text-pretty text-lg leading-snug text-foreground md:text-xl">
        {essay.lede}
      </p>

      <div className="mt-6 max-w-[38rem] space-y-4">
        {essay.paragraphs.map((p, i) => (
          <p key={i} className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {p}
          </p>
        ))}
      </div>

      {essay.gains ? (
        <ul className="mt-8 grid max-w-[38rem] gap-x-8 gap-y-3 sm:grid-cols-2">
          {essay.gains.map((g) => (
            <li key={g} className="flex gap-2.5 text-sm leading-snug text-foreground">
              <Star aria-hidden className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span className="text-pretty">{g}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
