"use client";

import Image from 'next/image';
import {ArrowLeft, ArrowRight, ArrowUpRight, Camera, Expand, X} from 'lucide-react';
import {useEffect, useId, useRef, useState} from 'react';
import type {KeyboardEvent} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {galleryItems, type GalleryItem} from '@/config/gallery';

type Props = {items?: readonly GalleryItem[]; viewAllHref?: string};

function GalleryImage({item, alt, enlarged = false}: {item: GalleryItem; alt: string; enlarged?: boolean}) {
  const image = item.image;
  if (!image) return null;
  const crop = image.crop;
  return <Image src={image.src} width={image.width} height={image.height} alt={alt}
    loading={enlarged ? 'eager' : 'lazy'}
    sizes={crop
      ? enlarged ? `${Math.ceil(720 * image.width / crop.width)}px` : `(max-width: 767px) ${Math.ceil(image.width / crop.width * 100)}vw, (max-width: 1023px) ${Math.ceil(image.width / crop.width * 50)}vw, ${Math.ceil(image.width / crop.width * 34)}vw`
      : enlarged ? '(max-width: 767px) 100vw, 720px' : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw'}
    className={crop ? 'absolute' : `h-full w-full ${enlarged ? 'object-contain' : 'object-cover'}`}
    style={crop ? {width: `${image.width / crop.width * 100}%`, maxWidth: 'none', height: 'auto', left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%`} : undefined} />;
}

export default function GallerySection({items = galleryItems, viewAllHref}: Props) {
  const t = useTranslations('Gallery');
  const categories = useTranslations('Categories');
  const visibleItems = items.filter((item) => item.showOnHomepage).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
  const previewItems = visibleItems.filter((item) => item.image);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const index = previewItems.findIndex((item) => item.id === selectedId);
  const active = previewItems[index];
  const isOpen = Boolean(active);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const helpId = useId();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!isOpen) {
      if (element.open) element.close();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!element.open) element.showModal();
    closeButton.current?.focus();
    const previousFocus = opener.current;
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({preventScroll: true});
    };
  }, [isOpen]);

  function close() {setSelectedId(null);}
  function move(direction: number) {
    const next = (index + direction + previewItems.length) % previewItems.length;
    if (previewItems[next]) setSelectedId(previewItems[next].id);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Tab') {
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
      if (controls.length) {
        event.preventDefault();
        const current = controls.indexOf(document.activeElement as HTMLButtonElement);
        const next = current < 0 ? (event.shiftKey ? controls.length - 1 : 0)
          : (current + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
        controls[next].focus();
      }
      return;
    }
    // Keep modal Escape from also dismissing the underlying mobile sidebar.
    if (event.key === 'Escape') event.stopPropagation();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      event.stopPropagation();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const item = previewItems[event.key === 'Home' ? 0 : previewItems.length - 1];
      if (item) setSelectedId(item.id);
    }
  }
  const alt = (item: GalleryItem) => item.altText ?? t(item.altKey);
  const title = (item: GalleryItem) => item.title ?? (item.titleKey ? t(item.titleKey) : alt(item));
  const description = active?.description ?? (active?.descriptionKey ? t(active.descriptionKey) : undefined);
  const iconButtonClassName = 'flex h-11 w-11 shrink-0 items-center justify-center border transition-colors hover:bg-[var(--swd-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)] disabled:opacity-40';
  const iconButtonStyle = {borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'};
  if (!visibleItems.length) return null;

  return (
    <section aria-labelledby="gallery-title" className="px-4 py-12 sm:px-8 sm:py-16"
      style={{backgroundColor: 'var(--swd-surface)', color: 'var(--swd-foreground)'}}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 id="gallery-title" className="text-2xl font-semibold sm:text-3xl">{t('title')}</h2>
            <p className="mt-3 text-base leading-7">{t('description')}</p>
          </div>
          {viewAllHref && <Link href={viewAllHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]">
            {t('viewAll')}<ArrowUpRight size={18} aria-hidden="true" />
          </Link>}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <figure key={item.id} className="min-w-0">
              <button type="button" disabled={!item.image} aria-label={item.image ? t('openImage', {title: title(item)}) : t('photoPending')}
                aria-haspopup={item.image ? 'dialog' : undefined}
                onClick={(event) => {opener.current = event.currentTarget; setSelectedId(item.id);}}
                className="group relative block aspect-square w-full overflow-hidden border text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]"
                style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)'}}>
                {item.image ? <GalleryImage item={item} alt={alt(item)} /> : <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center text-sm"><Camera size={32} aria-hidden="true" />{t('photoPending')}</span>}
                {item.isExample && <span className="absolute bottom-3 left-3 border px-3 py-2 text-xs" style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)'}}>{t('exampleImage')}</span>}
                {item.image && <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border transition-opacity group-hover:opacity-80"
                  style={{backgroundColor: 'var(--swd-background)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}><Expand size={18} aria-hidden="true" /></span>}
              </button>
              {(item.title || item.titleKey || item.categoryKey) && <figcaption className="mt-3">
                {(item.title || item.titleKey) && <p className="text-sm font-semibold [overflow-wrap:anywhere]">{title(item)}</p>}
                {item.categoryKey && <p className="mt-1 text-xs" style={{color: 'var(--swd-primary)'}}>{categories(item.categoryKey)}</p>}
              </figcaption>}
            </figure>
          ))}
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby={titleId} aria-describedby={`${helpId}${description ? ` ${descriptionId}` : ''}`}
        onKeyDown={handleKeyDown} onCancel={(event) => {event.preventDefault(); close();}}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
        }}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-4xl overflow-y-auto rounded-[var(--swd-radius-default)] border p-0 backdrop:bg-[var(--swd-overlay)] max-sm:h-dvh max-sm:max-h-dvh max-sm:w-screen max-sm:rounded-none max-sm:border-0"
        style={{backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)', borderColor: 'var(--swd-border)'}}>
        <div className="flex items-start justify-between gap-3 border-b p-4" style={{borderColor: 'var(--swd-border)'}}>
          <h3 id={titleId} className="min-w-0 self-center text-base font-semibold [overflow-wrap:anywhere]">{active ? title(active) : t('previewTitle')}</h3>
          <button ref={closeButton} type="button" onClick={close} aria-label={t('close')} className={iconButtonClassName} style={iconButtonStyle}><X size={20} aria-hidden="true" /></button>
        </div>
        <p id={helpId} className="sr-only">{t('keyboardHelp')}</p>
        {active && <div className="pb-4 sm:p-4">
          <div className="relative mx-auto aspect-square max-h-[60dvh] w-full max-w-[60dvh] overflow-hidden" style={{backgroundColor: 'var(--swd-surface)', borderRadius: 'var(--swd-radius-default)'}}>
            <GalleryImage item={active} alt={alt(active)} enlarged />
          </div>
          {active.isExample && <p className="mt-3 px-4 text-center text-sm sm:px-0">{t('exampleImage')}</p>}
          {description && <p id={descriptionId} className="mx-auto mt-4 max-w-xl px-4 text-sm leading-6 sm:px-0">{description}</p>}
          <div className="mt-4 flex items-center justify-between gap-3 px-4 sm:px-0">
            <button type="button" onClick={() => move(-1)} disabled={previewItems.length < 2} aria-label={t('previous')} className={iconButtonClassName} style={iconButtonStyle}><ArrowLeft size={20} aria-hidden="true" /></button>
            <p role="status" className="text-center text-sm">{t('position', {current: index + 1, total: previewItems.length})}</p>
            <button type="button" onClick={() => move(1)} disabled={previewItems.length < 2} aria-label={t('next')} className={iconButtonClassName} style={iconButtonStyle}><ArrowRight size={20} aria-hidden="true" /></button>
          </div>
        </div>}
      </dialog>
    </section>
  );
}
