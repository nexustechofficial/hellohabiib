"use client";
import { useEffect } from 'react';
export function Motion() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
          gsap.fromTo(element, { y: 26 }, { y: 0, duration: .9, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
        });
      });
      cleanup = () => context.revert();
    }).catch(() => { /* Content stays fully visible without animation. */ });
    return () => { cancelled = true; cleanup?.(); };
  }, []);
  return null;
}
