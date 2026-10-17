"use client";
import { useEffect, useRef } from 'react';
import { Mark } from './icons';

export function Intro() {
  const overlay = useRef<HTMLDivElement>(null);
  const replay = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = overlay.current;
    const button = replay.current;
    if (!element || !button) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let closed = false;
    let hideTimer: ReturnType<typeof setTimeout>;
    let finishTimer: ReturnType<typeof setTimeout>;
    let fallbackTimer: ReturnType<typeof setTimeout>;
    let running = false;
    function play() {
      if (!element || preference.matches || running || closed) return;
      running = true;
      clearTimeout(hideTimer); clearTimeout(finishTimer);
      element.hidden = false;
      element.classList.remove('is-leaving');
      delete document.documentElement.dataset.heroStage;
      // Restart the reveal on replay, without blocking keyboard or scroll.
      void element.offsetHeight;
      document.documentElement.dataset.heroStage = 'entering';
      hideTimer = setTimeout(() => element.classList.add('is-leaving'), 800);
      finishTimer = setTimeout(() => {
        element.hidden = true;
        delete document.documentElement.dataset.heroStage;
        running = false;
      }, 2400);
    }
    const skip = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') {
        clearTimeout(hideTimer); clearTimeout(finishTimer);
        element.hidden = true;
        delete document.documentElement.dataset.heroStage;
        running = false;
      }
    };
    button.hidden = preference.matches;
    const cancelForPreference = () => { button.hidden = preference.matches; if (preference.matches) skip(new KeyboardEvent('keydown', { key: 'Escape' })); };
    button.addEventListener('click', play);
    document.addEventListener('keydown', skip);
    preference.addEventListener('change', cancelForPreference);
    // Run once per tab. Refreshing or returning to Home never forces a long intro.
    let seen = false;
    try { seen = sessionStorage.getItem('habibullah-intro') === 'seen'; sessionStorage.setItem('habibullah-intro', 'seen'); } catch { /* Private browsing still works. */ }
    if (!seen && !preference.matches) {
      play();
      // Absolute failsafe if a tab sleeps while the effect is mounted.
      fallbackTimer = setTimeout(() => { element.hidden = true; }, 3000);
    }
    return () => {
      closed = true;
      clearTimeout(hideTimer); clearTimeout(finishTimer); clearTimeout(fallbackTimer);
      button.removeEventListener('click', play); document.removeEventListener('keydown', skip); preference.removeEventListener('change', cancelForPreference);
      delete document.documentElement.dataset.heroStage;
    };
  }, []);
  return <><div ref={overlay} className="intro-overlay" hidden aria-hidden="true"><div className="intro-grid"/><span className="intro-corner">HABIBULLAH / PERSONAL PORTFOLIO</span><div className="intro-center"><Mark/><span className="intro-name">Habibullah<span>.</span></span><div className="intro-track"><span/></div><span className="intro-caption">IMAGINATION → EXECUTION</span></div><span className="intro-bottom">A NEW PERSPECTIVE IS TAKING SHAPE.</span></div><button ref={replay} className="replay-intro" hidden type="button" aria-label="Replay intro animation"><span aria-hidden="true">↺</span> REPLAY INTRO</button></>;
}
