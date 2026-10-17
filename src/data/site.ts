export const siteIdentity = {
  primaryName: 'Habibullah',
  positioning: 'Founder & CEO of Nexus Tech PK | Developer & Digital Builder',
  canonicalOrigin: 'https://hellohabiib.com',
  bio: 'Habibullah, also known as Habib Ullah, is the Founder & CEO of Nexus Tech PK, a developer and digital builder. His journey began with a WhatsApp community that grew into Nexus Tech PK. He builds brands, websites and digital products from idea to deployment.',
  publicAliases: ['Habib Ullah'] as string[],
  verifiedSocialProfiles: [
    { platform: 'Instagram', url: 'https://www.instagram.com/hellohabiib/' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/hellohabiib/' },
    { platform: 'Facebook', url: 'https://web.facebook.com/hellohabiib/' },
  ],
  portrait: { src: '/images/habibullah-portrait.webp', width: 1122, height: 1402 } as null | { src: string; width: number; height: number },
  featuredVenture: {
    name: 'Nexus Tech PK',
    url: 'https://nexustech.pk/',
    socialProfiles: [
      { platform: 'Facebook', url: 'https://web.facebook.com/nexustechdotpk/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/nexustechdotpk/' },
    ],
  },
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
