import {prepareLocale} from '@/i18n/server';
import {getTranslations} from 'next-intl/server';
import {findCatalogProduct} from '@/config/products';
import {findProductCategory} from '@/config/categories';
import {contactInformation, contactPlaceholders, getContactMethods} from '@/config/contact';
import InquiryForm from '@/components/contact/InquiryForm';

export default async function ContactPage({params, searchParams}: {
  params: Promise<{locale: string}>;
  searchParams: Promise<{product?: string | string[]; category?: string | string[]}>;
}) {
  const locale = await prepareLocale(params);
  const t = await getTranslations('Contact');
  const products = await getTranslations('FeaturedProducts');
  const query = await searchParams;
  const product = typeof query.product === 'string' ? findCatalogProduct(query.product) : undefined;
  const category = product?.categorySlug ?? findProductCategory(typeof query.category === 'string' ? query.category : undefined)?.slug;
  const inquiryType = product ? 'product-information' : category === 'custom-orders' ? 'custom-cake' : category ? 'product-information' : '';
  const methods = getContactMethods();
  return (
    <main className="min-h-screen px-4 pb-12 sm:px-8 sm:pb-16" style={{paddingTop: 'calc(var(--swd-navigation-height) + 3rem)', backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <div className="@container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold sm:text-4xl">{t('title')}</h1><p className="mt-4 max-w-2xl leading-7">{t('description')}</p>
        <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-8 @[48rem]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <section aria-labelledby="contact-details-title" className="min-w-0">
            <h2 id="contact-details-title" className="text-2xl font-semibold">{t('detailsTitle')}</h2>
            {methods.length ? <ul className="mt-5 space-y-4">{methods.map((method) => <li key={method.label}>
              <a href={method.href} className="inline-flex min-h-11 max-w-full flex-col justify-center rounded-[var(--swd-radius-default)] text-base underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)] [overflow-wrap:anywhere]"><span className="font-semibold">{t(method.label)}</span>{method.value && <span>{method.value}</span>}</a>
            </li>)}</ul> : <p className="mt-4 leading-7">{t('noMethods')}</p>}
            {!methods.some((method) => method.label === 'telephone') && <div className="mt-6"><h3 className="font-semibold">{t('telephone')}</h3><p className="mt-2">{contactPlaceholders.telephone}</p></div>}
            {<div className="mt-6"><h3 className="font-semibold">{t('location')}</h3><p className="mt-2 whitespace-pre-line leading-7">{contactInformation.location?.trim() || contactPlaceholders.location}</p></div>}
            <p className="mt-6 text-sm leading-6">{t('inquiryNote')}</p>
            {query.product !== undefined && !product && <p role="status" className="mt-5 text-sm leading-6">{t('unknownProduct')}</p>}
            {query.category !== undefined && !category && <p role="status" className="mt-5 text-sm leading-6">{t('unknownCategory')}</p>}
          </section>
          <InquiryForm key={`${locale}:${product?.slug ?? ''}:${category ?? ''}`} category={category} inquiryType={inquiryType}
            productName={product ? product.name ?? products(product.nameKey) : undefined} productSlug={product?.slug} />
        </div>
      </div>
    </main>
  );
}
