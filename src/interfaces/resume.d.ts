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
