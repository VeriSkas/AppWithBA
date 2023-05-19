import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const SupportedLanguages = {
  en: 'en',
  ru: 'ru',
};

void i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: JSON.parse(_IS_DEV_),
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: SupportedLanguages.en,
    detection: {
      order: ['localStorage'],
    },
    ns: [],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
