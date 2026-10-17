import { startupDeliverables, startupProcess, startupFaq } from './startup';

export type Section = { heading: string; body: string };
export type Project = {
  slug: string; title: string; published: boolean; approved: boolean;
  category: 'Websites' | 'Products' | 'Brands' | 'AI';
  summary: string; status?: 'Live' | 'In development' | 'Concept';
  relationship?: 'Personal project' | 'Client work'; caseStudyPublished?: boolean;
  role?: string; year?: string; stack: string[]; sections: Section[];
  features?: string[];
  cover?: string; coverAlt?: string; coverDimensions?: { width: number; height: number }; liveUrl?: string; repositoryUrl?: string;
};
export type Service = {
  slug: string; title: string; published: boolean; approved: boolean;
  summary: string; audience: string; deliverables: string[];
  process: Section[]; faq: { question: string; answer: string }[];
};
export type Article = {
  slug: string; title: string; description: string; published: boolean;
  approved: boolean; date: string; tags: string[]; sections: Section[];
};

// Scope and MERN stack are owner-confirmed. Purpose/features are described from
// owner-supplied screenshots; screenshot counters are not verified outcomes.
// No implementation audit, live-status check or performance claim is implied.
const mernStack = ['MongoDB', 'Express.js', 'React', 'Node.js'];
export const projectContent: Project[] = [
  {
    slug: 'subecta', title: 'Subecta', published: true, approved: true,
    category: 'Products', relationship: 'Personal project',
    summary: 'A MERN-based subscription management platform for digital subscription sellers, bringing customers, recurring revenue and renewals into one workspace.',
    role: 'Branding · Full-stack development · Deployment',
    liveUrl: 'https://subecta.com/', cover: '/images/projects/subecta-homepage.png', coverAlt: 'Subecta homepage with a subscription dashboard and renewal reminders', coverDimensions: { width: 1656, height: 942 }, stack: [...mernStack], caseStudyPublished: true,
    features: ['Customer and subscription tracking', 'Renewal dates and upcoming-expiry visibility', 'Recurring-revenue dashboard and analytics', 'Automated WhatsApp renewal reminders'],
    sections: [
      { heading: 'Built for recurring-revenue businesses', body: 'Subecta is my own product, designed for businesses that sell digital subscriptions and need a clear view of their recurring operations. Its purpose is to bring customer records, subscriptions and renewal activity together, so a seller can understand what needs attention without piecing the picture together manually.' },
      { heading: 'One place to manage the subscription lifecycle', body: 'The product experience centers on a dashboard that presents customers, monthly income and renewals due. Upcoming-expiry notices help surface time-sensitive subscriptions, while WhatsApp reminders are presented as a way to support renewal follow-up. The focus is on helping sellers organize the ongoing customer relationship, rather than treating each sale as an isolated transaction.' },
      { heading: 'Product identity and experience', body: 'I took Subecta from the initial idea through branding, complete website development and deployment. The visual identity pairs a dark interface with green accents and a dashboard-led product presentation. The website explains the product through feature, analytics and pricing sections, with clear paths to sign in, explore a demo or start using the platform.' },
      { heading: 'Full-stack MERN foundation', body: 'Subecta is built with MongoDB, Express.js, React and Node.js. This combines a React interface with a JavaScript server-side application layer and MongoDB data persistence. The stack supports the product’s customer, subscription and renewal-management focus within one full-stack application. My contribution covers the full website and brand, from idea to deployment.' },
    ],
  },
  {
    slug: 'merctra', title: 'Merctra', published: true, approved: true,
    category: 'Websites', relationship: 'Client work',
    summary: 'A MERN-based global trade and sourcing website connecting Canadian specialty-food producers, international suppliers and prospective buyers.',
    role: 'Branding · Full-stack development · Deployment',
    liveUrl: 'https://merctra.com/', cover: '/images/projects/merctra-homepage.png', coverAlt: 'Merctra homepage presenting Canadian specialty-food sourcing and global trade', coverDimensions: { width: 1507, height: 868 }, stack: [...mernStack], caseStudyPublished: true,
    features: ['Product and sourcing information', 'Dedicated buyer and supplier pathways', 'Market coverage and process explanations', 'Quote-request and contact entry points'],
    sections: [
      { heading: 'A digital presence for global sourcing', body: 'Merctra is a client project for a global trade and sourcing business. The website presents a connection between Canadian specialty-food producers and buyers in international markets, alongside products from international suppliers. Its homepage highlights Canadian sourcing and products such as Ontario maple syrup, giving visitors an immediate sense of the business and its offering.' },
      { heading: 'Helping buyers and suppliers find their next step', body: 'The site is organized around the questions a prospective trading partner needs answered: what products are available, which markets the business serves and how the sourcing process works. Dedicated buyer and supplier navigation separates those audiences, while product-exploration, quote-request and contact entry points guide visitors toward a business inquiry.' },
      { heading: 'Branding through deployment', body: 'My role covered the brand and complete website, from idea to deployment. The supplied design uses a navy-and-gold identity, a clear editorial hierarchy and port imagery to communicate the global-trade context. The aim of the website is to explain the sourcing proposition and give interested businesses a straightforward route to make contact.' },
      { heading: 'A full-stack JavaScript build', body: 'The website is built on the MERN stack: MongoDB, Express.js, React and Node.js. React provides the presentation layer, with Node.js and Express.js forming the server-side foundation and MongoDB providing the data layer. This full-stack JavaScript foundation supports the business’s digital presence, bringing its sourcing proposition, product information and inquiry pathways into a cohesive website.' },
    ],
  },
  {
    slug: 'elite-jobs-hub', title: 'Elite Jobs Hub', published: true, approved: true,
    category: 'Products', relationship: 'Client work',
    summary: 'A MERN-based job discovery platform designed to help people search opportunities by role and location, refine their preferences and keep track of applications.',
    role: 'Branding · Full-stack development · Deployment',
    liveUrl: 'https://elitejobshub.com/', cover: '/images/projects/elite-jobs-hub-homepage.png', coverAlt: 'Elite Jobs Hub homepage with job-title and location search', coverDimensions: { width: 1785, height: 971 }, stack: [...mernStack], caseStudyPublished: true,
    features: ['Job-title, keyword and location search', 'Salary and work-arrangement filtering', 'Remote, category and location discovery', 'CV upload and application-dashboard pathways'],
    sections: [
      { heading: 'Making job discovery easier to navigate', body: 'Elite Jobs Hub is a client project focused on helping job seekers find opportunities that fit their preferences. Its public-facing experience presents US job discovery through a clear search-first layout, bringing role, location and work-arrangement choices into the start of the journey.' },
      { heading: 'From browsing opportunities to tracking applications', body: 'The homepage supports searching by job title, skill or keyword, alongside city, state or ZIP code. Its messaging describes salary and work-arrangement filters and application tracking in a dashboard. Category, location and remote-work navigation give visitors additional ways to explore, while sign-in and CV-upload entry points support the applicant journey.' },
      { heading: 'An end-to-end client project', body: 'I handled the branding and complete website, taking the project from idea through development and deployment. The design uses a strong typographic hierarchy, a prominent search module and clear category shortcuts to make the first action easy to find. The visual identity belongs to the client project and remains distinct from my personal portfolio.' },
      { heading: 'Built on MERN', body: 'Elite Jobs Hub uses MongoDB, Express.js, React and Node.js. The stack brings together a React user interface, server-side JavaScript application logic and database persistence for the job-platform experience. The resulting product presentation connects job discovery, account entry points and the application journey within a consistent, search-led experience.' },
    ],
  },
];
export const serviceContent: Service[] = [{
  slug: 'brand-startup-launch', title: 'Brand & Startup Launch', published: true, approved: true,
  summary: 'Turn a business idea into a cohesive brand and digital presence, with branding, a complete website and launch preparation scoped around your needs.',
  audience: 'Aspiring entrepreneurs and early-stage business owners who need help connecting their idea, identity, website and launch materials. The engagement can also start from an existing brand that needs a clearer digital presence.',
  deliverables: startupDeliverables.map(item => item.title), process: startupProcess, faq: startupFaq,
}];
export const journalContent: Article[] = [];
export function publishedItems<T extends { published: boolean; approved: boolean }>(items: T[]): T[] { return items.filter(item => item.published && item.approved); }
export const projects = publishedItems(projectContent);
export const caseStudies = projects.filter(item => item.caseStudyPublished);
export const services = publishedItems(serviceContent);
export const articles = journalContent.filter(item => item.published && item.approved);

// Candidate names only. These are not imported by any public page or schema.
export const editorialBacklog = {
  projects: ['Nexus Tech PK (venture details and URL pending)', 'Detailed roles and case studies for confirmed projects'],
  services: ['Brand & Startup Launch', 'Website Design & Development', 'Digital Product Development', 'AI Integrations & Automation', 'Startup Strategy & Consulting'],
  missing: ['Owner-approved project facts and images', 'Service scopes and approval', 'Portrait', 'Exact social URLs', 'Contact destination', 'Timeline facts and dates', 'Original articles'],
};
