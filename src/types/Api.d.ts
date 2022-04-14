import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export type SocialMedia = {
  display: string;
  url: string;
  slug: string;
};

export type ExperienceResponse = {
  company_name: string;
  role: string;
  description?: string;
  start_date: string;
  end_date?: string;
  company_logo?: {
    url: string;
    imgix_url: string;
  };
};

export type CourseResponse = {
  institution_name: string;
  course_title: string;
  start_date: string;
  end_date?: string;
};

export type SkillResponse = {
  title: string;
};

export type ApiResponse = {
  social_medias: SocialMedia[];
  cover_letter: MDXRemoteSerializeResult;
  experiences: ExperienceResponse[];
  skills: SkillResponse[];
  courses: CourseResponse[];
};
