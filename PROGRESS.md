# Build progress

## Completed
- Read and applied the owner-supplied master brief. Owner explicitly requested keeping unconfirmed content unpublished.
- Archived prior Vite source at `/workspace/portfolio-before-master-brief.tar.gz`; migrated application to Next.js App Router, strict TypeScript and Tailwind tokens.
- Obsidian/orange identity, locally hosted Poppins, responsive page designs, mobile navigation, active route state, skip link and footer.
- Original beveled Three.js H with orange seam, pointer response, capped DPR, offscreen pause and static CSS fallback. Optional GSAP motion leaves content visible without JS.
- Home, About, Projects, Services, Journal, Contact, Privacy, real 404s and typed dynamic content templates.
- Central identity and publishing gates; no candidate project/service names, invented stats, guessed profiles, synthetic portraits or dated history published.
- Contact form with shared Zod validation, server body limits, origin verification, honeypot, atomic Redis rate limiting and server-only Resend delivery adapter. Unconfigured mode visibly returns unavailable.
- Canonical metadata, social preview endpoint, Person/WebSite/ProfilePage JSON-LD, breadcrumbs, favicon, robots and sitemap. Indexing intentionally disabled until launch review.
- AGENTS.md, IDENTITY_QA.md, .env.example and deployment guidance.

## Validation
- See QA_REPORT.md for actual commands, pass counts, measurements and limits.
- Frozen install, lint, typecheck and production build passed; 15 unit tests and 9 browser tests passed. Automated Axe scans passed on all seven informational pages.
- Updated install_script and Next.js start_skill were confirmed saved to the cloud environment draft; publication/restoration are separate and untested.

## Outstanding owner-controlled content and launch work
- Supply exact social profile URLs, project roles/status/dates/assets/outcomes, service scopes, original articles and any dated journey facts.
- The reference brand screenshot mentioned in the brief was not attached in this turn; colors follow the supplied numeric tokens and described direction.
- Confirm public contact, recipient/sender, mailbox retention and privacy contact. Configure Resend and shared Redis securely; live email delivery remains unverified.
- Approve deployment target and domain routing. No deployment, DNS change, purchase or publication has been performed.
- On the approved canonical deployment only, enable SITE_INDEXABLE, verify Search Console/Bing and measure field performance.
- Second browser engine has not been validated; only system Chromium is available here.

## Intentional scope limits
- Empty collection pages are navigable but noindex; draft detail pages return 404. Rich case-study/service/article templates exist without filler content.
- No fabricated timeline, portfolio screenshot, testimonial, proficiency score, social link or search-ranking claim.
- No database, CMS, analytics, CAPTCHA or email subscription.

## Portrait-led cinematic revision
- Owner supplied and authorized a real portrait; lighting/background edited to charcoal and warm orange. Asset is local WebP and shared with About/Person metadata.
- Replaced the hero monogram with the portrait; H sculpture remains lower on the page.
- Bold/extra-bold Poppins, masked staggered headline reveal, first-tab intro animation, replay button and pending-navigation feedback.
- Intro is skippable by keyboard, does not block interaction, has a hard timeout, and is absent without JS or with reduced motion.
- No additional project, service, social or biography claims published.

## Owner's community-to-brand story
- Expanded About with the owner's first-person account: WhatsApp community, learning while working, gradual transition into a brand, and personal/client projects.
- Added an accessible four-chapter journey with numbered stages, not invented dates; linked the homepage teaser to /about#journey.
- Central biography and profile structured data now consistently include the confirmed community origin.
- The meaning/currency/period of “six-figure” remains pending. Subsequent owner confirmation resolves the brand name, project URLs, relationships and end-to-end contributions (see below). Raw notes are isolated in src/content/drafts/owner-notes.json and never imported into public pages.
- Owner requested Roman Urdu for questions and conversation. Website remains English per the design brief.

