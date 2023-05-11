'use client';

import NextLink from 'next/link';

import { FC } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import DataUsageIcon from '@mui/icons-material/DataUsage';

import { ListItem, ListItemProps } from '../../boxSystem';

import { ListItemContent } from './ListItemContent';
import { iconStyles } from './constants';

export interface IconListItemProps extends ListItemProps {
  icon?: FC;
  path?: string;
}

export const IconListItem: FC<IconListItemProps> = ({
  icon = DataUsageIcon,
  path,
  children,
  ...props
}) => (
  <ListItem alignItems="flex-start" disablePadding mb={1} {...props}>
    {path ? (
      <ListItemButton component={NextLink} href={path}>
        <ListItemContent icon={icon}>{children}</ListItemContent>
      </ListItemButton>
    ) : (
      <ListItemContent icon={icon} sx={iconStyles}>
        {children}
      </ListItemContent>
    )}
  </ListItem>
);
