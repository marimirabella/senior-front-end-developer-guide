'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from '../text';

export const Subheading: FC<TypographyProps> = (props) => (
  <Text variant="h3" align="center" fontWeight="bold" mb={2} {...props} />
);
