import React from 'react';
import { useLang } from '../context/LanguageContext';
import { View, QuizMode } from '../types';

interface MainMenuProps {
    setView: (view: View) => void;
    setCurrentChapterId: (id: string | null) => void;
    setQuizMode: (mode: QuizMode) => void;
}

export const MainMenu = ({ setView, setCurrentChapterId, setQuizMode }: MainMenuProps) => {
    const { t } = useLang();

    const handleMenuClick = (view: View) => {
        setView(view);
    };

    return (
        <main className="container main-menu">
            <h2 className="main-menu-header">{t('mainMenuTitle')}</h2>
            <div className="main-menu-grid">
                <div className="main-menu-card" onClick={() => handleMenuClick('principles_list')}>
                    <div className="main-menu-icon">📖</div>
                    <div className="main-menu-title">{t('principlesTitle')}</div>
                </div>
                <div className="main-menu-card" onClick={() => handleMenuClick('domains_list')}>
                    <div className="main-menu-icon">🌐</div>
                    <div className="main-menu-title">{t('domainsTitle')}</div>
                </div>
                <div className="main-menu-card" onClick={() => handleMenuClick('comprehensive_quizzes_list')}>
                    <div className="main-menu-icon">🏆</div>
                    <div className="main-menu-title">{t('comprehensiveQuizzesTitle')}</div>
                </div>
            </div>
            <div className="report-card-button-container">
                <button className="btn btn-primary btn-large" onClick={() => setView('report_card')}>
                    {t('viewReportCard')}
                </button>
            </div>
        </main>
    );
};
