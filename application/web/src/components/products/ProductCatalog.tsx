import {useTranslations} from 'next-intl';
import {ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {homeCategories} from '@/config/categories';
import {catalogProducts, selectCatalogProducts, type CatalogProduct} from '@/config/products';
import ProductCard from './ProductCard';

export default function ProductCatalog({products = catalogProducts, categorySlug, invalidCategory = false}: {
  products?: readonly CatalogProduct[];
  categorySlug?: string;
  invalidCategory?: boolean;
}) {
  const t = useTranslations('Products');
  const categories = useTranslations('Categories');
  const visibleProducts = selectCatalogProducts(products, categorySlug);
  const availableCategories = homeCategories.filter((category) => products.some((product) => product.categorySlug === category.slug));
  const filterClass = 'inline-flex min-h-11 max-w-full items-center rounded-[var(--swd-radius-default)] border px-4 py-2 text-sm font-semibold transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]';
  const filterStyle = (active: boolean) => ({
    backgroundColor: active ? 'var(--swd-primary)' : 'var(--swd-background)',
    color: active ? 'var(--swd-background)' : 'var(--swd-foreground)',
    borderColor: 'var(--swd-border)', transitionDuration: 'var(--swd-quick-transition-duration)'
  });

  return (
    <main className="min-h-screen px-4 pb-12 sm:px-8 sm:pb-16"
      style={{paddingTop: 'calc(var(--swd-navigation-height) + 3rem)', backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <div className="@container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 max-w-2xl leading-7">{t('description')}</p>
        <nav aria-label={t('filterLabel')} className="mt-8 flex flex-wrap gap-3">
          <Link href="/products" scroll={false} aria-current={!categorySlug ? 'page' : undefined}
            className={filterClass} style={filterStyle(!categorySlug)}>{t('allProducts')}</Link>
          {availableCategories.map((category) => (
            <Link key={category.slug} href={{pathname: '/products', query: {category: category.slug}}} scroll={false}
              aria-current={categorySlug === category.slug ? 'page' : undefined}
              className={filterClass} style={filterStyle(categorySlug === category.slug)}>{categories(category.labelKey)}</Link>
          ))}
        </nav>
        {invalidCategory && <p className="mt-4 text-sm leading-6">{t('unknownCategory')}</p>}
        <p className="mt-6 text-sm" role="status">{t('resultCount', {count: visibleProducts.length})}</p>
        {visibleProducts.length ? (
          <div className="mt-5 grid grid-cols-1 gap-5 @[24rem]:grid-cols-2 @[54rem]:grid-cols-3">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <section aria-labelledby="catalog-empty-title" className="mt-5 rounded-[var(--swd-radius-default)] border p-6" style={{borderColor: 'var(--swd-border)', backgroundColor: 'var(--swd-surface)'}}>
            <h2 id="catalog-empty-title" className="text-xl font-semibold">{t('emptyTitle')}</h2>
            <p className="mt-3 leading-7">{t('emptyDescription')}</p>
            <Link href="/products" className="mt-4 inline-flex min-h-11 items-center font-semibold underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]">{t('allProducts')}</Link>
          </section>
        )}
        <section aria-labelledby="catalog-inquiry-title" className="mt-12 rounded-[var(--swd-radius-default)] border p-6" style={{borderColor: 'var(--swd-border)', backgroundColor: 'var(--swd-surface)'}}>
          <h2 id="catalog-inquiry-title" className="text-xl font-semibold">{t('inquiryTitle')}</h2>
          <p className="mt-3 max-w-2xl leading-7">{t('inquiryDescription')}</p>
          <Link href={categorySlug ? {pathname: '/contact', query: {category: categorySlug}} : '/contact'} className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2 rounded-[var(--swd-radius-default)] px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
            style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
            {t('contact')}<ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
