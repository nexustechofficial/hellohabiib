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
- `src/data/content.ts`: typed project, service and article collections. Both `approved` and `published` must be true. Owner-confirmed project cards may link directly to their supplied URLs. Set `caseStudyPublished` only when a substantive, approved case study is ready; otherwise its internal route remains 404 and excluded from sitemap. Candidate names remain in a non-rendered backlog.
- `src/app/globals.css`: centralized color tokens and responsive visual system.
- `src/components/sculpture.tsx`: original beveled H geometry; desktop-only, lazy-loaded, DPR capped, stops offscreen/in a hidden tab. CSS sculpture fallback on mobile/reduced motion/unavailable WebGL.
- `src/components/motion.tsx`: optional progressive GSAP effects; no content hidden before JS runs.

The owner-supplied portrait is used with an AI-assisted charcoal background and warm lighting edit. No social links, timeline dates, testimonials, pricing or project outcomes have been invented. Brand & Startup Launch is owner-approved and published; other proposed service categories remain unpublished. Replace/expand the biography only with approved facts.

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

## Portrait and intro update

The homepage uses the owner-supplied portrait, relit to match the dark/orange palette, served as a locally optimized WebP. The photo is also used on About and in Person image metadata. `HeroPortrait` adds restrained fine-pointer parallax. The H sculpture is retained lower on the homepage.

Poppins headings use bold/extra-bold weights. `Intro` plays a brief, nonblocking first-visit loading/reveal sequence once per tab; Replay Intro runs it again. Escape or Tab skips immediately. Reduced-motion mode and JavaScript-disabled views omit the intro. `NavigationLoading` provides inline feedback for genuinely pending navigation without hiding server-rendered content. Published detail slugs are statically gated so drafts retain real 404 responses.

## Project descriptions

Subecta, Merctra and Elite Jobs Hub now have published internal project descriptions. Purpose and feature summaries come from owner-supplied screenshots; MERN and full branding/website/deployment scope come from owner confirmation. Do not turn screenshot demo counters into revenue, usage or placement outcomes. Keep implementation-specific claims, dates and metrics out until confirmed.

## Original project screenshots

Owner-uploaded PNG screenshots are stored unchanged in `public/images/projects/` and referenced by project data. Gallery previews use contained images within compact covers. Detail pages use the original aspect ratio and link to the full-size PNG. Screenshot colors belong to the client/product design; portfolio controls and typography retain their own style. Do not replace authentic screenshots with generated recreations.

## Brand and startup services

`src/data/startup.ts` stores nine scoped deliverables, a four-step process and FAQ content shared by the Services landing page and `/services/brand-startup-launch`. The landing page starts with the entrepreneur hero followed by the owner’s portrait and confirmed community-to-brand story. Inquiry links preselect the service in the contact form. No unconfirmed reference prices, age, client counters, reviews or WhatsApp number are published. Delivery still requires the existing contact-provider configuration.
