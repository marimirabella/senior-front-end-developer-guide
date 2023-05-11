'use client';

import { StyledComponent } from '@mui/styled-engine';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiList, { ListProps } from '@mui/material/List';

import { boxSystem } from '../../../theme';

export const List: StyledComponent<ListProps & BoxProps<'ul'>> = styled(
  MuiList,
)`
  ${boxSystem}
`;
