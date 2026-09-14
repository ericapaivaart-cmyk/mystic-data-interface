"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  MessageCircle,
  RotateCcw,
  Trash2,
  LogOut,
} from "lucide-react"
import { Drawer } from "./drawer"
import { WHATSAPP_URL } from "@/lib/navigation"

type UserMenuProps = {
  open: boolean
  onClose: () => void
}

export function UserMenu({ open, onClose }: UserMenuProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      side="left"
      compact
      hideTitle
      title="Sua conta"
      subtitle="Entre para salvar seus mapas e créditos"
      footer={
        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-[13px] font-medium text-foreground transition-opacity hover:opacity-80"
        >
          <LogOut className="size-4" />
          Sair
        </button>
      }
    >
      {/* resumo rápido — tiles sólidos sobre o vazio, sem linhas */}
      <div className="mb-6 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-muted px-4 py-3">
          <p className="font-display text-2xl font-semibold leading-none">3</p>
          <p className="mt-1.5 text-[11px] leading-[1.35] text-muted-foreground">
            Perguntas grátis
          </p>
        </div>
        <div className="rounded-2xl bg-muted px-4 py-3">
          <p className="font-display text-2xl font-semibold leading-none">0</p>
          <p className="mt-1.5 text-[11px] leading-[1.35] text-muted-foreground">
            Créditos
          </p>
        </div>
      </div>

      {/* CTA primária */}
      <Link
        href="/criar-conta"
        onClick={onClose}
        className="mb-6 flex w-fit items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-[13px] font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        Entrar ou criar conta
      </Link>

      {/* atalhos — fontes pequenas, entrelinha da legenda, respiro entre itens */}
      <nav className="flex flex-col gap-0.5">
        <Link
          href="/app/perfil"
          onClick={onClose}
          className="group flex w-fit max-w-[16rem] items-start gap-2.5 rounded-lg py-1 pl-2 pr-4 transition-colors hover:bg-muted"
        >
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <LayoutDashboard className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block text-[13px] font-medium leading-tight">
              Ver painel completo
            </span>
            <span className="block text-[11px] leading-[1.35] text-muted-foreground/70 text-pretty">
              Seus dados de perfil e mapas.
            </span>
          </span>
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="group flex w-fit max-w-[16rem] items-start gap-2.5 rounded-lg py-1 pl-2 pr-4 transition-colors hover:bg-muted"
        >
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <MessageCircle className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block text-[13px] font-medium leading-tight">
              WhatsApp
            </span>
            <span className="block text-[11px] leading-[1.35] text-muted-foreground/70 text-pretty">
              Enviar informações ou agendar com Iris.
            </span>
          </span>
        </a>
      </nav>

      {/* conta e dados */}
      <div className="mt-6 flex flex-col gap-0.5">
        <p className="pb-1.5 pl-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
          Conta e dados
        </p>
        <Link
          href="/planos"
          onClick={onClose}
          className="group flex w-fit max-w-[16rem] items-center gap-2.5 rounded-lg py-1 pl-2 pr-4 transition-colors hover:bg-muted"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <RotateCcw className="size-[18px]" />
          </span>
          <span className="text-[13px] font-medium">Reembolso</span>
        </Link>
        <button
          type="button"
          className="group flex w-fit max-w-[16rem] items-start gap-2.5 rounded-lg py-1 pl-2 pr-4 text-left text-destructive transition-colors hover:bg-destructive/10"
        >
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive">
            <Trash2 className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block text-[13px] font-medium leading-tight">
              Excluir meus dados
            </span>
            <span className="block text-[11px] leading-[1.35] text-destructive/70 text-pretty">
              Remove sua conta e informações.
            </span>
          </span>
        </button>
      </div>
    </Drawer>
  )
}
