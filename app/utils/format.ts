import { format as formatLib } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import { i18n, type TLocale } from 'locales/i18n.config';

const getFNSByLocale = (locale: TLocale) => {
  switch (locale) {
    case 'pt-BR':
      return ptBR;
    case 'en-US':
    default:
      return enUS;
  }
};

export const formatDate = (
  date: Date,
  format = 'yyyy-MM-dd',
  locale: TLocale = i18n.defaultLocale,
) =>
  formatLib(date, format, {
    locale: getFNSByLocale(locale),
  });

export const formatPhone = (phone: string): string => {
  const regex = /(\d{2})(\d{3})(\d{5})(\d{4})/;

  const [, DDI, DDD, P1, P2] = regex.exec(phone) ?? [];

  return `+${DDI} ${DDD} ${P1}-${P2}`;
};

export const formatStaticURL = (url: string) => {
  // if (process.env.NODE_ENV === 'development') return process.env.API_URL + url;

  return url;
};
