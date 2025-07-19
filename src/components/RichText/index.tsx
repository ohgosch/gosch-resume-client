'use client';

import {
  type BlocksContent,
  BlocksRenderer,
} from '@strapi/blocks-react-renderer';

interface IRichTextProps {
  content: BlocksContent;
}

export const RichText = ({ content }: IRichTextProps) => {
  return <BlocksRenderer content={content} />;
};
