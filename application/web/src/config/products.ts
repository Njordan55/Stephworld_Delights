import type {StaticImageData} from 'next/image';
import type messages from '../../messages/en.json';
import businessFlyer from '../../public/branding/flyer.jpeg';
import cupcakePhotograph from '../../public/images/categories/screenshot_insta.png';

import celebrationExample from '../../public/images/products/ai_celebration_cakes01.jpeg';
import cupcakesExample from '../../public/images/products/ai_cupcakes01.jpeg';
import customExample from '../../public/images/products/ai_custom_creations01.jpeg';
import weddingExample from '../../public/images/products/ai_wedding_cakes.jpeg';

type FeaturedTextKey = keyof typeof messages.FeaturedProducts;
type CategoryKey = 'cakes' | 'cupcakes' | 'customOrders';
export type ProductPresentation = {
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
    isAiGenerated?: boolean;
  } | null;
  // Set only after an actual published product-detail route exists.
  detailsHref?: string;
};

export type CatalogProduct = ProductPresentation & {
  slug: string;
  categorySlug: 'cakes' | 'cupcakes' | 'custom-orders';
  featured: boolean;
  displayOrder: number;
  // Reserved data only: never infer or display missing commercial information.
  price?: {amountMinor: number; currency: string};
  availability?: 'available' | 'unavailable' | 'on-request';
};

export function selectCatalogProducts(products: readonly CatalogProduct[], categorySlug?: string) {
  return products.filter((product) => !categorySlug || product.categorySlug === categorySlug)
    .sort((a, b) => a.displayOrder - b.displayOrder || a.id.localeCompare(b.id));
}

// Descriptive portfolio labels, not official product names, prices, or availability.
// A future content service can supply this contract with uploaded media and localized text.
export const catalogProducts: readonly CatalogProduct[] = [
  {
    id: 'red-rose-cake', slug: 'red-rose-cake', categorySlug: 'cakes', featured: true, displayOrder: 1, nameKey: 'roseCakeName', descriptionKey: 'roseCakeDescription', categoryKey: 'cakes',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'roseCakeAlt', crop: {x: 700, y: 760, width: 400, height: 400}}
  },
  {
    id: 'cupcake-assortment', slug: 'cupcake-assortment', categorySlug: 'cupcakes', featured: true, displayOrder: 2, nameKey: 'cupcakesName', descriptionKey: 'cupcakesDescription', categoryKey: 'cupcakes',
    image: {src: cupcakePhotograph, width: cupcakePhotograph.width, height: cupcakePhotograph.height,
      altKey: 'cupcakesAlt'}
  },
  {
    id: 'personalised-pink-cake', slug: 'personalised-pink-cake', categorySlug: 'custom-orders', featured: true, displayOrder: 3, nameKey: 'pinkCakeName', descriptionKey: 'pinkCakeDescription', categoryKey: 'customOrders',
    image: {src: businessFlyer, width: businessFlyer.width, height: businessFlyer.height,
      altKey: 'pinkCakeAlt', crop: {x: 570, y: 1180, width: 370, height: 370}}
  },
  // User-authorized presentation samples; not completed business creations.
  {
    id: 'celebration-example', slug: 'celebration-example', categorySlug: 'cakes', categoryKey: 'cakes',
    featured: false, displayOrder: 4, nameKey: 'celebrationExampleName', descriptionKey: 'celebrationExampleDescription',
    image: {src: celebrationExample, width: celebrationExample.width, height: celebrationExample.height,
      altKey: 'celebrationExampleAlt', isExample: true, isAiGenerated: true}
  },
  {
    id: 'pastel-cupcakes-example', slug: 'pastel-cupcakes-example', categorySlug: 'cupcakes', categoryKey: 'cupcakes',
    featured: false, displayOrder: 5, nameKey: 'pastelExampleName', descriptionKey: 'pastelExampleDescription',
    image: {src: cupcakesExample, width: cupcakesExample.width, height: cupcakesExample.height,
      altKey: 'pastelExampleAlt', isExample: true, isAiGenerated: true}
  },
  {
    id: 'themed-cake-example', slug: 'themed-cake-example', categorySlug: 'custom-orders', categoryKey: 'customOrders',
    featured: false, displayOrder: 6, nameKey: 'themedExampleName', descriptionKey: 'themedExampleDescription',
    image: {src: customExample, width: customExample.width, height: customExample.height,
      altKey: 'themedExampleAlt', isExample: true, isAiGenerated: true}
  },
  {
    id: 'wedding-cake-example', slug: 'wedding-cake-example', categorySlug: 'cakes', categoryKey: 'cakes',
    featured: false, displayOrder: 7, nameKey: 'weddingExampleName', descriptionKey: 'weddingExampleDescription',
    image: {src: weddingExample, width: weddingExample.width, height: weddingExample.height,
      altKey: 'weddingExampleAlt', isExample: true, isAiGenerated: true}
  }
];
