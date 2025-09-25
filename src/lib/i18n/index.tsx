import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

// Get device locale safely (Expo SDK 53+)
const [{ languageTag }] = Localization.getLocales();
const deviceLocale = getLanguage() || languageTag || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLocale,
  fallbackLng: 'en',
  compatibilityJSON: 'v3', // By default React Native projects do not support Intl

  interpolation: {
    escapeValue: false, // escape passed in values to avoid XSS injections
  },
});

// Is it a RTL language?
export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export default i18n;
