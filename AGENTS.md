# Habibullah personal website

## Architecture and identity
- Next.js App Router, strict TypeScript, Tailwind v4 tokens + custom CSS. Server-render content; use client components only for interactions.
- Primary name: **Habibullah**. Canonical origin: **https://hellohabiib.com**.
- `src/data/site.ts` holds identity. Never guess profile URLs, contact details, biography, dates, achievements or project results.
- `src/data/content.ts` holds typed collections. Both `approved` and `published` must be true. Unapproved candidate names stay in the editorial backlog, not rendered pages or schemas.
- Empty collection routes are noindex. Draft detail URLs return 404. `SITE_INDEXABLE` must be explicitly enabled only on the approved canonical production deployment.
- Visual tokens: obsidian, white/gray, Nexus orange. No blue, cyan, purple, or invented real-person portraits.

## Commands and quality gates
- Node >=22.12. `npm ci --cache /workspace/.npm-cache --no-audit --no-fund` in this cloud workspace.
- `npm run dev` starts port 5173. `npm run build` then `npm start` runs production.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e` (start production first).
- Keep content and keyboard navigation usable when WebGL, motion or JavaScript is unavailable.
- Browser tests use system Chromium by default; change `PLAYWRIGHT_CHROMIUM_EXECUTABLE` for another installed Chromium. Other browser-engine validation is recorded separately.

## Contact and operations
- Shared Zod schema; server body limit, origin verification, honeypot, shared Redis rate limit and server-only Resend delivery.
- Missing settings must produce unavailable status, never success. Tests use mocks and do not establish live email delivery.
- Never log secrets or inquiry bodies. Never commit `.env` values.
- Deployment, DNS changes, purchases and publication require explicit owner authorization. See README for configuration and launch gates.
- Update PROGRESS.md with actual checks and remaining content/configuration work.
- Each cloud task is isolated. Use this checkout; do not create a worktree unless explicitly requested.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
