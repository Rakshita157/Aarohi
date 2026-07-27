/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const stored = localStorage.getItem('language');
      return stored === 'hi' || stored === 'en' ? stored : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    if (lang === 'en' || lang === 'hi') {
      setLanguageState(lang);
      try {
        localStorage.setItem('language', lang);
      } catch {
        // Silently fail if localStorage is disabled
      }
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  }, [language, setLanguage]);

  // Translate helper supporting nested keys like "home.hero.title"
  const t = useCallback((key) => {
    const keys = key.split('.');
    
    // Attempt lookup in the active language
    let activeResult = translations[language];
    for (const k of keys) {
      if (activeResult && activeResult[k] !== undefined) {
        activeResult = activeResult[k];
      } else {
        activeResult = undefined;
        break;
      }
    }

    if (activeResult !== undefined) {
      return activeResult;
    }

    // Fallback to English translation
    let fallbackResult = translations['en'];
    for (const k of keys) {
      if (fallbackResult && fallbackResult[k] !== undefined) {
        fallbackResult = fallbackResult[k];
      } else {
        fallbackResult = undefined;
        break;
      }
    }

    return fallbackResult !== undefined ? fallbackResult : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
