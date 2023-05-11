'use client';

import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styled-engine';

import { boxSystem } from '../../../theme';

export const AppBar: StyledComponent<AppBarProps & BoxProps<'header'>> = styled(
  MuiAppBar,
)`
  ${boxSystem}
`;
