import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from '@/components/icons';
import { Motion } from '@/components/motion';
import { ProjectGallery } from '@/components/project-gallery';
import { projects } from '@/data/content';
import { startupDeliverables, startupProcess, startupFaq } from '@/data/startup';
import { siteIdentity } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Brand & Startup Services', 'Build your business with Habibullah: brand identity, website development and launch preparation, from idea to deployment.', '/services');
const inquiry = '/contact?service=brand-startup-launch';

export default function Services() {
  return <>
    <Motion />
    <section className="startup-hero wrap" aria-labelledby="startup-heading">
      <span className="eyebrow"><span />HABIBULLAH / BRAND & STARTUP SERVICES</span>
      <h1 id="startup-heading">Do You Want to Be<br />an <em>Entrepreneur?</em></h1>
      <p>Branding, websites and launch essentials for your business.</p>
      <div className="startup-actions"><a href="#startup-services" className="button primary">Explore Services<Arrow /></a><Link href={inquiry} className="button secondary">Let’s Talk About Your Idea<Arrow diagonal /></Link></div>
    </section>
    <section className="startup-about" aria-labelledby="startup-about-heading"><div className="wrap startup-about-grid" data-reveal>
      <div className="startup-founder-image">{siteIdentity.portrait && <Image src={siteIdentity.portrait.src} alt="Habibullah, the person behind the brand and website work" width={siteIdentity.portrait.width} height={siteIdentity.portrait.height} sizes="(max-width: 700px) 100vw, 420px" />}<div className="founder-image-caption"><strong>Habibullah</strong><span>ENTREPRENEUR · DEVELOPER · DIGITAL BUILDER</span></div></div>
      <div className="startup-founder-copy"><span className="eyebrow"><span />I’VE BEEN AT THE STARTING LINE TOO</span><h2 id="startup-about-heading">From a community<br />to <em>Nexus Tech PK.</em></h2><p>I’m Habib Ullah, Founder &amp; CEO of Nexus Tech PK. My journey began with a WhatsApp community. I kept learning while working on it, and over time that community grew into Nexus Tech PK.</p><p>Today, my work includes my own products and projects for clients. I’ve taken Subecta, Merctra and Elite Jobs Hub from idea through branding, complete website development and deployment.</p><div className="startup-founder-tags"><span>Community-led beginnings</span><span>Branding + full-stack development</span><span>Idea → deployment</span></div><Link href="/about#journey" className="text-link">More About My Journey<Arrow diagonal /></Link></div>
    </div></section>
    <section id="startup-services" className="wrap section startup-offering" aria-labelledby="offering-heading" data-reveal>
      <div className="startup-section-heading"><span className="eyebrow"><span />THE PIECES THAT MAKE A BUSINESS</span><h2 id="offering-heading">A complete beginning.<br /><em>A connected brand.</em></h2></div>
      <div className="startup-deliverables">{startupDeliverables.map(item => <article key={item.icon} className="startup-service-card"><span className="service-card-number">{item.icon}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      <div className="startup-scope-link"><Link href="/services/brand-startup-launch" className="text-link">See the service scope<Arrow diagonal /></Link></div>
    </section>
    <section className="startup-process-section section" aria-labelledby="process-heading"><div className="wrap"><div className="startup-section-heading"><span className="eyebrow"><span />FROM THE FIRST CONVERSATION TO LAUNCH</span><h2 id="process-heading">Make the next step<br /><em>a clear one.</em></h2></div><ol className="startup-process">{startupProcess.map((step, index) => <li key={step.heading} data-reveal><span>0{index + 1}</span><h3>{step.heading}</h3><p>{step.body}</p></li>)}</ol></div></section>
    <section className="wrap section startup-work" aria-labelledby="startup-work-heading"><div className="section-heading"><div><span className="eyebrow"><span />THE WORK BEHIND THE WORDS</span><h2 id="startup-work-heading">Ideas I’ve helped<br />make <em>real.</em></h2></div><Link href="/projects" className="text-link">All Projects<Arrow diagonal /></Link></div><ProjectGallery items={projects} /></section>
    <section className="wrap startup-faq-section section" aria-labelledby="faq-heading"><div><span className="eyebrow"><span />BEFORE WE BEGIN</span><h2 id="faq-heading">A few things<br />you might <em>ask.</em></h2><Link href={inquiry} className="text-link">Tell me about your idea<Arrow diagonal /></Link></div><div className="startup-faq">{startupFaq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>
    <section className="startup-final"><div className="wrap"><span className="eyebrow"><span />A BUSINESS STARTS WITH A FIRST STEP</span><h2>Ready to build<br /><em>your business?</em></h2><Link href={inquiry} className="button primary">Start Your Project<Arrow diagonal /></Link></div></section>
  </>;
}
