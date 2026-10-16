import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/content';
import { siteIdentity } from '@/data/site';
import { PageIntro } from '@/components/layout';
import { JsonLd, breadcrumbSchema, pageMetadata } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(item => ({ slug: item.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=articles.find(p=>p.slug===slug);return item?pageMetadata(item.title,item.description,`/journal/${slug}`):{};}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=articles.find(p=>p.slug===slug);if(!item)notFound();return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JsonLd({data:{'@context':'https://schema.org','@graph':[{'@type':'BlogPosting',headline:item.title,description:item.description,datePublished:item.date,author:{'@type':'Person','@id':`${siteIdentity.canonicalOrigin}/#person`,name:'Habibullah'},mainEntityOfPage:`${siteIdentity.canonicalOrigin}/journal/${slug}`},breadcrumbSchema([{name:'Home',path:'/'},{name:'Journal',path:'/journal'},{name:item.title,path:`/journal/${slug}`}])]}})}}/><nav className="wrap breadcrumbs" aria-label="Breadcrumb"><Link href="/journal">Journal</Link><span>/</span><span>{item.title}</span></nav><PageIntro label={`${item.date} / BY HABIBULLAH`} title={item.title} description={item.description}/><article className="wrap reading">{item.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<Link className="text-link" href="/journal">← Back to journal</Link></article></>}
