import { SxProps } from '@mui/material/styles';

import { contentWidth, guideHeaderHeight } from '../header';
import { guideFooterHeight } from '../footer';

export const guideLayoutTopBottomPadding = '40px';

export const gridStyles: SxProps = {
  width: { ...contentWidth },
  paddingTop: `calc(${guideHeaderHeight} + ${guideLayoutTopBottomPadding})`,
  paddingBottom: `calc(${guideFooterHeight} + ${guideLayoutTopBottomPadding})`,
};
