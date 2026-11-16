import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import businessFlyer from '../../public/branding/flyer.jpeg';
import cupcakePhotograph from '../../public/images/categories/screenshot_insta.png';

type FeaturedTextKey = keyof typeof messages.FeaturedProducts;
type CategoryKey = 'cakes' | 'cupcakes' | 'customOrders';
export type FeaturedProduct = {
  id: string;
  nameKey: FeaturedTextKey;
  descriptionKey: FeaturedTextKey;
  categoryKey: CategoryKey;
  name?: string;
  description?: string;
  image: {
    src: StaticImageData | string;
    width: number;
    height: number;
    altKey: FeaturedTextKey;
    altText?: string;
    crop?: {x: number; y: number; width: number; height: number};
    isExample?: boolean;
  } | null;
  // Set only after an actual published product-detail route exists.
  detailsHref?: string;
};

// Descriptive portfolio labels, not official product names, prices, or availability.
// A future content service can supply this contract with uploaded media and localized text.
export const featuredProducts: readonly FeaturedProduct[] = [
  {
    id: 'red-rose-cake', nameKey: 'roseCakeName', descriptionKey: 'roseCakeDescription', categoryKey: 'cakes',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'roseCakeAlt', crop: {x: 700, y: 760, width: 400, height: 400}}
  },
  {
    id: 'cupcake-assortment', nameKey: 'cupcakesName', descriptionKey: 'cupcakesDescription', categoryKey: 'cupcakes',
    image: {src: cupcakePhotograph, width: cupcakePhotograph.width, height: cupcakePhotograph.height,
      altKey: 'cupcakesAlt'}
  },
  {
    id: 'personalised-pink-cake', nameKey: 'pinkCakeName', descriptionKey: 'pinkCakeDescription', categoryKey: 'customOrders',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'pinkCakeAlt', crop: {x: 570, y: 1180, width: 370, height: 370}}
  }
];
