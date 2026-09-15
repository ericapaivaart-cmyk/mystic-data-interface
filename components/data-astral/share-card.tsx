"use client"

import { useState } from "react"
import { Check, Copy, MessageCircle } from "lucide-react"
import { buildShareText, type Consult } from "@/lib/data-astral"

/**
 * Ações de compartilhamento da resposta. WhatsApp abre wa.me com o texto do
 * card; copiar leva o mesmo texto para a área de transferência.
 * (Em iframe, abre em nova aba.)
 */
export function ShareActions({ consult }: { consult: Consult }) {
  const [copied, setCopied] = useState(false)
  const text = buildShareText(consult)

  function openWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    const inIframe = typeof window !== "undefined" && window.self !== window.top
    window.open(url, inIframe ? "_blank" : "_self", "noopener,noreferrer")
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard indisponível — silencioso */
    }
  }

  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={openWhatsApp}
        className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand px-4 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-16px_var(--brand)] transition-shadow hover:shadow-[0_0_56px_-10px_var(--brand)]"
      >
        <MessageCircle className="size-4" />
        Enviar no WhatsApp
      </button>
      <button
        type="button"
        onClick={copy}
        aria-label="Copiar texto"
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#141826] text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="size-4 text-data-green" /> : <Copy className="size-4" />}
      </button>
    </div>
  )
}
