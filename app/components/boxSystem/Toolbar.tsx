'use client';

import { StyledComponent } from '@mui/styled-engine';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';

import { boxSystem } from '../../../theme';

export const Toolbar: StyledComponent<ToolbarProps & BoxProps> = styled(
  MuiToolbar,
)`
  ${boxSystem}
`;
