import { I18nProviderClient } from 'locales/client';
import { type PropsWithChildren } from 'react';

export default async function LocaleLayout(
  props: {
    params: { locale: string };
  } & PropsWithChildren,
) {
  const params = props.params;

  const { locale } = params;

  const { children } = props;

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
