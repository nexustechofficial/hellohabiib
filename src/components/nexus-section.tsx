import Image from 'next/image';
import Link from 'next/link';
import { siteIdentity } from '@/data/site';
import { Arrow } from '@/components/icons';

export function NexusSection() {
  const venture = siteIdentity.featuredVenture;
  return <section id="nexus-tech-pk" className="nexus-section section" aria-labelledby="nexus-heading">
    <div className="wrap nexus-grid">
      <div className="nexus-brand nexus-brand-with-logo"><Image className="nexus-official-logo" src={venture.logo.src} alt="Nexus Tech PK official logo" width={venture.logo.width} height={venture.logo.height} sizes="(max-width: 700px) 100vw, (max-width: 960px) 40vw, 545px" /><div className="nexus-brand-caption"><span className="eyebrow"><span />THE BRAND I STARTED</span><span className="nexus-role">HABIB ULLAH / FOUNDER &amp; CEO</span></div></div>
      <div className="nexus-copy"><span className="eyebrow"><span />COMMUNITY ROOTS. A BUILDER’S MINDSET.</span><h2 id="nexus-heading">Habib Ullah.<br />Founder &amp; CEO of<br /><em>Nexus Tech PK.</em></h2><p>I’m Habibullah, also known as Habib Ullah. Nexus Tech PK is the brand I founded, and I lead it as CEO. It began with a WhatsApp community and grew as I kept learning, working and building.</p><p>That experience shapes the way I approach every project: start with an idea, understand what it needs, and bring the brand and the technology together. Today, my work spans branding, websites and digital products, from the first concept through deployment.</p><div className="nexus-public-links" aria-label="Nexus Tech PK official links"><a href={venture.url} className="text-link" target="_blank" rel="noopener noreferrer">Visit nexustech.pk<Arrow diagonal /></a>{venture.socialProfiles.map(profile => <a key={profile.platform} href={profile.url} className="text-link" target="_blank" rel="noopener noreferrer" aria-label={`Nexus Tech PK on ${profile.platform}`}>{profile.platform}<Arrow diagonal /></a>)}</div><div className="nexus-links"><Link href="/about#journey" className="text-link">Read my founder journey<Arrow diagonal /></Link><Link href="/services" className="text-link">Brand &amp; startup services<Arrow diagonal /></Link></div></div>
    </div>
  </section>;
}
