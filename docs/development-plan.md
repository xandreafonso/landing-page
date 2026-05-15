# Plano de Desenvolvimento — Landing Page Consultor IA

> Diretório de saída: `layout-01/`
> Stack: HTML + CSS + JavaScript puro (sem frameworks)
> Referência visual: overlens.com.br design system (`docs/system-design/`)
> Estratégia: `docs/strategy/`

---

## Visão Geral

Landing page dark-mode para consultoria em IA (Alexandre). Público-alvo: prestadores de serviço e PMEs. Tom: direto, profissional, acessível. Sem buzzwords.

---

## Etapas

### Etapa 1 — Estrutura base e tokens

**Arquivos:** `layout-01/index.html`, `layout-01/css/tokens.css`

- [ ] Criar `index.html` com estrutura base (`<!DOCTYPE html>`, lang="pt-BR", meta viewport, dark mode)
- [ ] Carregar fontes via Google Fonts: Outfit (heading), Inter (body), JetBrains Mono (mono)
- [ ] Criar `css/tokens.css` com CSS custom properties:
  - `--atlas-c-start`, `--atlas-c-mid`, `--atlas-c-end` (cores coral)
  - `--atlas-gradient`, `--atlas-gradient-90`
  - `--atlas-glow-cool-rgb`, `--atlas-glow-warm-rgb`
  - `--atlas-on-gradient`, `--atlas-on-gradient-rgb`
  - `--surface-950` até `--surface-200`
- [ ] Definir `max-width` containers: narrow (1280px), medium (1360px), wide (1720px)
- [ ] Definir spacing tokens (padding, gaps) e breakpoints

### Etapa 2 — Reset e estilos globais

**Arquivos:** `layout-01/css/reset.css`, `layout-01/css/global.css`

- [ ] CSS reset minimalista (box-sizing, margins, font smoothing)
- [ ] Estilos base: `body` bg-black, cor texto `rgba(255,255,255,0.6)`, `font-family: Inter`
- [ ] Headings: `font-family: Outfit`, `uppercase`, `font-weight: 500`
- [ ] Seleção de texto com cor accent
- [ ] Scrollbar sutil (dark theme)

### Etapa 3 — Utilitários e responsividade

**Arquivos:** `layout-01/css/utilities.css`

- [ ] Classes de container: `.container-narrow`, `.container-medium`, `.container-wide`
- [ ] Classes de tipografia escalonada (mobile/tablet/desktop)
- [ ] Classes de opacity para texto: `.text-100`, `.text-80`, `.text-60`, `.text-50`, `.text-25`
- [ ] Classes de gradiente: `.gradient-text`, `.gradient-bg`
- [ ] Classes de glassmorphism: `.glass-card`, `.glass-bar`
- [ ] Breakpoints: max-lg (1024px), max-md (768px), max-sm (640px), max-xs (480px)

### Etapa 4 — Componentes CSS

**Arquivos:** `layout-01/css/components.css`

- [ ] Botão CTA primário (gradiente coral, glow shadow, rounded-full, uppercase)
- [ ] Botão outline (border-foreground/25, hover border-foreground/50)
- [ ] Badge (inline-flex, px-2 py-0.5, mono uppercase, gradient-text)
- [ ] Stats card (surface-950, border-white/6%, hover border-white/15%, staggered animation)
- [ ] Bento card (rounded-2xl, surface-950, oklch overlay, group hover)
- [ ] Accordion/FAQ item (surface-950 bg, trigger surface-600→surface-200)
- [ ] Progress bar (gradient fill, shimmer animation, glow shadow)
- [ ] Glass bottom bar (rounded-full desktop, rounded-[28px] mobile, backdrop-blur-md)

### Etapa 5 — Animações CSS

**Arquivos:** `layout-01/css/animations.css`

