import {ArrowUpRight} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import ProductCard from '@/components/products/ProductCard';
import {featuredProducts, type FeaturedProduct} from '@/config/featured-products';

export default function FeaturedProducts({products = featuredProducts}: {products?: readonly FeaturedProduct[]}) {
  const t = useTranslations('FeaturedProducts');
  if (!products.length) return null;

  return (
    <section aria-labelledby="featured-products-title" className="px-4 py-12 sm:px-8 sm:py-16"
      style={{backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-xl">
            <h2 id="featured-products-title" className="text-2xl font-bold sm:text-3xl">{t('title')}</h2>
            <p className="mt-2 text-sm leading-6 sm:text-base">{t('description')}</p>
          </div>
          <Link href="/products" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]">
            {t('exploreAll')}<ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} idPrefix="featured" headingLevel={3} />
          ))}
        </div>
      </div>
    </section>
  );
}
