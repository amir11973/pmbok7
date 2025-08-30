import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLang } from '../context/LanguageContext';
import { findChapterById, getLocalized } from '../utils/helpers';
import { pmbokData } from '../data';
import { View, QuizMode, Question, QuizCompletionData } from '../types';
import { COMPREHENSIVE_QUIZ_DURATION, COMPREHENSIVE_QUIZ_QUESTIONS_COUNT } from '../constants';

interface QuizViewProps {
    chapterId: string;
    quizMode: QuizMode;
    setView: (view: View) => void;
    saveResult: (id: string, result: QuizCompletionData) => Promise<void>;
}

export const QuizView = ({ chapterId, quizMode, setView, saveResult }: QuizViewProps) => {
    const { lang, t } = useLang();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const [timeLeft, setTimeLeft] = useState(COMPREHENSIVE_QUIZ_DURATION);

    const quizTitle = useMemo(() => {
        if (quizMode === 'comprehensive') {
            const quizNum = chapterId.split('_')[1];
            return `${t('comprehensiveQuizPrefix')} #${quizNum}`;
        }
        const chapter = findChapterById(chapterId);
        return chapter ? getLocalized(chapter.title, lang) : t('quizTitle');
    }, [quizMode, chapterId, lang, t]);
    
    const handleSubmit = useCallback(async () => {
        let score = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                score++;
            }
        });

        const resultData: QuizCompletionData = {
            score,
            total: questions.length,
            answers,
        };
        
        if (quizMode === 'comprehensive') {
            resultData.questions = questions;
        }

        await saveResult(chapterId, resultData);
        setView('quiz_review');
    }, [questions, answers, quizMode, chapterId, saveResult, setView]);

    useEffect(() => {
        if (quizMode === 'chapter') {
            const chapter = findChapterById(chapterId);
            if (chapter) {
                setQuestions(chapter.questions);
            }
        } else {
            const allQuestions = [...pmbokData.principles, ...pmbokData.domains].flatMap(c => c.questions);
            const shuffled = allQuestions.sort(() => 0.5 - Math.random());
            setQuestions(shuffled.slice(0, COMPREHENSIVE_QUIZ_QUESTIONS_COUNT));
        }
    }, [chapterId, quizMode]);
    
    useEffect(() => {
        if (quizMode === 'comprehensive' && questions.length > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        handleSubmit();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [quizMode, questions, handleSubmit]);

    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="container">
            <div className="quiz-container">
                <h3>{quizTitle}</h3>

                {quizMode === 'comprehensive' && (
                    <>
                        <div className={`quiz-timer ${timeLeft < 60 ? 'low-time' : ''}`}>
                            {t('timeRemaining')}: {formatTime(timeLeft)}
                        </div>
                        {timeLeft === 0 && <div className="time-up-alert">{t('timeUpMessage')}</div>}
                    </>
                )}

                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="question-block">
                        <p className="question-text">{`${qIndex + 1}. ${getLocalized(q.question, lang)}`}</p>
                        <ul className="options-list">
                            {q.options.map((option, oIndex) => (
                                <li key={oIndex} className="option-item">
                                    <input
                                        type="radio"
                                        id={`q${qIndex}o${oIndex}`}
                                        name={`q${qIndex}`}
                                        checked={answers[qIndex] === oIndex}
                                        onChange={() => handleOptionChange(qIndex, oIndex)}
                                    />
                                    <label htmlFor={`q${qIndex}o${oIndex}`}>{getLocalized(option, lang)}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="quiz-actions">
                    <button className="btn btn-primary btn-large" onClick={handleSubmit} disabled={Object.keys(answers).length !== questions.length}>
                        {t('submitAnswers')}
                    </button>
                </div>
            </div>
        </div>
    );
};