- [ ] Keyframes: `heroFadeDown`, `shimmer`, `textShine`, `banner-gradient`, `glow`
- [ ] Keyframes: `accordion-up`, `accordion-down`
- [ ] Scroll reveal (opacity 0→1, translateY 32px→0, com stagger delays)
- [ ] Hero stagger delays (0.05s, 0.1s, 0.3s, 0.5s, 0.8s)
- [ ] Hover transitions (duration-300 para botões, duration-700 para cards)
- [ ] `textShine` animation no parágrafo hero

### Etapa 6 — Header

**Arquivos:** `layout-01/index.html` (seção), `layout-01/css/sections/header.css`

- [ ] Position absolute, top-0, z-40
- [ ] Logo + texto "Consultor IA" com gradiente
- [ ] Container narrow (1280px), padding responsivo
- [ ] Navigation links (opcional): Serviços, Processo, Contato
- [ ] Botão CTA no header (outline)

### Etapa 7 — Hero

**Arquivos:** `layout-01/index.html` (seção), `layout-01/css/sections/hero.css`

**Conteúdo adaptado (estratégia):**
- Badge: "Consultoria em IA"
- H1: "Mapeamos seu processo, identificamos onde a IA resolve de verdade, e implementamos"
- Parágrafo: Descrição direta do serviço: arquitetar e implementar soluções de IA para automação de processos ou novos projetos
- CTA button: "Agendar conversa" + indicador de vaga/lote
- Progress bar (vagas limitadas)
- Elemento visual: ilustração abstrata ou grid com glow

- [ ] Layout flex: texto (esquerda) + ilustração (direita), stack em mobile
- [ ] Grid overlay sutil (24px, rgba branco 7%)
- [ ] Glow radial no fundo (coral, baixa opacidade)
- [ ] Staggered fade-down para badge, h1, parágrafo, botão, progress bar
- [ ] textShine animation no parágrafo

### Etapa 8 — Video / Anúncio

**Arquivos:** `layout-01/css/sections/video.css`

- [ ] Container medium (1360px), rounded-[12px], fundo preto
- [ ] Placeholder para video ou imagem (pode ser estático na V1)
- [ ] Aspect ratio responsivo

### Etapa 9 — Stats

**Arquivos:** `layout-01/css/sections/stats.css`

**Conteúdo adaptado:**
- 3 números de impacto (ex: processos automatizados, clientes atendidos, horas economizadas)
- Labels em uppercase, fonte pequena para descrição

- [ ] Grid 3 colunas (1 coluna em mobile)
- [ ] Cards com surface-950, border-white/6%
- [ ] Número com gradiente coral (bg-clip-text)
- [ ] Scroll reveal com stagger (0ms, 200ms, 400ms)

### Etapa 10 — Serviços (Features)

**Arquivos:** `layout-01/css/sections/features.css`

**Conteúdo adaptado (3 pilares):**
1. Diagnóstico — Análise do processo atual ou riscos do projeto
2. Arquitetura — Solução personalizada com IA e automação
3. Implementação — Entrega com qualidade e prazos combinados

- [ ] Container narrow (1280px)
- [ ] Tab navigation com 3 opções
- [ ] Feature card: aspect-video, rounded, com conteúdo ilustrativo
- [ ] Descrição dos serviços com tom direto (sem buzzwords)

### Etapa 11 — Para Quem (Profiles)

**Arquivos:** `layout-01/css/sections/profiles.css`

**Conteúdo adaptado:**
- Prestadores de serviço que querem automatizar rotinas
- PMEs que precisam escalar operações com IA
- Empresas que querem desenvolver novos projetos com inteligência

- [ ] Layout similar ao features com tabs
- [ ] Cards de perfil com ícone/ilustração
- [ ] Descrição do tipo de cliente e benefício

### Etapa 12 — Depoimento

**Arquivos:** `layout-01/css/sections/testimonial.css`

- [ ] Citação em destaque com aspas decorativas
- [ ] Nome + cargo do cliente
- [ ] Tipografia grande para a citação

### Etapa 13 — Bento Grid (O que você constrói)

