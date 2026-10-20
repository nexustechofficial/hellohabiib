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

- Temporarily removed Journal listing/article routes, all shared navigation links (desktop/mobile/no-JS) and sitemap entries at owner request. Article data/types remain for future restoration; route implementations are recoverable in Git history. Updated README and existing browser expectations to assert Journal is absent and /journal returns 404.
- Validation: lint and 15 unit tests passed. Initial production build found stale generated dev route types referencing deleted files; moved only the generated .next/dev cache to /tmp and rebuilt successfully. All 9 browser tests passed, including Journal 404, navigation absence and accessibility checks.

- Removed repeated descriptive filler across Home, About, Projects, Services, social cards and shared contact CTA. Kept substantive founder/project/service details. Contact now has a short title and a centered form, without the explanatory sidebar or intro paragraph; shortened form placeholders, consent and unavailable-delivery notice and removed the mailing-list aside. Delivery status remains honest.
- Validation: lint, all 15 unit tests, production build and all 9 browser tests passed. Additional Home/About/Projects/Services/Contact checks found no overflow at 320, 768 and 1440px. Visually reviewed the simplified contact page; privacy and validation remain intact.

- Removed duplicate social-profile links from the global footer per owner screenshot. Increased footer navigation and founder text to 16px, copyright/back-to-top to 14px and wordmark to 26px, with a stacked mobile footer and readable 13–15px supporting text. Dedicated personal social section and search schema remain intact.
- Lint and production build passed. Browser checks at 320, 390, 768, 1024 and 1440px confirmed footer social links are absent, dedicated social cards remain and layouts have no horizontal overflow; computed footer link size is 15px on mobile and 16px otherwise.

- Added a reference-inspired “Who am I” section immediately after the homepage hero, with the existing owner portrait, six highlight cards and three milestone rows. Uses confirmed March 2024 Nexus founding, founder/CEO role, MERN work and published portfolio counts (3 featured projects, 2 client projects, 1 personal product); counts are explicitly scoped to featured work. No awards, revenue, audience totals or project dates inferred from the reference. Hero scroll cue now targets milestones. Optional request for further owner milestones remains open.
- Validation: lint, 15 unit tests, production build and all 9 browser tests passed. Additional checks verified immediate-after-hero placement, six cards, portrait loading and overflow-free layout at 320, 390, 768, 1024, 1440 and 1920px. Visually reviewed desktop and mobile section screenshots.

- Replaced the three featured-project count cards with owner-supplied milestones: 2Y Experience, 1,000+ Clients and 50+ Brands helped grow. Kept Nexus founding year, MERN and founder/CEO cards. Adjusted small-screen metric sizing so the longer client total fits.
- Lint and production build passed. Browser checks verified the exact three new values and no card/page overflow at 320, 390, 768, 1024 and 1440px.

- Updated the milestone heading to “Who am I?” with matching bold 800 weight across the whole heading. Removed dash punctuation in its intro and Nexus milestone title, and changed “Full-stack” to “Full stack” within this section. Production build passed.

- Replaced the milestone labels MAR 2024, MY PRODUCT and CLIENT WORK with original brand marks: Nexus Tech PK, Subecta and both Merctra/Elite Jobs Hub. Nexus uses the uploaded logo; project marks are displayed through SVG viewBoxes over owner-provided homepage screenshots, preserving source files and colors. Website downloads were blocked with HTTP 403, so no remote logo dependency was introduced.
- Lint and production build passed. Browser checks verified four marks, removal of old labels and no overflow at 320, 390, 768 and 1440px. Reviewed desktop/mobile screenshots; automated accessibility check passed across informational routes.

- Changed the milestone portrait caption from “Founder & CEO · Digital Builder” to “Founder & CEO · Nexus Tech PK” at owner request. Verified the exact text replacement and clean diff formatting.

- Tightened milestone rows to a fixed 44px logo column (40px mobile), consistent text alignment and smaller row padding/gaps. Split the combined client row into separate Merctra and Elite Jobs Hub entries so each brand has one logo and a direct case-study link. Lint and production build passed; browser checks confirmed four aligned rows, equal logo sizes and no overflow at 320, 390, 768 and 1440px. Visually reviewed desktop result.
- Requested the newly shown flat Nexus mark as a downloadable file/archive: inline image has no workspace path. Replacement remains pending; existing uploaded Nexus logo is retained until the original file arrives.

- Made milestone logo frames circular and combined the two client logos in one row with exact half-diameter overlap (22px of 44px on desktop, 20px of 40px on mobile). Shared logo column keeps text aligned. Lint and production build passed; browser geometry checks verified circles, 50% overlap and no horizontal overflow at 320, 390, 768 and 1440px.
- The newly requested flat Nexus image remains inline-only without a downloadable attachment; original uploaded Nexus logo is retained pending its file.

