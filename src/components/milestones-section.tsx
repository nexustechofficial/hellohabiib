import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from '@/components/icons';
import { projects } from '@/data/content';
import { siteIdentity } from '@/data/site';

export function MilestonesSection() {
  const portrait = siteIdentity.portrait;
  const personal = projects.filter(project => project.relationship === 'Personal project');
  const clients = projects.filter(project => project.relationship === 'Client work');
  const highlights = [
    { value: '2024', label: 'Founded Nexus Tech PK' },
    { value: String(projects.length).padStart(2, '0'), label: 'Projects featured here' },
    { value: String(clients.length).padStart(2, '0'), label: 'Featured client projects' },
    { value: String(personal.length).padStart(2, '0'), label: 'Featured personal product' },
    { value: 'MERN', label: 'Full-stack development' },
    { value: 'CEO', label: 'Founder of Nexus Tech PK' },
  ];
  return <section id="milestones" className="milestones-section section" aria-labelledby="milestones-heading">
    <div className="wrap">
      <h2 id="milestones-heading">Who <em>am I</em></h2>
      <p className="milestones-intro">I’m Habibullah, Founder &amp; CEO of Nexus Tech PK. I build brands, websites and digital products—from idea to deployment.</p>
      <div className="milestones-layout">
        <div className="milestones-portrait">{portrait && <Image src={portrait.src} alt="Habibullah, Founder and CEO of Nexus Tech PK" width={portrait.width} height={portrait.height} sizes="(max-width: 800px) 100vw, 42vw" />}<div className="milestones-caption"><strong>Habib Ullah</strong><span>FOUNDER &amp; CEO · DIGITAL BUILDER</span></div></div>
        <div className="milestones-content">
          <dl className="milestone-stats">{highlights.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          <ol className="milestone-highlights">
            <li><span className="milestone-tag">MAR 2024</span><div><h3>Nexus Tech PK — the beginning</h3><p>Founded to make digital products and smart solutions accessible.</p></div></li>
            <li><span className="milestone-tag">MY PRODUCT</span><div><h3><Link href="/projects/subecta">Subecta<Arrow diagonal /></Link></h3><p>My subscription management platform, built from idea to deployment.</p></div></li>
            <li><span className="milestone-tag">CLIENT WORK</span><div><h3>Merctra &amp; Elite Jobs Hub</h3><p>Branding, complete website development and deployment.</p></div></li>
          </ol>
          <Link className="text-link" href="/about">More about me<Arrow diagonal /></Link>
        </div>
      </div>
    </div>
  </section>;
}
