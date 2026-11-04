# PRD: Buka Republic (agent-skills-gdg)

## 1. What this is
A single-page restaurant landing site called **Buka Republic**, built with Next.js. It is the demo app for a live GDG session on Agent Skills. In the session, the presenter will add agent skills (design, motion) to this repo and show the agent producing better results because of them.

**Your job (the builder):** build the foundation only. Working, clean, intentionally plain. Do not make it pretty. A design skill and a motion skill will be added later and will do that.

## 2. Hard rules
1. **Plain on purpose.** White background, black text, system font, no brand colors, no gradients, no animations. The page must look like a clean, neutral wireframe that works.
2. **Tokens only.** Every color, font, radius and spacing value used in components must come from CSS variables defined in one place (`src/app/globals.css`) and exposed through the Tailwind theme. No hardcoded hex values or one-off pixel values inside components. This lets the design skill restyle the whole site by editing tokens and a few classes.
3. **No extra features.** Do not add anything not listed here.
4. **No backend services.** No Supabase, no database, no auth, no environment variables needed to run.
5. **Funny copy stays.** The text content in section 6 is part of the product. Use it as written.

## 3. Tech stack
- Next.js (latest stable), App Router, TypeScript
- Tailwind CSS
- `framer-motion` installed as a dependency but **not used anywhere yet**
- npm as package manager, Node 20+
- ESLint with the Next.js default config
- No UI component libraries

## 4. Repo structure
```
agent-skills-gdg/
  .agents/skills/.gitkeep        (empty folder, skills get added later. Do NOT create skills.)
  public/
  src/
    app/
      layout.tsx
      page.tsx
      globals.css                (all design tokens live here)
      api/reserve/route.ts       (mock reservation endpoint)
    components/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Menu.tsx
      MenuItemCard.tsx
      Reserve.tsx
      Testimonials.tsx
      Footer.tsx
    data/
      menu.ts
      testimonials.ts
  README.md
  .env.example                   (empty file with a comment: "no env vars needed")
  .gitignore
```

## 5. Design tokens (neutral defaults)
Define in `globals.css` as CSS variables and map into the Tailwind theme:
- Colors: `--bg` white, `--fg` near black, `--muted` gray, `--surface` light gray, `--accent` plain dark gray (not a brand color), `--border` light gray
- Fonts: `--font-body` and `--font-heading`, both set to the system font stack
- Radius: `--radius` small value
- Spacing: `--space-section` (vertical padding of each section), `--container` (max content width)

Components use classes such as `bg-bg text-fg border-border rounded-token`, never raw values.

## 6. Page content

**Brand:** Buka Republic. Tagline: "Food so good, your ancestors would ask for a plate."

### Navbar
Logo text "Buka Republic". Links (anchor scroll): Menu, Reserve, Reviews. Collapses to a simple toggle menu on mobile.

### Hero
- Heading: "Welcome to Buka Republic"
- Subtext: "Where the jollof has a fan club and the suya has a restraining order against your diet."
- Button: "Reserve a table" (scrolls to Reserve)

### About
Heading "Our story". Body: "Buka Republic started with one pot, one spoon, and one auntie who said 'sit down, you are too thin.' Today we are slightly bigger, but the auntie is still in charge."

### Menu
Four categories, shown as grouped sections. Each item: name, short description, price in naira (format `₦3,500`).

Data goes in `src/data/menu.ts`, fully typed (`MenuItem`: id, name, description, price, category).

**Starters**
- Suya Lane Skewers, 3500, "Spicy beef skewers. Your mouth will file a complaint. Your heart will approve."
- Puff Puff Plot Twist, 2000, "Golden dough balls with a surprise inside. We will not say what."

**Mains**
- Jollof of Destiny, 5500, "Smoky party jollof with grilled chicken. Tastes like a good decision."
- Egusi Therapy, 6000, "Rich egusi with pounded yam. Cheaper than a session, works faster."
- Amala Pressure, 5000, "Amala, ewedu and gbegiri. Do not talk to us until we finish."
- Ofada Reloaded, 6500, "Ofada rice with ayamase. Sequel is better than the original."

**Sides**
- Plantain Season 2, 1800, "Fried plantain. Returns every episode."
- Moi Moi Sequel, 1500, "Steamed bean pudding. Nobody asked for a sequel. We made it anyway."

**Drinks**
- Zobo Zero Regrets, 1500, "Chilled hibiscus drink. Ginger included, regrets not."
- Chapman Chronicles, 2500, "Fizzy, fruity and unreasonably photogenic."

### Reserve
Form fields: name (required), phone (required), date (required), time (required), guests (number 1 to 12, required), notes (optional, textarea).
- Client side validation with clear error messages
- Submits to `POST /api/reserve`
- The route handler validates the body, keeps reservations in an in-memory array (resets on server restart), and returns `{ ok: true, message }`
- On success show: "Table booked. The auntie has been notified."
- On error show a friendly error message
- Disabled submit button and a "Booking..." label while submitting

### Testimonials
Data in `src/data/testimonials.ts`. Three fictional reviews:
- "I came for a snack and left with a lifestyle." , Tunde, Lagos
- "The jollof ended an argument in my family. Nobody wanted to talk after the first bite." , Amaka, Enugu
- "I asked for the bill and they asked if I was okay." , Segun, Ibadan

### Footer
- "Buka Republic. Open whenever the jollof is ready."
- Fake address: "12 Suya Lane, Ife"
- Line: "Made for a GDG demo. No real food was harmed."

## 7. Behaviour and quality requirements
- Fully responsive (mobile first), tested at 375px, 768px and 1280px widths
- Semantic HTML: one `h1`, section headings in order, labelled form fields, buttons are real buttons
- Visible focus states, keyboard navigable, sufficient contrast
- Smooth anchor navigation using CSS only (`scroll-behavior: smooth`), no JS animation
- Server components by default. Only use `"use client"` where needed (Navbar toggle, Reserve form)
- No console errors or warnings in dev
- Clean, readable code with small components. No dead code

## 8. Git
- Initialize the repo, branch `main`
- Commit in logical steps (setup, tokens, components, data, reserve flow, README)

## 9. README.md must include
- One line: what this repo is, with a joke
- Prerequisites (Node 20+)
- Steps: clone, `npm install`, `npm run dev`, open `http://localhost:3000`
- Folder map (short)
- A section "Agent skills go here": explains that skills live in `.agents/skills/<skill-name>/SKILL.md`, and that this repo ships without a design skill on purpose

## 10. Acceptance criteria
- [ ] `npm install && npm run dev` works with zero configuration
- [ ] `npm run build` and `npm run lint` pass with no errors
- [ ] All sections from section 6 render with the exact content given
- [ ] Reserve form validates, submits, and shows success and error states
- [ ] No hardcoded colors, fonts or one-off sizes in components (tokens only)
- [ ] No animations and no use of `framer-motion` yet
- [ ] Site looks neutral and plain but is clean, aligned and fully usable
- [ ] `.agents/skills/` exists and is empty

## 11. Out of scope
Skills (design, motion), branding, images, 3D or shaders, backend or database, authentication, payments, SEO extras, analytics, deployment.