- Temporarily removed the “Who am I?” milestone section from homepage rendering without deleting either component, its milestone content, CSS or images. Restored the hero scroll link to the existing manifesto section. README records restoration instructions. Lint/build passed; inspected built homepage to confirm no milestone section or stale anchor while saved components remain on disk.

- Restored owner-preferred homepage browser title: “Habib Ullah | Entrepreneur, Developer & Digital Builder”. Updated the existing browser title assertion. Production build passed and generated homepage title was verified exactly; founder/brand content and structured data remain in place.

- Removed the once-per-tab sessionStorage gate from the homepage intro. It now autoplays on homepage mount, refresh and return visits, preserving Escape/Tab skipping and reduced-motion preference handling. Lint/build passed; updated browser test verified initial autoplay, completion, autoplay after reload, manual replay, keyboard skipping and reduced-motion behavior.

- Removed the homepage hero kicker “INDEPENDENT MIND. BUILDER’S INSTINCT.” and zeroed the name’s top margin so the remaining hero text moves up without a leftover gap. Production build passed; verified generated homepage no longer includes the removed line.

- Standardized browser titles to “Page | Habib Ullah” with short Home/About/Projects/Services/Contact/Privacy names and project/service names for detail pages. Open Graph/Twitter titles now contain only the short page name. Explicit absolute page titles avoid root-page template inheritance differences. Removed visible copy hyphens (compound words now use spaces; dash separators use pipes) without changing routes, CSS selectors, URLs or technical identifiers.
- Lint, 15 unit tests and production build passed. Browser validation across all ten published informational/detail routes verified exact browser and social titles and no visible hyphen/dash copy in main content. Updated existing homepage title assertion.

- Restored the homepage-only browser title “Habib Ullah | Entrepreneur, Developer & Digital Builder”, preserving short titles for all other pages. Updated existing browser assertion. Production build passed; generated Home and About titles verified.

- Owner refined homepage title to “Habib Ullah | Entrepreneur, Developer & Brand Builder”. Updated root default, homepage override and existing browser assertion. Build passed and exact generated title verified.

- Bolded Habibullah, March 2024 and Asia and beyond in the shared Nexus section. Replaced generic CEO sentence with the confirmed WhatsApp-community origin story. Added the uploaded Nexus logo as a website-link icon and replaced the startup-services link with the supplied Nexus Tech PK LinkedIn page and its platform glyph. Added that company URL to Organization sameAs, separate from personal LinkedIn.
- Updated project screenshot cards to fill their consistent 16:9 frames using undistorted cover sizing anchored at the top; slight edge cropping replaces letterboxing, while full original screenshots remain on case-study pages.
- Lint, 15 unit tests, production build and all 9 browser tests passed. Additional Home/About/Projects/Services checks verified highlighted text, correct LinkedIn link, website icon, cover sizing and no overflow at 320–1440px. Visually reviewed Nexus and project-gallery screenshots. Changes are not deployed to the user's VPS by this workspace.

- Extracted the newly supplied flat Nexus mark from kasjh.rar and copied the original 770×767 JPG byte-for-byte to public/images/nexus-tech-pk-icon.jpg. Used it for the circular website-link icon and the preserved, hidden milestone logo. Retained the larger illustrated brand panel and personal face favicon.
- Reorganized shared Nexus links: website and founder journey on the first row; Facebook, Instagram and LinkedIn together on the second row. Lint, 15 unit tests, production build and the accessibility browser test passed. Additional Home/About checks verified exact link grouping, new icon loading, separate desktop rows and no overflow at 320–1440px; visually reviewed final section.

- Added centralized page-specific SEO copy for all ten public routes: Home, About, Projects, Services, Contact, Privacy, three project case studies and startup service detail. Each has a unique description and relevant keywords alongside owner-approved identity terms. Shared metadata helper emits matching HTML/Open Graph/Twitter descriptions and keyword tags, with sensible fallback for future pages. Existing short page titles and homepage title are retained.
- Validation: 15 unit tests passed; final lint/build passed after correcting a missing identity import caught by the initial build. Updated browser route test passed across all ten pages, verifying unique descriptions of 101–180 characters, keyword tags, matching social descriptions, canonical URLs and existing identity/schema behavior. No VPS deployment performed.

