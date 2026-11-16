"use client";

import {useEffect, useId, useRef, useState, useTransition} from 'react';
import type {KeyboardEvent} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Check, ChevronDown, Globe} from 'lucide-react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing, type Locale} from '@/i18n/routing';

export default function LanguageSelector() {
  const t = useTranslations('Language');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    container.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus();
    function dismiss(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      close();
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const items = Array.from(container.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? []);
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1
      : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  }

  function changeLanguage(nextLocale: Locale) {
    close();
    if (nextLocale === locale) return;
    // Keep filters, query parameters, and anchors as well as the current page.
    startTransition(() => router.replace(
      `${pathname}${window.location.search}${window.location.hash}`,
      {locale: nextLocale, scroll: false}
    ));
  }

  return (
    <div ref={container} className="relative shrink-0"
      onBlur={(event) => {
        // Safari can blur a button without focusing the clicked menu item.
        // Let its click run; outside pointer clicks are handled separately.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}>
      <button
        ref={trigger}
        type="button"
        aria-label={`${t('label')}: ${t(locale)}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        disabled={pending}
        onClick={() => setOpen((previous) => !previous)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="flex h-10 items-center gap-1 border px-2 text-xs transition-colors hover:bg-[var(--swd-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swd-primary)] disabled:opacity-50 sm:gap-2 sm:text-sm"
        style={{borderColor: 'var(--swd-border)', backgroundColor: 'var(--swd-background)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}
      >
        <Globe size={18} aria-hidden="true" />
        <span className="whitespace-nowrap">{t(locale)}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open && (
        <div id={menuId} role="menu" aria-label={t('label')} onKeyDown={handleKeyDown}
          className="absolute right-0 top-full z-50 mt-2 w-44 border p-1 shadow-lg"
          style={{backgroundColor: 'var(--swd-surface)', borderColor: 'var(--swd-border)', borderRadius: 'var(--swd-radius-default)'}}>
          {routing.locales.map((language) => (
            <button key={language} type="button" role="menuitemradio" aria-checked={locale === language}
              onClick={() => changeLanguage(language)}
              className="flex min-h-10 w-full items-center justify-between gap-3 px-3 text-left text-sm hover:bg-[var(--swd-hover)] focus-visible:outline-2 focus-visible:outline-[var(--swd-primary)]"
              style={{backgroundColor: locale === language ? 'var(--swd-active-navigation)' : undefined, borderRadius: 'var(--swd-radius-default)'}}>
              {t(language)}
              {locale === language && <Check size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
