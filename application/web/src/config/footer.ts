import type messages from '../../messages/en.json';

type FooterLinkLabel = keyof typeof messages.Footer.links;
type FooterGroupHeading = keyof typeof messages.Footer.headings;

type FooterLink = {
  label: FooterLinkLabel;
  // Set a real public route when the page is ready; null renders an unavailable label.
  href: string | null;
  visible?: boolean;
};

type FooterGroup = {
  heading: FooterGroupHeading;
  links: readonly FooterLink[];
};

export const footerContent = {
  businessName: 'Stephworld Delights',
  logoSrc: '/images/logo/logo.jpeg',
  // Edit localized descriptions in messages/{en,fr,de}.json under Footer.
  descriptionKey: 'description',
  groups: [
    {heading: 'explore', links: [
      {label: 'home', href: '/home'},
      {label: 'products', href: '/products'},
      {label: 'abouts', href: '/abouts'}
    ]},
    {heading: 'service', links: [
      {label: 'contact', href: '/contact'},
      {label: 'customOrders', href: '/contact'},
      {label: 'faq', href: null, visible: false}
    ]},
    {heading: 'legal', links: [
      {label: 'imprint', href: null},
      {label: 'privacy', href: null},
      {label: 'terms', href: null, visible: false}
    ]}
  ] satisfies readonly FooterGroup[]
} as const;

// Supply approved HTTPS profile/contact URLs here. Empty values are never rendered as links.
export const footerSocialLinks: {label: 'instagram' | 'tiktok' | 'whatsapp'; url: string | null}[] = [
  {label: 'instagram', url: null},
  {label: 'tiktok', url: null},
  {label: 'whatsapp', url: null}
];

export function getConfiguredSocialLinks() {
  return footerSocialLinks.filter((link): link is typeof link & {url: string} => {
    if (!link.url) return false;
    try {
      const url = new URL(link.url);
      return url.protocol === 'https:' && !url.username && !url.password;
    } catch {
      return false;
    }
  });
}
