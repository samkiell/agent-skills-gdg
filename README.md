# Buka Republic (agent-skills-gdg)

A single-page restaurant landing site with zero chill, smoky jollof, built as a live demo application for Google Developer Groups (GDG) on **Agent Skills**.

## Live Previews

- **Starting point (`main`)**: [https://beforeagentskillsgdg.vercel.app/](https://beforeagentskillsgdg.vercel.app/)
- **Finished version (`after`)**: [https://agentskillsgdg.vercel.app/](https://agentskillsgdg.vercel.app/)

## How to Follow Along

The `main` branch is the starting point (purple design, no design-system skill). The `after` branch is the finished version.

```bash
git clone https://github.com/samkiell/agent-skills-gdg.git
cd agent-skills-gdg
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│       └── motion-system/
│           └── SKILL.md
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
├── package-lock.json
├── postcss.config.mjs
├── PRD.md
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Agent skills go here

Agent skills reside in `.agents/skills/<skill-name>/SKILL.md`.

The starting point (`main`) intentionally ships **without** a design skill installed. In the GDG workshop session, attendees will watch an AI agent pick up the `design-system` skill to re-skin and elevate the user interface without altering the underlying application architecture.
