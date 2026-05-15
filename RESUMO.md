# Layout-01 — Resumo do Projeto

## Identidade

- **Marca:** Alexandre — Consultoria em IA
- **Logo:** "Alexandre" (weight 500) + "Consultor" (weight 100, 11px) + "IA" (weight 900, 11px, cor #1E4D8C)
- **Idioma:** Português (pt-BR)
- **Tom:** Direto, acessível, seguro — sem buzzwords, voz ativa

## Paleta e Design Tokens

| Token | Valor |
|---|---|
| `--atlas-c-start` | `#1E4D8C` (navy) |
| `--atlas-c-mid` | `#2B6CB0` |
| `--atlas-c-end` | `#4A90D9` (azul claro) |
| Gradiente principal | `135deg, #1E4D8C → #4A90D9` |
| Background | `#0A0A0A` (`--surface-950`) |
| Card/Surface | `#1A1A1A` (`--surface-900`) |

Fontes: Inter (corpo), Outfit (títulos), JetBrains Mono (código/labels)

## Animações (GSAP + ScrollTrigger)

Regras: duração máx 0.8s, easing `power2.out`, y máx 40px, stagger máx 0.12s, sem bounce/elastic/back, `scrub:1` para scroll-driven.

| Animação | Tipo | Arquivo |
|---|---|---|
| Hero entrance | `fromTo` sequencial (badge → title → desc → CTA) | gsap-animations.js |
| Hero rings/chips | `fromTo` com stagger | gsap-animations.js |
| Hero glow | `to` com yoyo repeat infinito | gsap-animations.js |
| Hero parallax (grid + glow) | `scrub: true` scroll-driven | gsap-animations.js |
| Scroll reveal (`.scroll-reveal`) | `fromTo` individual, `top 85%` trigger | gsap-animations.js |
| Card groups (stats, profiles, bento, etc.) | `fromTo` com stagger 0.12s | gsap-animations.js |
| Word reveal | `scrub:1`, `pin:true`, `end:'+=150%'` | gsap-animations.js |
| Stat counters | Contagem numérica com `scrollTrigger` | gsap-animations.js |
| Tabs transition | Fade + slide, duração 0.3s | gsap-animations.js |
| Accordion | `maxHeight` + `opacity`, rotation 180° no ícone | gsap-animations.js |
| CTA final | Scale 0.98→1 + fade | gsap-animations.js |

## Seções do HTML (index.html)

1. **Header** — Logo, nav links, CTA "Agendar diagnóstico", menu mobile
2. **Hero** — Badge, headline "Inteligência Orgânica", descrição, 2 CTAs, ilustração com rings/chips
3. **Stats** — 3 cards (88%, 92%, 64%) com fonte McKinsey 2025
4. **Features/Processo** — 3 tabs (Antecipação, Diferenciação, Infraestrutura)
5. **Profiles/Pra quem é** — 3 cards (Prestadores, PMEs, Times técnicos)
6. **Testimonial** — Princípio de trabalho (quote)
7. **Bento/Soluções** — 5 cards (Diagnóstico, Documentação, Arquitetura, Implementação, Acompanhamento)
8. **Deliverables** — 4 cards (Mapa de processo, Plano de ação, Arquitetura técnica, Código + handoff)
9. **Timeline** — 5 etapas (Reunião → Análise → Diagnóstico → Arquitetura → Implementação)
10. **Word Reveal** — Frase pinned com scroll
11. **Pricing/Modelos** — 2 cards (Projeto fechado, Acompanhamento)
12. **FAQ** — 6 perguntas (accordion)
13. **CTA Final** — WhatsApp
14. **Footer** — Logo, links, copyright
15. **Fixed bars** — Desktop e mobile com "Agendar diagnóstico"

## CTAs (WhatsApp)

Todos os CTAs direcionam para `api.whatsapp.com/send?phone=553497227855` com mensagens pré-preenchidas:

| Contexto | Texto pré-preenchido |
|---|---|
| Projeto Fechado "Conversar" | "Olá, quero conversar sobre um projeto de IA." |
| Acompanhamento "Conversar" | "Olá, quero conversar sobre sua assessoria de IA." |
| "Agendar diagnóstico" (bars) | "Olá, gostaria de agendar um diagnóstico de IA do meu negócio." |
| "Agendar pelo WhatsApp" (CTA final) | Mesmo que "Agendar diagnóstico" |
| Footer "WhatsApp" | "Olá, quero conversar sobre um projeto de IA." |

## Estrutura de Arquivos

```
layout-01/
├── index.html
├── RESUMO.md
├── css/
│   ├── tokens.css          # Design tokens (cores, gradientes, espaçamentos, etc.)
│   ├── reset.css           # CSS reset
│   ├── global.css          # Estilos globais (body, container, tipografia)
│   ├── utilities.css       # Classes utilitárias
│   ├── components.css      # Componentes (accordion, badges, botões, cards)
│   ├── animations.css      # @keyframes (shimmer, textShine, float) + hero opacity:0
│   └── sections/
│       ├── header.css
│       ├── hero.css
│       ├── stats.css
│       ├── features.css
│       ├── profiles.css
│       ├── testimonial.css
│       ├── bento.css
│       ├── deliverables.css
│       ├── timeline.css
│       ├── word-reveal.css
│       ├── pricing.css
│       ├── faq.css
│       ├── cta-final.css
│       ├── footer.css
│       ├── fixed.css
│       └── video.css
├── js/
│   ├── gsap-animations.js  # Todas as animações GSAP + ScrollTrigger
│   ├── main.js             # Back-to-top, smooth scroll, mobile menu
│   └── word-reveal.js      # DEPRECATED — não carregado
└── assets/                  # Vazio (imagens em ../assets/)
```

## Scripts (ordem de carregamento)

1. `gsap.min.js` (CDN gsap@3.12.5)
2. `ScrollTrigger.min.js` (CDN gsap@3.12.5)
3. `gsap-animations.js`
4. `main.js`
5. Inline: `#year` dinâmico, estilização de `.tab-num` e `.tab-title`

## Decisões Tomadas

- GSAP escolhido como engine de animação (framework-agnostic)
- Elementos do hero iniciam com `opacity:0` via CSS, revelados por `gsap.fromTo()`
- Classe `.scroll-reveal` para elementos individuais; cards agrupados animados em batch
- Word reveal usa `pin:true` + `scrub:1` para efeito scroll-driven
- Accordion gerado por GSAP (maxHeight + opacity), sem transição CSS
- Botão flutuante do WhatsApp removido
- Card 03 (Infraestrutura) foca em agentes autônomos, não em observabilidade
- Perfis: "Pequenas equipes que **querem escalar** como empresa grande"
- FAQ: sem prazo de diagnóstico; resposta sobre não-tech foca no parceiro que arquiteta