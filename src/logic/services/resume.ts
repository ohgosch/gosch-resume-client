export const getResume = async (locale) => {
  const API_URL =
    locale === 'pt' ? process.env.API_URL_PT : process.env.API_URL_EN;

  return await fetch(`${API_URL}&props=metadata`).then((data) => data.json());
};

export const getCoverLetter = async () =>
  await fetch(`${process.env.API_URL}/resume`).then((data) => data.json());
