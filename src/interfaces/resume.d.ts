import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface ISkeleton {
  name: string;
  title: string;
  based: string;
  description: string;
  documentId: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  linkedin: string;
  github: string;
  phone: string;
  languages: BlocksContent;
}

export interface IExperience {
  documentId: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  description_rich?: BlocksContent;
  modality: 'remote' | 'partial-remote' | 'on-site';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  logo: null | {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    createdAt: string;
    updatedAt: string;
  };
  skills: Omit<ISkill, 'skill_category'>[];
}

export interface ICourse {
  documentId: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface ICoverLetter {
  documentId: string;
  coverLetterContent: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface ICompanyCoverLetter {
  documentId: string;
  company: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISkillCategory {
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISkill {
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  skill_category: ISkillCategory | null;
}

export interface ISkillSectionResponse {
  documentId: string;
  createdAt: string;
  updatedAt: string;
  skills: ISkill[];
  skill_categories: ISkillCategory[];
}
