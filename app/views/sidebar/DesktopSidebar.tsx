import { FC } from 'react';

import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';

import { paperProps } from './constants';
import { SidebarToolbar } from './SidebarToolbar';
import { SidebarMenu } from './SidebarMenu';

export const DesktopSideBar: FC = () => (
  <Drawer anchor="left" variant="permanent" PaperProps={paperProps} open>
    <Paper elevation={4}>
      <SidebarToolbar />
    </Paper>
    <SidebarMenu />
  </Drawer>
);
