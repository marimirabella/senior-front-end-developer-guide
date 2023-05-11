'use client';

import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { Locale } from '../constants';

import { getClientI18nOptions } from './getIClient18nOptions';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../dictionaries/${language}/${namespace}.json`),
    ),
  )
  .init(getClientI18nOptions());

export const useClientTranslationWithLang = (
  lang: Locale,
  ns?: string,
  options?: UseTranslationOptions<string>,
): UseTranslationResponse<Locale, string> => {
  if (i18next.resolvedLanguage !== lang) {
    i18next.changeLanguage(lang);
  }

  return useTranslationOrg(ns, options);
};
