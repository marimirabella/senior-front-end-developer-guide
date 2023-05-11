'use client';

import { styled } from '@mui/material/styles';

import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const HighlightedCode = styled(
  ({ language, ...props }: SyntaxHighlighterProps) => (
    <SyntaxHighlighter language={language} style={dracula} {...props} />
  ),
)(
  ({ theme: { typography } }) => `
    font-size: ${typography.body2.fontSize};
`,
);
