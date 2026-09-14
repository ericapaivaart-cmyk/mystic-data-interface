/**
 * Conteúdo da home — tudo FREE, sem login e sem dados pessoais.
 *
 * DADOS DO CÉU (Céu Agora): as posições planetárias devem vir de uma
 * biblioteca de EFEMÉRIDES PÚBLICAS no deploy real (ex.: astronomia/swisseph).
 * Os valores abaixo são um retrato representativo do "céu para todos" e
 * servem de contrato de formato para a integração. NÃO são dados pessoais:
 * é o mesmo céu para qualquer visitante.
 *
 * CONTEÚDO AUTORAL (Horóscopo): textos de Iris. Trocáveis por conteúdo
 * carregado/versionado. Posicionamento sempre: planejamento, gestão
 * emocional e dados — nunca adivinhação.
 */

export type ZodiacSign = {
  name: string
  glyph: string
  /** longitude inicial do signo, 0 = Áries */
  start: number
}

export const ZODIAC: ZodiacSign[] = [
  { name: "Áries", glyph: "♈", start: 0 },
  { name: "Touro", glyph: "♉", start: 30 },
  { name: "Gêmeos", glyph: "♊", start: 60 },
  { name: "Câncer", glyph: "♋", start: 90 },
  { name: "Leão", glyph: "♌", start: 120 },
  { name: "Virgem", glyph: "♍", start: 150 },
  { name: "Libra", glyph: "♎", start: 180 },
  { name: "Escorpião", glyph: "♏", start: 210 },
  { name: "Sagitário", glyph: "♐", start: 240 },
  { name: "Capricórnio", glyph: "♑", start: 270 },
  { name: "Aquário", glyph: "♒", start: 300 },
  { name: "Peixes", glyph: "♓", start: 330 },
]

export type Planet = {
  id: string
  name: string
  glyph: string
  /** longitude eclíptica 0–360 (0 = 0° Áries) — vem da efeméride pública */
  longitude: number
  /** nota didática curta, mostrada ao tocar */
  note: string
}

/** Retrato do céu (representativo). Substituir por efeméride pública no deploy. */
export const SKY_NOW: Planet[] = [
  { id: "sun", name: "Sol", glyph: "☉", longitude: 172, note: "Foco e vitalidade em Virgem: organizar antes de agir." },
  { id: "moon", name: "Lua", glyph: "☽", longitude: 46, note: "Emoções em Touro: buscar segurança e ritmo constante." },
  { id: "mercury", name: "Mercúrio", glyph: "☿", longitude: 158, note: "Mente afiada para detalhes e decisões práticas." },
  { id: "venus", name: "Vênus", glyph: "♀", longitude: 133, note: "Afetos em Leão: gestos generosos são bem recebidos." },
  { id: "mars", name: "Marte", glyph: "♂", longitude: 205, note: "Energia em Libra: agir através de acordos, não do embate." },
  { id: "jupiter", name: "Júpiter", glyph: "♃", longitude: 74, note: "Expansão em Gêmeos: boa janela para aprender e circular." },
  { id: "saturn", name: "Saturno", glyph: "♄", longitude: 344, note: "Estrutura em Peixes: disciplina para sonhos concretos." },
]

export type TransitTheme = {
  theme: string
  /** 0–100 — quanto o momento pede AÇÃO */
  action: number
  /** 0–100 — quanto o momento pede RECOLHIMENTO */
  retreat: number
  cue: string
}

/** Modulação de energia por tema — ação (verde) x recolhimento (vermelho). */
export const TRANSITS: TransitTheme[] = [
  { theme: "Amor", action: 68, retreat: 32, cue: "Aproximar com franqueza; evitar cobranças." },
  { theme: "Dinheiro", action: 44, retreat: 56, cue: "Revisar contas antes de novos gastos." },
  { theme: "Saúde", action: 72, retreat: 28, cue: "Movimento e rotina destravam a energia." },
  { theme: "Viagem", action: 58, retreat: 42, cue: "Planejar agora; confirmar detalhes depois." },
  { theme: "Negócios", action: 61, retreat: 39, cue: "Fechar parcerias; adiar contratos longos." },
]

export type Horoscope = {
  id: string
  label: string
  glyph: string
  /** frase compacta na tela */
  teaser: string
  /** leitura autoral completa (overlay) */
  full: string[]
}

