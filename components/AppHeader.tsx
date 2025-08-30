import React from 'react';
import type { User } from '@supabase/supabase-js';
import { LOGO_URL } from '../constants';
import { useLang } from '../context/LanguageContext';
import { View } from '../types';

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
        <h1>{t('appTitle')}</h1>
        <div className="header-right">
            {currentUser && (
                <>
                    <span className="user-info" title={currentUser.email}>
                        {currentUser.email}
                    </span>
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