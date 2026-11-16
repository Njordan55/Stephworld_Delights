import {useTranslations} from 'next-intl';
import {ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {aboutContent, type AboutContent, type AboutText} from '@/config/about';
import {catalogProducts} from '@/config/products';
import {footerContent} from '@/config/footer';
import ProductCard from '@/components/products/ProductCard';
import AboutPhotograph from './AboutPhotograph';

export default function AboutPageContent({content = aboutContent}: {content?: AboutContent}) {
  const t = useTranslations('About');
  const navigation = useTranslations('Navigation');
  const text = (value: AboutText) => value.text ?? t(value.key);
  const selectedProducts = content.creations.productIds.flatMap((id) => {
    const product = catalogProducts.find((item) => item.id === id);
    // About showcases real business creations, including when configured by a future service.
    return product?.image && !product.image.isExample && !product.image.isAiGenerated ? [product] : [];
  });
  const sectionClass = '@container px-4 py-12 sm:px-8 sm:py-16';
  const actionClass = 'inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-[var(--swd-radius-default)] px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]';
  const actionStyle = {backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', transitionDuration: 'var(--swd-quick-transition-duration)'};
  return (
    <main style={{paddingTop: 'var(--swd-navigation-height)', backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <section aria-labelledby="about-title" className={sectionClass}>
        <div className="mx-auto grid max-w-6xl items-center gap-8 @[56rem]:grid-cols-2 @[56rem]:gap-12">
          <div className="min-w-0 max-w-xl">
            <h1 id="about-title" className="text-3xl font-bold leading-tight [overflow-wrap:anywhere] sm:text-4xl">{t('title', {businessName: footerContent.businessName})}</h1>
            <p className="mt-3 text-lg italic" style={{color: 'var(--swd-primary)'}}>{navigation('slogan')}</p>
            <p className="mt-5 leading-7">{text(content.introduction)}</p>
          </div>
          <AboutPhotograph image={content.brandImage} alt={content.brandImage ? text(content.brandImage.alt) : undefined}
            caption={content.brandImage?.caption ? text(content.brandImage.caption) : undefined} placeholder={t('brandPhotoPending')} eager />
        </div>
      </section>

      <section aria-labelledby="about-story-title" className={sectionClass} style={{backgroundColor: 'var(--swd-surface)'}}>
        <div className="mx-auto grid max-w-6xl items-center gap-8 @[56rem]:grid-cols-2 @[56rem]:gap-12">
          <AboutPhotograph image={content.story.image} alt={content.story.image ? text(content.story.image.alt) : undefined}
            caption={content.story.image?.caption ? text(content.story.image.caption) : undefined} placeholder={t('storyPhotoPending')} />
          <div className="min-w-0 max-w-xl">
            <h2 id="about-story-title" className="text-2xl font-semibold sm:text-3xl">{t('storyTitle')}</h2>
            {content.story.paragraphs.length ? <div className="mt-5 space-y-4 leading-7">{content.story.paragraphs.map((paragraph, index) => <p key={index}>{text(paragraph)}</p>)}</div> : <div className="mt-5 space-y-3 leading-7">
              <p className="text-sm font-semibold" style={{color: 'var(--swd-primary)'}}>{t('contentPending')}</p>
              <p>{t('storyPending')}</p>
            </div>}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-creations-title" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <h2 id="about-creations-title" className="text-2xl font-semibold sm:text-3xl">{t('creationsTitle')}</h2>
          <p className="mt-4 max-w-2xl leading-7">{text(content.creations.introduction)}</p>
          {selectedProducts.length > 0 && <div className="mt-8 grid grid-cols-1 gap-5 @[24rem]:grid-cols-2 @[54rem]:grid-cols-3">
            {selectedProducts.map((product) => <ProductCard key={product.id} product={product} idPrefix="about-creation" headingLevel={3} />)}
          </div>}
          <Link href="/products" className={`mt-7 ${actionClass}`} style={actionStyle}>{t('products')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section aria-labelledby="about-values-title" className={sectionClass} style={{backgroundColor: 'var(--swd-surface)'}}>
        <div className="mx-auto max-w-6xl">
          <h2 id="about-values-title" className="text-2xl font-semibold sm:text-3xl">{t('valuesTitle')}</h2>
          {content.values.length ? <ul role="list" className="mt-8 grid grid-cols-1 gap-5 @[24rem]:grid-cols-2 @[54rem]:grid-cols-3">
            {content.values.map((value) => <li key={value.id} className="min-w-0 rounded-[var(--swd-radius-default)] border p-6" style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)'}}>
              <h3 className="text-lg font-semibold [overflow-wrap:anywhere]">{text(value.title)}</h3><p className="mt-3 leading-7">{text(value.description)}</p>
            </li>)}
          </ul> : <div className="mt-5 max-w-2xl space-y-3 leading-7"><p className="text-sm font-semibold" style={{color: 'var(--swd-primary)'}}>{t('contentPending')}</p><p>{t('valuesPending')}</p></div>}
        </div>
      </section>

      <section aria-labelledby="about-contact-title" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <h2 id="about-contact-title" className="text-2xl font-semibold sm:text-3xl">{t('contactTitle')}</h2>
          <p className="mt-4 max-w-2xl leading-7">{text(content.contact)}</p>
          <Link href="/contact" className={`mt-7 ${actionClass}`} style={actionStyle}>{t('contact')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
