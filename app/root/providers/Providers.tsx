import { FC } from 'react';

import { LangContextProvider } from '../../context';
import { Locale } from '../../i18n';
import { ComponentWithChildren } from '../../interfaces';

import { MuiThemeProvider } from './MUIThemeProvider';

export interface ProvidersProps extends ComponentWithChildren {
  lang: Locale;
}

export const Providers: FC<ProvidersProps> = ({ lang, children }) => (
  <MuiThemeProvider>
    {/* <StyledComponentsRegistry> */}
    <LangContextProvider lang={lang}>{children}</LangContextProvider>
    {/* </StyledComponentsRegistry> */}
  </MuiThemeProvider>
);
