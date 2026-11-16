import {prepareLocale} from "@/i18n/server";
import {getTranslations} from 'next-intl/server';

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  await prepareLocale(params);
  const t = await getTranslations("Contact");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4">{t('description')}</p>
    </main>
  );
}