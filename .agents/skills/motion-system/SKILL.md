---
name: motion-system
description: Use when adding or changing animations, transitions, hover effects or scroll reveals in this Next.js project. Defines the motion tokens, easing, durations, reduced-motion handling and the Framer Motion patterns to follow.
---

# Motion system for Buka Republic

Motion should make the page feel alive, not make people dizzy. Follow these rules every time you touch animation.

## 1. Tools
- Use `framer-motion`. It is already installed. Do not add another animation library.
- Animated components must be client components (`"use client"`). Keep the animated wrapper small so the pages around it stay server components.

## 2. Tokens live in one file
All durations, easings and shared variants live in `src/lib/motion.ts`. If the file does not exist, create it with exactly this:

```ts
export const duration = { fast: 0.15, base: 0.3, slow: 0.6 } as const;

export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};
```

Never write a raw duration or easing value inside a component. Import from `src/lib/motion.ts`.

## 3. Rules
1. Animate only `transform` and `opacity`. Never animate width, height, top, left or margin.
2. Entrances use `ease.out`. Movement and layout changes use `ease.inOut`.
3. No bouncy springs or overshoot on text or cards. This is a restaurant site, not a slot machine.
4. Maximum duration is `duration.slow` (0.6s). Most things should use `duration.base`.
5. Scroll reveals use `whileInView` with `viewport={{ once: true, amount: 0.3 }}`. Reveal once, never replay.
6. Stagger at most 8 children, using the `stagger` variant.
7. Hover effects: scale up to 1.03 at most, using `duration.fast`.
8. One motion idea per section. Do not animate everything on the page.
9. No infinite looping animations, except a small loading indicator.
10. The first screen (hero) must be usable immediately. Hero animation must finish within `duration.slow`.

## 4. Reduced motion is not optional
- Wrap the app once with `<MotionConfig reducedMotion="user">` in a client provider used by `layout.tsx`.
- For custom logic use `useReducedMotion()`. When it returns true, skip movement and use opacity only, or no animation.

## 5. Pattern to copy
A reusable reveal wrapper in `src/components/Reveal.tsx`:

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

Use `Reveal` around sections or cards instead of copying animation props everywhere.

## 6. Before you finish
- [ ] No raw durations or easings in components (search for `duration:` and `ease:`)
- [ ] Reduced motion handled, test by turning on "reduce motion" in the OS
- [ ] No layout shift when elements animate in
- [ ] Nothing animates width, height or position properties
- [ ] Page still feels fast on a mid-range phone
