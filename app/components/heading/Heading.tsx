'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from '../text';

export const Heading: FC<TypographyProps> = (props) => (
  <Text variant="h2" align="center" {...props} />
);
