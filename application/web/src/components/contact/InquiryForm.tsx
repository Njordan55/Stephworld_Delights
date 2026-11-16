'use client';

import {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {inquiryTypes, validateInquiry, type InquiryErrors, type InquiryField, type InquiryValues} from '@/lib/inquiry-validation';

export default function InquiryForm({category = '', inquiryType = '', productName, productSlug}: {
  category?: string; inquiryType?: string; productName?: string; productSlug?: string;
}) {
  const t = useTranslations('Contact');
  const categories = useTranslations('Categories');
  const [values, setValues] = useState<InquiryValues>({firstName: '', lastName: '', region: '', state: '', email: '', telephone: '', inquiryType, category, message: '', eventDate: ''});
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [checked, setChecked] = useState(false);
  const [ready, setReady] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {function enableFields() {setReady(true);} enableFields();}, []);
  const controlClass = 'mt-2 min-h-11 w-full min-w-0 rounded-[var(--swd-radius-default)] border px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)]';
  const controlStyle = {backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)', borderColor: 'var(--swd-primary)'};
  function update(field: InquiryField, value: string) {
    setValues((previous) => ({...previous, [field]: value, ...(field === 'inquiryType' && value !== 'custom-cake' ? {eventDate: ''} : {})}));
    setErrors((previous) => ({...previous, [field]: undefined, ...(field === 'inquiryType' ? {eventDate: undefined} : {})}));
    setChecked(false);
  }
  function checkDetails() {
    const next = validateInquiry(values);
    setErrors(next);setChecked(Object.keys(next).length === 0);
    if (Object.keys(next).length) requestAnimationFrame(() => form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
  }
  function validateField(field: InquiryField) {setErrors((previous) => ({...previous, [field]: validateInquiry(values)[field]}));}
  function attributes(field: InquiryField) {
    return {id: `inquiry-${field}`, name: field, value: values[field], 'aria-invalid': Boolean(errors[field]),
      'aria-describedby': [field === 'message' ? 'inquiry-message-help' : '', errors[field] ? `inquiry-${field}-error` : ''].filter(Boolean).join(' ') || undefined,
      onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(field, event.target.value), onBlur: () => validateField(field)};
  }
  const error = (field: InquiryField) => errors[field] && <p id={`inquiry-${field}-error`} className="mt-2 text-sm font-semibold">{t(`errors.${errors[field]}`)}</p>;
  return (
    <section aria-labelledby="inquiry-title" className="min-w-0 rounded-[var(--swd-radius-default)] border p-5 sm:p-6" style={{backgroundColor: 'var(--swd-surface)', borderColor: 'var(--swd-border)'}}>
      <h2 id="inquiry-title" className="text-2xl font-semibold">{t('formTitle')}</h2>
      <p id="inquiry-unavailable" className="mt-4 leading-7">{t('unavailable')}</p>
      {productName && <p className="mt-4 leading-7"><strong>{t('productReference')}: </strong>{productName}</p>}
      <form ref={form} noValidate aria-labelledby="inquiry-title" aria-describedby="inquiry-unavailable" onSubmit={(event) => {event.preventDefault();checkDetails();}}>
        {/* Disabled until hydration prevents accidental native submission without JS. */}
        <fieldset disabled={!ready} className="mt-6 min-w-0 space-y-5">
          <legend className="sr-only">{t('formTitle')}</legend>
          {productSlug && <input type="hidden" name="product" value={productSlug} />}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="min-w-0"><label htmlFor="inquiry-firstName" className="flex min-h-12 items-end font-semibold">{t('firstName')}</label><input {...attributes('firstName')} required autoComplete="given-name" maxLength={100} placeholder={t('firstNamePlaceholder')} className={controlClass} style={controlStyle} />{error('firstName')}</div>
            <div className="min-w-0"><label htmlFor="inquiry-lastName" className="flex min-h-12 items-end font-semibold">{t('lastName')}</label><input {...attributes('lastName')} required autoComplete="family-name" maxLength={100} placeholder={t('lastNamePlaceholder')} className={controlClass} style={controlStyle} />{error('lastName')}</div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="min-w-0"><label htmlFor="inquiry-region" className="flex min-h-12 items-end font-semibold">{t('region')}</label><input {...attributes('region')} autoComplete="address-level2" maxLength={100} placeholder={t('regionPlaceholder')} className={controlClass} style={controlStyle} />{error('region')}</div>
            <div className="min-w-0"><label htmlFor="inquiry-state" className="flex min-h-12 items-end font-semibold">{t('state')}</label><input {...attributes('state')} autoComplete="address-level1" maxLength={100} placeholder={t('statePlaceholder')} className={controlClass} style={controlStyle} />{error('state')}</div>
          </div>
          <div><label htmlFor="inquiry-email" className="font-semibold">{t('email')}</label><input {...attributes('email')} type="email" required autoComplete="email" maxLength={254} placeholder={t('emailPlaceholder')} className={controlClass} style={controlStyle} />{error('email')}</div>
          <div><label htmlFor="inquiry-telephone" className="font-semibold">{t('phoneOptional')}</label><input {...attributes('telephone')} type="tel" autoComplete="tel" maxLength={40} placeholder={t('phonePlaceholder')} className={controlClass} style={controlStyle} />{error('telephone')}</div>
          <div><label htmlFor="inquiry-inquiryType" className="font-semibold">{t('inquiryType')}</label><select {...attributes('inquiryType')} required className={controlClass} style={controlStyle}><option value="">{t('selectType')}</option>{inquiryTypes.map((type) => <option key={type} value={type}>{t(`types.${type}`)}</option>)}</select>{error('inquiryType')}</div>
          <div><label htmlFor="inquiry-category" className="font-semibold">{t('categoryOptional')}</label><select {...attributes('category')} className={controlClass} style={controlStyle}><option value="">{t('selectCategory')}</option><option value="cakes">{categories('cakes')}</option><option value="cupcakes">{categories('cupcakes')}</option><option value="custom-orders">{categories('customOrders')}</option></select>{error('category')}</div>
          {values.inquiryType === 'custom-cake' && <div><label htmlFor="inquiry-eventDate" className="font-semibold">{t('eventDateOptional')}</label><input {...attributes('eventDate')} type="date" className={controlClass} style={controlStyle} /><p className="mt-2 text-sm leading-6">{t('dateNote')}</p>{error('eventDate')}</div>}
          <div><label htmlFor="inquiry-message" className="font-semibold">{t('message')}</label><textarea {...attributes('message')} required minLength={20} maxLength={2000} rows={6} placeholder={t('messagePlaceholder')} className={controlClass} style={controlStyle} /><p id="inquiry-message-help" className="mt-2 text-sm leading-6">{t('messageHelp')}</p>{error('message')}</div>
          {Object.values(errors).some(Boolean) && <p role="alert" className="text-sm font-semibold">{t('reviewErrors')}</p>}
          {checked && <p role="status" className="text-sm leading-6">{t('checked')}</p>}
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={checkDetails} className="min-h-11 rounded-[var(--swd-radius-default)] px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]" style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>{t('checkDetails')}</button>
            <button type="submit" disabled aria-describedby="inquiry-unavailable" className="min-h-11 cursor-not-allowed rounded-[var(--swd-radius-default)] border px-5 py-3 text-sm" style={{borderColor: 'var(--swd-border)'}}>{t('sendUnavailable')}</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
