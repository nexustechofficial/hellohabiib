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
| `npm run test:e2e` | 7 passed; all seven informational pages also passed automated Axe scans |
| `npm audit --omit=dev --audit-level=high --cache /workspace/.npm-cache` | 0 known production dependency vulnerabilities reported |

Unit coverage exercises invalid/injected input, email-provider rejection, missing provider confirmation, shared rate-limit rejection/failure, no-credential mode, identity and safe JSON-LD. Delivery tests use mocks; no real email was sent.

Browser coverage exercises all seven informational routes, styling, exactly one H1, canonical metadata, JSON-LD identity, noindex flags, six responsive sizes (360, 390, 768, 1024, 1440, 1920), short 1024×640 layout, reduced motion, mobile menu/Escape/focus, real draft and unknown 404s, robots/sitemap gating, OG image generation, accessible form errors, body/origin/honeypot validation, honest unavailable response and no-JavaScript content/navigation. Axe WCAG A/AA scans are automated checks, not a certification of full accessibility.

The normal desktop Three.js scene was separately exercised using Chromium's software WebGL option: one canvas rendered, no page or console errors. Reduced motion and mobile use the static H fallback. Static content remains visible without JavaScript. The warm seam placement was refined after visual inspection.

## Lighthouse mobile lab measurement

Saved raw report: `docs/lighthouse-staging.json`. Local production homepage, Lighthouse mobile settings. Measurements are lab results, not field Core Web Vitals or a guarantee for real devices.

| Category | Score |
|---|---:|
| Performance | 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 69 |

LCP 2.5s; total blocking time 160ms; CLS 0.003. SEO is intentionally limited by staging robots/noindex protection. Do not remove that protection just to improve the score. Enable indexing only after approved canonical deployment/content review. The full desktop WebGL path was checked separately; mobile Lighthouse uses the lightweight fallback.

## Corrections during QA

- Corrected a TypeScript browser network-information type.
- Contained decorative H orbit overflow at tablet/laptop widths.
- Added local favicon metadata after initial Lighthouse detected a missing favicon request.
- Restarted the production process after rebuilding; a stale process served old asset references during an intermediate run. The fresh-process rerun passed.
- No assertions were removed or weakened to hide failures.

## Limits and open validation

- No live Resend/Redis credentials are present. Provider connectivity, real inbox receipt, actual Redis persistence and production mail retention are not verified.
- No second browser engine is installed/tested. No full manual screen-reader audit or real-device battery/thermal test.
- Service scopes, article bodies, dated biography and social profiles remain unapproved/unpublished. Three project descriptions now use owner-supplied screenshots, scope and MERN stack; dates, specific implementation evidence and results are still unspecified.
- Staging remains noindex with an empty sitemap. Indexable production settings and Search Console/Bing require owner action after deployment.
- No deploy, DNS change, publication or external messages performed.

## Cloud configuration

The updated `install_script` and complete Next.js `start_skill` were confirmed saved to the environment draft. This save does not execute them or publish an environment snapshot. The frozen installation and production startup commands were executed in the current machine. New-task restoration remains untested. Review/save the draft in environment settings and publish the environment snapshot when desired. No network-policy replacement or secret values were saved.

## Portrait-led cinematic revision

The owner supplied a portrait and requested lighting matched to the site, loading animations and bold Poppins. The supplied image received an AI-assisted lighting/background edit and was encoded to an 82KB local WebP. It is used on Home, About and in Person image metadata. The hero uses extra-bold Poppins, staggered reveals and a short once-per-tab intro. Replay, Escape, reduced motion and no-JS behavior are covered by a new browser test. The H sculpture is retained below the hero.

A root route-loading fallback initially interfered with no-JS content rendering; it was replaced with true pending-link indicators. Decorative portrait border overflow was contained. Draft detail slugs are statically gated and continue to return real 404s. All seven production browser tests passed after these corrections; 15 unit tests, lint, typecheck and build also passed. The intro replay test was additionally rerun after strengthening its hydration/first-visit synchronization.

