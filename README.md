# Dubai AI Economy Readiness Observatory

A flagship, living research product tracking Dubai's readiness to scale AI across sectors, infrastructure, talent, governance, and capital.

**Live preview:** [Open in Lovable](https://id-preview--f0b6150b-f4f6-4a12-88d1-7c401a646801.lovable.app)  
**Repository:** [github.com/tk-data-art/dubai-digital-observer](https://github.com/tk-data-art/dubai-digital-observer.git)

---

## Overview

This is a single-page, long-form digital Observatory built for the Dubai Chamber of Digital Economy. It presents evidence-backed assessments, interactive exhibits, and a McKinsey-style editorial narrative around Dubai's AI economy readiness.

The site is designed as a **living product** — intended for quarterly refreshes as new indicators, policies, and market data become available.

---

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, full-stack Vite framework)
- **Router:** TanStack Router (file-based routing)
- **Styling:** Tailwind CSS v4 + native CSS theme variables
- **UI primitives:** Radix UI + shadcn/ui components
- **Charts:** Recharts
- **Icons:** Lucide React
- **Package manager:** Bun
- **Runtime:** Node.js-compatible edge runtime (Cloudflare Workers in production)

---

## Prerequisites

- [Bun](https://bun.sh/) >= 1.1.0 (recommended; used by this project)
- Or Node.js >= 20 with `npm` / `pnpm` if you prefer
- Git

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/tk-data-art/dubai-digital-observer.git
cd dubai-digital-observer
```

### 2. Install dependencies

```bash
bun install
```

> If you don't have Bun installed, you can use `npm install`, `pnpm install`, or `yarn install` instead. The project is package-manager-agnostic.

### 3. Run the development server

```bash
bun dev
```

The app will be available at:  
**http://localhost:8080**

Vite's dev server supports hot module replacement (HMR), so edits to components, styles, and routes will reflect immediately.

---

## Environment variables

This project is currently a **static, content-driven site** and does not require backend services or API keys to run locally.

If you later connect Lovable Cloud (Supabase), AI Gateway, or a third-party API, add the relevant variables to a `.env` file in the project root:

```env
# Example — only needed if backend features are enabled
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

> **Note:** In TanStack Start, browser-safe variables use the `VITE_` prefix. Server-only secrets are read via `process.env['VAR_NAME']` inside `createServerFn` handlers. Do not commit real secrets to GitHub.

---

## Available scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start the local dev server at `http://localhost:8080` |
| `bun build` | Create an optimized production build |
| `bun build:dev` | Create a development-mode build |
| `bun preview` | Preview the production build locally |
| `bun lint` | Run ESLint across the project |
| `bun format` | Format the codebase with Prettier |

---

## Project structure

```text
.
├── public/                  # Static assets (robots.txt, sitemap, llms.txt)
├── src/
│   ├── assets/              # Images and media
│   ├── components/          # Reusable UI components
│   │   └── observatory/     # Observatory-specific section components
│   ├── lib/                 # Shared utilities and helpers
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx       # Root layout + global head/fonts
│   │   ├── index.tsx        # Observatory landing page
│   │   └── sitemap.xml.ts   # Dynamic sitemap route
│   ├── styles.css           # Tailwind v4 theme + design tokens
│   └── router.tsx           # Router configuration
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## Key sections

The Observatory page (`src/routes/index.tsx`) is composed of the following sections:

- **Hero** — Edition header and opening narrative
- **Thesis** — Core argument: "When ambition meets infrastructure"
- **Methodology** — Evidence sources, update cadence, and data-gap policy
- **By the Numbers** — Top-line indicators with donut and waffle exhibits
- **Key Questions** — Maturity assessment and GDP-impact exhibits
- **Framework** — Readiness portfolio / capability framework
- **Sectors** — Sector-by-sector AI readiness scores
- **Benchmark** — Peer-country comparison table
- **Trust** — Governance instruments and regulatory status
- **Action Agenda** — Strategic priorities and next steps
- **Footer** — Credits, edition date, and next edition timing

---

## Design system

- **Background:** White / paper (`#FAFAF8`)
- **Primary accent:** Royal blue (`oklch(0.5 0.24 265)`)
- **Dark accent:** Deep navy (`oklch(0.17 0.04 255)`)
- **Display typeface:** Bodoni Moda
- **Body typeface:** Inter
- **Numeric / detail typeface:** JetBrains Mono

Typography is loaded via Google Fonts in `src/routes/__root.tsx`.

---

## Deployment

This project is developed in [Lovable](https://lovable.dev). Lovable provides a live preview URL for every change.

### GitHub sync

The project is connected to GitHub at:

```text
https://github.com/tk-data-art/dubai-digital-observer.git
```

Lovable pushes changes to GitHub automatically in real time. Commits pushed to GitHub also sync back into Lovable, enabling parallel development with local IDEs or GitHub-based workflows.

### Publishing

To publish the site to a public URL, use the **Publish** action in the Lovable editor.

---

## Updating content

The Observatory is designed to be refreshed quarterly. To update evidence:

1. Edit the relevant section component in `src/components/observatory/`.
2. Replace figures with verified, sourced statistics.
3. Update source footnotes and methodology notes.
4. Update the "Last updated" date in `Hero.tsx` and the next-edition date in `Footer.tsx`.
5. Commit via Lovable or push to GitHub — changes will sync automatically.

---

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 tk-data-art.

