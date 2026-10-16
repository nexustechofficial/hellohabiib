# Habibullah — personal website

Cinematic obsidian/orange personal site for **Habibullah**, canonical domain **https://hellohabiib.com**. Built from the owner-supplied master brief, with unconfirmed content kept unpublished at the owner's request.

## Stack and local development

Node >=22.12 (validated on Node 24), Next.js App Router, React, strict TypeScript, Tailwind v4, locally installed Poppins, GSAP, lazy Three.js, Zod, Vitest and Playwright. No database, remote font dependency or analytics.

```sh
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev
```

Cloud development uses port 5173. On another machine the cache option is optional. Development/build do not need credentials.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
# In a second terminal after production starts:
npm run test:e2e
```

The previous Vite site was archived outside the checkout at `/workspace/portfolio-before-master-brief.tar.gz`. Old ignored `dist/` output is not the current application and must not be deployed. This application requires a Node-compatible server, not a single HTML visualization.

## Routes and content

Home, About, Projects, Services, Journal, Contact, Privacy, custom 404, dynamic project/service/article templates, robots and sitemap are implemented. Templates return 404 for unpublished items. Navigation shows collection pages; empty collections are noindex and excluded from sitemap.

- `src/data/site.ts`: name, approved bio, canonical origin, optional portrait, public contact and verified social URLs.
- `src/data/content.ts`: typed project, service and article collections. Both `approved` and `published` must be true. Candidate names remain in a non-rendered backlog.
- `src/app/globals.css`: centralized color tokens and responsive visual system.
- `src/components/sculpture.tsx`: original beveled H geometry; desktop-only, lazy-loaded, DPR capped, stops offscreen/in a hidden tab. CSS sculpture fallback on mobile/reduced motion/unavailable WebGL.
- `src/components/motion.tsx`: optional progressive GSAP effects; no content hidden before JS runs.

No personal portrait, social links, timeline dates, testimonials, pricing or project outcomes have been invented. The brief's editorial positioning is used, but the requested five services remain unpublished. Replace/expand the biography only with approved facts.

## Inquiry delivery

Copy `.env.example` into local environment settings without committing secrets. Required for delivery:

- `RESEND_API_KEY`: server-only Resend key, destination `api.resend.com`.
- `CONTACT_EMAIL_FROM`: verified Resend sender mailbox; a plain email address.
- `CONTACT_EMAIL_TO`: owner-approved recipient mailbox.
- `UPSTASH_REDIS_REST_URL`: exact HTTPS REST endpoint for your Redis instance.
- `UPSTASH_REDIS_REST_TOKEN`: server-only token for that endpoint.

Missing settings keep delivery unavailable, visibly disclosed in the form; valid inquiries return 503 rather than fake success. Shared Zod validation, a 16KB server body limit, honeypot, same-origin restriction and an atomic Redis counter limit requests to five per ten minutes per trusted network identity. IP-derived hashes/counters expire after ten minutes. The application stores no inquiry content and logs none. Provider errors fail closed. A success response means the provider accepted the email; inbox receipt still needs live testing.

Production inquiry origins must be `https://hellohabiib.com`. Preview deployments should remain in unavailable mode. Configure the hosting proxy to overwrite `x-real-ip` or use Vercel's trusted `x-vercel-forwarded-for`; do not forward arbitrary client-supplied identity headers. Without a trusted header requests share one safe limiter bucket. Only enable production delivery after approving the public privacy contact, retention policy, recipient, and sender domain. In cloud network settings allow `api.resend.com` and the exact approved Redis hostname when enabling live integration. Do not broaden unknown network rules.

The privacy page describes current runtime behavior. Before enabling delivery, finalize mailbox/provider retention periods and public privacy contact. No CAPTCHA, analytics, marketing emails or third-party embeds are enabled.

## Deploy (owner authorization required)

1. Use Vercel or a Node >=22.12 host; build `npm run build`, start `npm start`. Respect the configured port/proxy mapping.
2. Set environment variables securely. Keep `SITE_INDEXABLE=false` on all previews/staging.
3. Approve content via `IDENTITY_QA.md`; set the exact canonical host and HTTPS redirects in hosting/DNS settings. No domain or DNS changes have been made by this build.
4. Configure Resend sender-domain verification and Redis REST access; test real inquiry receipt with an approved destination, rate limiting and failure behavior.
5. Review privacy, retention and security headers. The baseline CSP allows Next's inline hydration and development evaluation; tighten with a deployment-specific nonce policy if required. Do not inject third-party scripts casually.
6. On the approved canonical deployment only, set `SITE_INDEXABLE=true`, rebuild and inspect `/robots.txt` and `/sitemap.xml`. Empty/unapproved collections remain excluded.
7. Verify Google Search Console and Bing Webmaster Tools ownership using owner-controlled access. Submit sitemap, inspect representative URLs, monitor indexing, real Core Web Vitals and branded query trends. SEO outcomes are not guaranteed.

No deployment, purchase, email sending, DNS changes or publication has been performed. See `PROGRESS.md` for actual validation and outstanding work. Current filesystem readiness is distinct from environment publication and restoration in another task.
