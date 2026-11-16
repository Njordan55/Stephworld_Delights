import {getConfiguredSocialLinks} from './footer';
import {emailPattern} from '@/lib/inquiry-validation';

export type ContactInformation = {email: string | null; telephone: string | null; location: string | null};
// Contact details are withheld at the owner's request. No submission service exists yet.
// Email and social channels stay unset until supplied; do not infer WhatsApp from a phone number.
export const contactInformation: ContactInformation = {email: null, telephone: null, location: null};
export const contactPlaceholders = {telephone: '+49 xxx xxxxxx', location: 'xxxxxx'};
export type ContactMethod = {label: 'email' | 'telephone' | 'instagram' | 'tiktok' | 'whatsapp'; href: string; value?: string};

export function getContactMethods(information = contactInformation, socialLinks = getConfiguredSocialLinks()): ContactMethod[] {
  const methods: ContactMethod[] = [];
  const email = information.email?.trim();
  if (email && emailPattern.test(email) && !/[\r\n]/.test(email)) methods.push({label: 'email', value: email, href: `mailto:${encodeURIComponent(email)}`});
  const telephone = information.telephone?.trim();
  if (telephone && /^\+?[\d ()\-./]{5,40}$/.test(telephone) && telephone.replace(/\D/g, '').length >= 5) methods.push({label: 'telephone', value: telephone, href: `tel:${telephone.replace(/[^\d+]/g, '')}`});
  for (const link of socialLinks) {
    try {
      const url = new URL(link.url);
      if (url.protocol === 'https:' && !url.username && !url.password) methods.push({label: link.label, href: url.href});
    } catch { /* Unconfigured or invalid methods stay hidden. */ }
  }
  return methods;
}
