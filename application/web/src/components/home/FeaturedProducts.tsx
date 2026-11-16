import Image from 'next/image';
import {ArrowUpRight, Camera} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {featuredProducts, type FeaturedProduct} from '@/config/featured-products';

export default function FeaturedProducts({products = featuredProducts}: {products?: readonly FeaturedProduct[]}) {
  const t = useTranslations('FeaturedProducts');
  const categories = useTranslations('Categories');
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
          {products.map((product) => {
            const {image} = product;
            const crop = image?.crop;
            return (
              <article key={product.id} aria-labelledby={`featured-${product.id}-title`}
                className="flex min-w-0 flex-col overflow-hidden border"
                style={{borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)', backgroundColor: 'var(--swd-surface)'}}>
                <div className="relative aspect-square overflow-hidden">
                  {image ? (
                    <Image src={image.src} width={image.width} height={image.height} alt={image.altText ?? t(image.altKey)}
                      sizes={crop
                        ? `(max-width: 767px) ${Math.ceil(image.width / crop.width * 100)}vw, (max-width: 1023px) ${Math.ceil(image.width / crop.width * 50)}vw, ${Math.ceil(image.width / crop.width * 34)}vw`
                        : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw'}
                      className={crop ? 'absolute' : 'h-full w-full object-cover'}
                      style={crop ? {width: `${image.width / crop.width * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-sm">
                      <Camera size={32} strokeWidth={1.25} aria-hidden="true" />{t('photoPending')}
                    </div>
                  )}
                  {image?.isExample && <span className="absolute bottom-3 left-3 right-3 border px-3 py-2 text-xs"
                    style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)'}}>{t('exampleImage')}</span>}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{color: 'var(--swd-primary)'}}>{categories(product.categoryKey)}</p>
                  <h3 id={`featured-${product.id}-title`} className="mt-2 text-xl font-semibold [overflow-wrap:anywhere]">{product.name ?? t(product.nameKey)}</h3>
                  <p className="mt-3 text-sm leading-6">{product.description ?? t(product.descriptionKey)}</p>
                  {product.detailsHref && <Link href={product.detailsHref}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold underline-offset-4 transition-colors hover:text-[var(--swd-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
                    style={{transitionDuration: 'var(--swd-quick-transition-duration)'}}>
                    {t('viewDetails')}<ArrowUpRight size={16} aria-hidden="true" />
                  </Link>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
