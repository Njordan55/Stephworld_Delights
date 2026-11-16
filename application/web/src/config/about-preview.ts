import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import businessFlyer from '../../public/branding/flyer.jpeg';

type AboutPreviewTextKey = keyof typeof messages.AboutPreview;
export type AboutPreviewContent = {
  titleKey: AboutPreviewTextKey;
  paragraphKeys: readonly AboutPreviewTextKey[];
  title?: string;
  paragraphs?: readonly string[];
  image: {
    src: StaticImageData | string;
    width: number;
    height: number;
    altKey: AboutPreviewTextKey;
    altText?: string;
    captionKey: AboutPreviewTextKey;
    caption?: string;
    crop?: {x: number; y: number; width: number; height: number};
  } | null;
  action: {href: string; labelKey: AboutPreviewTextKey};
};

// Copy is translated in AboutPreview messages. A future content service can supply
// this contract with published, locale-resolved copy and uploaded photo metadata.
export const aboutPreviewContent: AboutPreviewContent = {
  titleKey: 'title',
  paragraphKeys: ['introduction', 'invitation'],
  image: {
    src: businessFlyer,
    width: businessFlyer.width,
    height: businessFlyer.height,
    altKey: 'photoAlt',
    captionKey: 'photoCaption',
    crop: {x: 620, y: 360, width: 380, height: 380}
  },
  action: {href: '/abouts', labelKey: 'aboutUs'}
};
