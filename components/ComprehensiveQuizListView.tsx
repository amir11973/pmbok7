import React from 'react';
import { useLang } from '../context/LanguageContext';
import { View, QuizMode, Results } from '../types';

interface ComprehensiveQuizListViewProps { 
    setView: (view: View) => void;
    setCurrentChapterId: (id: string) => void;
    setQuizMode: (mode: QuizMode) => void;
    results: Results;
}

export const ComprehensiveQuizListView = ({ setView, setCurrentChapterId, setQuizMode, results }: ComprehensiveQuizListViewProps) => {
    const { t } = useLang();
    const quizzes = [1, 2, 3, 4];

    const handleQuizClick = (quizNumber: number) => {
        const quizId = `comp_${quizNumber}`;
        setCurrentChapterId(quizId);
        setQuizMode('comprehensive');
        
        if (results[quizId]) {
            setView('quiz_review');
        } else {
            setView('quiz');
        }
    };

    return (
        <div className="container chapter-list-view">
            <div className="view-header">
                <button className="btn back-button-subview" onClick={() => setView('main_menu')}>{t('backToMenu')}</button>
                <h2 className="section-title">{t('comprehensiveQuizzesTitle')}</h2>
            </div>
            <div className="chapters-grid">
                {quizzes.map(num => {
                    const quizId = `comp_${num}`;
                    return (
                        <div key={quizId} className={`chapter-card ${results[quizId] ? 'completed' : ''}`} onClick={() => handleQuizClick(num)}>
                            {results[quizId] && <span className="completion-mark">✓</span>}
                            <div className="chapter-icon">🏆</div>
                            <h3 className="chapter-title">{`${t('comprehensiveQuizPrefix')} #${num}`}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};