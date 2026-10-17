import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies as projects } from '@/data/content';
import { ContactCta, PageIntro } from '@/components/layout';
import { JsonLd, breadcrumbSchema, pageMetadata } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(item => ({ slug: item.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=projects.find(p=>p.slug===slug);return item?pageMetadata(item.title,item.summary,`/projects/${slug}`):{};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=projects.find(p=>p.slug===slug);if(!item)notFound();
 const next=projects[(projects.indexOf(item)+1)%projects.length];
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JsonLd({data:breadcrumbSchema([{name:'Home',path:'/'},{name:'Projects',path:'/projects'},{name:item.title,path:`/projects/${slug}`}])})}}/><nav className="wrap breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{item.title}</span></nav><PageIntro label={[item.category, item.status].filter(Boolean).join(' / ')} title={item.title} description={item.summary}/><article className="wrap reading"><div className="case-meta">{item.role&&<div><span>CONTRIBUTION</span>{item.role}</div>}{item.year&&<div><span>YEAR</span>{item.year}</div>}{item.stack.length>0&&<div><span>TECHNOLOGY</span>{item.stack.join(' · ')}</div>}<div><span>AUTHOR</span>Habibullah</div></div>{item.cover&&<div className="case-cover"><Image src={item.cover} alt={`${item.title} project screenshot`} fill sizes="760px"/></div>}{item.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}{item.liveUrl&&<a className="text-link" href={item.liveUrl} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>}{item.repositoryUrl&&<a className="text-link" href={item.repositoryUrl} target="_blank" rel="noopener noreferrer">View repository ↗</a>}{projects.length>1&&next&&<p><Link className="text-link" href={`/projects/${next.slug}`}>Next project: {next.title} →</Link></p>}</article><ContactCta/></>;
}
