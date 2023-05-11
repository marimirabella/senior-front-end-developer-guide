'use client';

import { createTheme } from '@mui/material/styles';

import { ColorTheme, ThemeColor, ThemeFont, ThemeFontSize } from './constants';

export const theme = createTheme({
  palette: {
    mode: ColorTheme.Dark,
    primary: {
      main: ThemeColor.Blue,
      dark: ThemeColor.Grey,
    },
  },
  typography: {
    fontSize: 19,
    fontFamily: ThemeFont.LatoSerif,
    body2: {
      fontSize: ThemeFontSize.Body2,
    },
    h1: {
      fontFamily: ThemeFont.Lato,
      fontSize: ThemeFontSize.H1,
    },
    h2: {
      fontFamily: ThemeFont.Lato,
      fontSize: ThemeFontSize.H2,
      color: ThemeColor.Blue,
    },
    h3: {
      fontFamily: ThemeFont.Lato,
      fontSize: ThemeFontSize.H3,
      color: ThemeColor.Blue,
    },
    h4: {
      fontFamily: ThemeFont.Lato,
      fontSize: ThemeFontSize.H4,
    },
    h5: {
      fontFamily: ThemeFont.Lato,
      fontSize: ThemeFontSize.H5,
    },
    h6: {
      fontFamily: ThemeFont.Lato,
    },
    subtitle1: {
      fontFamily: ThemeFont.Lato,
    },
    subtitle2: {
      fontFamily: ThemeFont.Lato,
    },
    quote: {
      fontSize: ThemeFontSize.Quote,
    },
  },
});
