import { initReactI18next } from 'react-i18next/initReactI18next';

import { createInstance, i18n as I18N } from 'i18next';

import { Locale } from '../constants';

import { getI18nOptions } from './getI18nOptions';

const initLocalization = async (lang: Locale): Promise<I18N> => {
  // * i18next singleton is not used here, instead a new instance on each useTranslation call
  // * because during compilation everything seems to be executed in parallel
  // * Having a separate instance will keep the translations consistent.
  const i18nInstance = createInstance();

  await i18nInstance.use(initReactI18next).init(await getI18nOptions(lang));

  return i18nInstance;
};

export const getI18NServer = async (lang: Locale): Promise<I18N> => {
  const i18next = await initLocalization(lang);

  return i18next;
};

// * Use those functions instead if i18next-resources-to-backend package is used
// const initLocalization = async (lang: Locale, ns?: string): Promise<I18N> => {
// * i18next singleton is not used here, instead a new instance on each useTranslation call
// * because during compilation everything seems to be executed in parallel
// * Having a separate instance will keep the translations consistent.
//   const i18nInstance = createInstance();

//   await i18nInstance
//     .use(initReactI18next)
//     .use(
//       resourcesToBackend(
//         (language: string, namespace: string) =>
//           import(`../dictionaries/${language}/${namespace}.json`)
//       )
//     )
//     .init(await getI18nOptions(lang, ns));

//   return i18nInstance;
// };

// export const getI18NServer = async (
//   lang: Locale,
//   ns?: string,
//   keyPrefix?: string,
// ): Promise<I18N> => {
//   const i18next = await initLocalization(lang);

//   return {
//     t: i18next.getFixedT<Locale, string>(
//       lang,
//       Array.isArray(ns) ? ns[0] : ns,
//       keyPrefix,
//     ),
//     i18n: i18next,
//   };
// };
