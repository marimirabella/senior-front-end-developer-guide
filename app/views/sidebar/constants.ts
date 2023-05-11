import DataObjectIcon from '@mui/icons-material/DataObject';
import { PaperProps } from '@mui/material/Paper';

import { GuideRoute } from '../../constants';
import { DeviceBreakpoint } from '../../../theme';

import { GuideNavigationItem } from './interfaces';

export const sidebarWidth = 350;

export const guideNavItems: GuideNavigationItem[] = [
  {
    path: GuideRoute.ProgrammingParadigms,
    title: 'home.guideNavItem.title1',
    icon: DataObjectIcon,
  },
];

export const paperProps: Partial<PaperProps> = {
  sx: {
    width: sidebarWidth,
  },
};

export const sidebarWidthByDevice: Record<DeviceBreakpoint.Md, number> = {
  [DeviceBreakpoint.Md]: sidebarWidth,
};
