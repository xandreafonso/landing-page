# System Design — Atlas Brand System (overlens.com.br)

> Extraído de: https://www.overlens.com.br/atlas-brand-system/inscricao-a

## Sumário

| Arquivo | Conteúdo |
|---------|----------|
| [01-colors.md](01-colors.md) | Token de cores, gradientes, sistema de superfícies |
| [02-typography.md](02-typography.md) | Fontes, escalas, pesos, line-height, tracking |
| [03-spacing.md](03-spacing.md) | Padding, gaps, max-widths, grids |
| [04-components.md](04-components.md) | Botões, cards, badges, accordion, progress bar, etc. |
| [05-layout.md](05-layout.md) | Estrutura de seções, breakpoints, padrões responsivos |
| [06-animations.md](06-animations.md) | Keyframes, transitions, shimmer, scroll-reveal |
| [07-dark-theme.md](07-dark-theme.md) | Tokens dark, superficie, borders, text opacity |

## Stack Técnica

- **Framework:** Next.js (React)
- **CSS:** Tailwind CSS v4 + CSS custom properties
- **Componentes UI:** Radix UI (Accordion, etc.)
- **Modo:** Dark mode nativo (`class="dark"` no `<html>`)
- **Fontes:** Inter (body), Outfit (heading), JetBrains Mono (mono)

## Princípios Visuais

1. **Dark-first** — fundo negro/superfícies escuras com texto claro
2. **Gradiente coral quente** (`#F97D5B → #F9A87B`) como accent principal
3. **Tipografia uppercase** em headings e CTAs
4. **Glow effects** com box-shadow usando RGB custom properties
5. **Micro-animações** — fade-down, shimmer, float, reveal
6. **Grid overlay** sutil com 24px e opacidade baixa
7. **Glassmorphism leve** — `backdrop-blur-md` + `bg-black/80`