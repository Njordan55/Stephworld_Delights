import {prepareLocale} from "@/i18n/server";
import {getTranslations} from 'next-intl/server';
import {findProductCategory} from '@/config/categories';

export default async function ProductsPage({params, searchParams}: {
  params: Promise<{locale: string}>;
  searchParams: Promise<{category?: string | string[]}>;
}) {
  await prepareLocale(params);
  const t = await getTranslations("Products");
  const categories = await getTranslations("Categories");
  const {category: requestedCategory} = await searchParams;
  const category = findProductCategory(typeof requestedCategory === 'string' ? requestedCategory : undefined);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{category ? categories(category.labelKey) : t('title')}</h1>
      <p className="mt-4">{category ? categories(category.descriptionKey) : t('description')}</p>
    </main>
  );
}
