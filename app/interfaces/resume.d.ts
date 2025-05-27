import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface ISkeleton {
  documentId: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  linkedin: string;
  github: string;
  phone: string;
}

export interface IExperience {
  documentId: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  modality: 'remote' | 'partial-remote' | 'on-site';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  logo: null | {
    data: {
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
    } | null;
  };
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

export interface ISkillCategoryGroup extends ISkillCategory {
  skills: ISkill[];
}
