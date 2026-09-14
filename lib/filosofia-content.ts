/**
 * Ensaios fundadores da Data Iris — a página "Filosofia".
 * Textos autorais de Erica Iris, editados (fiéis à voz, sem repetição).
 * Tese central: prever é planejar; timing planetário, nunca adivinhação.
 * Esta é a página-âncora de GEO/SEO — headings reais + texto claro e visível.
 */

export type Essay = {
  id: string
  kicker: string
  title: string
  lede: string
  paragraphs: string[]
  /** lista de ganhos ☆ — usada só no ensaio-tese */
  gains?: string[]
}

export const positioning = {
  brand: "Data Iris",
  line: "A primeira astrologia com dados do nosso tempo.",
  lede: "Astrologia não é adivinhação. É a lógica dos ciclos — um relógio de energia. Prever é ver antes os altos e baixos para decidir e agir no momento certo. Este é o método, em palavras claras.",
  author: "por Erica Iris",
}

export const essays: Essay[] = [
  {
    id: "prever-e-planejar",
    kicker: "O método",
    title: "Prever é planejar",
    lede: "Previsão no Data Astral não é sortear com a vida, nem aposta, nem invenção de vidente. Prever é ver antes: saber as datas dos altos e baixos de energia da natureza.",
    paragraphs: [
      "Os astros funcionam como um relógio. Há vento solar, eletromagnetismo, luz — mas o que chega até nós são ciclos de energia que sobem e descem. Há dias em que a disposição acaba, e por isso acontecem perdas, tropeços, azares. E há dias de maior força, em que vêm os ganhos e os resultados.",
      "Data Astral é um método de decisão a partir do que é possível no seu mapa. Não é sobre fazer a vida acontecer na marra — é sobre saber o tempo em que a energia está a favor, e usá-lo.",
      "Saber o melhor momento é saber o momento certo.",
    ],
    gains: [
      "não perder oportunidades",
      "não gastar energia no dia errado",
      "preservar as forças nos momentos difíceis",
      "saber quando um momento difícil acaba",
      "se preparar e se concentrar para as vitórias",
      "evitar rupturas precipitadas",
      "saber em qual relacionamento investir — e quando encerrar",
      "ganhar tempo, energia e liberdade",
    ],
  },
  {
    id: "proposito",
    kicker: "O porquê",
    title: "Por que Data Astral existe",
    lede: "O calendário e o relógio foram inventados observando a posição real dos astros. Naquele tempo, astrologia era observação da realidade, para o desenvolvimento da civilização.",
    paragraphs: [
      "Era feita para planejar a produção de alimentos e sobreviver a guerras, não para julgar pessoas. O que sobrou disso, ao longo dos séculos, virou uma colcha de retalhos: conceitos de povos e tempos diferentes, misturados, com muitas traduções erradas.",
      "Talvez por isso a palavra “astrologia” tenha perdido a seriedade. A ciência despreza a astrologia de hoje — e, no trabalho feito com ética, é possível notar por quê.",
      "A pesquisa por trás do Data Astral foi justamente essa: separar o que realmente acontece nas previsões do que é superstição. Vinte anos de relatos anônimos de consulentes que retornam, analisados junto às datas astrológicas. Com esse conjunto robusto de depoimentos, Data Astral se tornou um método de decisão diante da incerteza.",
      "Astrólogos não inventam futuros. Acompanham pessoas — nas perdas, nos sofrimentos e também nas conquistas. Tempo é vida. E soberania é a liberdade de fazer melhores escolhas.",
    ],
  },
  {
    id: "poder-da-voz",
    kicker: "A consulta",
    title: "O poder da voz",
    lede: "É como uma conversa particular, no seu tempo. Você agenda um horário, mas não precisa estar online.",
    paragraphs: [
      "Iris analisa seu mapa com calma e grava a consulta em áudios exclusivos, enviados pelo WhatsApp no horário combinado — para você ouvir quantas vezes quiser.",
      "São mais de dez anos de atendimentos, com absoluta confidencialidade, discrição e sem julgamentos. Análises profundas, com empatia, e narrativas de vida prática. A consulta indica no seu mapa as datas, os dons, os talentos, as oportunidades e os limites. Há acompanhamento nos retornos, sem custo extra.",
      "Falar sobre o que se sente já é um caminho de compreensão. E a voz — sem a distração das imagens — deixa sentir a verdade das intenções. O tom, a firmeza e a presença acalmam e trazem clareza para decidir. São esses os pilares da consulta com Iris.",
    ],
  },
  {
    id: "quem-faz",
    kicker: "Quem faz",
    title: "Erica Iris",
    lede: "Trinta anos de estudo e a coragem de separar, na astrologia, o que funciona do que é superstição.",
    paragraphs: [
      "Estuda astrologia há mais de 30 anos, correlacionando-a com história da matemática, ciência, filosofia e psicologia. Em contato com as cosmologias de outros povos, percebeu que nem a astrologia escapou do colonialismo — e mergulhou em estudos sérios para entender qual é a parte que funciona, sem abrir mão da ética nem da ciência. Chegou à obra de Kepler. Desde 2015, passou a escutar relatos de vidas reais para confirmar, ou não, cada previsão. Assim nasceu o seu método.",
      "Antes, foram quatro anos de Direito no Mackenzie e mais de sete em Arte, na Faap e na Unesp. Desde 2005 estuda a obra de Jung e a psicanálise. Viveu em Nova York e São Francisco, onde trabalhou como diretora de criação em projetos de ciência e nos legados de povos originários diante das mudanças climáticas — indo à ONU, em Genebra, a convite da Science House. Também atua em design de produto.",
      "Sua vocação apareceu ao escutar as pessoas e apoiar a resolução criativa de problemas, pela gestão emocional e pelo desenho do tempo. Desde então, não houve um dia sem consultas. Sua maior satisfação é ter participado, com discrição e gratidão, dos momentos mais importantes na vida de suas consulentes.",
    ],
  },
]
