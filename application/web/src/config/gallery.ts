import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import businessFlyer from '../../public/branding/flyer.jpeg';
import cupcakePhotograph from '../../public/images/categories/screenshot_insta.png';

type GalleryTextKey = keyof typeof messages.Gallery;
export type GalleryItem = {
  id: string;
  order: number;
  showOnHomepage: boolean;
  image: {
    src: StaticImageData | string;
    width: number;
    height: number;
    crop?: {x: number; y: number; width: number; height: number};
  } | null;
  altKey: GalleryTextKey;
  altText?: string;
  titleKey?: GalleryTextKey;
  title?: string;
  descriptionKey?: GalleryTextKey;
  description?: string;
  categoryKey?: 'cakes' | 'cupcakes' | 'customOrders';
  isExample?: boolean;
};

// A future Admin content service can supply ordered, published records with
// uploaded image URLs/dimensions and text already resolved for the active locale.
export const galleryItems: readonly GalleryItem[] = [
  {id: 'rose-cake', order: 10, showOnHomepage: true, categoryKey: 'cakes',
    titleKey: 'roseTitle', descriptionKey: 'roseDescription', altKey: 'roseAlt',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      crop: {x: 700, y: 760, width: 400, height: 400}}},
  {id: 'cupcake-stand', order: 20, showOnHomepage: true, categoryKey: 'cupcakes',
    titleKey: 'cupcakesTitle', descriptionKey: 'cupcakesDescription', altKey: 'cupcakesAlt',
    image: {src: cupcakePhotograph, width: cupcakePhotograph.width, height: cupcakePhotograph.height}},
  {id: 'pink-cake', order: 30, showOnHomepage: true, categoryKey: 'customOrders',
    titleKey: 'pinkTitle', descriptionKey: 'pinkDescription', altKey: 'pinkAlt',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      crop: {x: 570, y: 1180, width: 370, height: 370}}},
  {id: 'pearl-cake', order: 40, showOnHomepage: true, categoryKey: 'cakes',
    titleKey: 'pearlTitle', descriptionKey: 'pearlDescription', altKey: 'pearlAlt',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      crop: {x: 620, y: 360, width: 380, height: 380}}}
];
