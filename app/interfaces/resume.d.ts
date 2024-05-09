import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface ISkeleton {
  id: number;
  attributes: {
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    linkedin: string;
    github: string;
    phone: string;
  };
}

export interface IExperience {
  id: number;
  attributes: {
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
    logo: {
      data: {
        id: number;
        attributes: {
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
      } | null;
    };
  };
}

export interface ICourse {
  id: number;
  attributes: {
    institution: string;
    startDate: string;
    endDate: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface ICoverLetter {
  id: number;
  attributes: {
    coverLetterContent: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface ISkillCategory {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ISkill {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    skill_category: {
      data: ISkillCategory | null;
    };
  };
}

export interface ISkillCategoryGroup extends ISkillCategory {
  skills: ISkill[];
}
