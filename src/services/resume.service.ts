import 'server-only';

import { IApiResponse, IPaginateApiResponse } from '@/interfaces/api';
import {
  ICompanyCoverLetter,
  ICourse,
  ICoverLetter,
  IExperience,
  ISkeleton,
  ISkillSectionResponse,
} from '@/interfaces/resume';

const config: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  signal: AbortSignal.timeout(300000),
};

export const getSkeleton = async (
  locale: string,
): Promise<IApiResponse<ISkeleton>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/skeleton?locale=${locale}`,
    config,
  );

  return (await response.json()) as IApiResponse<ISkeleton>;
};

export const getCoverLetter = async (locale: string) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/cover-letter?locale=${locale}`,
    config,
  );

  return (await response.json()) as IApiResponse<ICoverLetter>;
};

export const getCompanyCoverLetterList = async () => {
  const response = await fetch(
    `${process.env.API_HOST}/api/company-cover-letters`,
    config,
  );

  return (await response.json()) as IPaginateApiResponse<ICompanyCoverLetter[]>;
};

export const getCompanyCoverLetterItem = async (documentId: string) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/company-cover-letters/${documentId}`,
    config,
  );

  return (await response.json()) as IApiResponse<ICompanyCoverLetter>;
};

export const getCourses = async (locale: string) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/courses?locale=${locale}&sort=startDate:DESC`,
    config,
  );

  return (await response.json()) as IPaginateApiResponse<ICourse[]>;
};

export const getExperiences = async (locale: string, limit: number) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/experiences?locale=${locale}&pagination[pageSize]=${limit}&populate[1]=skills&sort=startDate:DESC`,
    config,
  );

  return (await response.json()) as IPaginateApiResponse<IExperience[]>;
};

export const getSkillsSection = async (locale: string) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/skills-section?locale=${locale}&populate[skills][populate][0]=skill_category&populate=skill_categories`,
    config,
  );

  return (await response.json()) as IApiResponse<ISkillSectionResponse>;
};
