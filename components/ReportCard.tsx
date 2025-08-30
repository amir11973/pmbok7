import React, { useMemo } from 'react';
import { useLang } from '../context/LanguageContext';
import { getLocalized, getScoreColorClass } from '../utils/helpers';
import { pmbokData } from '../data';
import { Results, View } from '../types';

interface ReportCardProps {
    results: Results;
    setView: (view: View) => void;
    onReview: (chapterId: string) => void;
}

const ChapterResultItem = ({ item, result, onReview, lang, t }: any) => {
    if (!result) return null;
    const percentage = Math.round((result.score / result.total) * 100);
    const progressClass = getScoreColorClass(percentage);
    return (
        <li className="chapter-result-item" onClick={() => onReview(item.id)}>
            <span className="chapter-result-title">{getLocalized(item.title, lang)}</span>
            <div className="progress-bar-container">
                <div className="progress-bar-bg">
                    <div className={`progress-bar-fg ${progressClass}`} style={{ width: `${percentage}%` }}></div>
                </div>
                <span className="progress-bar-label">{percentage}%</span>
            </div>
        </li>
    );
}

export const ReportCard = ({ results, setView, onReview }: ReportCardProps) => {
    const { lang, t } = useLang();

    const { principles, domains, comprehensive } = useMemo(() => {
        return {
            principles: pmbokData.principles.filter(c => results[c.id]),
            domains: pmbokData.domains.filter(c => results[c.id]),
            comprehensive: [1, 2, 3, 4].map(num => ({
                id: `comp_${num}`,
                title: { en: `Comprehensive Quiz #${num}`, fa: `${t('comprehensiveQuizPrefix')} #${num}`},
            })).filter(q => results[q.id]),
        };
    }, [results, t]);

    const { totalScore, totalQuestions, correctAnswers } = useMemo(() => {
        let totalQuestions = 0;
        let correctAnswers = 0;
        Object.values(results).forEach(res => {
            totalQuestions += res.total;
            correctAnswers += res.score;
        });
        const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        return { totalScore: scorePercentage, totalQuestions, correctAnswers };
    }, [results]);
    
    const scoreClass = getScoreColorClass(totalScore);

    return (
        <div className="container">
            <div className="report-card">
                <button className="btn back-button" onClick={() => setView('main_menu')}>{t('backToMenu')}</button>
                <h2>{t('reportCardTitle')}</h2>
                
                <div className="report-overall-score">
                    <div className={`score-circle ${scoreClass}`}>
                        <div className={`score-percentage ${scoreClass}`}>{totalScore}%</div>
                        <div className="score-label">{t('totalScore')}</div>
                    </div>
                </div>
                 <p>{`${t('reportSummaryText')} ${totalQuestions} ${t('reportSummaryQuestions')} ${t('reportSummaryAnd')} ${correctAnswers} ${t('reportSummaryCorrect')}`}</p>

                <div className="report-details-grid">
                    <div className="report-section">
                       <h3>{t('principlesTitle')}</h3>
                       <ul className="chapter-results-list">
                            {principles.map(p => <ChapterResultItem key={p.id} item={p} result={results[p.id]} onReview={onReview} lang={lang} t={t} />)}
                            {principles.length === 0 && <p>No quizzes completed yet.</p>}
                       </ul>
                        
                       <h3 style={{marginTop: '30px'}}>{t('domainsTitle')}</h3>
                       <ul className="chapter-results-list">
                           {domains.map(d => <ChapterResultItem key={d.id} item={d} result={results[d.id]} onReview={onReview} lang={lang} t={t} />)}
                            {domains.length === 0 && <p>No quizzes completed yet.</p>}
                       </ul>
                    </div>

                    <div className="report-section">
                        <h3>{t('comprehensiveQuizzesTitle')}</h3>
                        <ul className="chapter-results-list">
                             {comprehensive.map(c => <ChapterResultItem key={c.id} item={c} result={results[c.id]} onReview={onReview} lang={lang} t={t} />)}
                              {comprehensive.length === 0 && <p>No quizzes completed yet.</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
