# Animações

## Keyframes

### heroFadeDown (Staggered入场)
Usado para hero elements com delays incrementais (0.05s, 0.1s, 0.3s, 0.5s, 0.8s)
```css
@keyframes heroFadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### shimmer (Progress Bar)
```css
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### textShine (Parágrafo Hero)
```css
@keyframes textShine {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Gradiente do texto */
background-image: linear-gradient(
  90deg,
  rgba(255,255,255,0.8) 0%,
  rgba(255,255,255,0.8) 40%,
  rgba(255,255,255,1) 50%,
  rgba(255,255,255,0.8) 60%,
  rgba(255,255,255,0.8) 100%
);
background-size: 200% 100%;
animation: heroFadeDown 0.7s ease-out 0.3s forwards, textShine 6s linear 2s infinite;
```

### banner-gradient (Announcement Bar)
```css
@keyframes banner-gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
/* background-size: 200% 200% */
/* animation: banner-gradient 6s ease infinite */
```

### glow (Pulsing Glow)
```css
@keyframes glow {
  0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
  50%      { opacity: 0.55; transform: translate(-50%, -50%) scale(1.25); }
}
```

### fex-folder-in (Hero Illustration)
```css
@keyframes fex-folder-in {
  0%   { transform: translate(-50%, -50%) scale(0) rotate(-12deg); opacity: 0; }
  55%  { transform: translate(-50%, -50%) scale(1.4) rotate(3deg); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1.3) rotate(0deg); opacity: 1; }
}
```

### fex-folder-shake
```css
@keyframes fex-folder-shake {
  0%, 100% { transform: translate(-50%, -50%) scale(1.3) rotate(0deg); }
  30%      { transform: translate(-50%, -50%) scale(1.3) rotate(-4deg); }
  60%      { transform: translate(-50%, -50%) scale(1.3) rotate(3deg); }
}
```

### fex-folder-idle
```css
@keyframes fex-folder-idle {
  0%, 100% { transform: translate(-50%, calc(-50% - 0px)) scale(1.3) rotate(0deg); }
  50%      { transform: translate(-50%, calc(-50% - 6px)) scale(1.3) rotate(-1deg); }
}
```

### fex-ring (Expanding Ring)
```css
@keyframes fex-ring {
  0%   { transform: translate(-50%, -50%) scale(0.3); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
}
```

### fex-burst (Floating Elements Arrival)
```css
@keyframes fex-burst {
  0% {
    transform: translate(calc(-50% + 0px), calc(-50% + 0px)) scale(0.15) rotate(0deg);
    opacity: 0;
  }
  25% { opacity: 1; }
  100% {
    transform: translate(calc(-50% + var(--fex-tx)), calc(-50% + var(--fex-ty))) scale(1.3) rotate(var(--fex-rot, 0deg));
    opacity: 1;
  }
}
```

### fex-float (Floating Elements Idle)
```css
@keyframes fex-float {
  0%, 100% {
    transform: translate(calc(-50% + var(--fex-tx)), calc(-50% + var(--fex-ty))) scale(1.3) rotate(var(--fex-rot, 0deg));
  }
  50% {
    transform: translate(calc(-50% + var(--fex-tx)), calc(-50% + var(--fex-ty) - 10px)) scale(1.3) rotate(calc(var(--fex-rot, 0deg) + 2deg));
  }
}
```

### chat-arrive (Chat Messages)
```css
@keyframes chat-arrive {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Duration: 700ms, easing: cubic-bezier(0.22, 1.2, 0.36, 1) */
/* Delays: .chat-msg-1: 0.2s, .chat-msg-2: 1.0s, .chat-msg-3: 1.8s */
```

### easterBounceIn (Easter Egg)
```css
@keyframes easterBounceIn {
  /* Bounce entrance for small screen easter egg */
}
```

### accordion-up / accordion-down (Radix)
```css
/* Radix accordion animations via data attributes */
data-[state=closed]:animate-accordion-up
data-[state=open]:animate-accordion-down
```

## Transition Durations

| Duração | Uso |
|---------|-----|
| `duration-100` | Progress bar width |
| `duration-150` | Word reveal color transition |
| `duration-200` | Back-to-top button |
| `duration-300` | Tab buttons, CTA button shadow |
| `duration-500` | Feature tab opacity, reveal cells |
| `duration-700` | Stats card slide-in |

## Timing Patterns (Hero Stagger)

| Delay | Elemento |
|-------|----------|
| 0.05s | Data/label |
| 0.1s | H1 title |
| 0.3s | Paragraph | 
| 0.5s | CTA button |
| 0.8s | Progress bar |

## Scroll Reveal

Stats cards e outros elementos usam:
```css
/* Initial state (set via JS Intersection Observer) */
opacity: 0;
transform: translateY(32px);

/* After scroll trigger */
opacity: 1;
transform: translateY(0);
transition: all duration-700 ease-out;
```

Com staggered delays: `0ms`, `200ms`, `400ms`

## Word Reveal (Interactive Scroll)

- **Cell:** `transition-colors duration-500`, `text-[rgba(255,255,255,0.04)]` → `.is-active: text-[rgba(255,255,255,0.18)]`
- **Word:** `transition-colors duration-150`, `text-[rgba(255,255,255,0.15)]` → `.is-revealed: text-[rgba(255,255,255,1)]`
- **Mask:** Radial gradient que segue o cursor