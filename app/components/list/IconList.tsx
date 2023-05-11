'use client';

import { FC, ReactElement } from 'react';

import { ListProps } from '@mui/material/List';

import { List } from '../boxSystem';

import { IconListItem } from './item';
import { IconListType, brReactElementType, iconByListType } from './constants';

export interface IconListProps extends ListProps {
  children: ReactElement | ReactElement[];
  iconType?: IconListType;
}

export const IconList: FC<IconListProps> = ({
  iconType = IconListType.Nested,
  children,
  ...props
}) => {
  const icon = iconByListType[iconType];

  return (
    <List {...props}>
      {Array.isArray(children) &&
        children
          .filter(({ type }) => type !== brReactElementType)
          .map((child) => (
            <IconListItem key={child.props.children} icon={icon}>
              {child}
            </IconListItem>
          ))}
    </List>
  );
};
