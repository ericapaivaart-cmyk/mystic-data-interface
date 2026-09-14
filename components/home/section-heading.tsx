import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  /** nome que espelha o menu da direita */
  eyebrow: string
  title: string
  description?: string
  className?: string
}

/**
 * Cabeçalho compacto e consistente. Hierarquia forte de tamanho,
 * entrelinha apertada, vazio fazendo o trabalho.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("px-8 sm:px-12", className)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-[20rem] font-display text-[1.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-balance text-foreground sm:text-[2.15rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-[22rem] text-pretty text-[0.8125rem] font-medium leading-[1.35] text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
