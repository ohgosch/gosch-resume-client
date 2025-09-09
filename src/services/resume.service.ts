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

  return await response.json();
};

export const getCoverLetter = async (
  locale: string,
): Promise<IApiResponse<ICoverLetter>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/cover-letter?locale=${locale}`,
    config,
  );

  return await response.json();
};

export const getCompanyCoverLetterList = async (): Promise<
  IPaginateApiResponse<ICompanyCoverLetter[]>
> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/company-cover-letters`,
    config,
  );

  return await response.json();
};

export const getCompanyCoverLetterItem = async (
  documentId: string,
): Promise<IApiResponse<ICompanyCoverLetter>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/company-cover-letters/${documentId}`,
    config,
  );

  return await response.json();
};

export const getCourses = async (
  locale: string,
): Promise<IPaginateApiResponse<ICourse[]>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/courses?locale=${locale}&sort=startDate:DESC`,
    config,
  );

  return await response.json();
};

export const getExperiences = async (
  locale: string,
  limit: number,
): Promise<IPaginateApiResponse<IExperience[]>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/experiences?locale=${locale}&pagination[pageSize]=${limit}&populate[1]=skills&sort=startDate:DESC`,
    config,
  );

  return await response.json();
};

export const getSkillsSection = async (
  locale: string,
): Promise<IApiResponse<ISkillSectionResponse>> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/skills-section?locale=${locale}&populate[skills][populate][0]=skill_category&populate=skill_categories`,
    config,
  );

  return await response.json();
};
