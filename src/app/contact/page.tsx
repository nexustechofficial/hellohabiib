import { Arrow } from '@/components/icons';
import { siteIdentity } from '@/data/site';
import { PageIntro } from '@/components/layout';
import { ContactForm } from '@/components/contact-form';
import { contactSettings } from '@/lib/contact';
import { services } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
export const dynamic='force-dynamic';
export const metadata=pageMetadata('Contact','Start a conversation with Habibullah about your next idea, project or collaboration.','/contact');
export default async function Contact({searchParams}:{searchParams:Promise<{service?:string}>}){const {service}=await searchParams;const selectedService=services.find(s=>s.slug===service)?.slug;return <><PageIntro label="CONTACT" title="Let’s talk."/><section className="wrap contact-layout contact-layout-simple">{siteIdentity.contact && <div className="contact-email-card"><div><span className="eyebrow"><span />EMAIL ME DIRECTLY</span><a className="contact-email-address" href={`mailto:${siteIdentity.contact.email}`}>{siteIdentity.contact.email}</a></div><a className="button secondary" href={`mailto:${siteIdentity.contact.email}`}>Write an email<Arrow diagonal /></a></div>}<ContactForm enabled={Boolean(contactSettings())} selectedService={selectedService} serviceOptions={services.map(s=>({slug:s.slug,title:s.title}))}/></section></>}
