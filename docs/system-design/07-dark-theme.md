# Dark Theme

## Visão Geral

A página opera em dark mode nativo (`class="dark"` no `<html>`). A paleta inteira é construída sobre fundos escuros com texto claro e accent coral quente.

## Fundos

| Elemento | Cor |
|----------|-----|
| Body | `bg-background` (dark theme Shadcn) |
| Hero | `bg-black` |
| Cards | `bg-[var(--surface-950)]` |
| Card hover | `bg-[var(--surface-900)]` ou `bg-[color-mix(in_oklch,var(--surface-950),white_4%)]` |
| Tab active | `bg-white/[0.04]` ou `bg-[color-mix(in_oklch,var(--surface-950),white_7%)]` |
| Bottom bar | `bg-black/80 backdrop-blur-md` |
| Video wrapper | `bg-[#000000]` |
| CTA section | `background: var(--atlas-gradient)` |

## Surface Tokens (Inferidos)

| Token | Valor Aproximado | Uso |
|-------|-------------------|-----|
| `--surface-950` | ~`#0A0A0A` | Cards, accordion items |
| `--surface-900` | ~`#1A1A1A` | Card hover |
| `--surface-700` | — | Texto muito muted |
| `--surface-600` | — | Accordion trigger default |
| `--surface-500` | — | Descrições |
| `--surface-400` | — | Muted text |
| `--surface-200` | — | Labels, light text |

## Padrão de Texto

| Hierarquia | Cor | Opacity |
|------------|-----|---------|
| Headings | `text-foreground` / `var(--atlas-on-gradient)` | 100% |
| Sub-headings | `text-white/80` | 80% |
| Body text | `text-white/60` / `text-[var(--surface-500)]` | 60% |
| Secondary | `text-white/50` | 50% |
| Muted | `text-white/35` / `text-[var(--surface-600)]` | 35% |
| Very muted | `text-white/25` | 25% |
| Subtle | `text-white/30` | 30% |

## Botões em Dark Mode

### Primary Button
- Dark: `bg-[var(--surface-200)]` com `text-background`
- Hover: `bg-white`
- Ou usa gradient: `background-image: var(--atlas-gradient)` com `text-black`

### Outline Button
- Dark: `border-2 border-foreground/25 bg-transparent text-foreground`
- Hover: `border-foreground/50`

## Border Patterns

| Uso | Valor |
|-----|-------|
| Cards | `border-white/[0.06]` |
| Card hover | `border-white/[0.15]` |
| Bottom bar | `border-white/[0.08]` |
| Footer divider | `border-t border-white/[0.06]` |
| Hover sutil | `color-mix(in_oklch, var(--surface-950), white 4%)` |
| Hover mais forte | `color-mix(in_oklch, var(--surface-950), white 7%)` |

## Glassmorphism

```css
/* Bottom bar pattern */
background: rgba(0, 0, 0, 0.8);
backdrop-filter: blur(12px); /* backdrop-blur-md */
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 9999px; /* desktop */ or 28px; /* mobile */
```

## Grid Overlay (Hero Background)

```css
background-image:
  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 24px 24px;
mask-image: linear-gradient(to bottom, black 0%, transparent 30%, transparent 70%, black 100%);
```

## Shadow Patterns

```css
/* Card elevated */
box-shadow: 0 12px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06);

/* CTA button default */
box-shadow: 0 0 12px rgba(249,168,123,0.2), 0 0 24px rgba(249,168,123,0.1);

/* CTA button hover */
box-shadow: 0 0 16px rgba(249,168,123,0.35), 0 0 32px rgba(249,168,123,0.15);

/* Progress bar glow */
box-shadow: 0 0 8px var(--atlas-c-end), 0 0 16px rgba(249,125,91,0.4);

/* Colored deep shadow */
box-shadow: 0 20px 40px rgba(249,125,91,0.35);
```