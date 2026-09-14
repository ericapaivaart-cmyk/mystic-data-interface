import type { Metadata } from "next"
import { FreemiumLanding } from "@/components/landing/freemium-landing"
import { mapaAstral } from "@/lib/freemium-content"

export const metadata: Metadata = {
  title: mapaAstral.metaTitle,
  description: mapaAstral.metaDescription,
  alternates: { canonical: mapaAstral.slug },
  openGraph: {
    title: mapaAstral.metaTitle,
    description: mapaAstral.metaDescription,
    type: "website",
  },
}

export default function MapaAstralGratisPage() {
  return <FreemiumLanding content={mapaAstral} />
}
