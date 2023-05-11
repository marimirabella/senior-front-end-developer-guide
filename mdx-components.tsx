import { FC } from 'react';

import {
  BoldText,
  Code,
  IconListItem,
  Heading,
  Subheading,
  Subtitle,
  Title,
  Paragraph,
  Text,
  List,
  Blockquote,
  Caption,
} from './app/components';

import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: Title as FC<JSX.IntrinsicElements['h1']>,
    h2: Heading as FC<JSX.IntrinsicElements['h2']>,
    h3: Subheading as FC<JSX.IntrinsicElements['h3']>,
    h4: Subtitle as FC<JSX.IntrinsicElements['h4']>,
    h5: Caption as FC<JSX.IntrinsicElements['h5']>,
    span: Text as FC<JSX.IntrinsicElements['span']>,
    p: Paragraph as FC<JSX.IntrinsicElements['p']>,
    ul: List as FC<JSX.IntrinsicElements['ul']>,
    li: IconListItem as FC<JSX.IntrinsicElements['li']>,
    strong: BoldText as FC<JSX.IntrinsicElements['strong']>,
    code: Code as FC<JSX.IntrinsicElements['code']>,
    blockquote: Blockquote as FC<JSX.IntrinsicElements['blockquote']>,
    ...components,
  };
}
