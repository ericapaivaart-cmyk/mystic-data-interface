# Handoff do redesign → repo do Lovable

Você vai publicar o Lovable direto na Vercel. Este guia lista o que construímos aqui
e como levar para lá. As duas bases são diferentes (componentes e estrutura distintos),
então o merge é manual: copie os arquivos/trechos abaixo e adapte os imports.

## 1. Manuais (prioridade — copie os DOIS inteiros)
- `docs/mystic-data-design-system.md` — regra viva de FORMA: cores, tipografia, ritmo, menus,
  checkout e o Firmamento (tela de espera). Copie inteiro para o repo do Lovable (ex.: `docs/`).
- `docs/data-astral-strategy.md` — o "cérebro": voz da marca, posicionamento, léxico, blindagem
  jurídica-por-arquitetura, modelo de negócio, preços, tiers, personas, vitalício, SEGREDOS
  (tarô/sinastria/"substitui a psicóloga"), motor B2B e copy aprovada. Sem este arquivo, qualquer
  IA/dev "melhora" o produto e quebra o diferencial. Copie inteiro.

## 2. Design tokens (CSS)
Em `app/globals.css` (adaptar para o `index.css`/tokens do Lovable):
- Adicionar o token do azul suave do hero:
  - `--hero-accent: #a3c7e0;` (nos temas light e dark)
  - mapear `--color-hero-accent: var(--hero-accent);` no `@theme inline`
- Banir o azul-escuro azulado — trocar por cinzas neutros:
  - `--muted: #1c1d21;`  `--muted-foreground: #9a9ba1;`
  - `--secondary: #26272c;`  `--accent: #26272c;`

## 2b. Tela de espera — Firmamento (aposentou a órbita)
- `components/data-astral/firmamento.tsx` — céu flat: estrelas quietas cintilando + 3 estrelas que
  se acendem em sequência ligadas por uma linha que se desenha. Substitui `orbit-spheres.tsx` (removido).
- Keyframes em `globals.css`: `da-twinkle`, `da-emerge`, `da-draw`, `da-breathe` (com `prefers-reduced-motion`).
- Usado em `waiting-step.tsx` (espera) e `ritual-step.tsx` (abertura). PROIBIDO órbita/espiral/roleta.

## 3. Componentes do redesign (copiar como referência)
- `components/home/hero-opening.tsx` — hero: vídeo com fade, título em wipe da esquerda,
  legenda #A3C7E0 com leading 1.35, botão fino/largo (h-12, max-w-[300px], radius 16px),
  selo giratório maior que o botão, respiro acima do título (`pt-[168px]`, folga do header
  empilhado) e respiro `pb-32` depois do botão.
- `components/nav/site-header.tsx` — Header 1 (logo discreto) + Header 2 empilhado à esquerda,
  transparente, colado ao Header 1 (Mapa Astral / Combinação / Planner).
- `components/nav/page-menu.tsx` — menu de página (direita): compacto, alinhado à esquerda,
  explicações em cor secundária, ícones maiores, redes sociais no rodapé à direita.
- `components/nav/user-menu.tsx` — menu do usuário (esquerda): fontes pequenas com ritmo,
  CTA de largura total, botão "Sair" cinza com texto branco.
- `components/nav/drawer.tsx` — casca dos dois menus: fundo preto fosco `#141518`, tema `dark`.
- `components/brand/logo.tsx` — wordmark "Data Iris" (ícone na cor do texto secundário,
  texto em cinza claro discreto).
- `lib/navigation.ts` — estrutura dos itens: "Combinação de Mapas", "Céu Agora" (era Trânsitos),
  Planner logo abaixo de Combinação; sem "low ticket" no frontend.

## 4. Valores-chave já decididos (para não reabrir)
- Azul do botão: `#0B85FF` (texto do botão claro). Azul do texto/selo: `#A3C7E0`.
- Nome exibido: **Data Iris** (não "Data Astral" no frontend).
- Header 2 sem rótulos internos ("low/médio ticket" são internos, nunca no frontend).
- Botão do hero: mais fino e largo; respiro depois dele.
- Menus: fundo preto fosco; usuário à esquerda, página à direita.
- **Voz/negócio/segredos:** decididos em `docs/data-astral-strategy.md` — não reabrir. Nunca colocar
  tarô, "substitui a psicóloga"/"terapêutico" nem a tabela de tiers da Assessoria na copy pública.
- Manifesto travado: "Astrologia é a verdadeira previsão. Nós prevemos os ventos para navegar."
- Vitrine da Assessoria mostra só "a partir de R$80/mês"; Data Astral = Pix avulso R$8 + 3 grátis.

## Como publicar (Opção 1)
1. No GitHub, confirme que o repo do Lovable está atualizado.
2. Na Vercel: New Project → importe esse repositório → deploy.
3. Aplique os itens 1–3 acima no código do Lovable conforme for fazendo o redesign lá.
