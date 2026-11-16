import Image from 'next/image';
import {ArrowUpRight, Camera} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import type {ProductPresentation} from '@/config/products';

export default function ProductCard({product, idPrefix = 'product', headingLevel = 2}: {
  product: ProductPresentation;
  idPrefix?: string;
  headingLevel?: 2 | 3;
}) {
  const t = useTranslations('FeaturedProducts');
  const categories = useTranslations('Categories');
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const {image} = product;
  const crop = image?.crop;
  return (
    <article aria-labelledby={`${idPrefix}-${product.id}-title`}
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
          style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)'}}>{t(image.isAiGenerated ? 'aiExampleImage' : 'exampleImage')}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{color: 'var(--swd-primary)'}}>{categories(product.categoryKey)}</p>
        <Heading id={`${idPrefix}-${product.id}-title`} className="mt-2 text-xl font-semibold [overflow-wrap:anywhere]">{product.name ?? t(product.nameKey)}</Heading>
        <p className="mt-3 text-sm leading-6">{product.description ?? t(product.descriptionKey)}</p>
        {product.detailsHref && <Link href={product.detailsHref}
          className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold underline-offset-4 transition-colors hover:text-[var(--swd-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
          style={{transitionDuration: 'var(--swd-quick-transition-duration)'}}>
          {t('viewDetails')}<ArrowUpRight size={16} aria-hidden="true" />
        </Link>}
      </div>
    </article>
  );
}
