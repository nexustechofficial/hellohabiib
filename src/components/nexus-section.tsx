import Link from 'next/link';
import { Arrow } from '@/components/icons';

export function NexusSection() {
  return <section id="nexus-tech-pk" className="nexus-section section" aria-labelledby="nexus-heading">
    <div className="wrap nexus-grid">
      <div className="nexus-brand"><span className="eyebrow"><span />THE BRAND I STARTED</span><p>NEXUS<br />TECH <em>PK.</em></p><span className="nexus-role">HABIB ULLAH / FOUNDER &amp; CEO</span></div>
      <div className="nexus-copy"><span className="eyebrow"><span />COMMUNITY ROOTS. A BUILDER’S MINDSET.</span><h2 id="nexus-heading">Habib Ullah.<br />Founder &amp; CEO of<br /><em>Nexus Tech PK.</em></h2><p>I’m Habibullah, also known as Habib Ullah. Nexus Tech PK is the brand I founded, and I lead it as CEO. It began with a WhatsApp community and grew as I kept learning, working and building.</p><p>That experience shapes the way I approach every project: start with an idea, understand what it needs, and bring the brand and the technology together. Today, my work spans branding, websites and digital products, from the first concept through deployment.</p><div className="nexus-links"><Link href="/about#journey" className="text-link">Read my founder journey<Arrow diagonal /></Link><Link href="/services" className="text-link">Brand &amp; startup services<Arrow diagonal /></Link></div></div>
    </div>
  </section>;
}