## Confirmed brand and project links
- Brand confirmed as Nexus Tech PK; biography and journey now use the name. No financial metric published.
- Owner confirmed Subecta (https://subecta.com/) as a personal project, Merctra (https://merctra.com/) and Elite Jobs Hub (https://elitejobshub.com/) as client work.
- Owner confirmed branding and the full website, from idea to deployment, for all three. Cards reflect that contribution without invented tools, dates or results.
- Project gallery now offers Personal projects / Client work filters and direct website links. Covers are original editorial typography, not fabricated screenshots or claimed official logos.
- URL verification was attempted twice, including elevated network access; the proxy returned tunnel 403 for all three. Do not assert current live status or scraped site descriptions.
- Detailed case-study routes remain unpublished until enough specific content/assets are supplied; linked cards are published.

- Added Next.js 16’s documented data-scroll-behavior="smooth" marker so route navigation can override smooth scrolling and avoid the development warning.

## Screenshot-based project descriptions
- Owner supplied homepage screenshots and confirmed MERN for all three projects.
- Added individual project pages with substantive purpose, audience, feature overview, owner-confirmed branding/full-stack/deployment role, and MongoDB/Express.js/React/Node.js stack.
- Subecta: digital subscription seller operations, customer/subscription tracking, renewal visibility and WhatsApp reminders.
- Merctra: Canadian specialty-food/global sourcing website with buyer/supplier navigation and inquiry paths.
- Elite Jobs Hub: job discovery by role/location with filtering, CV/account entry points and application-tracking messaging.
- No screenshot revenue, customer, vacancy or other counters are published as project outcomes. No benchmark, implementation audit or live-status verification claimed.
- Case-study flags now publish the three approved internal descriptions; gallery cards and generated sitemap use those routes. Source screenshots are visual references, not reconstructed or fabricated screenshots.

## Project layout and typography refinement
- Reduced oversized project covers to 220px desktop, 195px tablet and 185px mobile.
- Increased project summaries to 16px, role/stack details to 12–13px, and case-study links to 14px; detail-page copy is larger too.
- Replaced all monospace UI font declarations with the locally hosted Poppins family, including labels, timelines, captions and project metadata.

## Original project screenshots integrated
- Extracted the three original PNGs from the owner-uploaded RAR and matched Subecta, Merctra and Elite Jobs Hub visually.
- Original PNG bytes retained in public/images/projects and referenced by project data. No recreations, recoloring or crops.
- Home/project cards show compact, contained screenshots; project detail pages preserve source aspect ratio and offer full-size viewing. Portfolio UI stays Poppins/obsidian/orange; authentic project screenshot colors remain unchanged.
- Browser coverage now verifies actual card/detail image loading to prevent missing-image regressions.

## Three-card project gallery
- Three equal-width cards per desktop row, two on tablet and one on mobile.
- Shared 16:9 screenshot frames replace fixed heights and large letterboxing; original image proportions remain contained.
- Removed role and stack rows from cards; kept description and Explore case study. Detailed role/stack remain on project pages.
- Added restrained image hover/focus zoom with reduced-motion support.

## Brand and startup services
- Owner approved brand/startup launch service direction with an entrepreneur-led hero, then a personal About section.
- Services page now features the approved portrait and community-to-Nexus Tech PK story, nine scoped deliverables, four-step process, genuine projects, native FAQs and inquiry CTAs.
- Published Brand & Startup Launch service detail route and wired contact service preselection. Other unapproved service categories remain unpublished.
- No reference-image age, client totals, years, testimonials, price packages or guessed WhatsApp details copied. Pricing is discussed per scope; existing mail delivery configuration remains unchanged.

## Circular face brand mark
- Owner requested a circular face logo/favicon in place of the H.
- Created a circular avatar from the supplied portrait using the image editing tool, with transparent outer corners. Original hero portrait remains unchanged.
- Shared brand mark now uses the portrait avatar in header, footer and intro. Added PNG/ICO favicons and Apple touch icon; removed the old H SVG icon.

- Updated homepage tagline and default social preview to “I build what you can imagine”; retained three-line animation and adjusted the longer line for small screens.

- Owner revised tagline to “I build what you imagine.” Removed CAN and the smaller last-line font override; all three headline lines now inherit one size.

- Increased header navigation, hero name, portfolio label, eyebrow, description, buttons and replay-label sizes in response to owner screenshot; retained equal headline sizes.

- Owner confirmed Habib Ullah / Habibullah is Founder & CEO of Nexus Tech PK. Added a dedicated founder/brand section to Home and About, updated hero, Services, founder story and footer, and linked Person/Organization structured data with the confirmed alternate name. Updated search titles/descriptions. Indexing remains gated for staging; README documents production build-time flag and Search Console steps. No brand URL, financial figures or social profiles invented.
- Validation: lint and production build passed; all 15 unit tests and 9 browser tests passed, including founder identity/schema and accessibility. Additional Home/About/Services checks confirmed no horizontal overflow at 320, 390, 768, 1024 and 1440px. Visually reviewed the new homepage section. Live indexing and Search Console submission have not been performed.

- Owner supplied official Nexus Tech PK website, Facebook and Instagram URLs. Added all three to the shared Home/About founder section and Organization schema, keeping brand profiles separate from personal profiles. Updated README. Lint, all 15 unit tests and production build passed; browser checks verified exact links and schema on Home/About plus overflow-free layouts at 320, 768 and 1440px. No live indexing changes performed.

- Added owner-supplied personal Instagram, LinkedIn and Facebook profiles to Person schema and global footer. Per owner clarification, also built a dedicated “Let’s stay connected” section on Home and About with three profile cards, responsive stacking and reduced-motion support. Brand profiles remain under Organization schema.
- Validation: lint, 15 unit tests and production build passed. Browser verified exact links, personal schema and no overflow on Home/About at 320, 390, 768 and 1440px; desktop section visually reviewed. Browser suite passed eight functional tests; fixed an accessible-name mismatch on cards and reran the accessibility test successfully across all informational routes.

- Added recognizable Instagram, LinkedIn and Facebook SVG glyphs from Simple Icons to the personal social cards, with local assets and brand colors (sources recorded beside assets). Removed the screenshot-identified homepage community/sculpture teaser; retained the detailed About journey. Updated browser assertions to reflect section removal.
- Lint, 15 unit tests, production build and all 9 browser tests passed. Verified lazy-loaded social logo images decode, community teaser is absent and layouts fit 320–1440px. Nexus logo replacement remains pending: inline chat image has no downloadable workspace path; official website download returned HTTP 403. Requested original PNG/JPG file rather than recreating the logo.

- Resolved the pending Nexus logo replacement using owner-uploaded Logo.rar → Logo/about-journey.png. Copied the original PNG byte-for-byte to public/images/nexus-tech-pk-logo.png (756×766) and replaced the text-only brand panel on Home/About with the uncropped logo. Added logo URL to Organization schema.
- Validation: matching source/destination SHA-256; lint, 15 unit tests and production build passed. Browser checks verified image decoding, original aspect ratio, schema URL and no overflow on Home/About at 320, 390, 768 and 1440px. Automated accessibility check passed across informational routes; visually reviewed the final founder section.

- Updated the shared Home/About Nexus section from the owner's About Us screenshot: March 2024 founding, founder/owner role, accessible digital products and smart solutions, resources to learn/grow/create, Asia-and-beyond audience statement, mission quote, and Innovation/Quality/Community values. The screenshot is the source of these claims; no current age, exact user count, or unprovided social URLs inferred. Added Facebook/Instagram glyphs to the brand's existing official links. Organization description now reflects the supplied brand story.
- Lint, all 15 unit tests, production build and all 9 browser tests passed. Additional browser checks verified both brand logos decode, three value cards and founding detail appear, and Home/About fit 320–1440px. Visually reviewed the completed section.

- Shortened the shared Nexus section to two concise paragraphs, removed the “also known as Habib Ullah” phrase from this section and removed the mission quote plus its unused data field. Lint and production build passed. Browser checks on Home/About verified both removals, two paragraphs, no horizontal overflow at 320–1440px and desktop copy height below the logo-panel height (550px versus 654px at 1440px).
