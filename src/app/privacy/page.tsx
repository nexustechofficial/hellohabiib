import { siteIdentity } from '@/data/site';
import { PageIntro } from '@/components/layout';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Privacy', 'How this website handles contact information, external links and essential technical data.', '/privacy');

export default function Privacy() {
  return <><PageIntro label="PRIVACY" title="Your information." /><article className="wrap reading">
    <h2>Browsing this website</h2><p>This website does not install advertising trackers or analytics cookies. The hosting provider may process technical request information, such as IP addresses and access logs, to operate and secure the site. Fonts, icons and images are served locally.</p>
    <h2>Getting in touch</h2><p>The Contact page has no form. Email links open your email app, and WhatsApp links open a conversation with a suggested message. Nothing is sent automatically; you choose what to send. If you get in touch, your message and contact details are used to respond to your inquiry.</p>
    <h2>Email, WhatsApp and social profiles</h2><p>These links take you to external services with their own privacy practices. Email and message copies are handled by the relevant providers and recipient accounts. This website does not embed social feeds or automatically send your browsing activity to those services.</p>
    <h2>Your choices</h2><p>Only share information needed for your inquiry. Do not send passwords or sensitive personal documents. For privacy questions or requests, email <a href={`mailto:${siteIdentity.contact?.email}`}>{siteIdentity.contact?.email}</a>.</p>
  </article></>;
}
