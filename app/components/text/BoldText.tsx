'use client';

import { FC } from 'react';

import { TypographyProps } from '@mui/material/Typography';

import { ThemeFont } from '../../../theme';

import { Text } from './styled';

export const BoldText: FC<TypographyProps<'strong'>> = (props) => (
  <Text
    component="strong"
    fontWeight="bold"
    fontFamily={ThemeFont.PTSerif}
    {...props}
  />
);
