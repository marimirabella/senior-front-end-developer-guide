import NextLink from 'next/link';

import { FC } from 'react';

import ElderlyIcon from '@mui/icons-material/Elderly';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import CodeIcon from '@mui/icons-material/Code';

import { GuideRoute } from '../../constants';
import { Button, Toolbar, Text } from '../../components';

export interface SidebarToolbarProps {
  closeSidebar?: () => void;
}

export const SidebarToolbar: FC<SidebarToolbarProps> = ({ closeSidebar }) => (
  <Toolbar p="0 !important">
    <Button
      component={NextLink}
      href={GuideRoute.Home}
      width="100%"
      {...(closeSidebar && { onClick: closeSidebar })}
    >
      <ElderlyIcon /> <DoorFrontIcon /> <CodeIcon />
      <Text variant="h6" noWrap pl={1}>
        Guide
      </Text>
    </Button>
  </Toolbar>
);
