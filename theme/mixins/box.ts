'use client';

import {
  palette,
  spacing,
  borders,
  display,
  flexbox,
  grid,
  positions,
  shadows,
  sizing,
  typography,
  compose,
} from '@mui/system';

export const boxSystem = compose(
  borders,
  palette,
  spacing,
  display,
  flexbox,
  grid,
  positions,
  shadows,
  sizing,
  typography,
);
