import type { Metadata } from 'next';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/layout';
import { isIndexable, siteIdentity } from '@/data/site';
export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.canonicalOrigin),
  title: { default: 'Habibullah | Entrepreneur, Developer & Digital Builder', template: '%s | Habibullah' },
  description: siteIdentity.bio,
  robots: { index: isIndexable, follow: true },
  openGraph: { siteName: 'Habibullah', locale: 'en_US', type: 'website', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body id="top"><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main" tabIndex={-1}>{children}</main><Footer/></body></html>;
}
