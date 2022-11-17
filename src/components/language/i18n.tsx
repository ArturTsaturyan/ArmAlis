import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './ENG/en';
import ru from './RUS/rus';
import hy from './ARM/hy';

const resources = {
  hy: {
    translation: {
      ...hy,
    },
  },
  ru: {
    translation: {
      ...ru,
    },
  },
  en: {
    translation: {
      ...en,
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['hy', 'ru', 'en'],
    resources,
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
