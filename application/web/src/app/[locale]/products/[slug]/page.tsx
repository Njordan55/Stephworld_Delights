import {notFound} from 'next/navigation';
import {prepareLocale} from '@/i18n/server';
import {catalogProducts, findCatalogProduct} from '@/config/products';
import ProductDetails from '@/components/products/ProductDetails';

export function generateStaticParams() {
  return catalogProducts.map((product) => ({slug: product.slug}));
}

export default async function ProductDetailsPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  await prepareLocale(params);
  const {slug} = await params;
  const product = findCatalogProduct(slug);
  if (!product) notFound();
  return <ProductDetails product={product} />;
}