**Arquivos:** `layout-01/css/sections/bento.css`

**Conteúdo adaptado:**
- Cards: automação de processos, agentes de IA, sistemas inteligentes, integrações
- Card destaque (col-span-2) para solução principal

- [ ] Container wide (1720px)
- [ ] Grid com auto-rows-[minmax(280px,auto)]
- [ ] Cards com oklch overlay sutil
- [ ] Hover: border-white/15%, bg-surface-900

### Etapa 14 — Entregáveis

**Arquivos:** `layout-01/css/sections/deliverables.css`

**Conteúdo adaptado (o que o cliente recebe):**
- Documentação do processo
- Diagnóstico de problemas e riscos
- Arquitetura da solução
- Implementação completa

- [ ] Grid 4 colunas (1 em mobile)
- [ ] Cards com ícone + título + descrição
- [ ] Consistente com bento cards

### Etapa 15 — Processo/Timeline

**Arquivos:** `layout-01/css/sections/timeline.css`

**Conteúdo adaptado (etapas da oferta):**
1. Reunião e coleta de materiais
2. Análise e diagnóstico
3. Documentação do processo/projeto
4. Plano de ação e arquitetura
5. Implementação e entrega

- [ ] Container narrow (1280px)
- [ ] Layout vertical com marcadores de etapa
- [ ] Número + título + descrição por etapa
- [ ] Linha conectora entre etapas

### Etapa 16 — Word Reveal (Efeito visual)

**Arquivos:** `layout-01/css/sections/word-reveal.css`, `layout-01/js/word-reveal.js`

**Conteúdo:** Frase-impacto sobre IA e automação

- [ ] Grid de células mono text-[8px]
- [ ] Palavras-chave que se revelam ao passar o cursor
- [ ] Radial gradient mask seguindo o mouse
- [ ] Transition duration-150 para cells, duration-500 para palavras

### Etapa 17 — Pricing

**Arquivos:** `layout-01/css/sections/pricing.css`

**Conteúdo adaptado:**
- Plano único ou 2-3 opções (consultoria pontual, mensal, projeto)
- Preço com gradiente, CTA para agendar conversa

- [ ] Container wide (1720px)
- [ ] Cards de preço com surface-950
- [ ] Preço em destaque com gradiente
- [ ] Botão CTA com glow

### Etapa 18 — CTA Final

**Arquivos:** `layout-01/css/sections/cta.css`

**Conteúdo adaptado:**
- Heading: "Vamos conversar sobre o seu processo"
- Descrição: "Sem compromisso. Mapeamento gratuito na primeira reunião."
- Botão: "Agendar conversa"

- [ ] Container com background: var(--atlas-gradient), rounded-[14px]
- [ ] Texto em var(--atlas-on-gradient)
- [ ] Padding responsivo: py-28 px-20 / max-lg:py-24 px-16 / max-sm:py-16 px-6

### Etapa 19 — Footer

**Arquivos:** `layout-01/css/sections/footer.css`

- [ ] Container narrow (1280px), border-top white/6%
- [ ] Logo + copyright
- [ ] Links: LinkedIn, WhatsApp, E-mail
- [ ] Layout flex: justify-between, stack em mobile

### Etapa 20 — Elementos fixos

**Arquivos:** `layout-01/css/elements/fixed.css`, `layout-01/js/fixed-elements.js`

