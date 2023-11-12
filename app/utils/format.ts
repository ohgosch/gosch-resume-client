import { format as formatLib, parseISO } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import { i18n, type TLocale } from 'locales/i18n.config';

export const formatDate = (
  date = '',
  format = 'yyyy-MM-dd',
  locale: TLocale = i18n.defaultLocale,
) => {
  if (!date) return date;
  return formatLib(parseISO(date), format, {
    locale: locale === 'en-US' ? enUS : ptBR,
  });
};
