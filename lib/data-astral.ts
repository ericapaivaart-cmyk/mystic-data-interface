/**
 * Data Astral — tipos, dados e LÓGICA PURA (portável, sem React).
 *
 * ⚠️ ALGORITMO PROPRIETÁRIO — CONTRATO, NÃO IMPLEMENTAÇÃO.
 * `computeNextDate` abaixo é um MOCK DETERMINÍSTICO. Ele define APENAS o
 * formato de entrada/saída que o algoritmo real (fechado, construído protegido)
 * vai implementar no deploy: aspectos por pergunta × efemérides públicas reais ×
 * mapa do usuário → próxima data favorável + janela + confiança.
 * Este arquivo NÃO contém e NÃO expõe a lógica verdadeira.
 *
 * Regra de negócio travada: mesma pergunta + mesmos dados ⇒ MESMA resposta.
 * Isso sustenta a trava "não repetir antes da data" (ver findRecentSameQuestion).
 *
 * COPY: 2ª pessoa, tom acolhedor + técnico. Posicionamento SEMPRE
 * planejamento + gestão emocional + dados — NUNCA adivinhação/previsão mística.
 * Textos marcados com [ÁUDIO] são PLACEHOLDERS para a autora substituir depois
 * pela transcrição dos áudios que carregavam a experiência.
 */

export const FREE_LIMIT = 3

/* ------------------------------------------------------------------ */
/* Tipos                                                               */
/* ------------------------------------------------------------------ */

export type StepId =
  | "ritual"
  | "tema"
  | "pergunta"
  | "dados"
  | "dados2"
  | "espera"
  | "resposta"
  | "paywall"

export type SphereId = "vida" | "amor"
export type ThemeId =
  | "negocio"
  | "mudanca"
  | "financeiro"
  | "novo-amor"
  | "relacao"
  | "sinastria"

export type Theme = {
  id: ThemeId
  label: string
  /** linha curta de contexto no card */
  hint: string
  sphere: SphereId
  /** Sinastria = high ticket, fora dos 3 grátis, pede 2º nascimento */
  premium?: boolean
  /** perguntas fixas que o cliente paga pra saber */
  questions: string[]
}

export type Sphere = {
  id: SphereId
  label: string
  hint: string
}

export type Birth = {
  /** yyyy-mm-dd */
  date: string
  /** hh:mm — opcional, "" quando desconhecida */
  time: string
  city: string
}

export type DataAstralResult = {
  /** ISO yyyy-mm-dd — a data favorável em destaque */
  favorableDate: string
  /** janela de dias em torno da data favorável */
  windowStart: string
  windowEnd: string
  /** conselho autoral (placeholder marcado p/ substituir pelo áudio) */
  advice: string
  /** 0–100 — leitura de "força" do momento (cara de dado, não de sorte) */
  confidence: number
}

export type Consult = {
  id: string
  themeId: ThemeId
  themeLabel: string
  question: string
  birth: Birth
  partnerBirth?: Birth
  result: DataAstralResult
  /** ISO timestamp de quando foi salva */
  createdAt: string
}

/* ------------------------------------------------------------------ */
/* Esferas + Temas + Perguntas                                        */
/* (reusa/expande QUESTIONS da home; aqui agrupado pelos 6 temas)     */
/* ------------------------------------------------------------------ */

export const SPHERES: Sphere[] = [
  { id: "vida", label: "Vida & Trabalho", hint: "Decisões práticas: carreira, dinheiro, virada." },
  { id: "amor", label: "Amor & Vínculos", hint: "Encontros, relações e a compatibilidade entre dois." },
]

export const THEMES: Theme[] = [
  {
    id: "negocio",
    label: "Negócio",
    hint: "Fechar, lançar, assinar.",
    sphere: "vida",
    questions: [
      "Quando é a melhor data para fechar esse contrato?",
      "É a hora de lançar meu projeto?",
      "Devo aceitar essa proposta de trabalho?",
      "Qual a janela para uma reunião decisiva?",
    ],
  },
  {
    id: "mudanca",
    label: "Mudança",
    hint: "Recomeços, mudança de rota.",
    sphere: "vida",
    questions: [
      "É a hora certa de mudar de emprego?",
      "Quando devo mudar de cidade?",
      "É o momento de recomeçar do zero?",
      "Devo tomar essa decisão agora ou esperar?",
    ],
  },
  {
    id: "financeiro",
    label: "Financeiro",
    hint: "Investir, comprar, poupar.",
    sphere: "vida",
    questions: [
      "Devo investir agora ou esperar?",
      "Quando é a melhor data para uma compra grande?",
      "É momento de arriscar ou recolher?",
      "Qual a janela para renegociar dívidas?",
    ],
  },
  {
    id: "novo-amor",
    label: "Novo amor",
    hint: "Conhecer alguém, se abrir.",
    sphere: "amor",
    questions: [
      "Quando vou encontrar um amor?",
      "É uma boa fase para me abrir a alguém novo?",
      "Qual a data mais favorável para um primeiro encontro?",
      "Devo dar o primeiro passo agora?",
    ],
  },
  {
    id: "relacao",
    label: "Relação / Divórcio",
    hint: "Conversas difíceis, decisões a dois.",
    sphere: "amor",
    questions: [
      "Quando ter uma conversa decisiva com quem amo?",
      "É a hora de assumir um compromisso maior?",
      "É o momento de encerrar essa relação?",
      "Qual a janela para reatar um vínculo?",
    ],
  },
  {
    id: "sinastria",
    label: "Sinastria",
    hint: "A compatibilidade real entre dois mapas.",
    sphere: "amor",
    premium: true,
    questions: [
      "Qual é a compatibilidade entre nós dois?",
      "Qual a melhor janela para darmos um passo juntos?",
      "Onde estão os atritos e as forças da relação?",
    ],
  },
]

