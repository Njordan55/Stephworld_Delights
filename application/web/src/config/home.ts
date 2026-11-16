import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import heroCakeExample from '../../public/images/home/ai_cak_ex.jpg';

type HeroTextKey = keyof typeof messages.Hero;
export type HeroPhoto = {
  src: StaticImageData | string;
  width: number;
  height: number;
  altText?: string;
  caption?: string;
  altKey: HeroTextKey;
  captionKey: HeroTextKey;
  // Original-image pixels; omit crop when a standalone photograph is available.
  crop?: {x: number; y: number; width: number; height: number};
};

// Text lives in the Hero namespace in messages/{en,fr,de}.json.
// Replace this example with an approved business photograph; null shows a placeholder.
// A future server-side content service can return this same contract using an uploaded URL.
// altText/caption may supply text already resolved for the active locale by that service.
export type HeroContent = {
  image: HeroPhoto | null;
  primaryAction: {href: string; labelKey: HeroTextKey};
  secondaryAction: {href: string; labelKey: HeroTextKey};
};

export const heroContent: HeroContent = {
  image: {
    src: heroCakeExample,
    width: heroCakeExample.width,
    height: heroCakeExample.height,
    altKey: 'photoAlt',
    captionKey: 'photoCaption'
  },
  primaryAction: {href: '/products', labelKey: 'products'},
  secondaryAction: {href: '/contact', labelKey: 'contact'}
};
