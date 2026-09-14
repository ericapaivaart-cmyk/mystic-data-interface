import Link from "next/link"
import { Check } from "lucide-react"
import { PLANS } from "@/lib/home-content"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function PlansSection() {
  return (
    <section aria-labelledby="planos-title" className="pt-20">
      <SectionHeading
        eyebrow="Planos e Créditos"
        title="Comece grátis. Aprofunde quando fizer sentido."
        description="As três primeiras perguntas são por nossa conta. Depois, escolha entre créditos avulsos ou a assinatura contínua."
      />

      <div className="mt-7 flex flex-col gap-3 px-8 sm:px-12">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 80}>
            <div
              className={cn(
                "rounded-3xl p-5",
                plan.highlight ? "bg-brand text-brand-foreground" : "bg-[#0f1117]",
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className={cn(
                    "text-[0.8125rem] font-semibold",
                    plan.highlight ? "text-brand-foreground" : "text-foreground",
                  )}
                >
                  {plan.name}
                </p>
                {plan.highlight ? (
                  <span className="rounded-full bg-brand-foreground/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                    mais escolhido
                  </span>
                ) : null}
              </div>

              <p className="mt-3 flex items-baseline gap-1">
                <span
                  className={cn(
                    "font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em]",
                    plan.highlight ? "text-brand-foreground" : "text-foreground",
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-[0.8125rem] font-medium",
                    plan.highlight ? "text-brand-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {plan.unit}
                </span>
              </p>

              <p
                className={cn(
                  "mt-2 text-[0.8125rem] leading-[1.35]",
                  plan.highlight ? "text-brand-foreground/80" : "text-muted-foreground",
                )}
              >
                {plan.description}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.highlight ? "text-brand-foreground" : "text-data-green",
                      )}
                    />
                    <span
                      className={cn(
                        "text-[0.8125rem] leading-[1.35]",
                        plan.highlight ? "text-brand-foreground/90" : "text-muted-foreground",
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  "mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl text-[0.8125rem] font-semibold transition-opacity hover:opacity-90",
                  plan.highlight
                    ? "bg-brand-foreground text-brand"
                    : "bg-brand text-brand-foreground",
                )}
              >
                {plan.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
