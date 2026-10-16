import { PageIntro } from '@/components/layout';
import { ContactForm } from '@/components/contact-form';
import { contactSettings } from '@/lib/contact';
import { services } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
import { siteIdentity } from '@/data/site';
export const dynamic='force-dynamic';
export const metadata=pageMetadata('Contact','Start a conversation with Habibullah about your next idea, project or collaboration.','/contact');
export default async function Contact({searchParams}:{searchParams:Promise<{service?:string}>}){const {service}=await searchParams;const selectedService=services.find(s=>s.slug===service)?.slug;return <><PageIntro label="EVERY GOOD BUILD STARTS SOMEWHERE" title="Let’s make" accent="something real." description="An idea, a question, a possibility. Tell me what you have in mind."/><section className="wrap contact-layout"><aside className="contact-aside"><div><h2>A conversation.<br/>A clear starting point.</h2><p>A little context goes a long way. Share the problem, the ambition, and what you’d like to create.</p>{siteIdentity.contact&&<a className="text-link" href={`mailto:${siteIdentity.contact.email}`}>{siteIdentity.contact.email}</a>}</div><span className="eyebrow"><span/>THOUGHTFUL IDEAS WELCOME</span></aside><ContactForm enabled={Boolean(contactSettings())} selectedService={selectedService} serviceOptions={services.map(s=>({slug:s.slug,title:s.title}))}/></section></>}
