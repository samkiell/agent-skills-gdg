# Buka Republic (agent-skills-gdg)

A single-page restaurant landing site with zero chill, smoky jollof, and intentionally no styling skill applied yet.

This repository serves as the foundational demo application for a live Google Developer Groups (GDG) session on **Agent Skills**. The base app is intentionally built as a neutral, plain, token-driven wireframe so that design and motion agent skills can be introduced to demonstrate AI-assisted UI transformation.

## Prerequisites

- **Node.js**: version 20 or higher (`node -v`)
- **Package Manager**: `pnpm` (recommended) or `npm`

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd agent-skills-gdg
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Folder Map

```
agent-skills-gdg/
├── .agents/
│   └── skills/                  # Where agent skills get loaded (.gitkeep)
├── public/                      # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reserve/
│   │   │       └── route.ts     # In-memory reservation endpoint
│   │   ├── globals.css          # Design token definitions (CSS variables)
│   │   ├── layout.tsx           # Root Next.js layout
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── About.tsx            # Restaurant origin story
│   │   ├── Footer.tsx           # Footer with location & demo disclaimer
│   │   ├── Hero.tsx             # Hero section with primary CTA
│   │   ├── Menu.tsx             # Categorized menu section
│   │   ├── MenuItemCard.tsx     # Individual menu card component
│   │   ├── Navbar.tsx           # Sticky nav with mobile menu toggle
│   │   ├── Reserve.tsx          # Reservation booking form with client validation
│   │   └── Testimonials.tsx     # Fictional customer reviews
│   └── data/
│       ├── menu.ts              # Typed menu items and categories
│       └── testimonials.ts      # Customer testimonials
├── .env.example                 # Environment variables (none needed)
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── PRD.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Agent skills go here

Agent skills reside in `.agents/skills/<skill-name>/SKILL.md`.

This repository intentionally ships **without** a design skill or motion skill installed. All component colors, radiuses, fonts, and spacings strictly consume CSS variable tokens defined in `src/app/globals.css` and exposed via `tailwind.config.ts`. In the GDG workshop session, attendees will watch an AI agent pick up custom design and motion skills to re-skin and elevate the user interface without altering the underlying application architecture.
