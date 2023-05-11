import { FC } from 'react';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { paperProps } from './constants';
import { SidebarToolbar } from './SidebarToolbar';
import { SidebarMenu } from './SidebarMenu';

export interface MobileSidebarProps {
  isSidebarOpenOnMobile: boolean;
  closeSidebar: () => void;
}

export const MobileSideBar: FC<MobileSidebarProps> = ({
  isSidebarOpenOnMobile,
  closeSidebar,
}) => (
  <Drawer
    anchor="left"
    variant="temporary"
    open={isSidebarOpenOnMobile}
    onClose={closeSidebar}
    PaperProps={paperProps}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    <SidebarToolbar closeSidebar={closeSidebar} />
    <Divider />
    <SidebarMenu closeSidebar={closeSidebar} />
  </Drawer>
);
