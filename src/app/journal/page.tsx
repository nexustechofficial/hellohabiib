import Link from 'next/link';
import { EmptyCollection, PageIntro } from '@/components/layout';
import { articles } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Journal','Notes on building, exploring and turning ideas into real experiences.','/journal',articles.length>0);
export default function Journal(){return <><PageIntro label="THOUGHTS FROM THE PROCESS" title="Notes from" accent="the build." description="Ideas, observations and lessons. A journal for the thinking that happens between the work."/><section className="wrap collection-section">{articles.length?<div className="article-grid">{articles.map(article=><Link key={article.slug} href={`/journal/${article.slug}`} className="article-card"><time dateTime={article.date}>{article.date}</time><h2>{article.title}</h2><p>{article.description}</p><span className="text-link">Read article →</span></Link>)}</div>:<EmptyCollection type="journal"/>}</section></>}
