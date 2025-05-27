import { type ISkill, type ISkillCategory } from 'interfaces/resume';

export interface IPaginateApiResponse<T> {
  data: T;
  metadata: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IApiResponse<T> {
  data: T;
}

export interface ISkillSectionResponse {
  documentId: string;
  createdAt: string;
  updatedAt: string;
  skills: ISkill[];
  skill_categories: ISkillCategory[];
}
