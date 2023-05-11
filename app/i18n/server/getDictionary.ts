import 'server-only';

import { ResourceLanguage } from 'i18next';

import { Locale } from '../constants';

const dictionaries = {
  [Locale.En]: () =>
    import('../dictionaries/en/translation.json').then(
      (module) => module.default,
    ),
  [Locale.Ua]: () =>
    import('../dictionaries/ua/translation.json').then(
      (module) => module.default,
    ),
} as Record<Locale, () => Promise<ResourceLanguage>>;

export const getDictionary = async (
  locale: Locale,
): Promise<ResourceLanguage> => dictionaries[locale]();

export const getTranslations = async (): Promise<
  Record<Locale, ResourceLanguage>
> => {
  let resourcesByLocale = {} as Promise<Record<Locale, ResourceLanguage>>;

  for (const locale in dictionaries) {
    resourcesByLocale = {
      ...resourcesByLocale,
      [locale as Locale]: {
        translation: await getDictionary(locale as Locale),
      },
    };
  }

  return resourcesByLocale;
};
