"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { siteIdentity } from '@/data/site';

export function HeroPortrait() {
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = frame.current;
    if (!element || matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(pointer: fine)').matches) return;
    let raf = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect();
        element.style.setProperty('--portrait-x', `${((event.clientX - box.left) / box.width - .5) * 6}px`);
        element.style.setProperty('--portrait-y', `${((event.clientY - box.top) / box.height - .5) * 5}px`);
      });
    };
    const leave = () => { cancelAnimationFrame(raf); element.style.setProperty('--portrait-x', '0px'); element.style.setProperty('--portrait-y', '0px'); };
    element.addEventListener('pointermove', move); element.addEventListener('pointerleave', leave);
    return () => { cancelAnimationFrame(raf); element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', leave); };
  }, []);
  if (!siteIdentity.portrait) return null;
  return <div ref={frame} className="hero-portrait"><div className="portrait-ambient" aria-hidden="true"/><div className="portrait-outline" aria-hidden="true"/><div className="portrait-photo"><Image src={siteIdentity.portrait.src} alt="Portrait of Habibullah" fill sizes="(max-width: 540px) 100vw, (max-width: 960px) 60vw, 55vw" preload quality={85}/></div><span className="portrait-edge-label" aria-hidden="true">A BUILDER. A THINKER. A WORK IN PROGRESS.</span><span className="portrait-cross" aria-hidden="true">+</span><div className="portrait-signature"><span>Habibullah</span><small>THE PERSON BEHIND THE IDEAS</small></div><div className="portrait-number" aria-hidden="true">01 / H</div></div>;
}
