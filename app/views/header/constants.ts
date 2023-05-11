import { DeviceBreakpoint } from '../../../theme';
import { sidebarWidth } from '../sidebar';

export const guideHeaderHeight = '64px';

export const contentWidth: Record<DeviceBreakpoint.Md, string> = {
  [DeviceBreakpoint.Md]: `calc(100% - ${sidebarWidth}px)`,
};

export const displayOnlyOnMobile: Record<DeviceBreakpoint.Md, string> = {
  [DeviceBreakpoint.Md]: 'none',
};
