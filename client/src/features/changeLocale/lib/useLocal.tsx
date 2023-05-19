import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from '../../../../config/i18next/i18n';

import { LocalStorageKey } from '../../../shared/config/constants/localStorage';

export const useLocal = (): (() => void) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem(LocalStorageKey.language) ?? SupportedLanguages.en
  );

  useEffect(() => {
    if (language) {
      void i18n.changeLanguage(language);
    }
  }, [i18n]);

  const toggleLocal = (): void => {
    const newLanguage =
      language === SupportedLanguages.en ? SupportedLanguages.ru : SupportedLanguages.en;

    setLanguage(newLanguage);
    localStorage.setItem(LocalStorageKey.language, newLanguage);
    void i18n.changeLanguage(newLanguage);
  };

  return toggleLocal;
};
