
import React, { useState, useCallback } from 'react';
import { QUIZ_CATEGORIES } from './constants';
import CategorySelectionScreen from './components/CategorySelectionScreen';
import QuizScreen from './components/QuizScreen';
import ChapterResultScreen from './components/ChapterResultScreen';
import OverallResultsScreen from './components/OverallResultsScreen';
import type { AppView, QuizCategory, AllUserAnswers, AllCategoryScores, UserAnswersForCategory } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('categorySelection');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [allUserAnswers, setAllUserAnswers] = useState<AllUserAnswers>({});
  const [allCategoryScores, setAllCategoryScores] = useState<AllCategoryScores>({});

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentView('quiz');
  }, []);

  const handleSubmitQuiz = useCallback((categoryId: string, answers: UserAnswersForCategory) => {
    const category = QUIZ_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    let correctCount = 0;
    category.questions.forEach(q => {
      if (answers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });
    
    const totalQuestions = category.questions.length;
    const answeredQuestions = Object.keys(answers).length;

    setAllUserAnswers(prev => ({ ...prev, [categoryId]: answers }));
    setAllCategoryScores(prev => ({
      ...prev,
      [categoryId]: {
        correct: correctCount,
        incorrect: answeredQuestions - correctCount,
        total: totalQuestions,
        answered: answeredQuestions
      }
    }));
    setSelectedCategoryId(categoryId); 
    setCurrentView('chapterResult');
  }, []);

  const handleNavigateToOverallResults = useCallback(() => {
    setCurrentView('overallResults');
  }, []);

  const handleNavigateToCategorySelection = useCallback(() => {
    setCurrentView('categorySelection');
    setSelectedCategoryId(null); 
  }, []);

  const selectedCategory = QUIZ_CATEGORIES.find(c => c.id === selectedCategoryId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-slate-100 flex flex-col items-center p-4 sm:p-8 selection:bg-sky-500 selection:text-white">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 tracking-tight">
          PMP Prep Quiz (PMBOK 7 Based)
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Test your skills in Project Principles and Performance Domains</p>
      </header>

      <main className="w-full max-w-4xl bg-slate-800 shadow-2xl rounded-xl p-6 sm:p-8">
        {currentView === 'categorySelection' && (
          <CategorySelectionScreen
            categories={QUIZ_CATEGORIES}
            categoryScores={allCategoryScores}
            onSelectCategory={handleSelectCategory}
            onShowOverallResults={handleNavigateToOverallResults}
          />
        )}
        {currentView === 'quiz' && selectedCategory && (
          <QuizScreen
            category={selectedCategory}
            onSubmitQuiz={handleSubmitQuiz}
            onBack={handleNavigateToCategorySelection}
          />
        )}
        {currentView === 'chapterResult' && selectedCategory && allCategoryScores[selectedCategory.id] && (
          <ChapterResultScreen
            category={selectedCategory}
            userAnswers={allUserAnswers[selectedCategory.id] || {}}
            score={allCategoryScores[selectedCategory.id]}
            onBack={handleNavigateToCategorySelection}
          />
        )}
        {currentView === 'overallResults' && (
          <OverallResultsScreen
            categories={QUIZ_CATEGORIES}
            allCategoryScores={allCategoryScores}
            onBack={handleNavigateToCategorySelection}
          />
        )}
      </main>
      <footer className="mt-12 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} PMP Quiz App. Inspired by PMBOK&reg; Guide - Seventh Edition.</p>
         <p>PMBOK is a registered trademark of the Project Management Institute (PMI).</p>
      </footer>
    </div>
  );
};

export default App;
