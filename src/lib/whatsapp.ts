import { siteIdentity } from '@/data/site';

export const whatsappMessages = {
  header: 'Hi Habib! I visited hellohabiib.com and would like to discuss a business idea or project with you.',
  floating: 'Hi Habib! I found your portfolio at hellohabiib.com and would like to know more about your services.',
  contact: 'Hi Habib! I’m contacting you through your portfolio’s Contact page. I’d like to discuss a project.',
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteIdentity.contact?.whatsapp}?text=${encodeURIComponent(message)}`;
}