The saved Lighthouse report was refreshed against the portrait-led production build. The final seven-test production rerun passed, including WCAG 2.1 A/AA label checks. A replay button accessible-name mismatch found by Lighthouse was corrected. Staging indexing remains intentionally blocked.

## Community-to-brand About update

The About page now uses the owner's spoken account for a detailed introduction and four numbered journey chapters, with no invented dates or financial metrics. Homepage and Person biography reflect the community origin. Unclarified brand names, financial claims and project URLs are excluded from rendered content and retained only in draft notes.

Lint, TypeScript, 15 unit tests and the production build passed. About passed overflow checks at 360, 390, 768, 1024 and 1440 pixels; all seven production browser tests passed, including automated accessibility scans. The saved Lighthouse report predates this content-only update and was not rerun for it.

## Confirmed project directory and brand

Owner confirmed the brand as Nexus Tech PK; Subecta is a personal project, while Merctra and Elite Jobs Hub are client work. The owner also confirmed branding and complete websites from idea to deployment for all three. Those statements and the exact supplied links are reflected in cards and the biography. No current live status, technology, business results or project dates were inferred.

The public-site checks returned proxy tunnel 403 for all three URLs, including an elevated retry. No scraped descriptions or external screenshots are used. Editorial typography is used as card artwork. Detailed internal case-study pages remain unavailable until there is sufficient substantive content; direct external links and personal/client filters work independently of those pages. Sitemap only includes approved internal case studies.

Lint, typecheck, 15 unit tests and production build passed. All 8 production browser tests passed, including personal/client filters, exact destinations, draft-case-study 404s, brand wording and automated accessibility scans. Project layout checks passed at 360, 390, 768, 1024 and 1440 pixels. Lighthouse was not rerun for this content/directory change.

## Owner-supplied screenshots and MERN descriptions

Added three individual project pages from the supplied homepage screenshots and confirmed end-to-end scope. Subecta covers digital subscription seller operations; Merctra covers Canadian specialty-food/global sourcing; Elite Jobs Hub covers job discovery and the applicant journey. Each includes four feature bullets, substantive purpose/experience/contribution/technical sections, and owner-confirmed MongoDB, Express.js, React and Node.js. No screenshot counters are used as real outcomes, and no runtime/implementation audit is claimed.

Lint, typecheck, 15 unit tests and the production build passed. Browser coverage now includes the three published detail routes and their metadata, feature content and website links. All 8 production browser tests passed, including automated accessibility scans across all 10 informational/detail pages. Each of the three project pages passed overflow checks at 360, 390, 768, 1024 and 1440 pixels. Lighthouse was not rerun for this content expansion.

## Compact covers and Poppins throughout

Reduced project cover height to 220px desktop / 195px tablet / 185px mobile. Increased summaries to 16px, project role/stack text to 12–13px and destination links to 14px. Removed monospace UI font declarations in favor of locally hosted Poppins throughout labels, captions and metadata. Detail-page reading copy was also enlarged.

Lint, typecheck, production build, 15 unit tests and all 8 production browser tests passed. Runtime checks on Home, About, Projects and Subecta confirmed Poppins and no horizontal overflow at widths 360, 390, 768, 1024, 1440 and 1920. Desktop measured cover height 220px, summary 16px and role 13px. Automated accessibility scans passed across all 10 informational/detail routes. Lighthouse was not rerun for this typography/layout change.

## Original screenshot files

Safely extracted only PNG entries from the owner-uploaded RAR. Visually matched Subecta (1656×942), Elite Jobs Hub (1785×971), and Merctra (1507×868). Copied original PNG bytes into `public/images/projects/`; SHA-256 comparisons with extracted sources matched for all three. No image generation, recoloring, crop or reconstruction was used.

Cards use contained image previews at the existing compact heights. Detail figures preserve each source aspect ratio and link to full-size PNGs. Browser tests now wait for actual card/detail image decoding and verify the detail containment mode. Lint, typecheck, 15 unit tests and production build passed. All 8 production browser tests passed, including actual screenshot loading in cards and detail pages, containment, and accessibility scans. Gallery and all three detail pages passed overflow checks at 360, 390, 768, 1024 and 1440 pixels.
