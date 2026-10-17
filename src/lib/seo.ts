import type { Metadata } from 'next';
import { isIndexable, siteIdentity } from '@/data/site';

export function pageMetadata(title: string, description: string, path: string, publish = true): Metadata {
  return {
    title, description, alternates: { canonical: path },
    robots: { index: isIndexable && publish, follow: true },
    openGraph: { title: `${title} | Habibullah`, description, url: path, type: 'website', images: [`/opengraph-image?title=${encodeURIComponent(title)}`] },
    twitter: { card: 'summary_large_image', title, description, images: [`/opengraph-image?title=${encodeURIComponent(title)}`] },
  };
}
export function personSchema() {
  return { '@type': 'Person', '@id': `${siteIdentity.canonicalOrigin}/#person`, name: siteIdentity.primaryName, url: siteIdentity.canonicalOrigin, description: siteIdentity.bio, jobTitle: 'Founder & CEO', worksFor: { '@id': `${siteIdentity.canonicalOrigin}/#nexus-tech-pk` },
    ...(siteIdentity.publicAliases.length ? { alternateName: siteIdentity.publicAliases } : {}),
    ...(siteIdentity.verifiedSocialProfiles.length ? { sameAs: siteIdentity.verifiedSocialProfiles.map(p => p.url) } : {}),
    ...(siteIdentity.portrait ? { image: new URL(siteIdentity.portrait.src, siteIdentity.canonicalOrigin).href } : {}),
  };
}
export function organizationSchema() {
  return { '@type': 'Organization', '@id': `${siteIdentity.canonicalOrigin}/#nexus-tech-pk`, name: 'Nexus Tech PK', founder: { '@id': `${siteIdentity.canonicalOrigin}/#person` } };
}
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: new URL(item.path, siteIdentity.canonicalOrigin).href })) };
}
export function JsonLd({ data }: { data: object }) {
  // Used by the script component in layout and pages via safe serialization.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
