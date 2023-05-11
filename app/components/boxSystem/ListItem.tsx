'use client';

import { StyledComponent } from '@mui/styled-engine';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from '@mui/material/ListItem';

import { boxSystem } from '../../../theme';

export type ListItemProps = MuiListItemProps & BoxProps<'li'>;

export const ListItem: StyledComponent<ListItemProps> = styled(MuiListItem)`
  ${boxSystem}
`;
