import { useClientTranslationWithLang } from '../i18n/client';
import { useLangContext } from '../context';

export const useClientTranslation = () => {
  const { lang } = useLangContext();

  return useClientTranslationWithLang(lang);
};
