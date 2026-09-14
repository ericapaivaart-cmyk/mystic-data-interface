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
- Sombras: minimalistas. Dark = sem sombras pesadas; Light = sombras difusas elegantes.
- App padrão em **dark mode** (`<html className="dark">`).

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
