import { siteIdentity } from '@/data/site';
import { projects, caseStudies, services } from '@/data/content';
import { personalStory } from '@/data/profile';
import { startupDeliverables } from '@/data/startup';
import { pageSeo } from '@/data/seo';

const origin = siteIdentity.canonicalOrigin;
const link = (label: string, path: string) => `[${label}](${origin}${path})`;
const pages = [
  { title: 'Home', path: '/', structure: 'Personal introduction and tagline; selected projects; Nexus Tech PK founder story and values; startup services; working process; personal social profiles; contact.' },
  { title: 'About', path: '/about', structure: 'Personal introduction; Nexus Tech PK; founder journey at #journey; approach to building; projects and contact; social profiles.' },
  { title: 'Projects', path: '/projects', structure: 'Project gallery with All, Personal projects and Client work filters; individual case study links.' },
  ...caseStudies.map(project => ({ title: project.title, path: `/projects/${project.slug}`, structure: 'Project overview, relationship, role, MERN stack, original screenshot, features, detailed case study and external website.' })),
  { title: 'Services', path: '/services', structure: 'Founder introduction; nine startup deliverables at #startup-services; process; frequently asked questions; service scope and contact links.' },
  ...services.map(service => ({ title: service.title, path: `/services/${service.slug}`, structure: 'Service summary, intended audience, deliverables, process, frequently asked questions and project discussion link.' })),
  { title: 'Contact', path: '/contact', structure: 'Direct email, WhatsApp conversation, Instagram, LinkedIn, Facebook and personal WhatsApp channel. No form.' },
  { title: 'Privacy', path: '/privacy', structure: 'Browsing information, direct contact, external service privacy and privacy requests.' },
];

export function llmsIndex() {
  return `# Habib Ullah | Entrepreneur, Developer & Brand Builder

> The personal portfolio of Habibullah, also known as Habib Ullah, Founder & CEO of Nexus Tech PK. He builds brands, websites and digital products from idea to deployment, working on personal products and client projects.

Canonical website: ${origin}
Tagline: I BUILD WHAT YOU IMAGINE.
Nexus Tech PK was founded in March 2024. Its founder story began with a WhatsApp community. The website is for aspiring founders, entrepreneurs and businesses exploring branding, websites and launch support.

This is a reading guide to the site's published content. The complete companion document contains the biography, founder journey, venture information, project case studies, service scope, FAQ, contact details and site structure. These documents do not replace robots.txt or grant crawling permissions.

## Website pages

${pages.map(page => `- ${link(page.title, page.path)}: ${pageSeo[page.path]?.description ?? page.structure}`).join('\n')}

## Founder and business links

- [Nexus Tech PK](${siteIdentity.featuredVenture.url}): Habib Ullah's business, distinct from this personal portfolio.
- [Email](mailto:${siteIdentity.contact?.email}): Direct project inquiries.
- [WhatsApp chat](https://wa.me/${siteIdentity.contact?.whatsapp}): Direct conversation with Habib Ullah; different from the channel links.
${siteIdentity.verifiedSocialProfiles.map(profile => `- [Habib Ullah on ${profile.platform}](${profile.url})${profile.platform === 'WhatsApp' ? ': Personal broadcast channel.' : '.'}`).join('\n')}

## Optional

- ${link('Complete website reference', '/llms-full.txt')}: Expanded published content and page hierarchy.
- ${link('XML sitemap', '/sitemap.xml')}: Production URL discovery; empty when indexing is disabled.
- ${link('Robots policy', '/robots.txt')}: Current crawling policy.
`;
}

