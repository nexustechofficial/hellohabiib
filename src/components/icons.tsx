import Image from 'next/image';
import type { CSSProperties } from 'react';
export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={diagonal ? { rotate: '-45deg' } as CSSProperties : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Mark({ className = '' }: { className?: string }) {
  return <Image className={`brand-avatar ${className}`} src="/images/habibullah-avatar.png" alt="" aria-hidden="true" width={48} height={48} sizes="(max-width: 700px) 40px, 76px" />;
}
