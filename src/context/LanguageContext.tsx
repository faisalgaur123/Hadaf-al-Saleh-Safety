import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  dir: "ltr" | "rtl";
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial language from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved === "en" || saved === "ar" ? saved : "en";
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const isAr = language === "ar";

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      // Force font family swap or other layout tweaks on html element if needed
      if (language === "ar") {
        document.documentElement.style.fontFamily = "'Cairo', 'Inter', sans-serif";
      } else {
        document.documentElement.style.fontFamily = "'Inter', sans-serif";
      }
    }
  }, [language, dir]);

  const t = (key: keyof typeof translations.en): string => {
    const translationSet = translations[language] || translations.en;
    return translationSet[key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isAr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
