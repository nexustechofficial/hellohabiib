import Link from 'next/link';
import { Arrow } from '@/components/icons';

const offerings = [
  { number: '01', mark: 'Aa', title: 'Give the idea an identity.', body: 'A name, logo, colors and messaging that belong to your business.', detail: 'BRAND IDENTITY', href: '/services#startup-services' },
  { number: '02', mark: '</>', title: 'Build its place online.', body: 'A website or digital product designed around what your business needs.', detail: 'DESIGN & DEVELOPMENT', href: '/services/brand-startup-launch' },
  { number: '03', mark: 'launch', title: 'Bring it all together.', body: 'Social profiles, launch assets, deployment and a clear handover.', detail: 'LAUNCH ESSENTIALS', href: '/services/brand-startup-launch' },
];
const steps = [
  { title: 'Talk it through.', body: 'Your idea, your audience and where you are starting.' },
  { title: 'Agree the scope.', body: 'Deliverables, responsibilities, cost and timeline before we begin.' },
  { title: 'Design & build.', body: 'Brand and website work, with your feedback along the way.' },
  { title: 'Launch & hand over.', body: 'The agreed deployment, assets and guidance for what comes next.' },
];

export function FounderServices() {
  return <>
    <section id="start-a-business" className="founder-offering section" aria-labelledby="founder-offering-heading">
      <div className="wrap">
        <div className="section-heading" data-reveal><div><span className="eyebrow"><span />03 / WHEN IT’S YOUR TURN</span><h2 id="founder-offering-heading">Something of<br /><em>your own.</em></h2></div><p className="founder-section-note">Starting a business, or building on one?<br />Here’s where I can help.</p></div>
        <div className="founder-offering-grid">{offerings.map(item => <Link href={item.href} key={item.number} className="founder-offering-card" data-reveal><div className="founder-card-top"><span>{item.number} /</span><Arrow diagonal /></div><span className="founder-card-mark" aria-hidden="true">{item.mark === 'launch' ? <Arrow diagonal /> : item.mark}</span><span className="founder-card-detail">{item.detail}</span><h3>{item.title}</h3><p>{item.body}</p><span className="founder-card-link">Explore the service<Arrow diagonal /></span></Link>)}</div>
        <Link href="/services" className="text-link founder-all-services">Explore startup services<Arrow diagonal /></Link>
      </div>
    </section>
    <section className="founder-process section wrap" aria-labelledby="founder-process-heading">
      <div className="section-heading" data-reveal><div><span className="eyebrow"><span />04 / THE WAY WE’LL WORK</span><h2 id="founder-process-heading">One step.<br /><em>Then the next.</em></h2></div><p className="founder-section-note">You don’t need every answer on day one.<br />We start with a conversation.</p></div>
      <ol className="founder-step-list">{steps.map((step, index) => <li key={step.title} data-reveal><span className="founder-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
      <div className="founder-process-bottom"><span>Have something in mind?</span><Link href="/contact?service=brand-startup-launch" className="text-link">Let’s talk about it<Arrow diagonal /></Link></div>
    </section>
  </>;
}
