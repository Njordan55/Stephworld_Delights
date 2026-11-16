'use client';

import {useId, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Camera} from 'lucide-react';
import type {ProductPresentation} from '@/config/products';
import ProductImage from './ProductImage';

export type ProductPhoto = {image: NonNullable<ProductPresentation['image']>; alt: string};

export default function ProductImageGallery({photos}: {photos: readonly ProductPhoto[]}) {
  const [selected, setSelected] = useState(0);
  const t = useTranslations('ProductDetails');
  const shared = useTranslations('FeaturedProducts');
  const imageId = useId();
  const active = photos[selected] ?? photos[0];
  if (!active) return (
    <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-[var(--swd-radius-default)] border p-6 text-center" style={{borderColor: 'var(--swd-border)', backgroundColor: 'var(--swd-surface)'}}>
      <Camera size={36} aria-hidden="true" /><p>{shared('photoPending')}</p>
    </div>
  );

  return (
    <section aria-label={t('photos')} className="min-w-0">
      <div id={imageId} className="relative aspect-square overflow-hidden rounded-[var(--swd-radius-default)] border" style={{borderColor: 'var(--swd-border)', backgroundColor: 'var(--swd-surface)'}}>
        <ProductImage image={active.image} alt={active.alt} enlarged />
      </div>
      {active.image.isExample && <p className="mt-3 text-sm leading-6">{shared(active.image.isAiGenerated ? 'aiExampleImage' : 'exampleImage')}</p>}
      {photos.length > 1 && <>
        <p role="status" className="mt-3 text-sm">{t('imagePosition', {current: selected + 1, total: photos.length})}</p>
        <div role="group" aria-label={t('selectPhoto')} className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {photos.map((photo, index) => (
            <button key={index} type="button" aria-label={t('showPhoto', {current: index + 1})} aria-pressed={selected === index}
              aria-controls={imageId} onClick={() => setSelected(index)}
              className="relative aspect-square min-h-11 min-w-11 overflow-hidden rounded-[var(--swd-radius-default)] border-2 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
              style={{borderColor: selected === index ? 'var(--swd-primary)' : 'var(--swd-border)', backgroundColor: 'var(--swd-surface)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
              <ProductImage image={photo.image} alt="" />
            </button>
          ))}
        </div>
      </>}
    </section>
  );
}
