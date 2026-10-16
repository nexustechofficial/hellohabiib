"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Arrow, Mark } from './icons';
const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/services', 'Services'], ['/journal', 'Journal'], ['/contact', 'Contact']];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (event.key === 'Tab') {
        const items = [toggle.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
        const first = items[0]; const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', keydown); };
  }, [open]);
  return <header className="site-header"><div className="nav-shell wrap"><Link href="/" className="wordmark" aria-label="Habibullah home" onClick={() => setOpen(false)}><Mark />Habibullah<span className="brand-dot">.</span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href || (href !== '/' && path.startsWith(href + '/')) ? 'page' : undefined}>{label}</Link>)}</nav><Link href="/contact" className="nav-cta">Let’s Talk <Arrow diagonal /></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /></button></div><div ref={menu} id="mobile-menu" className="mobile-menu" hidden={!open}><nav aria-label="Mobile navigation">{links.map(([href, label], index) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}<Arrow diagonal /></Link>)}</nav><p>IDEAS INTO REAL EXPERIENCES.</p></div><noscript><nav className="no-js-nav wrap" aria-label="Navigation without JavaScript">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav></noscript></header>;
}
