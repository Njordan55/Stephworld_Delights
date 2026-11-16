import Image from 'next/image';
import {ArrowUpRight, Camera} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {homeCategories, type CategoryDefinition} from '@/config/categories';

export default function CategorySection({categories = homeCategories}: {categories?: readonly CategoryDefinition[]}) {
  const t = useTranslations('Categories');
  return (
    <section aria-labelledby="categories-title" className="px-4 py-12 sm:px-8"
      style={{backgroundColor: 'var(--swd-surface)', color: 'var(--swd-foreground)'}}>
      <div className="mx-auto max-w-6xl">
        <h2 id="categories-title" className="text-2xl font-bold sm:text-3xl">{t('title')}</h2>
        <p className="mt-2">{t('description')}</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const {image} = category;
            const crop = image?.crop;
            return (
              <Link key={category.slug}
                href={{pathname: '/products', query: {category: category.slug}}}
                aria-labelledby={`category-${category.slug}-title`}
                aria-describedby={`category-${category.slug}-description`}
                className="group min-w-0 overflow-hidden border transition-[transform,box-shadow] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)] motion-reduce:transform-none"
                style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
                <div className="relative aspect-square overflow-hidden" style={{backgroundColor: 'var(--swd-surface)'}}>
                  {image ? (
                    <Image src={image.src} width={image.width} height={image.height} alt={image.altText ?? t(image.altKey)}
                      sizes={crop
                        ? `(max-width: 767px) ${Math.ceil(image.width / crop.width * 100)}vw, (max-width: 1023px) ${Math.ceil(image.width / crop.width * 50)}vw, ${Math.ceil(image.width / crop.width * 34)}vw`
                        : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw'}
                      className={crop ? 'absolute' : 'h-full w-full object-cover'}
                      style={crop ? {width: `${image.width / crop.width * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <Camera size={32} strokeWidth={1.25} aria-hidden="true" />
                      <p className="text-sm">{t('photoPending')}</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 id={`category-${category.slug}-title`} className="min-w-0 text-xl font-semibold [overflow-wrap:anywhere]">{t(category.labelKey)}</h3>
                    <ArrowUpRight size={20} className="mt-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true"
                      style={{color: 'var(--swd-primary)', transitionDuration: 'var(--swd-quick-transition-duration)'}} />
                  </div>
                  <p id={`category-${category.slug}-description`} className="mt-2 text-sm leading-6">{t(category.descriptionKey)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
