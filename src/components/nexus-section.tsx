import Image from 'next/image';
import Link from 'next/link';
import { siteIdentity } from '@/data/site';
import { Arrow } from '@/components/icons';

export function NexusSection() {
  const venture = siteIdentity.featuredVenture;
  return <section id="nexus-tech-pk" className="nexus-section section" aria-labelledby="nexus-heading">
    <div className="wrap nexus-grid">
      <div className="nexus-brand nexus-brand-with-logo"><Image className="nexus-official-logo" src={venture.logo.src} alt="Nexus Tech PK official logo" width={venture.logo.width} height={venture.logo.height} sizes="(max-width: 700px) 100vw, (max-width: 960px) 40vw, 545px" /><div className="nexus-brand-caption"><span className="eyebrow"><span />THE BRAND I STARTED</span><span className="nexus-role">HABIB ULLAH / FOUNDER &amp; CEO</span></div></div>
      <div className="nexus-copy"><span className="eyebrow"><span />FOUNDED {venture.founded.toUpperCase()}</span><h2 id="nexus-heading">Habib Ullah.<br />Founder &amp; CEO of<br /><em>Nexus Tech PK.</em></h2><p>I’m Habibullah, also known as Habib Ullah, the founder and owner of Nexus Tech PK. I lead the brand as CEO, with a focus on creativity, accessibility and community.</p><p>Founded in March 2024, Nexus Tech PK began with a simple idea: make digital products and smart solutions accessible to everyone. What started as a passion project grew into a platform trusted by thousands across Asia and beyond, offering resources to learn, grow and create.</p><p>Through digital solutions, tools and products, Nexus Tech PK helps make technology simple, accessible and effective. It’s a space where ideas turn into action and digital possibilities become reality.</p><blockquote className="nexus-mission">“{venture.mission}”</blockquote><div className="nexus-public-links" aria-label="Nexus Tech PK official links"><a href={venture.url} className="text-link" target="_blank" rel="noopener noreferrer">Visit nexustech.pk<Arrow diagonal /></a>{venture.socialProfiles.map(profile => <a key={profile.platform} href={profile.url} className="text-link" target="_blank" rel="noopener noreferrer" aria-label={`Nexus Tech PK on ${profile.platform}`}><span className={`social-logo social-logo-${profile.platform.toLowerCase()}`}><Image src={`/images/social/${profile.platform.toLowerCase()}.svg`} width={20} height={20} alt="" aria-hidden="true" /></span>{profile.platform}<Arrow diagonal /></a>)}</div><div className="nexus-links"><Link href="/about#journey" className="text-link">Read my founder journey<Arrow diagonal /></Link><Link href="/services" className="text-link">Brand &amp; startup services<Arrow diagonal /></Link></div></div>
    </div>
    <div className="wrap nexus-values" aria-label="Nexus Tech PK values">{venture.values.map((value, index) => <article key={value.title}><span className="nexus-value-number">0{index + 1} /</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div>
  </section>;
}
