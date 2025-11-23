
import React, { useContext, createContext, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { storage } from '../../services/storage';
import { translations } from '../../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    (async () => {
      const saved = await storage.get('language', 'en');
      setLanguage(saved);
    })();
  }, []);

  const toggleLanguage = async () => {
    const next = language === 'en' ? 'ar' : 'en';
    setLanguage(next);
    await storage.set('language', next);

    // RTL handling (note: may require app reload)
    const isRTL = next === 'ar';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
      // In real app, you usually show a note and ask user to restart app.
    }
  };

  const t = (key) => translations[language][key] || key;

  const value = { language, toggleLanguage, t, isRTL: language === 'ar' };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
