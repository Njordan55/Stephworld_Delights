import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import businessFlyer from '../../public/branding/flyer.jpeg';
import cupcakePhotograph from '../../public/images/categories/screenshot_insta.png';

type CategoryTextKey = keyof typeof messages.Categories;
export type CategoryImage = {
  src: StaticImageData | string;
  width: number;
  height: number;
  altKey: CategoryTextKey;
  altText?: string;
  crop?: {x: number; y: number; width: number; height: number};
};
export type CategoryDefinition = {
  slug: string;
  labelKey: CategoryTextKey;
  descriptionKey: CategoryTextKey;
  image: CategoryImage | null;
};

// A future content service can supply these records using uploaded image URLs.
// Slugs are stable category identifiers; labels and alt text are localized separately.
export const homeCategories: readonly CategoryDefinition[] = [
  {
    slug: 'cakes', labelKey: 'cakes', descriptionKey: 'cakesDescription',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'cakesAlt', crop: {x: 700, y: 760, width: 400, height: 400}}
  },
  {
    slug: 'cupcakes', labelKey: 'cupcakes', descriptionKey: 'cupcakesDescription',
    image: {src: cupcakePhotograph, width: cupcakePhotograph.width, height: cupcakePhotograph.height, altKey: 'cupcakesAlt'}
  },
  {
    slug: 'custom-orders', labelKey: 'customOrders', descriptionKey: 'customOrdersDescription',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'customOrdersAlt', crop: {x: 570, y: 1180, width: 370, height: 370}}
  }
];

export function findProductCategory(slug: string | undefined) {
  return homeCategories.find((category) => category.slug === slug);
}
