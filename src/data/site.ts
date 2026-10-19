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
    founded: 'March 2024',
    description: 'Founded in March 2024 by Habib Ullah, Nexus Tech PK makes digital products and smart solutions accessible to everyone, with resources to learn, grow and create.',
    values: [
      { title: 'Innovation', description: 'Exploring emerging technologies and creative approaches to deliver digital products.' },
      { title: 'Quality', description: 'Vetting every product in the store for quality and usefulness.' },
      { title: 'Community', description: 'Bringing digital creators together to share, learn and grow.' },
    ],
    url: 'https://nexustech.pk/',
    logo: { src: '/images/nexus-tech-pk-logo.png', width: 756, height: 766 },
    icon: { src: '/images/nexus-tech-pk-icon.jpg', width: 770, height: 767 },
    socialProfiles: [
      { platform: 'Facebook', url: 'https://web.facebook.com/nexustechdotpk/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/nexustechdotpk/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/nexustechpk' },
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
