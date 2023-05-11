import { FC } from 'react';

import { SvgIconProps } from '@mui/material/SvgIcon';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';

export const brReactElementType = 'br';

export enum IconListType {
  Minus = 'minus',
  Plus = 'plus',
  Default = 'default',
  Nested = 'nested',
}

export const iconByListType: Record<IconListType, FC<SvgIconProps>> = {
  [IconListType.Default]: DataUsageIcon,
  [IconListType.Minus]: RemoveIcon,
  [IconListType.Plus]: AddIcon,
  [IconListType.Nested]: BlurCircularIcon,
};
