import { createI18nServer } from 'next-international/server';

export const { getStaticParams, getI18n } = createI18nServer({
  'en-US': async () => await import('./dictionaries/en-US'),
  'pt-BR': async () => await import('./dictionaries/pt-BR'),
});
