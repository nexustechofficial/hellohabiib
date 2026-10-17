import Image from 'next/image';
import { Arrow } from '@/components/icons';
import { siteIdentity } from '@/data/site';

const profileCopy: Record<string, { icon: string; description: string }> = {
  Instagram: { icon: 'instagram', description: 'Follow me on Instagram.' },
  LinkedIn: { icon: 'linkedin', description: 'Connect with me on LinkedIn.' },
  Facebook: { icon: 'facebook', description: 'Find me on Facebook.' },
};

export function SocialSection() {
  return <section className="social-section section" aria-labelledby="social-heading">
    <div className="wrap">
      <div className="section-heading"><div><span className="eyebrow"><span />FIND ME ONLINE / @HELLOHABIIB</span><h2 id="social-heading">Let’s stay<br /><em>connected.</em></h2></div><p className="social-introduction">Connect with Habib Ullah.<br />Founder &amp; CEO of Nexus Tech PK.</p></div>
      <div className="social-profile-grid">{siteIdentity.verifiedSocialProfiles.map(profile => <a className="social-profile-card" href={profile.url} key={profile.platform} target="_blank" rel="noopener noreferrer"><div className="social-card-top"><span className={`social-logo social-logo-${profileCopy[profile.platform].icon}`}><Image src={`/images/social/${profileCopy[profile.platform].icon}.svg`} width={32} height={32} alt="" aria-hidden="true" /></span><Arrow diagonal /></div><h3>{profile.platform}</h3><span className="social-handle">@hellohabiib</span><p>{profileCopy[profile.platform].description}</p><span className="social-card-action">Visit profile<Arrow diagonal /></span></a>)}</div>
    </div>
  </section>;
}
