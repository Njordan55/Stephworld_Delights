import "../globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getThemeVariables } from "@/components/layout/ThemeProvider";
import AppShell from "@/components/layout/AppShell";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

const baseMetadata: Metadata = {
  title: "Stephworld Delights",
  icons: {
    icon: {
      url: "/images/logo/logo.jpeg",
      type: "image/jpeg",
    },
    shortcut: "/images/logo/logo.jpeg",
    apple: "/images/logo/logo.jpeg",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Omit<Props, 'children'>): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {...baseMetadata, description: t('description')};
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} style={getThemeVariables()}>
      <body>
        <NextIntlClientProvider>
          <AppShell>
            {children}
            <Footer />
          </AppShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
