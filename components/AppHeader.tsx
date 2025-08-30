import React from 'react';
import { LOGO_URL } from '../constants';
import { useLang } from '../context/LanguageContext';
// FIX: Import User type from local types.ts as it is not exported from supabase-js v1.
import { View, User } from '../types';

interface AppHeaderProps {
    currentUser: User | null;
    onLogout: () => void;
    setView: (view: View) => void;
}

export const AppHeader = ({ currentUser, onLogout, setView }: AppHeaderProps) => {
    const { lang, toggleLang, t } = useLang();
    const isAdmin = currentUser?.email === 'admin@pmbok.app'; // Example admin email

    return (
      <header className="app-header">
        <div className="header-left">
           <img src={LOGO_URL} alt="Pars PMI Logo" className="header-logo" />
        </div>
        <div className="header-title-container">
            <h1>{t('appTitle')}</h1>
            {currentUser && (
                <span className="user-info" title={currentUser.email}>
                    {currentUser.email}
                </span>
            )}
        </div>
        <div className="header-right">
            {currentUser && (
                <>
                    {isAdmin && (
                        <button onClick={() => setView('user_management')} className="user-management-btn">
                            {t('userManagementTitle')}
                        </button>
                    )}
                    <button onClick={onLogout} className="logout-btn">
                        {t('logoutButton')}
                    </button>
                </>
            )}
            <button onClick={toggleLang} className="lang-switcher">
                {lang === 'en' ? 'فارسی' : 'English'}
            </button>
        </div>
      </header>
    );
};
