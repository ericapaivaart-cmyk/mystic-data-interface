import type { Metadata } from "next"
import { FreemiumLanding } from "@/components/landing/freemium-landing"
import { combinacao } from "@/lib/freemium-content"

export const metadata: Metadata = {
  title: combinacao.metaTitle,
  description: combinacao.metaDescription,
  alternates: { canonical: combinacao.slug },
  openGraph: {
    title: combinacao.metaTitle,
    description: combinacao.metaDescription,
    type: "website",
  },
}

export default function CombinacaoDeAmorPage() {
  return <FreemiumLanding content={combinacao} />
}
