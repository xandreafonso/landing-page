# Cores

## Token Primários (CSS Custom Properties)

| Token | Valor |
|-------|-------|
| `--atlas-c-start` | `#F97D5B` |
| `--atlas-c-mid` | `#F9936B` |
| `--atlas-c-end` | `#F9A87B` |
| `--atlas-glow-cool-rgb` | `249, 125, 91` |
| `--atlas-glow-warm-rgb` | `249, 168, 123` |
| `--atlas-on-gradient` | `#F8F6EE` |
| `--atlas-on-gradient-rgb` | `248, 246, 238` |

## Gradientes

| Nome | Valor |
|------|-------|
| `--atlas-gradient` | `linear-gradient(135deg, #F97D5B 0%, #F9A87B 100%)` |
| `--atlas-gradient-90` | `linear-gradient(90deg, #F97D5B 0%, #F9A87B 100%)` |
| `--atlas-gradient-warm` | `linear-gradient(135deg, #F97D5B 0%, #F9A87B 100%)` |
| `--atlas-gradient-loop` | `linear-gradient(135deg, #B85A3A 0%, #D97152 50%, #B85A3A 100%)` |
| Fallback gradient | `linear-gradient(135deg, #D3EEF4 0%, #F1EEC8 40%, #F3A46C 100%)` |

## Sistema de Superfícies (Dark Mode)

| Token | Uso |
|-------|-----|
| `var(--surface-950)` | Fundo de cards, accordion items, bento cards |
| `var(--surface-900)` | Hover de cards |
| `var(--surface-700)` | Texto muito muted |
| `var(--surface-600)` | Accordion trigger (default) |
| `var(--surface-500)` | Descrições, body text muted |
| `var(--surface-400)` | Texto muted |
| `var(--surface-200)` | Labels, light text |

## Cores de Texto (Opacidade sobre Branco)

| Token | Uso |
|-------|-----|
| `text-foreground` | Headings primários |
| `text-white` | Preços CTA, labels |
| `text-white/80` | Sub-headings |
| `text-white/70` | Texto secundário |
| `text-white/60` | Parágrafo hero |
| `text-white/50` | Descrições de stats |
| `text-white/25` | Fontes/atribuições |
| `text-black` | Texto em botão CTA |
| `text-black/70` | Labels pequenos |

## oklch (Cards de Feature)

| Valor | Contexto |
|-------|----------|
| `oklch(0.25 0 0)` | Fundo do card overlay |
| `oklch(0.20 0 0)` | Fundo do card overlay end |
| `oklch(0.25 0.02 250)` | Feature card background |
| `oklch(0.20 0.02 300)` | Feature card background end |

## Cores Específicas de Elementos

| Cor | Elemento |
|-----|----------|
| `#25D366` | Botão WhatsApp |
| `#0A0A0A` | Chat bubble fill |
| `#1A1A1A` | Near-black |
| `#4B77D6` | Ícone azul |
| `#7BA9F9` | Ícone azul claro |
| `#95E67A` / `#4FB56A` | Avatar verde |
| `#F25E5E` / `#C63838` | Ícone PDF gradient |

## Gradientes Radiais

| Padrão | Elemento |
|--------|----------|
| `radial-gradient(circle at 30% 25%, #F9A87B, #F97D5B)` | Avatar laranja |
| `radial-gradient(circle at 30% 25%, #95E67A, #4FB56A)` | Avatar verde |
| `radial-gradient(circle at 30% 25%, #7BA9F9, #4B77D6)` | Avatar azul |
| `radial-gradient(circle, rgba(249,168,123,0.35) 0%, rgba(249,125,91,0.15) 40%, transparent 70%)` | Glow effect |
| `radial-gradient(ellipse at center, rgb(0 0 0) 35%, rgb(0 0 0 / 0.85) 55%, transparent 75%)` | Reveal mask |

## Grid Overlay (Hero)

```css
background-image:
  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 24px 24px;
mask-image: linear-gradient(to bottom, black 0%, transparent 30%, transparent 70%, black 100%);
```

## Borders

| Token | Uso |
|-------|-----|
| `border-white/[0.06]` | Cards, dividers |
| `border-white/[0.08]` | Bottom bar |
| `border-white/[0.15]` | Card hover |
| `border-foreground/25` | Outline button |
| `border-foreground/50` | Outline button hover |