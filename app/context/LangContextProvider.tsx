'use client';

import { FC } from 'react';

import { AppLanguage, Locale } from '../i18n';
import { ComponentWithChildren } from '../interfaces';

import { LangContext } from './useLang';

export interface LangContextProviderProps extends ComponentWithChildren {
  lang: Locale;
}

export const LangContextProvider: FC<LangContextProviderProps> = ({
  lang,
  children,
}) => {
  const contextValue: AppLanguage = { lang };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};
