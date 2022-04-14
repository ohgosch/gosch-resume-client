export const getResume = async () =>
  await fetch(`${process.env.API_URL}&props=metadata`).then((data) =>
    data.json(),
  );

export const getCoverLetter = async () =>
  await fetch(`${process.env.API_URL}/resume`).then((data) => data.json());
