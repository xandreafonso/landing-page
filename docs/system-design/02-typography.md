# Tipografia

## Fontes

| Classe | Família | Uso |
|--------|---------|-----|
| `font-heading` | Outfit | Headings, CTAs, badges, accordion triggers |
| `font-body` | Inter | Body text, descrições, labels |
| `font-mono` | JetBrains Mono | Badges específicos, grid overlay |

Fontes carregadas via preload (woff2):
- `1b99372b3eaef0c8-s.p.758e15a8.woff2`
- `70bc3e132a0a741e-s.p.15008bfb.woff2`
- `83afe278b6a6bb3c-s.p.3a6ba036.woff2`

## Escala de Tipografia

### Headings

| Elemento | Desktop | Tablet | Mobile | Weight | Tracking | Line-height |
|----------|---------|--------|--------|--------|----------|-------------|
| H1 Hero | `text-[44px]` | `text-[36px]` | `text-[30px]` | medium | `0px` | `1.1` |
| H2 Seção | `text-[44px]` | `text-[36px]` | `text-[26px]` / `text-[32px]` | medium | `-1px` | `1.1` |
| H3 Card | `text-xl` | — | — | medium | — | — |
| CTA Heading | `text-5xl` | — | `text-[40px]` | normal | `-1.44px` / `-0.84px` | `1.1` |
| FAQ Heading | `text-3xl` | `text-2xl` | — | normal | — | — |

### Body

| Uso | Tamanho | Weight | Line-height |
|-----|---------|--------|-------------|
| Descrição principal | `text-lg` | normal | `relaxed` |
| Descrição mobile | `text-base` | — | — |
| Descrição de card | `text-base` | — | `28px` |
| Muted/label | `text-base` | — | — |
| Fonte/atribuição | `text-xs` | — | — |
| Secondary | `text-sm` | — | — |

### Números de Stats

| Uso | Tamanho | Weight | Tracking |
|-----|---------|--------|----------|
| Número de stat | `text-8xl` | semibold | — |

## Font Weights

| Weight | Uso |
|--------|-----|
| `font-normal` | Body text, CTA heading |
| `font-medium` | Headings, badges, CTA buttons |
| `font-semibold` | Stat numbers |
| `font-bold` | PDF badge, small labels |

## Text Transform

- `uppercase` — usado em **todos** os headings, CTAs, badges, labels, logo text (74 usos)

## Text Balance

- `text-balance` — 30 usos (headings, descrições)
- `text-pretty` — 10 usos (descrições)

## Gradiente no Texto

```css
/* Padrão para texto com gradiente */
.bg-clip-text .text-transparent {
  background-image: var(--atlas-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Text Shine Animation

```css
/* Parágrafo do hero com efeito de brilho */
background-image: linear-gradient(
  90deg,
  rgba(255,255,255,0.8) 0%,
  rgba(255,255,255,0.8) 40%,
  rgba(255,255,255,1) 50%,
  rgba(255,255,255,0.8) 60%,
  rgba(255,255,255,0.8) 100%
);
background-size: 200% 100%;
animation: textShine 6s linear 2s infinite;
```