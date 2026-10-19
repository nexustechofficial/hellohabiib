import Image from 'next/image';
import Link from 'next/link';
import { siteIdentity } from '@/data/site';
import { Arrow } from '@/components/icons';

export function NexusSection() {
  const venture = siteIdentity.featuredVenture;
  const linkedIn = venture.socialProfiles.find(profile => profile.platform === 'LinkedIn');
  return <section id="nexus-tech-pk" className="nexus-section section" aria-labelledby="nexus-heading">
    <div className="wrap nexus-grid">
      <div className="nexus-brand nexus-brand-with-logo"><Image className="nexus-official-logo" src={venture.logo.src} alt="Nexus Tech PK official logo" width={venture.logo.width} height={venture.logo.height} sizes="(max-width: 700px) 100vw, (max-width: 960px) 40vw, 545px" /><div className="nexus-brand-caption"><span className="eyebrow"><span />THE BRAND I STARTED</span><span className="nexus-role">HABIB ULLAH / FOUNDER &amp; CEO</span></div></div>
      <div className="nexus-copy"><span className="eyebrow"><span />FOUNDED {venture.founded.toUpperCase()}</span><h2 id="nexus-heading">Habib Ullah.<br />Founder &amp; CEO of<br /><em>Nexus Tech PK.</em></h2><p>I’m <strong>Habibullah</strong>, the founder and owner of Nexus Tech PK. I started with a WhatsApp community and built it into the business I run today.</p><p>Founded in <strong>March 2024</strong>, Nexus Tech PK makes digital products and smart solutions accessible to everyone. What began as a passion project now serves users across <strong>Asia and beyond</strong>, with tools and resources to learn, grow and create.</p><div className="nexus-public-links" aria-label="Nexus Tech PK official links"><a href={venture.url} className="text-link" target="_blank" rel="noopener noreferrer"><Image className="nexus-site-icon" src={venture.logo.src} width={28} height={28} alt="" aria-hidden="true" />Visit nexustech.pk<Arrow diagonal /></a>{venture.socialProfiles.filter(profile => profile.platform !== 'LinkedIn').map(profile => <a key={profile.platform} href={profile.url} className="text-link" target="_blank" rel="noopener noreferrer" aria-label={`Nexus Tech PK on ${profile.platform}`}><span className={`social-logo social-logo-${profile.platform.toLowerCase()}`}><Image src={`/images/social/${profile.platform.toLowerCase()}.svg`} width={20} height={20} alt="" aria-hidden="true" /></span>{profile.platform}<Arrow diagonal /></a>)}</div><div className="nexus-links"><Link href="/about#journey" className="text-link">Read my founder journey<Arrow diagonal /></Link>{linkedIn && <a href={linkedIn.url} className="text-link" target="_blank" rel="noopener noreferrer" aria-label="Nexus Tech PK on LinkedIn"><span className="social-logo social-logo-linkedin"><Image src="/images/social/linkedin.svg" width={20} height={20} alt="" aria-hidden="true" /></span>LinkedIn<Arrow diagonal /></a>}</div></div>
    </div>
    <div className="wrap nexus-values" aria-label="Nexus Tech PK values">{venture.values.map((value, index) => <article key={value.title}><span className="nexus-value-number">0{index + 1} /</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div>
  </section>;
}
