import { shelf, type Spine } from "@/lib/filosofia-content"
import { cn } from "@/lib/utils"

/**
 * Estante editorial (tela branca). Lombadas em fileira sobre uma prateleira
 * tom-sobre-tom. Fontes = cinzas neutros; autoria de Iris = azul de marca
 * (o único destaque). Rola na horizontal no mobile.
 */
export function Estante() {
  return (
    <section aria-labelledby="estante-title" className="mt-24 border-t border-border pt-12 md:pt-16">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Coleção</p>
      <h2
        id="estante-title"
        className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl"
      >
        {shelf.heading}
      </h2>
      <p className="mt-5 max-w-[38rem] text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
        {shelf.lede}
      </p>

      {/* Prateleira: fileira de lombadas apoiadas numa linha tom-sobre-tom */}
      <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
        <ul className="flex min-w-max items-end gap-3 border-b border-border pb-0">
          {shelf.books.map((book, i) => (
            <SpineItem key={book.title} book={book} index={i} />
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
        Coleção em curadoria. Novos títulos entram conforme a pesquisa avança.
      </p>
    </section>
  )
}

// Alturas variadas dão realismo de estante (tom-sobre-tom, sem borda colorida).
const HEIGHTS = ["h-52", "h-56", "h-48", "h-60", "h-52", "h-56", "h-48"]
const SOURCE_TONES = ["bg-[#F6F7F9]", "bg-[#ECEEF1]", "bg-[#E5E7EB]"]

function SpineItem({ book, index }: { book: Spine; index: number }) {
  const isAutoria = book.kind === "autoria"
  const height = HEIGHTS[index % HEIGHTS.length]
  const tone = isAutoria ? "bg-primary" : SOURCE_TONES[index % SOURCE_TONES.length]

  return (
    <li
      className={cn(
        "flex w-14 shrink-0 flex-col justify-between rounded-t-md px-3 py-4 transition-transform duration-300 hover:-translate-y-1",
        height,
        tone,
      )}
    >
      <span
        className={cn(
          "font-display text-sm font-bold leading-tight tracking-tight [writing-mode:vertical-rl] [text-orientation:mixed]",
          isAutoria ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {book.title}
      </span>
      <span
        className={cn(
          "text-[10px] font-medium leading-tight [writing-mode:vertical-rl]",
          isAutoria ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        {book.status ? `${book.author} · ${book.status}` : book.author}
      </span>
    </li>
  )
}
