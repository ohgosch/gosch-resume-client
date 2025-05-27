import { I18nProviderClient } from 'locales/client';
import React, { type PropsWithChildren } from 'react';

import { TLocale } from '../locales/i18n.config';

export default function LocaleLayout(
  props: {
    params: Promise<{ locale: TLocale }>;
  } & PropsWithChildren,
) {
  const params = React.use(props.params);

  const { locale } = params;

  const { children } = props;

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
