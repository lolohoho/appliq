// src/context/LanguageContext.tsx
import React, { createContext, useContext } from 'react';
import { translations } from '@/contants';

type Language = 'fr' | 'en';
type Translations = typeof translations[Language];

const LanguageContext = createContext<Translations>(translations.en);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang = (window.APP_LANG || 'en') as Language;
  const t = translations[lang] || translations.en; // Fallback sur anglais

  return <LanguageContext.Provider value={t}>{children}</LanguageContext.Provider>;
};

export const useTranslations = () => useContext(LanguageContext);