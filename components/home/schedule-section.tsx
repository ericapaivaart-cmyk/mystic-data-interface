import Link from "next/link"
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/navigation"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

/**
 * Agendar — redesenhado (o card antigo era "horrível").
 * Duas trilhas claras: consulta pontual (WhatsApp) e mentoria (aprofundada).
 * Sem preços gritantes; foco em confiança e clareza.
 */
export function ScheduleSection() {
  return (
    <section aria-labelledby="agendar-title" className="pt-20 pb-32">
      <SectionHeading
        eyebrow="Agendar"
        title="Quando quiser falar com a Iris."
        description="Autoridade de mais de 53 mil escutas. Escolha uma conversa pontual ou um acompanhamento próximo — sempre planejamento e dados, nunca promessas."
      />

      <div className="mt-7 flex flex-col gap-3 px-8 sm:px-12">
        <Reveal>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl bg-[#0f1117] p-5 transition-colors hover:bg-[#141518]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-data-green/15 text-data-green">
              <MessageCircle className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] font-semibold text-foreground">
                Consulta pela Iris
              </p>
              <p className="mt-0.5 text-[0.8125rem] leading-[1.35] text-muted-foreground">
                Uma conversa direta no WhatsApp para uma decisão específica.
              </p>
            </div>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/agendar"
            className="group flex items-center gap-4 rounded-3xl bg-[#0f1117] p-5 transition-colors hover:bg-[#141518]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/15 text-brand">
              <Sparkles className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] font-semibold text-foreground">
                Mentoria com a Iris
              </p>
              <p className="mt-0.5 text-[0.8125rem] leading-[1.35] text-muted-foreground">
                Acompanhamento próximo para planejar um ciclo inteiro da sua vida.
              </p>
            </div>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
