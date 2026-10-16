# Validation report

## Scope and environment

Local cloud instance, Node 24.19, Next.js 16.4.2, React 19.3.1, TypeScript 5.9.3. System Chromium; local production server. Development content follows the supplied brief and explicit instruction to keep unconfirmed content unpublished. Not a public deployment or fresh-task restoration test.

## Executed checks

| Check | Result |
|---|---|
| Frozen install: `npm ci --cache /workspace/.npm-cache --no-audit --no-fund` | Passed |
| `npm run lint` | Passed, no lint findings |
| `npm run typecheck` | Passed |
| `npm test` | 15 passed across 2 files |
| `npm run build` | Passed; all defined route types compiled |
| `npm start` | Production startup and functional HTTP/browser requests passed |
| `npm run test:e2e` | 6 passed; all seven informational pages also passed automated Axe scans |
| `npm audit --omit=dev --audit-level=high --cache /workspace/.npm-cache` | 0 known production dependency vulnerabilities reported |

Unit coverage exercises invalid/injected input, email-provider rejection, missing provider confirmation, shared rate-limit rejection/failure, no-credential mode, identity and safe JSON-LD. Delivery tests use mocks; no real email was sent.

Browser coverage exercises all seven informational routes, styling, exactly one H1, canonical metadata, JSON-LD identity, noindex flags, six responsive sizes (360, 390, 768, 1024, 1440, 1920), short 1024×640 layout, reduced motion, mobile menu/Escape/focus, real draft and unknown 404s, robots/sitemap gating, OG image generation, accessible form errors, body/origin/honeypot validation, honest unavailable response and no-JavaScript content/navigation. Axe WCAG A/AA scans are automated checks, not a certification of full accessibility.

The normal desktop Three.js scene was separately exercised using Chromium's software WebGL option: one canvas rendered, no page or console errors. Reduced motion and mobile use the static H fallback. Static content remains visible without JavaScript. The warm seam placement was refined after visual inspection.

## Lighthouse mobile lab measurement

Saved raw report: `docs/lighthouse-staging.json`. Local production homepage, Lighthouse mobile settings. Measurements are lab results, not field Core Web Vitals or a guarantee for real devices.

| Category | Score |
|---|---:|
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 66 |

LCP 2.3s; total blocking time 40ms; CLS 0.003. SEO is intentionally limited by staging robots/noindex protection. Do not remove that protection just to improve the score. Enable indexing only after approved canonical deployment/content review. The full desktop WebGL path was checked separately; mobile Lighthouse uses the lightweight fallback.

## Corrections during QA

- Corrected a TypeScript browser network-information type.
- Contained decorative H orbit overflow at tablet/laptop widths.
- Added local favicon metadata after initial Lighthouse detected a missing favicon request.
- Restarted the production process after rebuilding; a stale process served old asset references during an intermediate run. The fresh-process rerun passed.
- No assertions were removed or weakened to hide failures.

## Limits and open validation

- No live Resend/Redis credentials are present. Provider connectivity, real inbox receipt, actual Redis persistence and production mail retention are not verified.
- No second browser engine is installed/tested. No full manual screen-reader audit or real-device battery/thermal test.
- No approved portrait, project content, service scopes, article bodies, dated biography or social profiles were provided. Those remain unpublished; detail templates compile but have no real content to validate.
- Staging remains noindex with an empty sitemap. Indexable production settings and Search Console/Bing require owner action after deployment.
- No deploy, DNS change, publication or external messages performed.

## Cloud configuration

The updated `install_script` and complete Next.js `start_skill` were confirmed saved to the environment draft. This save does not execute them or publish an environment snapshot. The frozen installation and production startup commands were executed in the current machine. New-task restoration remains untested. Review/save the draft in environment settings and publish the environment snapshot when desired. No network-policy replacement or secret values were saved.
