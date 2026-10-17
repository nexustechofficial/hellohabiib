"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/content';
import { Arrow } from './icons';

export function ProjectGallery({ items }: { items: Project[] }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...(items.some(item => item.relationship === 'Personal project') ? ['Personal projects'] : []), ...(items.some(item => item.relationship === 'Client work') ? ['Client work'] : [])];
  const matches = (item: Project) => filter === 'All' || (filter === 'Personal projects' ? item.relationship === 'Personal project' : item.relationship === 'Client work');
  const visible = items.filter(matches);
  return <>
    <div className="filters" role="group" aria-label="Filter projects">{filters.map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div>
    <p className="sr-only" aria-live="polite">{visible.length} projects</p>
    <div className="project-grid">{visible.map(item => {
      const contents = <><div className={`project-cover ${item.cover ? '' : `editorial-cover cover-${item.slug}`}`}>
        {item.cover ? <Image src={item.cover} alt={`${item.title} project overview`} fill sizes="(max-width: 700px) 100vw, 50vw" /> : <div className="project-wordmark"><span className="cover-eyebrow">{item.relationship || item.category}</span><strong>{item.title}<em>.</em></strong><span className="cover-domain">{item.liveUrl ? new URL(item.liveUrl).hostname : item.category}</span></div>}
        {item.status && <span className="project-status">{item.status}</span>}<span className="project-open"><Arrow diagonal /></span>
      </div><div className="project-card-meta"><h3>{item.title}</h3><span>{item.relationship || item.category}</span></div><p>{item.summary}</p>{item.role&&<span className="project-role">{item.role}</span>}<span className="project-destination">{item.caseStudyPublished ? 'Explore the case study' : 'Visit website'}<Arrow diagonal />{!item.caseStudyPublished && <span className="sr-only"> (opens in a new tab)</span>}</span></>;
      return item.caseStudyPublished ? <Link className="project-card" href={`/projects/${item.slug}`} key={item.slug}>{contents}</Link> : item.liveUrl ? <a className="project-card" key={item.slug} href={item.liveUrl} target="_blank" rel="noopener noreferrer">{contents}</a> : null;
    })}</div>
  </>;
}
