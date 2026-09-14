interface Swatch {
  name: string
  hex: string
  className: string
  ring?: boolean
}

const surfaces: Swatch[] = [
  { name: "Card Light", hex: "#DCE4F2", className: "bg-surface-light" },
  { name: "Card Medium", hex: "#8CA2C4", className: "bg-surface-medium" },
  { name: "Card Dark", hex: "#3A4B66", className: "bg-surface-dark" },
]

const action: Swatch[] = [
  { name: "Primary Brand", hex: "#0B85FF", className: "bg-brand" },
  { name: "Data Red", hex: "#E11D48", className: "bg-data-red" },
  { name: "Data Green", hex: "#4ADE80", className: "bg-data-green" },
]

const bases: Swatch[] = [
  { name: "Background Dark", hex: "#05050A", className: "bg-[#05050A]", ring: true },
  { name: "Background Light", hex: "#FFFFFF", className: "bg-[#FFFFFF]", ring: true },
  { name: "Text Secondary", hex: "#94A3B8", className: "bg-[#94A3B8]" },
]

function SwatchGrid({ title, items }: { title: string; items: Swatch[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.name}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div
              className={`h-24 w-full ${s.className} ${s.ring ? "border-b border-border" : ""}`}
            />
            <div className="px-4 py-3">
              <p className="text-sm font-medium">{s.name}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                {s.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Palette() {
  return (
    <section className="space-y-10">
      <h2 className="font-display text-2xl font-semibold">Paleta</h2>
      <SwatchGrid title="Superfícies · Soft Blues" items={surfaces} />
      <SwatchGrid title="Ação e Neon" items={action} />
      <SwatchGrid title="Bases e Texto" items={bases} />
    </section>
  )
}
