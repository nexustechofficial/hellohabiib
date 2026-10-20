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

Home, About, Projects, Services, Contact, Privacy, custom 404, dynamic project/service templates, robots and sitemap are implemented. Templates return 404 for unpublished items. Navigation shows collection pages; empty collections are noindex and excluded from sitemap.

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
- `CONTACT_EMAIL_TO`: optional recipient override; defaults to the owner-approved habiibullah448@gmail.com.
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

### Name searches and Nexus Tech PK

The owner-confirmed identity is Habibullah (also known as Habib Ullah), Founder & CEO of Nexus Tech PK. Home and About explain the brand relationship visibly; Person and Organization structured data link the founder and brand. The owner supplied the official brand website (https://nexustech.pk/) and Nexus Tech PK Facebook/Instagram profiles. They are linked visibly and in Organization schema; they are not treated as personal profiles.

For the live canonical site at `https://hellohabiib.com`:

1. Set `SITE_INDEXABLE=true` in the VPS production environment **before** running `npm run build`. Rebuild and restart the application when changing this flag. Local/staging environments should keep it false.
2. Verify the live home and About source contains `index, follow`, `/robots.txt` allows public pages, and `/sitemap.xml` lists the canonical HTTPS URLs. Ensure the domain resolves to this deployment with working HTTPS.
3. Verify domain ownership in Google Search Console, submit `https://hellohabiib.com/sitemap.xml`, and request indexing for the homepage and `/about` with URL Inspection.
4. Link to this portfolio from your genuine Nexus Tech PK website and verified public profiles, using your real name and role. Supply exact official URLs before adding them to this site’s structured data.

These changes help search engines understand the person and brand; crawling, indexing, ranking and timing remain Google’s decisions. Search Console/DNS configuration is not performed by a code push.

Journal is temporarily removed: its listing and article routes return 404, navigation omits it, and it is excluded from the sitemap. Article data types remain available for future work.

The “Who am I?” milestone section is saved but not rendered on the homepage. To restore it, import `MilestonesSection` from `@/components/milestones-section` in `src/app/page.tsx` and render `<MilestonesSection/>` after the hero. Its logo component, original assets and CSS remain in place. Optionally change the hero scroll cue back to `#milestones`.


### Contact email and channel update

The public contact inbox is `habiibullah448@gmail.com`. The Contact page provides a direct `mailto:` link that opens the visitor’s email app; the visitor still presses Send in that app. This works independently of server email delivery.

Automatic inquiry delivery remains unavailable until the VPS `.env.local` contains `RESEND_API_KEY`, a Resend-verified `CONTACT_EMAIL_FROM`, `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. `CONTACT_EMAIL_TO` defaults to the approved Gmail inbox, or can be set explicitly as shown in `.env.example`. Verify the sender domain in Resend; a recipient Gmail address does not authorize Gmail as a Resend sender. Keep existing environment entries such as `SITE_INDEXABLE=true`, do not commit credentials, and restart the `hellohabiib` service after setting server credentials. Then send an owner-approved test inquiry and confirm inbox receipt; provider acceptance alone does not prove inbox delivery. No live email was sent or VPS configuration changed in this update.

The personal WhatsApp channel is separate from the Nexus Tech PK channel. Personal Facebook remains in the personal profile section; the Nexus section now uses its WhatsApp channel instead of Facebook.


### Current direct-contact interface
Contact has no form: visitors use email, WhatsApp chat, Instagram, LinkedIn, Facebook or the personal WhatsApp channel. Header Let’s Talk and the floating button open WhatsApp with different suggested messages to +92 335 5302803. Visitors review and send messages themselves. Resend/Upstash setup is unnecessary for this interface; the retained backend instructions above only apply if the form is restored later.


### LLM-readable public documentation
`/llms.txt` is a concise Markdown reading guide and `/llms-full.txt` expands the public biography, journey, venture, approved case studies, startup deliverables/process/FAQ, contact, privacy summary and page structure. Both are UTF-8 plain-text static Route Handlers built from `src/lib/llms.ts` and the shared content collections, so published content updates regenerate them during a production build. Only published/approved collections are included; editorial backlog and credentials are excluded. These discovery documents do not replace robots.txt or guarantee AI indexing. No visitor-facing navigation or visual layout is changed.
