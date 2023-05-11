'use client';

import { StyledComponent } from '@mui/styled-engine';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

import { boxSystem } from '../../../theme';

export const IconButton: StyledComponent<
  IconButtonProps & BoxProps<'button'>
> = styled(MuiIconButton)`
  ${boxSystem}
`;
