import type { ReactNode } from "react"

type StubPageProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export function StubPage({ eyebrow, title, description, children }: StubPageProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-2xl flex-col justify-center px-6 py-16">
      <span className="inline-flex w-fit items-center rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand">
        {eyebrow}
      </span>
      <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        {description}
      </p>
      {children}
      <p className="mt-10 text-xs text-muted-foreground/70">
        Tela em construção — próxima etapa do redesign.
      </p>
    </main>
  )
}
