
import React from 'react';
import type { QuizCategory, AllCategoryScores, CategoryType } from '../types';
import { ArrowUturnLeftIcon, ChartBarIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

interface OverallResultsScreenProps {
  categories: QuizCategory[];
  allCategoryScores: AllCategoryScores;
  onBack: () => void;
}

const CategoryResultsSection: React.FC<{
  title: string;
  icon: React.ElementType;
  categoriesOfType: QuizCategory[];
  allCategoryScores: AllCategoryScores;
}> = ({ title, icon: Icon, categoriesOfType, allCategoryScores }) => {
  const attemptedCategories = categoriesOfType.filter(category => allCategoryScores[category.id] && allCategoryScores[category.id].answered > 0);

  if (attemptedCategories.length === 0) {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-sky-200 mb-3 flex items-center">
          <Icon className="w-6 h-6 mr-2 text-sky-400" />
          {title}
        </h3>
        <p className="text-slate-400">You haven't taken any quizzes in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-sky-200 mb-4 flex items-center">
        <Icon className="w-7 h-7 mr-3 text-sky-400" />
        {title}
      </h3>
      <div className="space-y-4">
        {attemptedCategories.map(category => {
          const score = allCategoryScores[category.id];
          if (!score) return null; // Should not happen due to filter
          const percentage = score.answered > 0 ? Math.round((score.correct / score.answered) * 100) : 0;
          return (
            <div key={category.id} className="bg-slate-700 p-5 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-sky-300 mb-2">{category.name}</h4>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                 <p className="text-slate-300 mb-1 sm:mb-0">
                    Score: <span className="font-bold">{score.correct}</span> / {score.answered} answered (of {score.total} total)
                 </p>
                 <p className={`font-bold ${percentage >= 60 ? 'text-green-400' : 'text-red-400'}`}>
                    {percentage}% Correct
                 </p>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2.5 mt-2" aria-label={`Progress bar for ${category.name}`}>
                <div 
                    className={`${percentage >=60 ? 'bg-green-500' : 'bg-red-500'} h-2.5 rounded-full`}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
              </div>
               {score.answered < score.total && (
                <p className="text-xs text-yellow-400 mt-1 text-left">Quiz for this section is incomplete.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


const OverallResultsScreen: React.FC<OverallResultsScreenProps> = ({ categories, allCategoryScores, onBack }) => {
  const allAttemptedCategories = categories.filter(category => allCategoryScores[category.id] && allCategoryScores[category.id].answered > 0);
  
  const totalCorrectOverall = allAttemptedCategories.reduce((sum, category) => sum + (allCategoryScores[category.id]?.correct || 0), 0);
  const totalAnsweredOverall = allAttemptedCategories.reduce((sum, category) => sum + (allCategoryScores[category.id]?.answered || 0), 0);
  const overallPercentage = totalAnsweredOverall > 0 ? Math.round((totalCorrectOverall / totalAnsweredOverall) * 100) : 0;

  const principles = categories.filter(c => c.type === 'principle');
  const performanceDomains = categories.filter(c => c.type === 'performanceDomain');

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-300 flex items-center">
            <ChartBarIcon className="w-8 h-8 mr-3 text-sky-400" />
            Overall Test Report Card
        </h2>
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded-lg shadow transition-colors flex items-center"
          aria-label="Back to category selection"
        >
          <ArrowUturnLeftIcon className="w-5 h-5 mr-2" />
          Back
        </button>
      </div>

      {allAttemptedCategories.length === 0 ? (
        <p className="text-center text-slate-400 text-xl">You haven't taken any quizzes yet.</p>
      ) : (
        <>
          <div className="bg-slate-700 p-6 rounded-xl shadow-xl mb-10 text-center">
            <h3 className="text-xl font-bold text-sky-200 mb-3">Your Overall Performance Across All Quizzes:</h3>
            <p className="text-3xl font-semibold text-sky-400 mb-1">{overallPercentage}%</p>
            <p className="text-slate-300">({totalCorrectOverall} correct answers out of {totalAnsweredOverall} total answered)</p>
          </div>

          <CategoryResultsSection
            title="Results: Project Management Principles"
            icon={AcademicCapIcon}
            categoriesOfType={principles}
            allCategoryScores={allCategoryScores}
          />

          <CategoryResultsSection
            title="Results: Project Performance Domains"
            icon={BriefcaseIcon}
            categoriesOfType={performanceDomains}
            allCategoryScores={allCategoryScores}
          />
        </>
      )}
       <div className="mt-10 text-center">
        <button
          onClick={onBack}
          className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 flex items-center justify-center mx-auto text-lg"
          aria-label="Back to category selection"
        >
          <ArrowUturnLeftIcon className="w-6 h-6 mr-2" />
          Back to Category Selection
        </button>
      </div>
    </div>
  );
};

export default OverallResultsScreen;