/** Horóscopo autoral por eixo — Ascendente, Lua e Sol. */
export const HOROSCOPES: Horoscope[] = [
  {
    id: "ascendente",
    label: "Ascendente",
    glyph: "↑",
    teaser: "Como o mundo te vê hoje pede menos pressa.",
    full: [
      "O Ascendente rege a forma como você chega às situações. Hoje ele pede uma entrada mais calma: observe antes de responder.",
      "No trabalho, a primeira impressão conta a seu favor quando você escuta primeiro. Use isso para planejar os próximos passos com clareza.",
      "Gestão emocional do dia: reconheça a ansiedade como sinal, não como ordem. Respire, organize e escolha uma prioridade.",
    ],
  },
  {
    id: "lua",
    label: "Lua",
    glyph: "☽",
    teaser: "O que você sente hoje quer estabilidade.",
    full: [
      "A Lua fala do seu mundo interno. O momento favorece cuidar do que já existe em vez de começar do zero.",
      "Relações próximas pedem presença simples: uma conversa sem pressa vale mais que um grande gesto.",
      "Planejamento afetivo: anote o que te deu segurança hoje. Esse padrão é um dado — repita de propósito.",
    ],
  },
  {
    id: "sol",
    label: "Sol",
    glyph: "☉",
    teaser: "Sua energia central rende no detalhe.",
    full: [
      "O Sol mostra onde sua vitalidade brilha. Agora ela responde melhor à organização do que à improvisação.",
      "Direcione o foco a uma única meta prática. Terminar algo pequeno hoje abre espaço para o que é grande amanhã.",
      "Use a Data Astral para transformar essa energia em plano: descubra a próxima data favorável para o que importa.",
    ],
  },
]

export type MoonDay = {
  weekday: string
  day: number
  phaseGlyph: string
  phase: string
  today?: boolean
}

/** Agenda linear da semana lunar (a inovação boa a reutilizar). */
export const MOON_WEEK: MoonDay[] = [
  { weekday: "seg", day: 8, phaseGlyph: "🌒", phase: "Crescente" },
  { weekday: "ter", day: 9, phaseGlyph: "🌓", phase: "Quarto crescente" },
  { weekday: "qua", day: 10, phaseGlyph: "🌔", phase: "Gibosa" },
  { weekday: "qui", day: 11, phaseGlyph: "🌔", phase: "Gibosa", today: true },
  { weekday: "sex", day: 12, phaseGlyph: "🌕", phase: "Cheia" },
  { weekday: "sáb", day: 13, phaseGlyph: "🌖", phase: "Gibosa min." },
  { weekday: "dom", day: 14, phaseGlyph: "🌗", phase: "Quarto ming." },
]

export const MOON_TODAY = {
  phase: "Lua Gibosa Crescente",
  sign: "em Touro",
  illumination: 78,
  guidance:
    "Fase de amadurecer o que já foi iniciado. Bom para consolidar, ajustar detalhes e cuidar do corpo. Evite começar projetos totalmente novos — reserve isso para a próxima Lua Nova.",
}

/** Perguntas do funil Data Astral — evocam a incerteza por trás de pedir datas. */
export const QUESTIONS: string[] = [
  "Vou encontrar um amor?",
  "É a hora certa de mudar de emprego?",
  "Quando devo assinar esse contrato?",
  "Essa viagem é uma boa ideia?",
  "Devo investir agora ou esperar?",
  "É o momento de recomeçar?",
]

export type Plan = {
  id: string
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  cta: string
  href: string
  highlight?: boolean
}

/** Planos e Créditos — assinatura + créditos Data Astral. */
export const PLANS: Plan[] = [
  {
    id: "creditos",
    name: "Créditos Data Astral",
    price: "R$ 19",
    unit: "/ pacote",
    description: "Para descobrir datas quando precisar, sem mensalidade.",
    features: [
      "3 primeiras perguntas grátis",
      "Créditos avulsos para novas datas",
      "Conselho e ritual de cada resposta",
    ],
    cta: "Comprar créditos",
    href: "/planos",
  },
  {
    id: "assinatura",
    name: "Assinatura Iris",
    price: "R$ 39",
    unit: "/ mês",
    description: "Acompanhamento contínuo com os ciclos a seu favor.",
    features: [
      "Data Astral ilimitada",
      "Horóscopo autoral e trânsitos completos",
      "Planner dos ciclos e cartões no WhatsApp",
    ],
    cta: "Assinar",
    href: "/planos",
    highlight: true,
  },
]
