import Link from 'next/link';
import { siteIdentity } from '@/data/site';
import { Arrow, Mark } from './icons';
export function Footer() {
  return <footer className="site-footer wrap"><div className="footer-top"><Link href="/" className="wordmark"><Mark />Habibullah<span className="brand-dot">.</span></Link><p>Habib Ullah · Founder &amp; CEO<br />Nexus Tech PK.</p><div className="footer-links"><Link href="/about">About</Link><Link href="/about#nexus-tech-pk">Nexus Tech PK</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Habibullah</span><span>BUILT WITH INTENT.</span><a href="#top">Back to top <Arrow /></a></div>{siteIdentity.verifiedSocialProfiles.length > 0 && <div className="social-links">{siteIdentity.verifiedSocialProfiles.map(p => <a href={p.url} key={p.url} rel="noopener noreferrer" target="_blank">Habibullah on {p.platform}<Arrow diagonal /></a>)}</div>}</footer>;
}
export function PageIntro({ label, title, accent, description }: { label: string; title: string; accent?: string; description?: string }) {
  return <section className="page-intro wrap"><span className="eyebrow"><span />{label}</span><h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>{description && <p className="lead">{description}</p>}</section>;
}
export function ContactCta() {
  return <section className="closing wrap"><span className="eyebrow"><span />LET’S BUILD SOMETHING MEANINGFUL</span><div className="closing-row"><h2>Have an idea?<br />Let’s make it <em>real.</em></h2><Link href="/contact" className="round-cta" aria-label="Start a project"><Arrow diagonal /><span>START A PROJECT</span></Link></div></section>;
}
export function EmptyCollection({ type }: { type: 'projects' | 'services' | 'journal' }) {
  const content = { projects: ['The work comes first.', 'Case studies will appear here when their stories, details and visuals are ready to share.'], services: ['The right scope starts here.', 'Service details are being prepared. Tell me what you have in mind, and let’s explore what your project needs.'], journal: ['Space for what comes next.', 'Original writing on building, experimenting and turning ideas into real experiences. Articles will appear here when ready.'] }[type];
  return <div className="empty-collection"><span className="empty-icon" aria-hidden="true">{type === 'journal' ? '↳' : '+'}</span><div><span className="eyebrow">{type === 'journal' ? 'NOTES IN THE MAKING' : 'A CONSIDERED COLLECTION'}</span><h2>{content[0]}</h2><p>{content[1]}</p><Link className="text-link" href="/contact">Start a conversation <Arrow diagonal /></Link></div><span className="collection-index" aria-hidden="true">{type === 'projects' ? '01' : type === 'services' ? '02' : '03'}</span></div>;
}
