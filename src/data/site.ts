export const siteIdentity = {
  primaryName: 'Habibullah',
  positioning: 'Entrepreneur, Developer & Digital Builder',
  canonicalOrigin: 'https://hellohabiib.com',
  bio: 'Habibullah is an entrepreneur, developer and digital builder whose journey began with a WhatsApp community that grew into a brand. His work includes personal projects and projects for clients.',
  publicAliases: [] as string[],
  verifiedSocialProfiles: [] as { platform: string; url: string }[],
  portrait: { src: '/images/habibullah-portrait.webp', width: 1122, height: 1402 } as null | { src: string; width: number; height: number },
  featuredVenture: null as null | { name: string; url: string },
  contact: null as null | { email: string; whatsapp?: string },
};

// Production must explicitly enable indexing after content and domain review.
export const isIndexable = process.env.SITE_INDEXABLE === 'true';

export function validateIdentity() {
  const canonical = new URL(siteIdentity.canonicalOrigin);
  if (canonical.protocol !== 'https:' || canonical.hostname !== 'hellohabiib.com') throw new Error('Invalid canonical identity');
  for (const profile of siteIdentity.verifiedSocialProfiles) {
    if (new URL(profile.url).protocol !== 'https:') throw new Error('Social profiles must use HTTPS');
  }
}
validateIdentity();
