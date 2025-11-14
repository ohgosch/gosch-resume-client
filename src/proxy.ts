import { match } from '@formatjs/intl-localematcher';
import { type NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { i18n, type TLang } from '@/locales/i18n.config';

function resolveLocaleFromRequest(request: NextRequest): TLang {
  const acceptLanguages = String(request.headers.get('accept-language')).split(
    ',',
  );

  const acceptLanguagesFiltered = acceptLanguages.filter((language) =>
    i18n.locales.includes(language as TLang),
  );

  return match(
    acceptLanguagesFiltered,
    i18n.locales,
    i18n.defaultLocale,
  ) as TLang;
}

const I18nMiddleware = createI18nMiddleware({
  ...i18n,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest,
});

export function proxy(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
