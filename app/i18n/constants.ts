import { InitOptions } from 'i18next';

export enum Locale {
  En = 'en',
  Ua = 'ua',
}

export const defaultLocale = Locale.En;
export const locales = [Locale.En, Locale.Ua];

export const defaultNS = 'translation';

export const i18nOptions: InitOptions = {
  fallbackLng: defaultLocale,
  lowerCaseLng: true,
  lng: defaultLocale,
};
