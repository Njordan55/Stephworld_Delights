import {useTranslations} from 'next-intl';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import type {CatalogProduct} from '@/config/products';
import ProductImageGallery from './ProductImageGallery';

export default function ProductDetails({product}: {product: CatalogProduct}) {
  const t = useTranslations('ProductDetails');
  const content = useTranslations('FeaturedProducts');
  const categories = useTranslations('Categories');
  const images = [...(product.image ? [product.image] : []), ...(product.additionalImages ?? [])];
  const detailedDescription = product.detailedDescription ?? (product.detailedDescriptionKey ? content(product.detailedDescriptionKey) : undefined);
  const customization = product.customization ?? (product.customizationKey ? content(product.customizationKey) : undefined);
  return (
    <main className="min-h-screen px-4 pb-12 sm:px-8 sm:pb-16" style={{paddingTop: 'calc(var(--swd-navigation-height) + 2rem)', backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <div className="@container mx-auto max-w-6xl">
        <Link href={{pathname: '/products', query: {category: product.categorySlug}}} className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]">
          <ArrowLeft size={18} aria-hidden="true" />{t('back')}
        </Link>
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 @[48rem]:grid-cols-2">
          <ProductImageGallery key={product.id} photos={images.map((image) => ({image, alt: image.altText ?? content(image.altKey)}))} />
          <div className="min-w-0">
            <p className="text-sm font-semibold" style={{color: 'var(--swd-primary)'}}>{categories(product.categoryKey)}</p>
            <h1 className="mt-3 text-3xl font-bold [overflow-wrap:anywhere] sm:text-4xl">{product.name ?? content(product.nameKey)}</h1>
            <p className="mt-5 leading-7">{product.description ?? content(product.descriptionKey)}</p>
            {detailedDescription && <section aria-labelledby="product-description-title" className="mt-8">
              <h2 id="product-description-title" className="text-xl font-semibold">{t('description')}</h2>
              <p className="mt-3 whitespace-pre-line leading-7">{detailedDescription}</p>
            </section>}
            {customization && <section aria-labelledby="product-customization-title" className="mt-8">
              <h2 id="product-customization-title" className="text-xl font-semibold">{t('customization')}</h2>
              <p className="mt-3 whitespace-pre-line leading-7">{customization}</p>
            </section>}
            <Link href={{pathname: '/contact', query: {product: product.slug}}}
              className="mt-8 inline-flex min-h-11 max-w-full items-center gap-2 rounded-[var(--swd-radius-default)] px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
              style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
              {t('inquiry')}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-sm leading-6">{t('inquiryNote')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
