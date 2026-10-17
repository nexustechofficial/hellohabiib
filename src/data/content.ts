export type Section = { heading: string; body: string };
export type Project = {
  slug: string; title: string; published: boolean; approved: boolean;
  category: 'Websites' | 'Products' | 'Brands' | 'AI';
  summary: string; status?: 'Live' | 'In development' | 'Concept';
  relationship?: 'Personal project' | 'Client work'; caseStudyPublished?: boolean;
  role?: string; year?: string; stack: string[]; sections: Section[];
  cover?: string; liveUrl?: string; repositoryUrl?: string;
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

// Names, URLs and relationships supplied by the owner. End-to-end branding, website development and deployment are owner-confirmed;
// screenshots, stack and current live status remain unverified; link cards are not case studies.
export const projectContent: Project[] = [
  { slug: 'subecta', title: 'Subecta', published: true, approved: true, category: 'Websites', relationship: 'Personal project', summary: 'My own project, taken from idea through branding, complete website development and deployment.', role: 'Branding · Complete website · Deployment', liveUrl: 'https://subecta.com/', stack: [], sections: [], caseStudyPublished: false },
  { slug: 'merctra', title: 'Merctra', published: true, approved: true, category: 'Websites', relationship: 'Client work', summary: 'End-to-end client work: from the initial idea and branding to the complete website and deployment.', role: 'Branding · Complete website · Deployment', liveUrl: 'https://merctra.com/', stack: [], sections: [], caseStudyPublished: false },
  { slug: 'elite-jobs-hub', title: 'Elite Jobs Hub', published: true, approved: true, category: 'Websites', relationship: 'Client work', summary: 'Branding, the complete website and deployment for a client — taking the project from idea to launch.', role: 'Branding · Complete website · Deployment', liveUrl: 'https://elitejobshub.com/', stack: [], sections: [], caseStudyPublished: false },
];
export const serviceContent: Service[] = [];
export const journalContent: Article[] = [];
export function publishedItems<T extends { published: boolean; approved: boolean }>(items: T[]): T[] { return items.filter(item => item.published && item.approved); }
export const projects = publishedItems(projectContent);
export const caseStudies = projects.filter(item => item.caseStudyPublished);
export const services = serviceContent.filter(item => item.published && item.approved);
export const articles = journalContent.filter(item => item.published && item.approved);

// Candidate names only. These are not imported by any public page or schema.
export const editorialBacklog = {
  projects: ['Nexus Tech PK (venture details and URL pending)', 'Detailed roles and case studies for confirmed projects'],
  services: ['Brand & Startup Launch', 'Website Design & Development', 'Digital Product Development', 'AI Integrations & Automation', 'Startup Strategy & Consulting'],
  missing: ['Owner-approved project facts and images', 'Service scopes and approval', 'Portrait', 'Exact social URLs', 'Contact destination', 'Timeline facts and dates', 'Original articles'],
};
