import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    'en-US': async () => await import('./dictionaries/en-US'),
    'pt-BR': async () => await import('./dictionaries/pt-BR'),
  });
