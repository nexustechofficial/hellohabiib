"use client";
import { useLinkStatus } from 'next/link';
export function NavigationLoading() {
  const { pending } = useLinkStatus();
  return <span aria-hidden="true" className={`nav-loading ${pending ? 'is-pending' : ''}`}><span/></span>;
}
