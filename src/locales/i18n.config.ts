export const i18n = {
  defaultLocale: 'en-US',
  locales: ['en-US', 'pt-BR'],
} as const;

export type TLang = (typeof i18n)['locales'][number];
