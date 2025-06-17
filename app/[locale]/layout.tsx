import { I18nProviderClient } from 'locales/client';
import { TLocale } from 'locales/i18n.config';
import React, { type PropsWithChildren } from 'react';
import { Contexts } from 'utils/contexts';

export default function LocaleLayout(
  props: {
    params: Promise<{ locale: TLocale }>;
  } & PropsWithChildren,
) {
  const params = React.use(props.params);

  const { locale } = params;

  const { children } = props;

  return (
    <html lang={locale.split('-')[0]}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Contexts>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </Contexts>
      </body>
    </html>
  );
}
