# AGENTS.md

This repo is a **Next.js 14 + React 18 + TypeScript + Tailwind** marketing site (`wellneuro-site`).
Use this document as the “how to work here” guide for humans and coding agents.

## Quick start

- **Install**: `npm install`
- **Dev server**: `npm run dev`
- **Production build**: `npm run build`
- **Run production**: `npm run start`
- **Lint**: `npm run lint`

Notes:
- There is **no lockfile committed** (`package-lock.json` / `pnpm-lock.yaml` / `yarn.lock`). If you add/update dependencies, prefer generating and committing a lockfile to make installs reproducible.

## Project structure

- **App Router**: `src/app/`
  - `src/app/layout.tsx`: root layout (header/footer, metadata)
  - `src/app/page.tsx`: landing page composition
  - `src/app/sections/*`: page sections (mostly presentational)
- **Global styles**: `src/app/globals.css`
- **Static assets**: `public/`
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`)

## Coding conventions

- **TypeScript**: strict mode is enabled. Prefer explicit types at module boundaries (API handlers, exported utilities).
- **Next.js conventions**:
  - Prefer server components by default; add `"use client"` only when needed (state/effects/event handlers).
  - If you add API routes, use App Router route handlers (`src/app/api/**/route.ts`).
- **Styling**: Tailwind is used. Prefer existing design tokens/colors where possible (see `tailwind.config.ts`).
- **Language/content**: UI copy is predominantly **Russian** (`<html lang="ru">`). Keep language consistent unless the product direction changes.

## Environment variables / secrets

Do **not** commit real credentials or tokens.

If you implement the lead-capture endpoint (see next section), you will need environment variables (example names):

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `RESEND_API_KEY`
- `LEAD_TO_EMAIL`
- `LEAD_FROM_EMAIL`

Put secrets in `.env.local` for local development (and configure your deployment provider’s secret store for prod).

## Lead endpoint (Telegram + email) reference

There is a reference implementation in the repository:

- `API: lead endpoint (telegram + email)`

Important:
- This file is **not currently wired into** the Next.js app (there are no `src/app/api/**/route.ts` handlers yet).
- If you decide to productize it, a typical location is:
  - `src/app/api/lead/route.ts` (or similar)
  - keep `export const runtime = "nodejs";` if you rely on Node-only libraries/APIs

Implementation guidelines:
- Validate and sanitize input; return clear JSON errors on invalid payloads.
- Consider basic abuse protection (rate limiting / CAPTCHA) before going live.
- Treat delivery as successful only if your business rules say so (the reference returns `ok` if **either** Telegram or email succeeds).

## Making changes safely

- Keep changes **small and reviewable**; avoid unrelated refactors.
- Run `npm run lint` before handing off.
- Be careful with unusual filenames that include spaces/colon (e.g. `API: lead endpoint (telegram + email)` and `public/logo wellneuro.jpg`)—quote paths when using shell commands.
