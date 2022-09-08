import { format as formatLib, parseISO } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

export const formatDate = (date = '', format = 'yyyy-MM-dd', locale = 'en') => {
  if (!date) return date;
  return formatLib(parseISO(date), format, {
    locale: locale === 'pt' ? ptBR : enUS,
  });
};