- Implemented the owner-approved portfolio-first homepage direction after confirmation: kept “I BUILD WHAT YOU IMAGINE.” unchanged; introduced the owner personally with Explore My Work/About Me buttons; placed selected projects before Nexus founder story, followed by startup-service cards and a four-step process. Added chapter anchors, subtle hover movement and progressive scroll reveals; retained Poppins, existing palette, owner portrait, social section and closing CTA. Replaced abstract manifesto/principles copy with relevant founder services without adding prices, testimonials, urgency, guarantees or new service claims. Saved milestone section remains unrendered.
- Validation: lint, 15 unit tests, production build and all 9 browser tests passed. Additional checks confirmed unchanged exact tagline, approved section order, hero links, three service cards/four process steps, inquiry preselection and no overflow at 320, 390, 768, 1024, 1440 and 1920px. Visually reviewed desktop/mobile layouts; corrected a missing font glyph by rendering the launch mark as SVG, rebuilt and verified final rendering. No VPS deployment performed.

- Increased homepage hero button text to 16px on desktop/tablet and 14px on mobile, using sufficient specificity to override older cinematic-hero rules. Production build passed. Browser checks verified computed sizes for both buttons and no page overflow at 320, 390, 768 and 1440px.

- Added a global decorative orange cursor follower for fine-pointer desktop screens, with hover/click response, nonblocking pointer events, native cursor retained, no React rerenders on movement and requestAnimationFrame updates that stop at rest. Hidden on touch/coarse pointers, small screens, keyboard use, window exit/blur and reduced motion. Event listeners and frames are cleaned up.
- Improved phone layouts across public pages: 44–50px tap targets, readable project/service/reading text, 16px form inputs to avoid iOS focus zoom, flexible links/captions, aligned hero buttons (stacked at narrow widths), and a scrollable mobile menu for short landscapes. Mobile menu waits for hydration before enabling its toggle. Main tagline remains unchanged.
- Final validation: lint, typecheck, 15 unit tests, production build and all 11 browser tests passed. New tests cover desktop cursor interactions/preferences and touch menu/filter/form behavior. All 10 routes were checked at 320, 360, 390, 430 and 768px without horizontal overflow; short-landscape menu navigation passed. Visually reviewed mobile home/contact captures. Validation uses Chromium mobile emulation, not physical iOS/Android devices. No live VPS deployment performed.

- Fixed the screenshot-identified Nexus mobile link layout: website/journey now share one compact outlined two-row group, while Facebook/Instagram/LinkedIn occupy three equal icon cards on one row. Removed mobile social arrows and uneven underlines, tightened gaps and kept desktop unchanged. Production build passed; Home/About layout checks confirmed same-row, equal-width social cards and no overflow at 320, 360, 390, 430, 540 and 700px. Visually reviewed the 390px result.

- Added the owner-supplied personal WhatsApp channel as a fourth personal social card and Person sameAs entry, with a locally hosted Simple Icons glyph and channel-specific labels. Replaced Nexus section Facebook with its separate WhatsApp channel, also updating Organization sameAs. Balanced personal social cards into four desktop columns/two phone columns (one at the narrowest breakpoint).
- Published the owner-approved habiibullah448@gmail.com inbox on Contact and Privacy with working mailto links. Configured it as the default recipient for existing server delivery and in .env.example; retained verified-sender/API-key/Redis prerequisites. Owner confirmed Resend/Upstash accounts are not set up, so automatic form delivery remains unavailable and directs visitors to email instead. No credentials invented, live emails sent or VPS settings changed. README explains the remaining setup and mailto behavior.
- Validation: final lint/build and typecheck passed; 16 unit tests and all 11 browser tests passed, including mocked recipient routing and missing-key safety. Additional checks verified exact personal/company WhatsApp URLs, removal of company Facebook, icon loading, email destination and no overflow on Home/About/Contact at 320–1440px. Mobile social/contact screenshots reviewed.


## Direct contact update — 2026-10-20
- Removed the public contact form. Contact now provides email, direct WhatsApp chat and all four approved personal social profiles. No email-service credentials are required for this interface; the existing unused form component/API remain available for future work.
- Added an accessible bottom-right WhatsApp button across pages and changed desktop/mobile header Let’s Talk to the approved 923355302803 number. Header, floating and Contact links have distinct suggested messages; service referrals retain their context. Nothing sends automatically.
- Updated Contact metadata and Privacy copy. Verified lint, production build, 16 unit tests and 11 browser tests (including accessibility). Contact has no horizontal overflow at 320, 360, 390, 430, 768 and 1440px; reviewed a mobile screenshot. No live messages sent or VPS deployment performed.

- Updated WhatsApp icon backgrounds and floating/chat buttons to brand green #25D366 with white logo; contact button text stays dark for readability. Personal WhatsApp card now reads Habib Ullah in place of My WhatsApp channel. Lint and production build passed.