- [ ] Bottom bar desktop (glassmorphism, hidden em mobile)
- [ ] Bottom bar mobile (visible em mobile)
- [ ] Botão WhatsApp (bg-[#25D366])
- [ ] Back-to-top button (bg-white/10, backdrop-blur)

### Etapa 21 — JavaScript

**Arquivos:** `layout-01/js/main.js`

- [ ] Intersection Observer para scroll reveal (stats, cards, sections)
- [ ] Mobile menu toggle (se necessário)
- [ ] Smooth scroll para âncoras
- [ ] Accordion toggle (FAQ)
- [ ] Tab switching (features, profiles, bento)
- [ ] Word reveal cursor tracking
- [ ] Back-to-top visibility toggle
- [ ] Staggered animation delays

### Etapa 22 — Responsividade e polish

- [ ] Testar todos os breakpoints: 1024px, 768px, 640px, 480px
- [ ] Verificar tipografia escalonada em mobile
- [ ] Ajustar padding/gaps em mobile
- [ ] Garantir que CTA botão é full-width em mobile
- [ ] Verificar contraste e legibilidade
- [ ] Testar animações em mobile (reduzir se necessário)

### Etapa 23 — Performance e SEO

- [ ] Preload fontes (Outfit, Inter, JetBrains Mono)
- [ ] Lazy loading para imagens
- [ ] Meta tags: title, description, og:image
- [ ] Structured data (schema.org para local business)
- [ ] Minificar CSS/JS para produção (instruções no README)

---

## Estrutura de Arquivos

```
layout-01/
├── index.html
├── css/
│   ├── tokens.css          (CSS custom properties)
│   ├── reset.css           (CSS reset)
│   ├── global.css          (Estilos base, body, tipografia)
│   ├── utilities.css       (Container, spacing, helpers)
│   ├── components.css      (Botão, badge, card, accordion, progress)
│   ├── animations.css      (Keyframes, transitions, scroll reveal)
│   └── sections/
│       ├── header.css
│       ├── hero.css
│       ├── video.css
│       ├── stats.css
│       ├── features.css
│       ├── profiles.css
│       ├── testimonial.css
│       ├── bento.css
│       ├── deliverables.css
│       ├── timeline.css
│       ├── word-reveal.css
│       ├── pricing.css
│       ├── cta.css
│       └── footer.css
├── js/
│   ├── main.js             (Menu, scroll, tabs, accordion)
│   └── word-reveal.js      (Cursor tracking reveal)
└── assets/
    └── (imagens/SVGs conforme necessário)
```

---

## Ordem de Implementação

1. **Tokens + Reset + Global** (base sólida)
2. **Utilities + Components** (bloco de construção)
3. **Animations** (camada de movimento)
4. **Header + Hero** (primeira impressão)
5. **Stats + Features** (prova e detalhes)
6. **Profiles + Testimonial** (pertencimento e social proof)
7. **Bento + Deliverables** (escopo visual)
8. **Timeline** (processo)
9. **Word Reveal** (efeito premium)
10. **Pricing + CTA** (conversão)
11. **Footer + Fixed Elements** (complemento)
12. **JavaScript** (interatividade)
13. **Responsividade + Polish** (ajuste fino)
14. **Performance + SEO** (entrega)

---

## Adaptações de Conteúdo (Estratégia)

| Seção Original | Seção Nova | Conteúdo |
|---|---|---|
| Hero "Atlas Brand System" | Hero "Consultor IA" | Mapeamos seu processo, identificamos onde a IA resolve de verdade |
| Stats (vagas, alunos, etc.) | Stats (impacto) | Processos automatizados, clientes, horas economizadas |
| "Why Participate?" | Serviços | Diagnóstico, Arquitetura, Implementação |
| "Who Is It For?" | Para Quem | Prestadores de serviço, PMEs, projetos novos |
| Bento "What You Build" | Soluções | Automação, Agentes IA, Sistemas inteligentes |
| Deliverables | Entregáveis | Documentação, Diagnóstico, Arquitetura, Implementação |
| Timeline (horários) | Processo | 5 etapas da oferta |
| Pricing | Investimento | Planos de consultoria |
| CTA "Inscreva-se" | CTA "Agendar conversa" | Sem compromisso, mapeamento gratuito |

## Tom de voz

- Headlines em uppercase (design system)
- Descrições diretas, sem buzzwords
- Voz ativa: "Mapeamos", "Implementamos", "Entregamos"
- Sem "revolucionário", "disruptivo", "ponta"
- Explicar o raciocínio, não só o resultado