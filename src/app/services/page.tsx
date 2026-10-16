import Link from 'next/link';
import { ContactCta, EmptyCollection, PageIntro } from '@/components/layout';
import { Arrow } from '@/components/icons';
import { services } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Services','Explore ways to collaborate with Habibullah on your next idea.','/services',services.length>0);
export default function Services(){return <><PageIntro label="POSSIBILITIES START WITH A CONVERSATION" title="From idea" accent="to what’s next." description="Bring the idea. Let’s find a clear direction and the right way to build it."/><section className="wrap collection-section">{services.length?<div className="service-list">{services.map((service,i)=><Link href={`/services/${service.slug}`} key={service.slug}><span>0{i+1}</span><div><h2>{service.title}</h2><p>{service.summary}</p></div><Arrow diagonal/></Link>)}</div>:<EmptyCollection type="services"/>}</section><ContactCta/></>}
