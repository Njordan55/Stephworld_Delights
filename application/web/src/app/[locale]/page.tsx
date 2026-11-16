import {prepareLocale} from '@/i18n/server';
import {redirect} from '@/i18n/navigation';

export default async function LocaleIndexPage({params}: {params: Promise<{locale: string}>}) {
  const locale = await prepareLocale(params);
  redirect({href: '/home', locale});
}
