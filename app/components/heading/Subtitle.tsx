'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from '../text';

export const Subtitle: FC<TypographyProps> = (props) => (
  <Text variant="h4" align="center" fontWeight="bold" my={1} {...props} />
);
