import { format as formatLib, parseISO } from 'date-fns';

export const formatDate = (date = '', format = 'yyyy-MM-dd') => {
  if (!date) return date;
  return formatLib(parseISO(date), format);
};
