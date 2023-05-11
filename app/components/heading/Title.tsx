'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from '../text';

export const Title: FC<TypographyProps> = (props) => (
  <Text variant="h1" align="center" {...props} />
);
