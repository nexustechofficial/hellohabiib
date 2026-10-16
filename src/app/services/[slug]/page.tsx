import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/content';
import { PageIntro } from '@/components/layout';
import { JsonLd, breadcrumbSchema, pageMetadata } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() { return services.map(item => ({ slug: item.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=services.find(p=>p.slug===slug);return item?pageMetadata(item.title,item.summary,`/services/${slug}`):{};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=services.find(p=>p.slug===slug);if(!item)notFound();return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JsonLd({data:breadcrumbSchema([{name:'Home',path:'/'},{name:'Services',path:'/services'},{name:item.title,path:`/services/${slug}`}])})}}/><nav className="wrap breadcrumbs" aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><span>{item.title}</span></nav><PageIntro label="A CONSIDERED COLLABORATION" title={item.title} description={item.summary}/><article className="wrap reading"><h2>Who this is for</h2><p>{item.audience}</p><h2>What we’ll make</h2><ul>{item.deliverables.map(d=><li key={d}>{d}</li>)}</ul><h2>The process</h2>{item.process.map(s=><section key={s.heading}><h3>{s.heading}</h3><p>{s.body}</p></section>)}{item.faq.length>0&&<><h2>Questions, answered.</h2>{item.faq.map(f=><section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}</>}<Link href={`/contact?service=${encodeURIComponent(item.slug)}`} className="button primary">Discuss this project →</Link></article></>}
