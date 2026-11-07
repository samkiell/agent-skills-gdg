this is the finished version. the starting point is the main branch.

# Buka Republic (agent-skills-gdg)

A single-page restaurant landing site with zero chill, smoky jollof, built as a live demo application for Google Developer Groups (GDG) on **Agent Skills**.

## Live Previews

- **Starting point (`main`)**: [https://beforeagentskillsgdg.vercel.app/](https://beforeagentskillsgdg.vercel.app/)
- **Finished version (`after`)**: [https://agentskillsgdg.vercel.app/](https://agentskillsgdg.vercel.app/)

## How to Follow Along

To follow along from the starting point (`main`), clone the repository:

1. Clone the repository:
   ```bash
   git clone https://github.com/samkiell/agent-skills-gdg.git
   cd agent-skills-gdg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites

- **Node.js**: version 20 or higher (`node -v`)
- **Package Manager**: `npm`

## Folder Map

```
agent-skills-gdg/
├── .agents/
│   └── skills/                  # Where agent skills live
│       ├── api-routes/
│       │   └── SKILL.md
│       ├── design-system/
│       │   └── SKILL.md         # Present on the finished after branch
│       └── motion-system/
│           └── SKILL.md
├── public/                      # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reserve/
│   │   │       └── route.ts     # In-memory reservation endpoint
│   │   ├── globals.css          # Design token definitions (CSS variables)
│   │   ├── layout.tsx           # Root Next.js layout (Google fonts loaded)
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
├── package-lock.json
├── postcss.config.mjs
├── PRD.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Agent skills go here

Agent skills reside in `.agents/skills/<skill-name>/SKILL.md`.

In the GDG workshop session, attendees watch an AI agent pick up custom skills (such as `design-system`) to re-skin and elevate the user interface into a warm, editorial, food-first Nigerian restaurant experience without altering the underlying application architecture or text copy.
