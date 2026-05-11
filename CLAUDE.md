# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server at localhost:3000
pnpm build     # Production build (outputs to ./out for static export)
pnpm lint      # ESLint via next lint
pnpm start     # Start production server
```

No test suite is configured. TypeScript and ESLint errors are intentionally ignored during builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true` in `next.config.mjs`) — the site still builds with type or lint issues.

## Architecture

This is a **single-page resume website** built with Next.js 14 (App Router), Tailwind CSS v4, and shadcn/ui (New York style). The entire site renders from `app/page.tsx`, which composes section components in order:

```
Navigation → HeroSection → AboutSection → SkillsExperienceSection → SkillsSection → ContactSection → Footer
```

**Section structure**: Each section is a standalone component in `components/` with its own `id` attribute used for smooth-scroll navigation. The nav items in `components/navigation.tsx` map directly to those IDs (`#about`, `#whatibring`, `#experiencetimeline`, `#skills`, `#contact`).

**Styling**: Tailwind CSS v4 with CSS custom properties for theming. The color palette (teal primary `#14b8a6`, yellow accent `#eab308`) and dark/light mode tokens are defined in `app/globals.css`. Use `cn()` from `lib/utils.ts` for conditional class merging.

**UI components**: shadcn/ui components live in `components/ui/`. Add new ones via `pnpm dlx shadcn@latest add <component>`.

**Deployment**: GitHub Actions (`.github/workflows/nextjs.yml`) builds and deploys to GitHub Pages on push to `main`. The workflow uses static export — do not add server-side features (API routes, SSR) without updating the deployment config.

**Static assets**: Resume PDF and headshot images are in `public/`. The resume is served as a direct download from `/Krishna_Madhiraju_Resume.pdf`.

## Key constraints

- All content (name, experience, contact details) is hardcoded in component files — there is no CMS or data layer.
- `"use client"` is required on any component that uses browser APIs or React hooks (navigation scroll tracking, hero scroll-to-contact button).
- Image optimization is disabled (`unoptimized: true`) for GitHub Pages compatibility.
