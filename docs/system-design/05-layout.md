# Layout & Seções

## Seções em Ordem

### 1. Header
- `absolute top-0 left-0 right-0 z-40`
- Container: `max-w-[1280px]`
- Logo + "Brand System" gradient text

### 2. Hero (`id="hero"`)
- `relative min-h-[85vh] max-lg:min-h-0 flex items-center max-lg:flex-col overflow-hidden bg-black`
- Grid overlay sutil (24px, rgba branco 7%)
- Layout: `flex items-center justify-between max-lg:flex-col-reverse`
- Texto (esquerda): max-w-[520px]
- Ilustração floating (direita): max-w-[560px], `hidden lg:block`

### 3. Video/Announcement Bar
- `max-w-[1360px] mx-auto px-12 max-md:px-8 max-sm:px-3 pb-12 max-sm:pb-8`
- Black background wrapper: `rounded-[12px] p-[20px] bg-[#000000]`
- Video: `rounded-[4px] w-full h-auto`

### 4. Stats Section
- `max-w-[1720px] mx-auto px-12 max-lg:px-8 max-sm:px-3`
- Grid 3 colunas: `grid grid-cols-3 max-sm:grid-cols-1 gap-3`
- Cards com animação staggered (0ms, 200ms, 400ms delay)

### 5. "Why Participate?" / Features
- `max-w-[1280px] mx-auto px-12 max-lg:px-8 max-sm:px-3 pt-14 pb-24 max-lg:py-20 max-sm:py-16`
- Tabs com 3 features (Antecipação, Diferenciação, Infraestrutura)
- Feature card: `aspect-video rounded-lg`

### 6. "Who Is It For?" / Profiles
- `max-w-[1720px] mx-auto px-12 max-lg:px-8 max-sm:px-3 py-20 max-lg:py-14 max-sm:py-10`
- Tab navigation com perfil cards

### 7. Testimonial Quote
- Seção com citação e decoração

### 8. "What You Build" / Bento Grid
- `max-w-[1720px]` com `grid auto-rows-[minmax(280px,auto)]`
- Bento cards com `col-span-2` para featured
- Tabs interativas: Brand System, IA, Converse com sua marca

### 9. "What You Get" / Deliverables
- Grid 4 colunas
- Cards com ícone + título + descrição

### 10. Timeline/Schedule
- `max-w-[1280px] mx-auto px-12 max-lg:px-8 max-sm:px-3 pt-24 pb-12`
- Horários: 09H30, 12H00, 13H30, 17H30

### 11. Word Reveal Section
- `section-reveal max-w-[1720px] mx-auto px-12 max-lg:px-8 max-sm:px-3 py-32 max-lg:py-24 max-sm:py-16`
- Grid overlay: `font-mono text-[8px] max-sm:text-[6px]`
- Reveal mask: `radial-gradient(ellipse at center, rgb(0 0 0) 35%, rgb(0 0 0 / 0.85) 55%, transparent 75%)`

### 12. Products/Pricing Section
- `max-w-[1720px] mx-auto px-12 max-md:px-8 max-sm:px-3 mt-[20px]`

### 13. CTA Closing Section
- `rounded-[14px] overflow-hidden`, `background:var(--atlas-gradient)`
- Texto em `var(--atlas-on-gradient)` (#F8F6EE)

### 14. Footer
- `max-w-[1280px] mx-auto px-12 max-md:px-8 max-sm:px-3 py-8 border-t border-white/[0.06]`

### Elementos Fixos
- **Desktop bottom bar:** `hidden lg:flex`, `rounded-full bg-black/80 backdrop-blur-md border-white/[0.08]`
- **Mobile bottom bar:** `rounded-[28px] bg-black/80 backdrop-blur-md border-white/[0.08]`
- **Back-to-top:** `rounded-full bg-white/10 backdrop-blur-sm text-white shadow-lg`
- **WhatsApp:** `rounded-full bg-[#25D366] text-white shadow-lg`

## Breakpoints

| Breakpoint | Max-Width | Uso Principal |
|------------|-----------|---------------|
| `max-lg` | < 1024px | Layout column, headings menores |
| `max-md` | < 768px | Padding do header/footer |
| `max-sm` | < 640px | Mobile layout, headings menores |
| `max-[480px]` | < 480px | Esconde elementos específicos |
| `max-[319px]` | < 320px | Easter egg (tela muito pequena) |

## Container Pattern

```
/* Container principal */
max-w-[1280px] mx-auto px-12 max-md:px-8 max-sm:px-3

/* Container largo */
max-w-[1720px] mx-auto px-12 max-lg:px-8 max-sm:px-3

/* Container médio (video) */
max-w-[1360px] mx-auto px-12 max-md:px-8 max-sm:px-3
```