export function getTheme(id: ThemeId): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0]
}

/* ------------------------------------------------------------------ */
/* Cidades — mock de autocomplete (troca por base/geo real no deploy) */
/* ------------------------------------------------------------------ */

export const CITIES: string[] = [
  "São Paulo, SP",
  "Rio de Janeiro, RJ",
  "Belo Horizonte, MG",
  "Brasília, DF",
  "Salvador, BA",
  "Fortaleza, CE",
  "Curitiba, PR",
  "Recife, PE",
  "Porto Alegre, RS",
  "Manaus, AM",
  "Belém, PA",
  "Goiânia, GO",
  "Campinas, SP",
  "São Luís, MA",
  "Maceió, AL",
  "Natal, RN",
  "Florianópolis, SC",
  "Vitória, ES",
  "João Pessoa, PB",
  "Cuiabá, MT",
]

export function searchCities(query: string, limit = 6): string[] {
  const q = query.trim().toLowerCase()
  if (!q) return CITIES.slice(0, limit)
  return CITIES.filter((c) => c.toLowerCase().includes(q)).slice(0, limit)
}

/* ------------------------------------------------------------------ */
/* Conselho autoral — pools por tema (PLACEHOLDER dos áudios da Iris) */
/* ------------------------------------------------------------------ */

const ADVICE: Record<ThemeId, string[]> = {
  negocio: [
    "[ÁUDIO] Use os dias antes da janela para alinhar números e expectativas. No dia favorável, decida — não recomece a análise.",
    "[ÁUDIO] O céu favorece acordos claros, não improvisos. Chegue com a proposta pronta e deixe o outro lado responder.",
  ],
  mudanca: [
    "[ÁUDIO] A virada pede preparo, não pressa. Trate a janela como o momento de dar o passo, não de decidir se vai dar.",
    "[ÁUDIO] Organize a saída antes da entrada. Quando a data chegar, o terreno já estará pronto para a mudança.",
  ],
  financeiro: [
    "[ÁUDIO] O momento pede revisão antes de movimento. Confira contas nos dias anteriores e aja com dado, não com impulso.",
    "[ÁUDIO] Favorável para decisões estruturadas. Evite grandes apostas de última hora — a janela recompensa o que foi planejado.",
  ],
  "novo-amor": [
    "[ÁUDIO] Abra espaço na agenda, não só no coração. A janela favorece encontros quando você se coloca no mundo de propósito.",
    "[ÁUDIO] Menos expectativa, mais presença. O dia favorável rende quando você chega leve e disponível.",
  ],
  relacao: [
    "[ÁUDIO] Escolha a conversa, não o embate. A janela favorece franqueza tranquila — diga o essencial e escute de verdade.",
    "[ÁUDIO] Prepare o que precisa ser dito antes da data. No dia favorável, o clima ajuda quem chega inteiro e sem cobrança.",
  ],
  sinastria: [
    "[ÁUDIO] A compatibilidade não é veredito, é mapa. Use as forças a favor e trate os atritos como combinados, não como defeitos.",
    "[ÁUDIO] A janela mostra quando o encontro entre vocês flui melhor. Marquem o passo importante para dentro dela.",
  ],
}

/* ------------------------------------------------------------------ */
/* Núcleo determinístico (MOCK do algoritmo — ver aviso do topo)      */
/* ------------------------------------------------------------------ */

function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function toISO(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base)
  d.setDate(d.getDate() + days)
  return d
}

