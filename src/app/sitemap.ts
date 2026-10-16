import type { MetadataRoute } from 'next';
import { isIndexable, siteIdentity } from '@/data/site';
import { articles, projects, services } from '@/data/content';
export default function sitemap():MetadataRoute.Sitemap{
 if(!isIndexable)return [];
 const paths=['/','/about','/contact','/privacy',...(projects.length?['/projects',...projects.map(p=>`/projects/${p.slug}`)]:[]),...(services.length?['/services',...services.map(p=>`/services/${p.slug}`)]:[]),...(articles.length?['/journal',...articles.map(p=>`/journal/${p.slug}`)]:[])];
 return paths.map(path=>({url:`${siteIdentity.canonicalOrigin}${path}`,changeFrequency:path==='/'?'monthly':'yearly',priority:path==='/'?1:.7}));
}
