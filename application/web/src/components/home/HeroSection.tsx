import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {heroContent, type HeroContent} from '@/config/home';

const actionClassName = 'inline-flex min-h-11 items-center justify-center px-6 py-3 text-center text-sm font-semibold transition-[background-color,opacity,transform] hover:opacity-80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]';

export default function HeroSection({content = heroContent}: {content?: HeroContent}) {
  const t = useTranslations('Hero');
  const {image, primaryAction, secondaryAction} = content;
  const crop = image?.crop;

  return (
    <section aria-labelledby="home-hero-title"
      className="@container px-4 pb-12 sm:px-8 sm:pb-16 lg:pb-20"
      style={{
        paddingTop: 'calc(var(--swd-navigation-height) + clamp(2.5rem, 5vw, 4rem))',
        backgroundColor: 'var(--swd-background)',
        color: 'var(--swd-foreground)'
      }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 @[56rem]:grid-cols-[1.05fr_1fr] @[56rem]:gap-12">
        <div className="min-w-0">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{color: 'var(--swd-primary)'}}>
            {t('welcome')}
          </p>
          <h1 id="home-hero-title" className="max-w-[18ch] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl @[64rem]:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 sm:text-lg sm:leading-8">{t('description')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryAction.href} className={actionClassName}
              style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
              {t(primaryAction.labelKey)}
            </Link>
            <Link href={secondaryAction.href} className={`${actionClassName} border`}
              style={{backgroundColor: 'var(--swd-surface)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
              {t(secondaryAction.labelKey)}
            </Link>
          </div>
        </div>

        <figure className="mx-auto w-full min-w-0 max-w-lg">
          <div className="relative overflow-hidden border"
            style={{
              aspectRatio: crop ? `${crop.width} / ${crop.height}` : '1 / 1',
              backgroundColor: 'var(--swd-surface)',
              borderColor: 'var(--swd-border)',
              borderRadius: 'var(--swd-radius-default)'
            }}>
            {image ? (
              <Image src={image.src} width={image.width} height={image.height} alt={image.altText ?? t(image.altKey)} preload
                sizes={crop ? '(max-width: 767px) 283vw, 1500px' : '(max-width: 767px) 100vw, 512px'}
                className={crop ? 'absolute' : 'h-full w-full object-cover'}
                style={crop ? {
                  // Crop an existing photograph without altering the source asset.
                  width: `${image.width / crop.width * 100}%`,
                  maxWidth: 'none',
                  height: 'auto',
                  left: `${-crop.x / crop.width * 100}%`,
                  top: `${-crop.y / crop.height * 100}%`
                } : undefined}
              />
            ) : <p className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm">{t('imagePlaceholder')}</p>}
          </div>
          {image && <figcaption className="mt-3 text-xs leading-5">{image.caption ?? t(image.captionKey)}</figcaption>}
        </figure>
      </div>
    </section>
  );
}
