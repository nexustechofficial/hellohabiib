import Image from 'next/image';
import { siteIdentity } from '@/data/site';

// Display the original brand marks from the owner-supplied screenshots.
// SVG viewBoxes isolate each mark without changing the source image files.
const marks = {
  subecta: { src: '/images/projects/subecta-homepage.png', width: 1656, height: 942, viewBox: '79 14 35 35' },
  merctra: { src: '/images/projects/merctra-homepage.png', width: 1507, height: 868, viewBox: '45 15 45 45' },
  'elite-jobs-hub': { src: '/images/projects/elite-jobs-hub-homepage.png', width: 1785, height: 971, viewBox: '81 6 49 49' },
};

export function MilestoneLogo({ brand }: { brand: 'nexus' | keyof typeof marks }) {
  if (brand === 'nexus') return <Image className="milestone-logo" src={siteIdentity.featuredVenture.icon.src} width={52} height={52} alt="" aria-hidden="true" />;
  const mark = marks[brand];
  return <svg className="milestone-logo" viewBox={mark.viewBox} width="44" height="44" aria-hidden="true" focusable="false"><image href={mark.src} width={mark.width} height={mark.height} /></svg>;
}
