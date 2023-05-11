'use client';

import { FC } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { ComponentWithChildren } from '../../interfaces';

export type ClientBoxProps = BoxProps & ComponentWithChildren;

export const ClientBox: FC<ClientBoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
