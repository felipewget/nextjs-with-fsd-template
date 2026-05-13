This project uses **Feature-Sliced Design** (FSD) with Next.js 16.

## Layers (src/)

```
src/
  app/         — App layer (layouts, providers, entrypoints)
  views/       — Views layer (full pages/views, compositions)
  widgets/     — Widgets layer (large UI blocks)
  features/    — Features layer (user actions, business logic)
  entities/    — Entities layer (business entities)
  shared/      — Shared layer (UI kit, utils, hooks)
```

## Routing

- `/app` — Next.js App Router (re-exports from `src/`)
- All pages import from `src/pages/`, `src/widgets/`, etc.

## Conventions

- **Server Components** by default. Only add `"use client"` when needed.
- **Barrel exports** via `index.ts` in each slice.
- **Path alias** `@/*` → `./src/*` (e.g. `@/shared/ui/button`)
- **ShadcnUI** components in `src/shared/ui/`, installed via `shadcn add`

## Agents

See `/agents/docs-agent.md` and `/agents/review-agent.md`.

## Commands

- `npm run dev` — development server
- `npm run build` — build for production
- `npm run lint` — ESLint
