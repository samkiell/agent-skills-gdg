---
name: design-system
description: Use when styling, restyling or building any UI in this Next.js project, including pages, sections, components, colors, fonts and spacing. Defines the Buka Republic brand tokens, typography, layout rules and voice so every screen looks like one restaurant.
---

# Design system for Buka Republic

Buka Republic is a warm, confident, slightly cheeky Nigerian restaurant. The look is editorial and food-first: big type, warm colors, lots of breathing room. The humor lives in the words, not in loud visuals.

## 1. Change tokens first, components second
All visual values live as CSS variables in `src/app/globals.css` and are exposed through `tailwind.config.ts`. Restyle by editing tokens. Never put raw hex colors, font names or one-off pixel values inside components.

Set the tokens to:

```css
:root {
  --bg: #FFF8EE;        /* cream */
  --fg: #1C1917;        /* charcoal */
  --muted: #6B5B4E;     /* warm brown gray */
  --surface: #FBEBD3;   /* sand, for cards and bands */
  --accent: #C2410C;    /* ember orange, passes contrast with cream text */
  --border: #EAD9C0;
  --radius: 14px;
  --space-section: 6rem;
  --container: 72rem;
}
```

## 2. Typography
- Headings: **Fraunces** (serif, warm). Body and UI: **DM Sans**.
- Load both with `next/font/google` in `layout.tsx` and map them to `--font-heading` and `--font-body`.
- Maximum two font families. No exceptions.
- Fluid headline sizes with `clamp()`. Example: `h1` is `clamp(2.5rem, 6vw, 4.5rem)`, tight line height, sentence case.
- Body text 16px to 18px, line height 1.6.

## 3. Layout rules
- Content sits in `--container` width, centered, with generous side padding on mobile.
- Every section uses `--space-section` for vertical padding. Keep an 8px spacing rhythm.
- **Hero:** two columns on desktop (text left, a big warm surface block with the tagline right), stacked on mobile.
- **Menu:** editorial rows, not boxes. Name on the left, price on the right, a dotted leader line between them, description underneath in muted text.
- **Sections** alternate between `--bg` and `--surface` backgrounds so the page has rhythm.
- **Footer:** charcoal background (`--fg`), cream text.
- Buttons: solid `--accent` with cream text, at least 48px tall, visible focus ring.

## 4. Voice
- Keep the funny copy already in the project. Do not rewrite menu items, reviews or the story.
- New microcopy (buttons, labels, empty states, errors) is short, warm and a little cheeky. Clarity always beats the joke.
- At most one emoji per section.

## 5. Never do this
- No purple or blue gradients, no glassmorphism, no neon glows.
- No stock hero photo placeholders or gray image boxes.
- No more than two font families.
- Do not edit anything in `src/data/`, and do not change the text content.
- Do not add animations. Motion belongs to the `motion-system` skill.

## 6. Process
1. Update the tokens in `globals.css` and the Tailwind mapping.
2. Load the fonts in `layout.tsx`.
3. Restyle each component using token classes only.
4. Check mobile (375px), tablet (768px) and desktop (1280px).
5. Check contrast on every text and background pair.

## 7. Before you finish
- [ ] No raw hex colors or font names in `src/components`
- [ ] Text contrast passes WCAG AA
- [ ] Exactly two font families
- [ ] Menu uses the leader-line row style
- [ ] Looks right at 375px with no horizontal scroll
- [ ] No animations were added
