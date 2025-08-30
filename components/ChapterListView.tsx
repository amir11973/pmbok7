import React from 'react';
import { useLang } from '../context/LanguageContext';
import { pmbokData } from '../data';
import { getLocalized } from '../utils/helpers';
import { View, QuizMode, Results } from '../types';

interface ChapterListViewProps {
    type: 'principles' | 'domains';
    setView: (view: View) => void;
    setCurrentChapterId: (id: string) => void;
    results: Results;
    setQuizMode: (mode: QuizMode) => void;
}

export const ChapterListView = ({ 
    type,
    setView, 
    setCurrentChapterId,
    results,
    setQuizMode
}: ChapterListViewProps) => {
    const { lang, t } = useLang();
    const chapters = pmbokData[type];
    const title = type === 'principles' ? t('principlesTitle') : t('domainsTitle');

    const handleChapterClick = (id: string) => {
        setCurrentChapterId(id);
        setQuizMode('chapter');
        setView('chapter');
    };

    return (
        <div className="container chapter-list-view">
            <div className="view-header">
               <button className="btn back-button-subview" onClick={() => setView('main_menu')}>{t('backToMenu')}</button>
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="chapters-grid">
                {chapters.map(chapter => (
                    <div key={chapter.id} className={`chapter-card ${results[chapter.id] ? 'completed' : ''}`} onClick={() => handleChapterClick(chapter.id)}>
                        {results[chapter.id] && <span className="completion-mark">✓</span>}
                        <div className="chapter-icon">{chapter.icon}</div>
                        <h3 className="chapter-title">{getLocalized(chapter.title, lang)}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
