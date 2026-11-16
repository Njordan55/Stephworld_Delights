import {prepareLocale} from '@/i18n/server';
import AboutPageContent from '@/components/about/AboutPageContent';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  await prepareLocale(params);
  return <AboutPageContent />;
}
