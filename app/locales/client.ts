'use client';

import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale } =
  createI18nClient({
    'en-US': async () => await import('./dictionaries/en-US'),
    'pt-BR': async () => await import('./dictionaries/pt-BR'),
  });
