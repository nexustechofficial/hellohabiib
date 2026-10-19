import { SocialSection } from '@/components/social-section';
import { NexusSection } from '@/components/nexus-section';
import { FounderServices } from '@/components/founder-services';
import Link from 'next/link';
import { Arrow } from '@/components/icons';
import { ContactCta, EmptyCollection } from '@/components/layout';
import { Motion } from '@/components/motion';
import { HeroPortrait } from '@/components/hero-portrait';
import { Intro } from '@/components/intro';
import { siteIdentity } from '@/data/site';
import { projects, services } from '@/data/content';
import { JsonLd, personSchema, organizationSchema, pageMetadata } from '@/lib/seo';
import { ProjectGallery } from '@/components/project-gallery';

export const metadata = { ...pageMetadata('Home', siteIdentity.bio, '/'), title: { absolute: 'Habib Ullah | Entrepreneur, Developer & Brand Builder' } };

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JsonLd({ data: { '@context': 'https://schema.org', '@graph': [personSchema(), organizationSchema(), { '@type': 'WebSite', '@id': `${siteIdentity.canonicalOrigin}/#website`, url: siteIdentity.canonicalOrigin, name: 'Habibullah', publisher: { '@id': `${siteIdentity.canonicalOrigin}/#person` } }] } }) }} />
    <Motion />
    <section className="hero hero-cinematic wrap">
      <Intro />
      <div className="hero-copy">
        <h1 className="hero-name">Habibullah <span>/ FOUNDER &amp; BUILDER</span></h1>
        <p className="creative-headline"><span className="hero-line"><span>I BUILD</span></span>{' '}<span className="hero-line"><span>WHAT YOU</span></span>{' '}<span className="hero-line"><em>IMAGINE.</em></span></p>
        <p className="hero-description">I’m Habib Ullah, Founder &amp; CEO of Nexus Tech PK.<br />I turn ideas into brands, websites and digital products.</p>
        <div className="hero-actions"><Link className="button primary" href="/projects">Explore My Work<Arrow /></Link><Link className="button secondary" href="/about">About Me<Arrow diagonal /></Link></div>
      </div>
      <div className="hero-art portrait-art"><HeroPortrait /></div>
      <div className="hero-baseline"><span>ENTREPRENEUR · DEVELOPER · BRAND BUILDER</span><a href="#selected-work">SCROLL TO EXPLORE<Arrow /></a></div>
    </section>
    <nav className="discipline-strip home-chapter-strip" aria-label="Explore the portfolio"><div className="wrap"><a href="#selected-work"><span>01 /</span> THE WORK<Arrow diagonal /></a><i /><a href="#nexus-tech-pk"><span>02 /</span> THE STORY<Arrow diagonal /></a><i /><a href="#start-a-business"><span>03 /</span> YOUR NEXT CHAPTER<Arrow diagonal /></a></div></nav>
    <section id="selected-work" className="work-section section wrap" aria-labelledby="selected-work-heading">
      <div className="section-heading" data-reveal><div><span className="eyebrow"><span />01 / A FEW IDEAS MADE REAL</span><h2 id="selected-work-heading">The work<br /><em>speaks first.</em></h2></div><Link className="text-link" href="/projects">Explore projects<Arrow diagonal /></Link></div>
      <div data-reveal>{projects.length ? <ProjectGallery items={projects.slice(0, 4)} /> : <EmptyCollection type="projects" />}</div>
    </section>
    <div className="home-founder-story" data-reveal><NexusSection /></div>
    {services.length > 0 && <FounderServices />}
    <SocialSection />
    <ContactCta />
  </>;
}
