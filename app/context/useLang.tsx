'use client';

import { createContext, useContext } from 'react';

import { defaultLocale, Locale } from '../i18n';

export interface LangContextProps {
  lang: Locale;
}

export const LangContext = createContext<LangContextProps>({
  lang: defaultLocale,
});

export const useLangContext = (): LangContextProps => useContext(LangContext);
