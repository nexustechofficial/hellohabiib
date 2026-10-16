import type { CSSProperties } from 'react';
export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={diagonal ? { rotate: '-45deg' } as CSSProperties : undefined}><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Mark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M6 5h7v12h10V5h7v26h-7V20H13v11H6z" fill="currentColor"/><path d="M14 18.5h8" stroke="#ff481f" strokeWidth="2"/></svg>;
}
