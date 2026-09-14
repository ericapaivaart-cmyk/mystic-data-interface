import { Palette } from "@/components/showcase/palette"
import { Components } from "@/components/showcase/components"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <span className="inline-flex items-center rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
            Design System
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Mystic Data
          </h1>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Minimalista, dados astrais estruturados com acolhimento. Uma
            linguagem visual noturna com azuis suaves e destaques neon.
          </p>
        </header>

        <Palette />
        <Components />
      </div>
    </main>
  )
}
