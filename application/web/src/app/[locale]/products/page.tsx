import {prepareLocale} from '@/i18n/server';
import {findProductCategory} from '@/config/categories';
import ProductCatalog from '@/components/products/ProductCatalog';

export default async function ProductsPage({params, searchParams}: {
  params: Promise<{locale: string}>;
  searchParams: Promise<{category?: string | string[]}>;
}) {
  await prepareLocale(params);
  const {category: requestedCategory} = await searchParams;
  const category = findProductCategory(typeof requestedCategory === 'string' ? requestedCategory : undefined);
  return <ProductCatalog categorySlug={category?.slug} invalidCategory={requestedCategory !== undefined && !category} />;
}
