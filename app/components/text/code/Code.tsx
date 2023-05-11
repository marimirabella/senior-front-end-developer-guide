'use client';

import { FC } from 'react';

import { HighlightedCode } from './HighlightedCode';
import { InlineCode } from './InlineCode';

export interface CodeProps {
  children: string | string[];
  className: string;
}

export const Code: FC<CodeProps> = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');

  if (!match) {
    return <InlineCode className={className} {...props} />;
  }

  return <HighlightedCode language={match[1]} {...props} />;
};
