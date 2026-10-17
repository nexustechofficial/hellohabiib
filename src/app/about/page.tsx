import { SocialSection } from '@/components/social-section';
import { NexusSection } from '@/components/nexus-section';
import Image from 'next/image';
import Link from 'next/link';
import { ContactCta, PageIntro } from '@/components/layout';
import { Arrow, Mark } from '@/components/icons';
import { Motion } from '@/components/motion';
import { siteIdentity } from '@/data/site';
import { personalStory } from '@/data/profile';
import { JsonLd, pageMetadata, personSchema, organizationSchema } from '@/lib/seo';

export const metadata = pageMetadata('About Habib Ullah — Founder & CEO of Nexus Tech PK', siteIdentity.bio, '/about');

export default function About() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JsonLd({ data: { '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${siteIdentity.canonicalOrigin}/about#profile`, mainEntity: personSchema(), about: organizationSchema() } }) }}/>
    <Motion />
    <PageIntro label="THE PERSON / THE BEGINNING / THE JOURNEY" title="About Habibullah" accent="Built, step by step." description={siteIdentity.bio} />
    <section className="wrap about-layout about-detailed" aria-labelledby="story-heading">
      <div className="about-portrait-column"><div className="portrait-panel">{siteIdentity.portrait ? <Image src={siteIdentity.portrait.src} alt="Portrait of Habibullah" width={siteIdentity.portrait.width} height={siteIdentity.portrait.height} /> : <Mark />}</div><p className="portrait-story-caption">HABIBULLAH / ENTREPRENEUR & DIGITAL BUILDER</p></div>
      <div className="about-story"><span className="eyebrow"><span />MY STORY, IN MY OWN WORDS</span><h2 id="story-heading">A small beginning.<br />An evolving <em>story.</em></h2>{personalStory.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="fact-row"><span>STARTED WITH</span><strong>A WhatsApp community</strong></div><div className="fact-row"><span>FOUNDER &amp; CEO OF</span><strong>Nexus Tech PK</strong></div><div className="fact-row"><span>MY WORK</span><strong>My own projects & client projects</strong></div><a className="text-link" href="#journey">Follow the journey<Arrow /></a></div>
    </section>
    <NexusSection/>
    <section id="journey" className="wrap section personal-journey" aria-labelledby="journey-heading"><div className="section-heading"><div><span className="eyebrow"><span />THE JOURNEY / ONE STEP AT A TIME</span><h2 id="journey-heading">From a community<br />to a <em>brand.</em></h2></div><p className="journey-introduction">No overnight transformation.<br />Learning, working, and moving forward.</p></div><ol className="story-timeline">{personalStory.chapters.map(chapter => <li key={chapter.number} data-reveal><div className="timeline-marker" aria-hidden="true"><span>{chapter.number}</span></div><article className="timeline-chapter"><span className="eyebrow">{chapter.label}</span><h3>{chapter.title}</h3><p>{chapter.body}</p><div className="chapter-takeaway"><Arrow diagonal /><span>{chapter.takeaway}</span></div></article></li>)}</ol></section>
    <section className="about-lessons section" aria-labelledby="lessons-heading"><div className="wrap"><div className="section-heading"><div><span className="eyebrow"><span />WHAT I TAKE INTO THE NEXT BUILD</span><h2 id="lessons-heading">The mindset<br />behind the <em>work.</em></h2></div></div><div className="pillar-grid">{personalStory.approach.map((item, index) => <article className="pillar" key={item.title}><span className="eyebrow">0{index + 1} /</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section>
    <section className="wrap section about-next" aria-labelledby="next-heading"><div><span className="eyebrow"><span />THE STORY CONTINUES IN THE WORK</span><h2 id="next-heading">Ideas of my own.<br />Projects for <em>others.</em></h2></div><div><p>My own projects and work for clients are part of this journey too. This portfolio brings the stories together as each project is ready to share.</p><div className="about-next-links"><Link href="/projects" className="text-link">Explore my work<Arrow diagonal /></Link><Link href="/contact" className="text-link">Start a conversation<Arrow diagonal /></Link></div></div></section>
    <SocialSection /><ContactCta />
  </>;
}
