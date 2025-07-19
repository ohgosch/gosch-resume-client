import { format, parseISO } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

import { TLang } from '@/locales/i18n.config';

export const formatPhone = (phone: string): string => {
  const regex = /(\d{2})(\d{3})(\d{5})(\d{4})/;

  const [, DDI, DDD, P1, P2] = regex.exec(phone) ?? [];

  return `+${DDI} ${DDD} ${P1}-${P2}`;
};

export const getDateLocale = (lang: TLang) => {
  switch (lang) {
    case 'pt-BR':
      return ptBR;
    case 'en-US':
    default:
      return enUS;
  }
};

export const formatDate = (date: string, lang: TLang) => {
  if (!date) return date;

  return format(parseISO(date), 'MMMM yyyy', { locale: getDateLocale(lang) });
};
