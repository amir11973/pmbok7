import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { findChapterById, getLocalized } from '../utils/helpers';
import { View, QuizMode, Chapter } from '../types';

interface ChapterViewProps {
    chapterId: string;
    setView: (view: View) => void;
    setQuizMode: (mode: QuizMode) => void;
}

export const ChapterView = ({ chapterId, setView, setQuizMode }: ChapterViewProps) => {
    const { lang, t } = useLang();
    const [chapter, setChapter] = useState<Chapter | undefined>();
    const [showQuizPrompt, setShowQuizPrompt] = useState(false);
    const endOfContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chapterData = findChapterById(chapterId);
        setChapter(chapterData);
        setShowQuizPrompt(false); // Reset on chapter change
    }, [chapterId]);

    useEffect(() => {
        if (!chapter) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowQuizPrompt(true);
                    observer.disconnect();
                }
            },
            { threshold: 1.0 }
        );

        if (endOfContentRef.current) {
            observer.observe(endOfContentRef.current);
        }

        return () => observer.disconnect();
    }, [chapter]);

    if (!chapter) {
        return <div className="container">Loading...</div>;
    }

    const handleStartQuiz = () => {
        setQuizMode('chapter');
        setView('quiz');
    };

    const handleGoBack = () => {
        const backView = chapter.id.startsWith('p') ? 'principles_list' : 'domains_list';
        setView(backView);
    };

    return (
        <div className="container">
            <div className="chapter-view">
                <button className="btn back-button" onClick={handleGoBack}>{t('back')}</button>
                <h2>{getLocalized(chapter.title, lang)}</h2>
                
                <div className="summary">
                    <h3>{t('chapterSummaryTitle')}</h3>
                    <ul>
                        {chapter.summary.map((point, index) => (
                            <li key={index}>{getLocalized(point, lang)}</li>
                        ))}
                    </ul>
                </div>

                <div className="chapter-prose-summary">
                    <h3>{t('proseSummaryTitle')}</h3>
                    <div dangerouslySetInnerHTML={{ __html: getLocalized(chapter.proseSummary, lang).replace(/\n/g, '<br /><br />') }}></div>
                </div>
                
                <div id="scroll-end-marker" ref={endOfContentRef}></div>

                {showQuizPrompt && (
                    <div className="quiz-prompt">
                        <p>{t('quizPromptText')}</p>
                        <div className="quiz-prompt-buttons">
                            <button className="btn btn-secondary" onClick={handleStartQuiz}>{t('yesReady')}</button>
                            <button className="btn btn-danger" onClick={() => setShowQuizPrompt(false)}>{t('noGoBack')}</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
