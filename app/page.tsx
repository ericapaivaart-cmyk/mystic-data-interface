import { HeroOpening } from "@/components/home/hero-opening"

export default function HomePage() {
  return (
    <main>
      <HeroOpening />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-xs text-muted-foreground/70">
          Landing em construção — próxima etapa do redesign.
        </p>
      </section>
    </main>
  )
}
