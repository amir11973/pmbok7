import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { Language } from '../types';
import { translations, TranslationKey } from '../translations';

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>(null!);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    }, [lang]);

    const toggleLang = () => {
        setLang(prevLang => prevLang === 'en' ? 'fa' : 'en');
    };

    const t = (key: TranslationKey) => {
        return translations[key][lang];
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
