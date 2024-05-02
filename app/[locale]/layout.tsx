import { I18nProviderClient } from 'locales/client';
import { type PropsWithChildren } from 'react';

export default function LocaleLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
} & PropsWithChildren) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
