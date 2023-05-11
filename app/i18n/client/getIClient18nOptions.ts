import { defaultNS, i18nOptions } from '../constants';

export const getClientI18nOptions = () => ({
  ...i18nOptions,
  fallbackNS: defaultNS,
  defaultNS,
});
