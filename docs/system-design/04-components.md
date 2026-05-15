# Componentes

## Botão CTA Primário

```
inline-flex items-center justify-center
h-14 px-7 rounded-full
font-heading font-medium uppercase tracking-wide text-lg text-black
shrink-0
transition-shadow duration-300
[box-shadow:0_0_12px_rgba(var(--atlas-glow-warm-rgb),0.2),0_0_24px_rgba(var(--atlas-glow-warm-rgb),0.1)]
hover:[box-shadow:0_0_16px_rgba(var(--atlas-glow-warm-rgb),0.35),0_0_32px_rgba(var(--atlas-glow-warm-rgb),0.15)]
```

**Background:** `style="background-image:var(--atlas-gradient)"`

**Mobile:** Adicionar `w-full`

### Estrutura Interna do CTA

```
[Gradient Button Text] | [Separator] | [Lot Label]
```

- Separator: `mx-4 text-black/20 max-[480px]:hidden`
- Lot label: `max-[480px]:hidden`

## Preço do CTA

```
flex flex-col gap-0 leading-none font-heading font-medium uppercase tracking-wide
```

- Original: `text-lg text-white line-through`
- Promocional: `text-lg text-white`

## Progress Bar

```html
<div class="w-full h-[5px] rounded-full bg-white/15 overflow-hidden">
  <div class="relative h-full rounded-full overflow-hidden transition-all duration-100"
       style="width:X%; background-image:var(--atlas-gradient);
              box-shadow:0 0 8px var(--atlas-c-end), 0 0 16px rgba(var(--atlas-glow-cool-rgb), 0.4)">
    <div class="absolute inset-0 animate-[shimmer_2s_ease-in-out_infinite]"
         style="background-image:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
                background-size:200% 100%"></div>
  </div>
</div>
```

## Header

```
absolute top-0 left-0 right-0 z-40
```

**Container:** `max-w-[1280px] mx-auto px-12 max-md:px-8 max-sm:px-3 pt-10 flex items-center gap-4 max-lg:justify-center max-lg:pb-20`

**Logo:** SVG inline, `width="117" height="48"`, class `inline-block shrink-0 text-white`

**Brand text:** `font-heading font-medium uppercase tracking-wide text-lg bg-clip-text text-transparent`, style=`"background-image:var(--atlas-gradient)"`

## Stats Card

```
flex flex-col items-center gap-3
rounded-lg border border-white/[0.06] bg-[var(--surface-950)]
py-16 px-4 text-center
transition-all duration-700 ease-out
hover:border-white/15 hover:bg-[var(--surface-900)]
```

**Animação:** `style="opacity:0;transform:translateY(32px);transition-delay:Xms"` (0, 200, 400)

**Número:** `text-8xl font-heading font-semibold bg-clip-text text-transparent`, style=`"background-image:var(--atlas-gradient)"`

**Label:** `text-lg font-body text-white/50 text-balance`

**Fonte:** `text-xs font-body text-white/25 -mt-1`

## Bento Card

```
data-slot="bento-card"
class="relative rounded-2xl overflow-hidden bg-[var(--surface-950)] group transition-colors"
```

**Featured:** `col-span-2 max-sm:col-span-1`

**Overlay:** `absolute inset-0 opacity-[0.06]`, `style="background:linear-gradient(135deg, oklch(0.25 0.XX YYY), oklch(0.20 0.XX ZZZ))"`

## Feature Card Tabs

**Tab Button (inactive):**
```
group relative flex items-center gap-3 text-left px-4 py-3
transition-colors duration-300 rounded-xl bg-transparent
hover:bg-white/[0.02]
```

**Tab Button (active):**
```
bg-white/[0.04]
```

## Badge

```
data-slot="badge" data-variant="outline"
inline-flex items-center justify-center
px-2 py-0.5 font-mono uppercase tracking-wide whitespace-nowrap shrink-0
[&>svg]:size-3 gap-1 rounded-full
bg-transparent border-transparent text-base font-medium
bg-clip-text text-transparent
```

**Style:** `background-image:var(--atlas-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent`

## Accordion (FAQ)

**Container:** `data-slot="accordion" class="w-full flex flex-col gap-2"`

**Item:** `data-slot="accordion-item" class="bg-[var(--surface-950)]/50 rounded-lg px-6 transition-colors hover:bg-[var(--surface-950)] data-[state=open]:bg-[var(--surface-950)] border-0"`

**Trigger:** `data-slot="accordion-trigger" class="focus-visible:ring-2 focus-visible:ring-foreground flex flex-1 items-start justify-between gap-4 rounded-lg py-5 text-left font-medium font-body text-[var(--surface-600)] hover:text-[var(--surface-200)] [&[data-state=open]]:text-[var(--surface-200)] transition-all text-base"`

**Content:** `data-slot="accordion-content" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"`

**Content Text:** `pt-0 pb-4 text-[var(--surface-500)] transition-colors text-base leading-relaxed`

## CTA Section

```
relative flex flex-col items-center text-center gap-8
py-28 px-20 max-lg:py-24 max-lg:px-16 max-sm:py-16 max-sm:px-6
rounded-[14px] overflow-hidden
```

**Background:** `style="background:var(--atlas-gradient)"`

**Title:** `font-heading uppercase text-foreground relative z-[1] text-5xl max-sm:text-[40px] leading-[1.1] tracking-[-1.44px] max-sm:tracking-[-0.84px] max-w-[900px] font-normal text-balance`, `style="color:var(--atlas-on-gradient)"`

**Description:** `relative z-[1] text-[18px] max-sm:text-[16px] font-normal leading-relaxed max-w-[1020px] font-body text-balance`, `style="color:rgba(var(--atlas-on-gradient-rgb), 0.75)"`

## Sticky Bottom Bar

**Desktop:** `hidden lg:flex items-center gap-4 rounded-full bg-black/80 backdrop-blur-md border border-white/[0.08] p-3`

**Mobile:** `flex flex-col items-center gap-2 rounded-[28px] bg-black/80 backdrop-blur-md border border-white/[0.08] p-3 w-full`

## Video Container

```html
<section class="max-w-[1360px] mx-auto px-12 max-md:px-8 max-sm:px-3 pb-12 max-sm:pb-8">
  <div class="rounded-[12px] p-[20px]" style="background-color:#000000">
    <video class="block w-full h-auto rounded-[4px]" autoplay loop muted playsinline />
  </div>
</section>
```

## Footer

```
max-w-[1280px] mx-auto px-12 max-md:px-8 max-sm:px-3 py-8
border-t border-white/[0.06]
flex items-center justify-between max-sm:flex-col max-sm:gap-4
```