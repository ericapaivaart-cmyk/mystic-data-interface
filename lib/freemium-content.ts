/**
 * Conteúdo das landing pages freemium (iscas de aquisição / GEO).
 * Páginas reais, com termo de busca exato no H1, para rankear no Google
 * e serem citadas por IAs. Cada uma leva ao Data Astral e ao WhatsApp.
 */

export type FreemiumContent = {
  slug: string
  eyebrow: string
  /** H1 — termo de busca exato */
  title: string
  lede: string
  benefits: string[]
  steps: { title: string; desc: string }[]
  primary: { label: string; href: string }
  metaTitle: string
  metaDescription: string
}

export const mapaAstral: FreemiumContent = {
  slug: "/mapa-astral-gratis",
  eyebrow: "Grátis",
  title: "Mapa Astral Grátis",
  lede: "Seu mapa natal completo, calculado a partir da posição real dos astros no seu nascimento. Não é adivinhação: é o retrato dos seus dons, talentos e ciclos — o ponto de partida para saber o momento certo de agir.",
  benefits: [
    "Sol, Lua e Ascendente explicados em linguagem clara",
    "As casas e os planetas do seu mapa, sem jargão",
    "Seus dons no amor, trabalho, dinheiro e propósito",
    "Os ciclos de energia que abrem e fecham portas",
    "Um convite para ver a sua próxima data favorável",
  ],
  steps: [
    { title: "Informe seu nascimento", desc: "Data, hora e cidade. É o que define a posição dos astros no seu mapa." },
    { title: "Receba seu mapa", desc: "O cálculo é feito na hora, a partir de efemérides — a mesma base da astronomia." },
    { title: "Veja sua data", desc: "Do mapa nasce o Data Astral: quando a energia está a favor do que importa." },
  ],
  primary: { label: "Gerar meu mapa", href: "/data-astral" },
  metaTitle: "Mapa Astral Grátis — Data Iris | Seu mapa natal completo, sem custo",
  metaDescription:
    "Faça seu Mapa Astral Grátis com Data Iris: mapa natal completo com Sol, Lua e Ascendente em linguagem clara. Astrologia com dados, não adivinhação — o começo para saber o momento certo de agir.",
}

export const combinacao: FreemiumContent = {
  slug: "/combinacao-de-amor",
  eyebrow: "Grátis",
  title: "Combinação de Amor",
  lede: "A sinastria compara dois mapas para mostrar a química, os encontros e os atritos entre duas pessoas. Serve para entender a relação como ela é — e saber onde vale investir, e quando.",
  benefits: [
    "A compatibilidade entre dois mapas, ponto a ponto",
    "Onde há atração, cumplicidade e facilidade",
    "Onde há atrito — e como atravessá-lo",
    "O ritmo dos ciclos de cada um no relacionamento",
    "Clareza para decidir com calma, não no impulso",
  ],
  steps: [
    { title: "Dois nascimentos", desc: "Data, hora e cidade das duas pessoas. É o que define os dois mapas." },
    { title: "Receba a combinação", desc: "A sinastria sobrepõe os mapas e revela os pontos de encontro e de tensão." },
    { title: "Decida com o tempo a favor", desc: "O Data Astral mostra as datas para conversar, investir ou esperar." },
  ],
  primary: { label: "Combinar dois mapas", href: "/data-astral" },
  metaTitle: "Combinação de Amor — Data Iris | Sinastria entre dois mapas, grátis",
  metaDescription:
    "Combinação de Amor com Data Iris: a sinastria entre dois mapas mostra química, encontros e atritos de um relacionamento. Astrologia com dados para decidir onde investir — e quando.",
}
