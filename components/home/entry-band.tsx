import Link from "next/link"
import { ArrowRight, Star, Heart, type LucideIcon } from "lucide-react"

/**
 * Faixa de entrada da home (tela escura) — os serviços mais buscados como
 * porta de entrada VISUAL, não menu. Preenchimento sólido sobre o vazio,
 * um único azul de destaque. Substitui os antigos links do "Header 2".
 */
type Entry = {
  href: string
  icon: LucideIcon
  title: string
  desc: string
  badge?: string
}

const entries: Entry[] = [
  {
    href: "/mapa-astral-gratis",
    icon: Star,
    title: "Mapa Astral Grátis",
    desc: "Seu mapa natal completo, em linguagem clara. O ponto de partida.",
    badge: "Grátis",
  },
  {
    href: "/combinacao-de-amor",
    icon: Heart,
    title: "Combinação de Amor",
    desc: "A sinastria entre dois mapas: química, encontros e atritos.",
    badge: "Grátis",
  },
]

export function EntryBand() {
  return (
    <section aria-labelledby="entry-title" className="px-6 py-20 sm:px-12">
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Os mais buscados
      </p>
      <h2
        id="entry-title"
        className="mt-4 max-w-md font-display text-2xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-3xl"
      >
        Comece por onde faz sentido para você.
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {entries.map((e) => {
          const Icon = e.icon
          return (
            <Link
              key={e.href}
              href={e.href}
              className="group flex flex-col justify-between gap-8 rounded-2xl bg-[#141518] p-6 transition-colors hover:bg-[#1C1D21]"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </span>
                {e.badge ? (
                  <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-brand-foreground">
                    {e.badge}
                  </span>
                ) : null}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{e.title}</h3>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <p className="mt-2 max-w-[22rem] text-pretty text-[0.8125rem] leading-[1.45] text-muted-foreground">
                  {e.desc}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
