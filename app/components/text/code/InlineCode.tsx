'use client';

import { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { Text } from '../styled';

export const InlineCode = styled((props: TypographyProps) => (
  <Text component="code" {...props} />
))(
  ({ theme: { spacing, palette } }) => `
    padding-top: ${spacing(0.25)};
    padding-bottom: ${spacing(0.6)};
    padding-right: ${spacing(1)};
    padding-left: ${spacing(1)};
    background: ${palette.grey[700]};
    font-family: monospace;
`,
);
