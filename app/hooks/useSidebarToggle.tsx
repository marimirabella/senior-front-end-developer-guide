import { useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { DeviceBreakpoint } from '../../theme';

export interface UseSidebarToggleResult {
  isMobile: boolean;
  isSidebarOpenOnMobile: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebarToggle = (): UseSidebarToggleResult => {
  const [isSidebarOpenOnMobile, setSidebarOpenOnMobile] = useState(false);

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down(DeviceBreakpoint.Md));

  useEffect(() => {
    return () => {
      setSidebarOpenOnMobile(false);
    };
  }, [isMobile]);

  const openSidebar = () => {
    setSidebarOpenOnMobile(true);
  };

  const closeSidebar = () => {
    setSidebarOpenOnMobile(false);
  };

  return { isMobile, isSidebarOpenOnMobile, openSidebar, closeSidebar };
};
