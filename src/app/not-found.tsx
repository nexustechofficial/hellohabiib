import Link from 'next/link';
import { Arrow } from '@/components/icons';
export default function NotFound(){return <section className="wrap error-page"><span className="eyebrow"><span/>404 / A DIFFERENT DIRECTION</span><h1>This idea hasn’t<br/>taken <em>shape.</em></h1><p>The page you’re looking for isn’t here. Let’s get you back to something real.</p><Link className="button primary" href="/">Back to home<Arrow/></Link></section>}
