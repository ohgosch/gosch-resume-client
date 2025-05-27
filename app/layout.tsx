import { i18n, TLocale } from 'locales/i18n.config';
import { getCurrentLocale } from 'locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import { type PropsWithChildren } from 'react';
import { Contexts } from 'utils/contexts';

interface IRootLayout extends PropsWithChildren {
  params: Promise<{ locale: TLocale }>;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: IRootLayout) {
  console.log(await params);
  const locale = (await params)?.locale || 'en-US';

  console.log(locale);

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
