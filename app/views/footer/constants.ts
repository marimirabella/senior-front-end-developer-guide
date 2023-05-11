import { SxProps } from '@mui/material/styles';

import { mobileContentAlignment } from '../../constants';
import { DeviceBreakpoint } from '../../../theme';

export const guideFooterHeight = '64px';

export const footerToolbarAlignment = {
  ...mobileContentAlignment,
  [DeviceBreakpoint.Lg]: 13,
};

export const footerStyles: SxProps = {
  zIndex: 'drawer',
};
