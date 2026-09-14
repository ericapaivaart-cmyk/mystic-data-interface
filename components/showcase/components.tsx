import { Button } from "@/components/ui/button"

export function Components() {
  return (
    <section className="mt-20 space-y-10">
      <h2 className="font-display text-2xl font-semibold">Componentes</h2>

      {/* Buttons — pill shape */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Botões
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="rounded-full bg-brand px-6 text-brand-foreground hover:bg-brand/90">
            Descubra agora
          </Button>
          <Button
            variant="secondary"
            className="rounded-full px-6"
          >
            Ver detalhes
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6"
          >
            Cancelar
          </Button>
        </div>
      </div>

      {/* Cards — soft blue surfaces */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Cards
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="rounded-3xl bg-surface-light p-6 text-surface-light-foreground">
            <span className="inline-flex items-center rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-brand-foreground">
              Amor
            </span>
            <p className="mt-4 font-display text-3xl font-bold">92%</p>
            <p className="mt-1 text-sm opacity-70">
              Compatibilidade hoje
            </p>
          </article>

          <article className="rounded-3xl bg-surface-medium p-6 text-surface-medium-foreground">
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">
              Céu agora
            </span>
            <p className="mt-4 font-display text-2xl font-bold">
              Lua em Escorpião
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-data-green" />
                Trígono
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-data-red" />
                Quadratura
              </span>
            </div>
          </article>

          <article className="rounded-3xl bg-surface-dark p-6 text-surface-dark-foreground">
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">
              Trânsitos
            </span>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Vênus</span>
                <span className="font-mono text-data-green">+4.2°</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Marte</span>
                <span className="font-mono text-data-red">-1.8°</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Mercúrio</span>
                <span className="font-mono text-brand">+0.6°</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Tipografia
        </h3>
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="font-display text-3xl font-bold">Poppins Display</p>
          <p className="mt-2 font-display text-lg font-semibold text-muted-foreground">
            Títulos com peso estruturado
          </p>
          <p className="mt-4 max-w-lg leading-relaxed">
            Inter para textos corridos — regular, com boa legibilidade e ritmo
            confortável para leituras longas. Este é o corpo padrão da interface.
          </p>
        </div>
      </div>
    </section>
  )
}
