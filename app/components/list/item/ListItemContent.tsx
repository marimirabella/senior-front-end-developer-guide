import { FC } from 'react';

import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export interface ListItemContentProps extends ListItemIconProps {
  icon: FC;
}

export const ListItemContent: FC<ListItemContentProps> = ({
  icon: Icon,
  children,
  ...props
}) => (
  <>
    <ListItemIcon {...props}>
      <Icon />
    </ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </>
);
