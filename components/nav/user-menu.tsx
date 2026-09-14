"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  MessageCircle,
  RotateCcw,
  Trash2,
  LogOut,
  ChevronRight,
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
      title="Visitante"
      subtitle="Entre para salvar seus mapas e créditos."
      footer={
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-muted px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <LogOut className="size-4" />
          Sair
        </button>
      }
    >
      {/* quick summary — solid tiles over the void, no lines */}
      <div className="mb-4 grid grid-cols-2 gap-2 px-1">
        <div className="rounded-2xl bg-muted px-4 py-3">
          <p className="font-display text-2xl font-semibold leading-none">3</p>
          <p className="mt-1 text-xs text-muted-foreground">Perguntas grátis</p>
        </div>
        <div className="rounded-2xl bg-muted px-4 py-3">
          <p className="font-display text-2xl font-semibold leading-none">0</p>
          <p className="mt-1 text-xs text-muted-foreground">Créditos</p>
        </div>
      </div>

      {/* primary CTA */}
      <Link
        href="/criar-conta"
        onClick={onClose}
        className="mb-4 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        Entrar ou criar conta
      </Link>

      {/* deeper dashboard */}
      <Link
        href="/app/perfil"
        onClick={onClose}
        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
          <LayoutDashboard className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium">Ver painel completo</span>
          <span className="block text-xs text-muted-foreground">
            Seus dados de perfil e mapas.
          </span>
        </span>
        <ChevronRight className="size-4 text-muted-foreground" />
      </Link>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
          <MessageCircle className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium">WhatsApp</span>
          <span className="block text-xs text-muted-foreground">
            Enviar informações ou agendar com Iris.
          </span>
        </span>
        <ChevronRight className="size-4 text-muted-foreground" />
      </a>

      {/* account actions */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="px-3 pb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
          Conta e dados
        </p>
        <Link
          href="/planos"
          onClick={onClose}
          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground">
            <RotateCcw className="size-4" />
          </span>
          <span className="flex-1 text-sm font-medium">Reembolso</span>
          <ChevronRight className="size-4 text-muted-foreground" />
        </Link>
        <button
          type="button"
          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-destructive transition-colors hover:bg-destructive/10"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive">
            <Trash2 className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">Excluir meus dados</span>
            <span className="block text-xs text-destructive/70">
              Remove sua conta e informações.
            </span>
          </span>
        </button>
      </div>
    </Drawer>
  )
}
