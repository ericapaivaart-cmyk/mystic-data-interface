# Mystic Data Design System

Linguagem visual travada. Minimalista, dados estruturados com acolhimento.
**Não altere cores ou regras sem autorização explícita.**

> Este arquivo é a versão portátil do manual da marca, para ser copiado em qualquer
> repositório (ex.: o projeto do Lovable). Mantê-lo no repo garante que a direção de
> design viaja junto com o código.

## Cores (hex)

Fundos:
- Background Dark (principal noturno): `#05050A`
- Background Light (respiro/foco): `#FFFFFF`

Superfícies / azuis suaves:
- Card Light: `#DCE4F2`
- Card Medium (dusty blue): `#8CA2C4`
- Card Dark (slate): `#3A4B66`

Ação & neon:
- Primary Brand / botões: `#0B85FF` (azul elétrico escolhido, sobre #2563EB e #1A65FF)
- Data Red (trânsitos/gráficos): `#E11D48`
- Data Green (trânsitos/gráficos): `#16A34A` (sem verdes lima/ácidos)
- Mint Green (menta suave): aprovado nos dois fundos. Só a menta SUAVE (nunca neon/lima).
- Turquoise (timeline do Planner): `#52C6DA` ("Turquoise Frozen River"). Companheira: Powder Blue `#B8E3E9`.
- **Hero accent (azul suave de contraste no texto/selo): `#A3C7E0`** — só o BOTÃO usa o brand vibrante `#0B85FF`.

BANIDOS: verdes neon/vibrantes/lima (`#80EF80`, `#9BFAB0`, `#ADEBB3` e similares).
BANIDO (2026-09-14): o azul-escuro azulado `#161A2B` como superfície/`--muted` — substituído por cinzas neutros (`#1C1D21` / `#26272C`). Menus usam fundo preto fosco `#141518`.

Tipografia (cores):
- Text Primary (dark): `#F8FAFC`
- Text Secondary: `#94A3B8`
- Text Dark (light): `#0F172A`

## Regras

- Fontes: **Ubuntu** (headings/display, `font-display`) + **Inter** (body, `font-sans`).
  - Display (Ubuntu): bold, leading apertado (~0.9–1.05) e tracking negativo.
  - Body (Inter): peso regular, `leading` confortável; ritmo pelo espaço vazio.
- Border radius:
  - Cards grandes: `rounded-2xl`/`rounded-3xl`.
  - Botões (info + CTA): cantos arredondados MAS com o quadrado central (squircle), nunca pill.
  - Pills (`rounded-full`): só para badges/detalhes finos.
- Sombras: minimalistas. Telas pretas = sem sombras pesadas; telas brancas = sombras difusas elegantes.
- **Tema híbrido fixo, sem toggle** (ver seção abaixo): cada tela é branca OU preta por design.

## Ritmo tipográfico & hierarquia (travado)

O que separa um "app" de uma "página automática": fontes pequenas, hierarquia clara de
tamanhos, leading apertado e espaço vazio generoso.

- **Fontes pequenas são corretas.** O usuário dá zoom no próprio celular se precisar.
- **Hierarquia forte de tamanhos** — cada nível abaixo é visivelmente menor.
- **Leading apertado**; a linha-base da casa é `line-height: 1.35` (a legenda do hero).
- **O vazio faz o trabalho** — respiro por whitespace/margem, não por bordas.

Baseline do hero (reutilizar no app):
- **H1/título:** Ubuntu 700, `2.5rem` mobile → `3.4rem` sm; `leading: 1.02`; `tracking: -0.035em`; cor `foreground`.
- **Legenda:** `0.8125rem` (13px), `font-medium`; **`leading: 1.35`**; cor `hero-accent` (#A3C7E0); medida estreita (`max-w-[17rem]`).
- **Ritmo vertical:** título → legenda `mt-7`; legenda → botão `mt-12`; respiro após o botão `pb-32`.
- **Botão do hero** menor que o bloco de conteúdo; **selo/badge maior que o botão**.

## Tema híbrido fixo — SEM toggle claro/escuro (travado)

O webapp NÃO tem alternância de tema. NÃO existe modo claro/escuro selecionável nem reação a
`prefers-color-scheme`.
- O app é **híbrido e fixo**: cada tela é autorada como tela BRANCA ou tela PRETA, decidido por
  tela no design — e permanece assim para todos os usuários.
- Não implementar theme switcher, não usar `dark:` como opção do usuário, não seguir o SO. Tela
  "branca" é branca para todos; tela "preta" é preta para todos.
- O viewport claro/escuro do preview do v0 é só artefato de preview; não deve dirigir o tema real.

## Superfícies de telas limpas + botões sólidos (ref: checkout Vercel)

Mesma disciplina nos dois tipos de tela: um "vazio" base, regiões claras criadas por
preenchimento sutil (NÃO por borda), um elemento focal, ações de cor sólida.

Telas brancas (regiões claras sobre branco):
- Vazio base: branco puro `#FFFFFF`.
- Preenchimento de região/card/input: cinza sutil `#F6F7F9`. Separação por FILL, não por outline.
- Hairline (só quando inevitável, ex.: divisor "OU" ou card salvo): `#E5E7EB`, 1px, tom-sobre-tom.
- Títulos de seção: preto `#0F172A`, bold, pequeno. Rótulos/legendas: cinza `#6B7280`.
- Número focal domina (ex.: preço), preto bold, com linha discreta acima.

Telas pretas (regiões escuras sobre preto):
- Vazio base: quase-preto `#05050A`. Card/input: `#141518` / `#1C1D21` (neutros sem azul).
- Hairline quando necessário: branco-sobre-preto tom-sobre-tom, baixíssima opacidade.
- Títulos: quase-branco. Rótulos/legendas: cinza neutro `#9A9BA1`.

Botões (nos dois tipos) — desenho do checkout Vercel:
- Forma: preenchido, **cor sólida**, arredondado (squircle) — checkout `~6px`; hero/primário
  16–24px. Largura total para checkout/compromisso e menus laterais; mais curto no hero.
- Preenchimento usa SÓ a paleta do manual: azul de marca `#0B85FF`; confirmação pode usar o
  data-green; ação neutra/discreta cinza com texto branco (ex.: "Sair"). NUNCA o verde/azul
  literais do Stripe — eles são referência de FORMA, não nossas cores.
- Rótulo centralizado, medium/semibold; loading troca por "Processando…" + spinner mantendo o
  fill. Sem botões só-contorno.

## Respiro ao final de blocos + escala neutra (travado)

Respiro de fechamento (vazio ao final):
- Todo bloco/seção fecha com espaço vazio real ABAIXO antes do próximo bloco — a pausa faz
  parte do ritmo. Baseline do hero: `pb-32` após o botão; manter proporcional nas seções.
- Regra do ritmo: apertado DENTRO do grupo (letras, linhas, rótulo→valor), generoso ENTRE
  grupos e no FIM de cada bloco.

Escala neutra — padrão Vercel / Stripe (superfícies claras):
- Em telas claras/brancas use rampa neutra limpa: **branco → cinzas claros** (Vercel, Stripe,
  Linear). O branco é o vazio; cinzas claros levam texto secundário, rótulos discretos e
  separação tom-sobre-tom. SEM painéis coloridos atrás do conteúdo.
- Só UMA cor de marca salta no campo neutro (azul `#0B85FF`, ou turquesa/menta quando couber).
  O resto fica neutro para o acento pousar.
- É a contraparte clara do tema escuro (`#05050A` + cinzas neutros). Mesma disciplina: campo
  vazio, texto neutro, um acento sólido, sem bordas (outline só tom-sobre-tom).
- Neutros claros sugeridos (confirmar como tokens): bg `#FFFFFF`, superfície sutil `#F6F7F9`,
  hairline `#E5E7EB`, texto secundário `#6B7280`, texto primário `#0F172A`. Alto contraste,
  legível em tamanhos pequenos.

## Checkout / pagamento (ref: Stripe Link)

- **Número focal primeiro:** o preço é o maior elemento, bold, centralizado, com linha do
  comerciante pequena/mutada acima.
- **Labels calmas:** rótulos mutados à esquerda, valor em `foreground` medium. Campos num
  único card sólido, divisórias só entre linhas.
- **Texto legal:** menor tamanho, `muted-foreground`, centralizado, margem generosa acima.
- **Ação primária de largura total**, altura ~48–56px, `rounded-md` (6px), preenchida. Loading
  troca o rótulo por "Processando…" + spinner, mantendo o preenchimento.
- Largura total vale para checkout/compromisso e menus laterais; o hero mantém largura menor.
  Raios: hero/primary = 16–24px, checkout = 6px (`rounded-md`).

## Arquitetura de menus (travada)

- **Menu do USUÁRIO abre à ESQUERDA** = resumo rápido → dashboard de dados do perfil. Inclui:
  Logout, Apagar dados, Reembolso, WhatsApp. Fundo preto fosco `#141518`.
- **Menu de PÁGINA abre à DIREITA** = discreto, compacto, alinhado à esquerda com vazio à
  direita, explicações "didáticas" em cor secundária, ícones maiores acompanhando a fonte.
- Redes sociais (WhatsApp, Instagram, E-mail) no rodapé do menu de página, à direita.
- Botão "Sair" em cinza neutro com texto branco (nada de azul escuro).

## Tela de espera / ritual — Firmamento (travado, 2026-09-15)

A espera é a experiência, não um diagrama astral. O visual travado é o **Firmamento**: um céu
FLAT, minimalista.
- A maioria das estrelas fica QUIETA e cintila de leve; **3 estrelas escolhidas se acendem em
  sequência** (subindo para a direita), ligadas por uma linha fina que se desenha — como quem lê
  o céu e encontra a próxima janela favorável.
- SVG/CSS determinístico (sem risco de hidratação). Congela no estado final com
  `prefers-reduced-motion`.
- **PROIBIDO:** órbita, espiral, roleta, calendário girando, "efeitos mágicos". Espiral = hipnose/
  enrolação; órbita = real, mas longe do conhecimento popular; roleta = sorte/adivinhação. O clima
  é "consultar o céu", nunca sorte.
- Implementação de referência: `components/data-astral/firmamento.tsx` + keyframes `da-twinkle` /
  `da-emerge` / `da-draw` / `da-breathe` em `globals.css`. (Aposentou o antigo `orbit-spheres`.)
- Frase de espera/manifesto permitida aqui: "Somos poeira de estrelas, mas o que dá energia da
  vida é o Sol." (manifesto/"Sobre"/espera — NUNCA em tela funcional).

## Direção & anti-padrões (travados)

Produto premium e confidencial; o cliente é leigo e quer clareza sobre a *própria vida*, não
jargão astrológico. Estética = sólida, pessoal, com respiro — o oposto do default genérico de IA.

NÃO:
- Pastéis lavados "de IA" em fundo claro; cores de 4 elementos como UI; laranja/cores feias;
  containers/cards pesados; azuis dusty como superfície de formulário; formulários protagonistas;
  verdes lima/ácidos; linhas de outline (exceto tom-sobre-tom branco/branco e preto/preto).

SIM:
- Fundo vazio + uma cor sólida + fonte bold. `#0B85FF` é o acento que salta em branco e preto.
- Transições suaves; slides laterais com pistas sutis; ✓/X sincronizados ao estado real;
  feedback visual em cada toque.

Referência de contenção de cor: Personare. Referência de forma/espaço: v0 (v0.app).

## Posicionamento

Planejamento + gestão emocional + dados. **NUNCA** adivinhação/futurologia.
Feature-assinatura: **Data Astral** (algoritmo proprietário de "próxima melhor data"),
marketing como "Mapa Astral Grátis" + "Combinação de Amor".

O minimalismo NÃO é só estética — é **filtro estratégico**: tipografia contida, muito espaço,
poucos elementos e o firmamento flat repelem o público de "feitiço/magia" e atraem o de
astrologia. Menos elementos = triagem de público.

> A voz da marca, o modelo de negócio, preços, personas, segredos (tarô/sinastria) e a
> blindagem jurídica-por-arquitetura estão em **`docs/data-astral-strategy.md`**. Leia os dois
> juntos: este arquivo governa a FORMA; o de estratégia governa a COPY e as decisões de produto.
