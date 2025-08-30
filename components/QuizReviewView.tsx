import React, { useMemo } from 'react';
import { useLang } from '../context/LanguageContext';
import { findChapterById, getLocalized } from '../utils/helpers';
import { View, Results, Question } from '../types';

interface QuizReviewViewProps {
    chapterId: string;
    setView: (view: View) => void;
    results: Results;
}

export const QuizReviewView = ({ chapterId, setView, results }: QuizReviewViewProps) => {
    const { lang, t } = useLang();
    const result = results[chapterId];

    const { questions, quizTitle } = useMemo(() => {
        let questions: Question[] = [];
        let title = '';
        if (chapterId.startsWith('comp_')) {
            questions = result?.questions || [];
            const quizNum = chapterId.split('_')[1];
            title = `${t('comprehensiveQuizPrefix')} #${quizNum}`;
        } else {
            const chapter = findChapterById(chapterId);
            questions = chapter?.questions || [];
            title = chapter ? getLocalized(chapter.title, lang) : '';
        }
        return { questions, quizTitle: title };
    }, [chapterId, result, lang, t]);


    if (!result || !questions.length) {
        return <div className="container">No results to review.</div>;
    }

    const handleFinish = () => {
        let backView: View = 'main_menu';
        if (chapterId.startsWith('p')) backView = 'principles_list';
        else if (chapterId.startsWith('d')) backView = 'domains_list';
        else if (chapterId.startsWith('comp_')) backView = 'comprehensive_quizzes_list';
        setView(backView);
    };

    return (
        <div className="container">
            <div className="quiz-container">
                <h3>{t('quizReviewTitle')}: {quizTitle}</h3>
                <div className="quiz-results-summary">
                    <strong>{t('scoreHeader')}: {result.score} / {result.total} ({Math.round((result.score/result.total)*100)}%)</strong>
                </div>

                {questions.map((q, qIndex) => {
                    const userAnswer = result.answers[qIndex];
                    return (
                        <div key={qIndex} className="question-block">
                            <p className="question-text">{`${qIndex + 1}. ${getLocalized(q.question, lang)}`}</p>
                            <ul className="options-list">
                                {q.options.map((option, oIndex) => {
                                    let className = 'option-item';
                                    if (oIndex === q.correctAnswer) {
                                        className += ' correct';
                                    } else if (oIndex === userAnswer) {
                                        className += ' incorrect';
                                    }

                                    return (
                                        <li key={oIndex} className={className}>
                                            <input
                                                type="radio"
                                                id={`q${qIndex}o${oIndex}`}
                                                name={`q${qIndex}-review`}
                                                checked={userAnswer === oIndex}
                                                disabled
                                            />
                                            <label htmlFor={`q${qIndex}o${oIndex}`}>{getLocalized(option, lang)}</label>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="explanation">
                                <strong>{t('explanationLabel')}</strong>
                                {getLocalized(q.explanation, lang)}
                            </div>
                        </div>
                    );
                })}

                <div className="quiz-actions">
                    <button className="btn btn-secondary btn-large" onClick={handleFinish}>
                        {t('finishQuiz')}
                    </button>
                </div>
            </div>
        </div>
    );
};
