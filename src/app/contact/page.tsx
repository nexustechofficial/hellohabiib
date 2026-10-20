import Image from 'next/image';
import { Arrow } from '@/components/icons';
import { siteIdentity } from '@/data/site';
import { PageIntro } from '@/components/layout';
import { services } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
import { whatsappLink, whatsappMessages } from '@/lib/whatsapp';

export const metadata = pageMetadata('Contact', 'Contact Habib Ullah by email or WhatsApp, or connect through Instagram, LinkedIn, Facebook and his WhatsApp channel.', '/contact');

export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const selected = services.find(item => item.slug === service);
  const message = selected ? `Hi Habib! I visited hellohabiib.com and would like to discuss ${selected.title} for my business.` : whatsappMessages.contact;
  return <>
    <PageIntro label="CONTACT" title="Let’s talk." />
    <section className="wrap contact-direct" aria-label="Contact Habib Ullah">
      <div className="contact-email-card"><div><span className="eyebrow"><span />EMAIL</span><a className="contact-email-address" href={`mailto:${siteIdentity.contact?.email}`}>{siteIdentity.contact?.email}</a></div><a className="button secondary" href={`mailto:${siteIdentity.contact?.email}`}>Write an email<Arrow diagonal /></a></div>
      <a className="contact-whatsapp button" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"><Image src="/images/social/whatsapp.svg" width={24} height={24} alt="" aria-hidden="true" />Chat on WhatsApp<Arrow diagonal /></a>
      <nav className="contact-social-links" aria-label="Habib Ullah social profiles">{siteIdentity.verifiedSocialProfiles.map(profile => <a href={profile.url} key={profile.platform} target="_blank" rel="noopener noreferrer"><span className={`social-logo social-logo-${profile.platform.toLowerCase()}`}><Image src={`/images/social/${profile.platform.toLowerCase()}.svg`} width={22} height={22} alt="" aria-hidden="true" /></span><span>{profile.platform === 'WhatsApp' ? 'WhatsApp channel' : profile.platform}</span><Arrow diagonal /></a>)}</nav>
    </section>
  </>;
}
