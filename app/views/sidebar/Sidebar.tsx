import { FC } from 'react';

import Box from '@mui/material/Box';

import { sidebarWidthByDevice } from './constants';
import { MobileSideBar } from './MobileSideBar';
import { DesktopSideBar } from './DesktopSidebar';

export interface SidebarProps {
  isMobile: boolean;
  isSidebarOpenOnMobile: boolean;
  closeSidebar: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
  isMobile,
  isSidebarOpenOnMobile,
  closeSidebar,
}) => (
  <Box component="nav" flexShrink={0} width={sidebarWidthByDevice}>
    {isMobile ? (
      <MobileSideBar
        isSidebarOpenOnMobile={isSidebarOpenOnMobile}
        closeSidebar={closeSidebar}
      />
    ) : (
      <DesktopSideBar />
    )}
  </Box>
);
