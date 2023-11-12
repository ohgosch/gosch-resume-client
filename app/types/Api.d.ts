import { type MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export interface SocialMedia {
  display: string;
  url: string;
  slug: string;
}

export interface ExperienceResponse {
  company_name: string;
  role: string;
  description?: string;
  start_date: string;
  end_date?: string;
  company_logo?: {
    url: string;
    imgix_url: string;
  };
}

export interface CourseResponse {
  institution_name: string;
  course_title: string;
  start_date: string;
  end_date?: string;
}

export interface SkillResponse {
  title: string;
}

export interface ApiResponse {
  object: {
    metadata: {
      social_medias: SocialMedia[];
      cover_letter: MDXRemoteSerializeResult;
      experiences: ExperienceResponse[];
      skills: SkillResponse[];
      courses: CourseResponse[];
    };
  };
}
