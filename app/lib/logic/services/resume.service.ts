import {
  type IApiResponse,
  type IPaginateApiResponse,
  type ISkillSectionResponse,
} from 'interfaces/api';
import {
  type ICourse,
  type ICoverLetter,
  type IExperience,
  type ISkeleton,
} from 'interfaces/resume';
import { privateApi } from 'lib/logic/services';
import { type TLocale } from 'locales/i18n.config';

export const getSkeleton = async (locale: TLocale) =>
  await privateApi<IApiResponse<ISkeleton>>(`/skeleton`, {
    params: {
      locale,
    },
  });

export const getSkillsSection = async (locale: TLocale) =>
  await privateApi<IApiResponse<ISkillSectionResponse>>(`/skills-section`, {
    params: {
      locale,
      'populate[skills][populate][0]': 'skill_category',
      populate: 'skill_categories',
    },
  });

export const getCoverLetter = async (locale: TLocale) =>
  await privateApi<IApiResponse<ICoverLetter>>(`/cover-letter`, {
    params: {
      locale,
    },
  });

export const getExperiences = async (locale: TLocale) =>
  await privateApi<IPaginateApiResponse<IExperience[]>>(`/experiences`, {
    params: {
      populate: 'logo',
      sort: 'startDate:DESC',
      locale,
    },
  });

export const getCourses = async (locale: TLocale) =>
  await privateApi<IPaginateApiResponse<ICourse[]>>(`/courses`, {
    params: {
      sort: 'startDate:DESC',
      locale,
    },
  });
