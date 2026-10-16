"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/content';
import { Arrow } from './icons';
export function ProjectGallery({items}: {items: Project[]}) {
  const [filter,setFilter]=useState('All');
  const categories=['All',...new Set(items.map(item=>item.category))];
  return <><div className="filters" role="group" aria-label="Filter projects">{categories.map(category=><button key={category} aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div><p className="sr-only" aria-live="polite">{items.filter(item=>filter==='All'||item.category===filter).length} projects</p><div className="project-grid">{items.filter(item=>filter==='All'||item.category===filter).map(item=><Link className="project-card" href={`/projects/${item.slug}`} key={item.slug}><div className="project-cover">{item.cover?<Image src={item.cover} alt={`${item.title} project overview`} fill sizes="(max-width: 700px) 100vw, 50vw"/>:<span className="abstract-cover">{item.title.slice(0,1)}</span>}<span className="project-status">{item.status}</span><span className="project-open"><Arrow diagonal/></span></div><div className="project-card-meta"><h2>{item.title}</h2><span>{item.category}{item.year?` / ${item.year}`:''}</span></div><p>{item.summary}</p></Link>)}</div></>;
}
