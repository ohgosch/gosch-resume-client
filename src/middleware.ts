import { match } from '@formatjs/intl-localematcher';
import { i18n, type TLocale } from '@/locales/i18n.config';
import { type NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

function resolveLocaleFromRequest(request: NextRequest): TLocale {
  const acceptLanguages = String(request.headers.get('accept-language')).split(
    ',',
  );

  const acceptLanguagesFiltered = acceptLanguages.filter((language) =>
    i18n.locales.includes(language as TLocale),
  );

  return match(
    acceptLanguagesFiltered,
    i18n.locales,
    i18n.defaultLocale,
  ) as TLocale;
}

const I18nMiddleware = createI18nMiddleware({
  ...i18n,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest,
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
