import { CSSProperties } from 'react';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    quote: CSSProperties;
  }

  interface TypographyVariantsOptions {
    quote?: CSSProperties;
  }
}
