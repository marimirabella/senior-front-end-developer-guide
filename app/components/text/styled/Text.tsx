'use client';

import { ElementType } from 'react';

import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { boxSystem } from '../../../../theme';

export const Text = styled(
  <T extends ElementType = 'span'>(props: TypographyProps<T>): JSX.Element => (
    <Typography variant="body1" {...props} />
  ),
)`
  :is(span > p:only-child) {
    margin: 0;
  }

  ${boxSystem}
`;