/**
 * CONTRATO da assinatura do algoritmo real:
 *   computeNextDate(question, birth, partnerBirth?) -> DataAstralResult
 * Entrada: pergunta (define os aspectos relevantes), nascimento do usuário
 * (mapa natal via efeméride), e, só na Sinastria, o 2º nascimento.
 * Saída: data favorável + janela + conselho + confiança.
 * A implementação verdadeira substitui SÓ o miolo deste corpo; o formato fica.
 */
export function computeNextDate(
  question: string,
  birth: Birth,
  partnerBirth?: Birth,
): DataAstralResult {
  const seedStr = `${question}|${birth.date}|${birth.time}|${birth.city}|${partnerBirth?.date ?? ""}`
  const seed = hashString(seedStr)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const daysAhead = 4 + (seed % 18) // 4–21 dias à frente
  const before = 1 + ((seed >> 5) % 2) // 1–2 dias antes
  const after = 1 + ((seed >> 9) % 3) // 1–3 dias depois

  const favorable = addDays(today, daysAhead)
  const windowStart = addDays(favorable, -before)
  const windowEnd = addDays(favorable, after)

  const themeId = (Object.keys(ADVICE) as ThemeId[]).find((id) =>
    THEMES.find((t) => t.id === id)?.questions.includes(question),
  )
  const pool = ADVICE[themeId ?? "mudanca"]
  const advice = pool[(seed >> 3) % pool.length]

  const confidence = 62 + (seed % 33) // 62–94 (cara de leitura, não de sorte)

  return {
    favorableDate: toISO(favorable),
    windowStart: toISO(windowStart),
    windowEnd: toISO(windowEnd),
    advice,
    confidence,
  }
}

/* ------------------------------------------------------------------ */
/* Formatação                                                         */
/* ------------------------------------------------------------------ */

const DATE_FMT = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
})
const WEEKDAY_FMT = new Intl.DateTimeFormat("pt-BR", { weekday: "long" })
const SHORT_FMT = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" })

/** ISO -> Date local (sem shift de fuso) */
function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export function formatLongDate(iso: string): string {
  return DATE_FMT.format(parseISO(iso))
}
export function formatWeekday(iso: string): string {
  return WEEKDAY_FMT.format(parseISO(iso))
}
export function formatShortDate(iso: string): string {
  return SHORT_FMT.format(parseISO(iso))
}
export function daysUntil(iso: string): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = parseISO(iso)
  return Math.round((target.getTime() - today.getTime()) / 86400000)
}

/* ------------------------------------------------------------------ */
/* Persistência local — 3 grátis + histórico + trava de repetição     */
/* SSR-safe (guardas typeof window).                                  */
/* ------------------------------------------------------------------ */

const USAGE_KEY = "data-astral:usage"
const HISTORY_KEY = "data-astral:history"

function hasWindow(): boolean {
  return typeof window !== "undefined"
}

export function getUsage(): number {
  if (!hasWindow()) return 0
  const raw = window.localStorage.getItem(USAGE_KEY)
  const n = raw ? Number.parseInt(raw, 10) : 0
  return Number.isFinite(n) ? n : 0
}

export function incUsage(): number {
  if (!hasWindow()) return 0
  const next = getUsage() + 1
  window.localStorage.setItem(USAGE_KEY, String(next))
  return next
}

export function remainingFree(): number {
  return Math.max(0, FREE_LIMIT - getUsage())
}

export function getHistory(): Consult[] {
  if (!hasWindow()) return []
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Consult[]) : []
  } catch {
    return []
  }
}

export function saveConsult(consult: Consult): void {
  if (!hasWindow()) return
  const history = getHistory()
  history.unshift(consult)
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)))
}

/**
 * Trava-chave: se a MESMA pergunta já foi consultada e a data favorável
 * dela ainda NÃO chegou, devolve a consulta anterior (o usuário deve voltar
 * na data, não repetir). Reforça o método e cria retorno.
 */
export function findRecentSameQuestion(question: string): Consult | null {
  const history = getHistory()
  const match = history.find(
    (c) => c.question === question && daysUntil(c.result.favorableDate) > 0,
  )
  return match ?? null
}

export function makeId(): string {
  return `da_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`
}

/* ------------------------------------------------------------------ */
/* Compartilhar — texto do card p/ WhatsApp                           */
/* ------------------------------------------------------------------ */

export function buildShareText(consult: Consult): string {
  const { question, result, themeLabel } = consult
  return [
    "✦ Minha Data Astral — Data Iris",
    "",
    `Tema: ${themeLabel}`,
    `Pergunta: ${question}`,
    "",
    `Data favorável: ${formatWeekday(result.favorableDate)}, ${formatLongDate(result.favorableDate)}`,
    `Janela: ${formatShortDate(result.windowStart)} a ${formatShortDate(result.windowEnd)}`,
    "",
    "Descubra a sua em datairis.com",
  ].join("\n")
}
