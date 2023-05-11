'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { Text } from './Text';

export const Paragraph: FC<TypographyProps> = (props) => (
  <Text paragraph {...props} />
);
