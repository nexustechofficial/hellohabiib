import type { MetadataRoute } from 'next';
import { isIndexable, siteIdentity } from '@/data/site';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:isIndexable?'/':undefined,disallow:isIndexable?'/api/':'/'},sitemap:`${siteIdentity.canonicalOrigin}/sitemap.xml`,host:siteIdentity.canonicalOrigin};}
