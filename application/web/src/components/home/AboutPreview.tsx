import Image from 'next/image';
import {ArrowUpRight, Camera} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {aboutPreviewContent, type AboutPreviewContent} from '@/config/about-preview';

export default function AboutPreview({content = aboutPreviewContent}: {content?: AboutPreviewContent}) {
  const t = useTranslations('AboutPreview');
  const {image, action} = content;
  const crop = image?.crop;
  const paragraphs = content.paragraphs ?? content.paragraphKeys.map((key) => t(key));

  return (
    <section aria-labelledby="about-preview-title" className="@container px-4 py-12 sm:px-8 sm:py-16"
      style={{backgroundColor: 'var(--swd-surface)', color: 'var(--swd-foreground)'}}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 @[56rem]:grid-cols-2 @[56rem]:gap-12">
        <figure className="mx-auto w-full min-w-0 max-w-lg">
          <div className="relative aspect-square overflow-hidden border"
            style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)'}}>
            {image ? (
              <Image src={image.src} width={image.width} height={image.height} alt={image.altText ?? t(image.altKey)}
                sizes={crop
                  ? `(max-width: 767px) ${Math.ceil(image.width / crop.width * 100)}vw, ${Math.ceil(512 * image.width / crop.width)}px`
                  : '(max-width: 767px) 100vw, 512px'}
                className={crop ? 'absolute' : 'h-full w-full object-cover'}
                style={crop ? {width: `${image.width / crop.width * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-sm">
                <Camera size={32} strokeWidth={1.25} aria-hidden="true" />{t('photoPending')}
              </div>
            )}
          </div>
          {image && <figcaption className="mt-3 text-xs leading-5">{image.caption ?? t(image.captionKey)}</figcaption>}
        </figure>

        <div className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{color: 'var(--swd-primary)'}}>{t('eyebrow')}</p>
          <h2 id="about-preview-title" className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{content.title ?? t(content.titleKey)}</h2>
          <div className="mt-5 max-w-lg space-y-4 text-base leading-7">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <Link href={action.href}
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold transition-[opacity,transform] hover:opacity-80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)] motion-reduce:transform-none"
            style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
            {t(action.labelKey)}<ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
