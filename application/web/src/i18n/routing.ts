import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeCookie: {maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/'}
});

export type Locale = (typeof routing.locales)[number];
