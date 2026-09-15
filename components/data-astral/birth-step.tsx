"use client"

import { useMemo, useState } from "react"
import { ArrowRight, Lock, MapPin } from "lucide-react"
import { searchCities, type Birth } from "@/lib/data-astral"
import { StepHeader } from "./step-header"
import { cn } from "@/lib/utils"

type BirthStepProps = {
  /** rótulo de progresso (varia na sinastria) */
  step: string
  /** quem está sendo coletado: "você" ou o nome/2ª pessoa */
  personLabel: string
  onComplete: (birth: Birth) => void
  onBack: () => void
}

type SubStep = "date" | "time" | "city"

/**
 * Coleta FATIADA de nascimento — data → hora → cidade (autocomplete),
 * uma coisa por tela, clima de ritual mantido. Nunca um formulário único.
 * Reutilizável para a 2ª pessoa da Sinastria.
 */
export function BirthStep({ step, personLabel, onComplete, onBack }: BirthStepProps) {
  const [sub, setSub] = useState<SubStep>("date")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [city, setCity] = useState("")

  const isSelf = personLabel === "você"
  const possessive = isSelf ? "sua" : "a"
  const subject = isSelf ? "você" : personLabel

  function goDate() {
    if (!date) return
    setSub("time")
  }
  function goTime() {
    setSub("city")
  }
  function finish() {
    if (!city.trim()) return
    onComplete({ date, time, city: city.trim() })
  }

  return (
    <div>
      <StepHeader
        step={step}
        title={isSelf ? "Vamos ao seu nascimento." : `Agora o nascimento de ${personLabel}.`}
        hint="[ÁUDIO] Sem esses dados o cálculo não roda. Uma coisa de cada vez — do jeito calmo."
        onBack={sub === "date" ? onBack : () => setSub(sub === "city" ? "time" : "date")}
      />

      <div className="mt-8">
        {sub === "date" ? (
          <Field
            label={`Data de nascimento de ${subject}`}
            help="O dia é o essencial para começar."
          >
            <input
              type="date"
              value={date}
              max="2025-12-31"
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-2xl bg-[#0f1117] px-5 py-4 text-base text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-brand/60 [color-scheme:dark]"
            />
            <PrimaryNext disabled={!date} onClick={goDate} />
          </Field>
        ) : null}

        {sub === "time" ? (
          <Field
            label={`Hora de nascimento de ${subject}`}
            help="Se não souber, tudo bem — seguimos sem ela."
          >
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-2xl bg-[#0f1117] px-5 py-4 text-base text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-brand/60 [color-scheme:dark]"
            />
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setTime("")
                  goTime()
                }}
                className="text-[0.8125rem] font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Não sei a hora
              </button>
              <PrimaryNext onClick={goTime} className="ml-auto" />
            </div>
          </Field>
        ) : null}

        {sub === "city" ? (
          <CityField
            label={`Cidade de nascimento de ${possessive === "sua" ? "você" : personLabel}`}
            value={city}
            onChange={setCity}
            onSubmit={finish}
          />
        ) : null}
      </div>

      <p className="mt-8 flex items-center gap-2 text-[0.75rem] leading-snug text-muted-foreground/70">
        <Lock className="size-3.5 shrink-0" />
        Seus dados ficam só neste dispositivo — nada é enviado enquanto isso é um
        estudo. Servem apenas para o cálculo.
      </p>
    </div>
  )
}

function Field({
  label,
  help,
  children,
}: {
  label: string
  help: string
  children: React.ReactNode
}) {
  return (
    <div className="animate-in fade-in duration-300">
      <label className="block text-[0.9375rem] font-semibold text-foreground">
        {label}
      </label>
      <p className="mb-4 mt-1 text-[0.8125rem] text-muted-foreground">{help}</p>
      {children}
    </div>
  )
}

function PrimaryNext({
  onClick,
  disabled,
  className,
}: {
  onClick: () => void
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand px-6 text-sm font-semibold text-brand-foreground transition-all disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      Continuar
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}

function CityField({
  label,
  value,
  onChange,
  onSubmit,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}) {
  const [focused, setFocused] = useState(false)
  const results = useMemo(() => searchCities(value), [value])
  const showList = focused && results.length > 0

  return (
    <div className="animate-in fade-in duration-300">
      <label className="block text-[0.9375rem] font-semibold text-foreground">
        {label}
      </label>
      <p className="mb-4 mt-1 text-[0.8125rem] text-muted-foreground">
        O lugar ajusta o céu ao seu horário.
      </p>

      <div className="relative">
        <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={value}
          placeholder="Comece a digitar…"
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 120)}
          className="w-full rounded-2xl bg-[#0f1117] py-4 pl-11 pr-4 text-base text-foreground outline-none ring-1 ring-transparent transition-shadow placeholder:text-muted-foreground/60 focus:ring-brand/60"
        />

        {showList ? (
          <ul className="absolute z-10 mt-2 max-h-56 w-full overflow-y-auto rounded-2xl bg-[#141826] p-1.5 shadow-2xl shadow-black/60">
            {results.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault()
                    onChange(c)
                    setFocused(false)
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-[0.875rem] text-foreground transition-colors hover:bg-brand/15"
                >
                  <MapPin className="size-3.5 text-muted-foreground" />
                  {c}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <PrimaryNext disabled={!value.trim()} onClick={onSubmit} />
    </div>
  )
}
