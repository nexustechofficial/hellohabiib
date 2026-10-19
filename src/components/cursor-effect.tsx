'use client';
import { useEffect, useRef } from 'react';

export function CursorEffect() {
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = layer.current;
    if (!element) return;
    const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 769px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let enabled = false;
    let frame = 0;
    let x = 0; let y = 0; let targetX = 0; let targetY = 0;
    let positioned = false;
    const hide = () => {
      element.hidden = true;
      positioned = false;
      cancelAnimationFrame(frame); frame = 0;
      delete element.dataset.active;
      delete element.dataset.pressed;
    };
    const sync = () => { enabled = pointer.matches && !reducedMotion.matches; hide(); };
    const draw = () => {
      x += (targetX - x) * .24; y += (targetY - y) * .24;
      element.style.setProperty('--cursor-x', `${x}px`);
      element.style.setProperty('--cursor-y', `${y}px`);
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > .15) frame = requestAnimationFrame(draw);
      else frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (!enabled || event.pointerType === 'touch') return;
      targetX = event.clientX; targetY = event.clientY;
      if (!positioned) { x = targetX; y = targetY; positioned = true; }
      element.hidden = false;
      element.dataset.active = String(event.target instanceof Element && Boolean(event.target.closest('a,button,input,select,textarea,summary,[role="button"]')));
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const press = () => { if (enabled) element.dataset.pressed = 'true'; };
    const release = () => { delete element.dataset.pressed; };
    const exit = (event: PointerEvent) => { if (!event.relatedTarget) hide(); };
    const keyboard = () => hide();
    const visibility = () => { if (document.hidden) hide(); };
    sync();
    pointer.addEventListener('change', sync); reducedMotion.addEventListener('change', sync);
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerdown', press, { passive: true });
    document.addEventListener('pointerup', release, { passive: true });
    document.addEventListener('pointerout', exit, { passive: true });
    document.addEventListener('keydown', keyboard);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', hide);
    return () => {
      hide();
      pointer.removeEventListener('change', sync); reducedMotion.removeEventListener('change', sync);
      document.removeEventListener('pointermove', move); document.removeEventListener('pointerdown', press);
      document.removeEventListener('pointerup', release); document.removeEventListener('pointerout', exit);
      document.removeEventListener('keydown', keyboard); document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('blur', hide);
    };
  }, []);
  return <div ref={layer} className="cursor-effect" hidden aria-hidden="true"><div className="cursor-position"><span className="cursor-glow" /><span className="cursor-ring" /><span className="cursor-dot" /></div></div>;
}
