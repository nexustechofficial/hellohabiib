import Image from 'next/image';
import { whatsappLink, whatsappMessages } from '@/lib/whatsapp';

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={whatsappLink(whatsappMessages.floating)} target="_blank" rel="noopener noreferrer" aria-label="Chat with Habib Ullah on WhatsApp"><Image src="/images/social/whatsapp.svg" width={30} height={30} alt="" aria-hidden="true" /><span>WhatsApp</span></a>;
}
