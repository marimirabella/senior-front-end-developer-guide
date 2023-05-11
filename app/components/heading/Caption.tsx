'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from '../text';

export const Caption: FC<TypographyProps> = (props) => (
  <Text variant="h5" fontWeight="bold" my={1} {...props} />
);
