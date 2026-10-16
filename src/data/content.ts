export type Section = { heading: string; body: string };
export type Project = {
  slug: string; title: string; published: boolean; approved: boolean;
  category: 'Websites' | 'Products' | 'Brands' | 'AI';
  summary: string; status: 'Live' | 'In development' | 'Concept';
  role: string; year?: string; stack: string[]; sections: Section[];
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

// Empty by design: never publish invented case studies or personal stories.
export const projectContent: Project[] = [];
export const serviceContent: Service[] = [];
export const journalContent: Article[] = [];
export const projects = projectContent.filter(item => item.published && item.approved);
export const services = serviceContent.filter(item => item.published && item.approved);
export const articles = journalContent.filter(item => item.published && item.approved);

// Candidate names only. These are not imported by any public page or schema.
export const editorialBacklog = {
  projects: ['Nexus Tech PK', 'Subecta', 'Elite Jobs Hub'],
  services: ['Brand & Startup Launch', 'Website Design & Development', 'Digital Product Development', 'AI Integrations & Automation', 'Startup Strategy & Consulting'],
  missing: ['Owner-approved project facts and images', 'Service scopes and approval', 'Portrait', 'Exact social URLs', 'Contact destination', 'Timeline facts and dates', 'Original articles'],
};
