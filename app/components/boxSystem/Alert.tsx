'use client';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styled-engine';

import { boxSystem } from '../../../theme';

export const Alert: StyledComponent<AlertProps & BoxProps> = styled(MuiAlert)`
  ${boxSystem}
`;
