import { defaultLocale, i18nOptions } from '../constants';

import { getTranslations } from './getDictionary';

export const getI18nOptions = async (lang = defaultLocale) => ({
  ...i18nOptions,
  lng: lang,
  // * comment this line and uncomment below ones if i18next-resources-to-backend is used
  resources: await getTranslations(),
});

// * Use this version if i18next-resources-to-backend package is used
// export const getI18nOptions = async (lang = defaultLocale, ns = defaultNS) => ({
//   ...i18nOptions,
//   lng: lang,
//   fallbackNS: defaultNS,
//   defaultNS,
//   ns,
// });
