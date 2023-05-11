'use client';

import { LinkProps as NextLinkProps } from 'next/link';

import { StyledComponent } from '@mui/styled-engine';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { boxSystem } from '../../../theme';

export type ButtonProps = MuiButtonProps & BoxProps<'button'> & NextLinkProps;

export const Button: StyledComponent<ButtonProps> = styled(MuiButton)`
  ${boxSystem}
`;