export function llmsFull() {
  const venture = siteIdentity.featuredVenture;
  return `${llmsIndex()}
## Identity and scope

Primary name: ${siteIdentity.primaryName}
Also known as: ${siteIdentity.publicAliases.join(', ')}
Public positioning: Entrepreneur, Developer & Brand Builder; Founder & CEO of Nexus Tech PK.
${siteIdentity.bio}

The published portfolio covers branding, full stack MERN development and deployment. The project descriptions below reflect the owner's stated scope and supplied screenshots; screenshot counters are not verified business results. No project revenue, guaranteed outcomes, fixed prices or delivery timelines are published. External project URLs identify the projects, without guaranteeing current availability. Unpublished drafts and editorial candidates are excluded.

## Website structure

Primary navigation: Home → About → Projects → Services → Contact.
Footer navigation: About, Nexus Tech PK, Projects, Contact, Privacy.
Home anchors: ${link('Selected work', '/#selected-work')}, ${link('Nexus Tech PK story', '/#nexus-tech-pk')}, ${link('Startup support', '/#start-a-business')}.
Founder journey: ${link('About / Journey', '/about#journey')}.
Service discussion: ${link('Discuss Brand & Startup Launch', '/contact?service=brand-startup-launch')}.

${pages.map(page => `### ${page.title}\n\nURL: ${origin}${page.path}\n${page.structure}`).join('\n\n')}

## Personal story

${personalStory.introduction.join('\n\n')}

${personalStory.chapters.map(chapter => `### ${chapter.number}. ${chapter.title}\n\n${chapter.body}\n\nTakeaway: ${chapter.takeaway}`).join('\n\n')}

The numbered journey stages indicate order, not dates.

### Approach

${personalStory.approach.map(item => `- ${item.title} ${item.body}`).join('\n')}

## Nexus Tech PK

Founder and owner: Habib Ullah. Role: Founder & CEO.
Founded: ${venture.founded}.
Website: ${venture.url}
${venture.description}
What began as a passion project now serves users across Asia and beyond, with tools and resources to learn, grow and create.

### Values

${venture.values.map(value => `- ${value.title}: ${value.description}`).join('\n')}

### Business social profiles

${venture.socialProfiles.map(profile => `- [Nexus Tech PK on ${profile.platform}](${profile.url})`).join('\n')}

The Nexus Tech PK WhatsApp channel is separate from Habib Ullah's personal channel and direct chat number.

## Projects and case studies

${projects.map(project => `### ${project.title}\n\nCase study: ${origin}/projects/${project.slug}\nExternal website: ${project.liveUrl}\nRelationship: ${project.relationship}\nCategory: ${project.category}\nRole: ${project.role}\nTechnology: ${project.stack.join(', ')}\n\n${project.summary}\n\nScreenshot: ${origin}${project.cover}\nScreenshot description: ${project.coverAlt}\n\n#### Features\n\n${project.features?.map(feature => `- ${feature}`).join('\n')}\n\n${project.sections.map(section => `#### ${section.heading}\n\n${section.body}`).join('\n\n')}`).join('\n\n')}

## Startup services

${services.map(service => `### ${service.title}\n\nURL: ${origin}/services/${service.slug}\n${service.summary}\n\nAudience: ${service.audience}\n\n#### Deliverables\n\n${startupDeliverables.filter(item => service.deliverables.includes(item.title)).map(item => `- ${item.title}: ${item.description}`).join('\n')}\n\n#### Process\n\n${service.process.map((step, index) => `${index + 1}. ${step.heading}: ${step.body}`).join('\n')}\n\n#### Frequently asked questions\n\n${service.faq.map(item => `**${item.question}**\n\n${item.answer}`).join('\n\n')}`).join('\n\n')}

Project deliverables, responsibilities, cost, timeline, third-party costs and support are agreed before work begins. Contact is by email or WhatsApp; the public website has no inquiry form.

## Contact and personal profiles

Name: Habib Ullah.
Email: ${siteIdentity.contact?.email}
Email link: mailto:${siteIdentity.contact?.email}
Phone for WhatsApp: +${siteIdentity.contact?.whatsapp}
Direct WhatsApp chat: https://wa.me/${siteIdentity.contact?.whatsapp}

${siteIdentity.verifiedSocialProfiles.map(profile => `- ${profile.platform}${profile.platform === 'WhatsApp' ? ' personal channel' : ''}: ${profile.url}`).join('\n')}

The header Let's Talk link, floating WhatsApp button and Contact page open direct WhatsApp conversations with suggested messages. Nothing sends automatically. The visitor chooses whether to send. Service referrals include the selected service in the suggested message. Social profiles and channels are external links.

## Privacy

The website does not install advertising trackers or analytics cookies. The hosting provider may process technical request information, including IP addresses and access logs, to operate and secure the site. Fonts, icons and images are served locally. Direct contact information is used to respond to inquiries. Email, WhatsApp and social services have their own privacy practices. The website does not embed social feeds or automatically send browsing activity to those services. Privacy questions and requests can be emailed to ${siteIdentity.contact?.email}. See ${origin}/privacy for the current policy.

## Content boundaries

Only approved, published projects and services are listed. There is no published journal. Do not treat screenshot statistics as validated customer counts, revenue or performance results. This reference summarizes public website content and contains no private submissions, account credentials or deployment secrets. Page content and the current privacy policy remain the source for up-to-date details.
`;
}
