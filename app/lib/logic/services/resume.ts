import { type TLocale } from 'locales/i18n.config';

export const getResume = async (locale: TLocale) => {
  const API_URL =
    locale === 'pt-BR' ? process.env.API_URL_PT : process.env.API_URL_EN;

  return await fetch(`${API_URL}&props=metadata`).then(
    async (data) => await data.json(),
  );
};

export const getCoverLetter = async () =>
  await fetch(`${process.env.API_URL}/resume`).then(
    async (data) => await data.json(),
  );
