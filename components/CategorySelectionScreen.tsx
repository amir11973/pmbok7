
import React from 'react';
import type { QuizCategory, AllCategoryScores, CategoryType } from '../types';
import { CheckCircleIcon, PencilSquareIcon, EyeIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

interface CategorySelectionScreenProps {
  categories: QuizCategory[];
  categoryScores: AllCategoryScores;
  onSelectCategory: (categoryId: string) => void;
  onShowOverallResults: () => void;
}

const CategorySection: React.FC<{
  title: string;
  icon: React.ElementType;
  categories: QuizCategory[];
  categoryScores: AllCategoryScores;
  onSelectCategory: (categoryId: string) => void;
}> = ({ title, icon: Icon, categories, categoryScores, onSelectCategory }) => {
  if (categories.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-sky-300 flex items-center">
        <Icon className="w-7 h-7 mr-3 text-sky-400" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const score = categoryScores[category.id];
          const attempted = !!score;
          const allAnswered = attempted && score.answered === category.questions.length;
          const questionsCountText = category.description || `Number of questions: ${category.questions.length}`;


          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50
                ${attempted && allAnswered ? 'bg-green-700 hover:bg-green-600 focus:ring-green-400' : 'bg-sky-700 hover:bg-sky-600 focus:ring-sky-400'}
                text-white text-left flex flex-col justify-between h-full`}
              aria-label={`Start quiz for ${category.name}`}
            >
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  {attempted && allAnswered ? (
                    <CheckCircleIcon className="w-6 h-6 mr-2 text-green-300" />
                  ) : (
                    <PencilSquareIcon className="w-6 h-6 mr-2 text-sky-300" />
                  )}
                  {category.name}
                </h4>
                <p className="text-sm text-slate-300 mb-1">{questionsCountText}</p>
              </div>
              {score && (
                <div className="mt-3 pt-3 border-t border-slate-500">
                  <p className="text-sm font-semibold">
                    Last Score: {score.correct} of {score.answered} (Total {score.total})
                  </p>
                  {attempted && score.answered < score.total && <p className="text-xs text-yellow-300 mt-1">Quiz incomplete</p>}
                </div>
              )}
              {!score && (
                 <p className="text-sm text-slate-400 mt-auto pt-3 border-t border-slate-600">No attempt yet</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};


const CategorySelectionScreen: React.FC<CategorySelectionScreenProps> = ({ categories, categoryScores, onSelectCategory, onShowOverallResults }) => {
  const hasAttemptedAny = Object.keys(categoryScores).length > 0;

  const principles = categories.filter(c => c.type === 'principle');
  const performanceDomains = categories.filter(c => c.type === 'performanceDomain');

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-semibold mb-6 text-sky-300 text-center">Select Quiz Category</h2>
      <p className="text-slate-400 mb-8 text-center text-lg">
        Choose a principle or performance domain to start the quiz.
        Quizzes in the Principles section have 3 questions, and quizzes in the Performance Domains section have 5 multiple-choice questions.
      </p>
      
      <CategorySection
        title="Project Management Principles"
        icon={AcademicCapIcon}
        categories={principles}
        categoryScores={categoryScores}
        onSelectCategory={onSelectCategory}
      />

      <CategorySection
        title="Project Performance Domains"
        icon={BriefcaseIcon}
        categories={performanceDomains}
        categoryScores={categoryScores}
        onSelectCategory={onSelectCategory}
      />

      {hasAttemptedAny && (
         <div className="mt-8 text-center">
            <button
            onClick={onShowOverallResults}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 flex items-center justify-center mx-auto"
            >
            <EyeIcon className="w-5 h-5 mr-2" />
            View Overall Results
            </button>
        </div>
      )}
    </div>
  );
};

export default CategorySelectionScreen;
