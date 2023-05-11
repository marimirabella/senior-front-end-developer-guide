'use client';

import { FC, ReactNode } from 'react';

import { getInitColorSchemeScript, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../../theme';

export interface MuiThemeProviderProps {
  children: ReactNode;
}

export const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => (
  <>
    {getInitColorSchemeScript()}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>
);
