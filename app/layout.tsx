import { i18n } from 'locales/i18n.config';
import { getCurrentLocale } from 'locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import { type PropsWithChildren } from 'react';
import { Contexts } from 'utils/contexts';

export default function RootLayout({ children }: PropsWithChildren) {
  const locale = getCurrentLocale() || i18n;

  setStaticParamsLocale(locale);

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
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
