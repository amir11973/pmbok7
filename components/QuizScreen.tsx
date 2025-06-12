
import React, { useState, useCallback } from 'react';
import type { QuizCategory, Question, UserAnswersForCategory } from '../types';
import QuestionCard from './QuestionCard';
import { ArrowUturnLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface QuizScreenProps {
  category: QuizCategory;
  onSubmitQuiz: (categoryId: string, answers: UserAnswersForCategory) => void;
  onBack: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ category, onSubmitQuiz, onBack }) => {
  const [currentAnswers, setCurrentAnswers] = useState<UserAnswersForCategory>({});
  const [showWarnings, setShowWarnings] = useState(false);

  const handleOptionSelect = useCallback((questionId: string, optionId: string) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    const answeredCount = Object.keys(currentAnswers).length;
    if (answeredCount < category.questions.length) {
        setShowWarnings(true);
        if (!confirm(`You have not answered all questions (${answeredCount} of ${category.questions.length}). Do you want to submit your answers?`)) {
            return;
        }
    }
    onSubmitQuiz(category.id, currentAnswers);
  }, [currentAnswers, category, onSubmitQuiz]);
  
  const answeredCount = Object.keys(currentAnswers).length;
  const totalQuestions = category.questions.length;

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-300">{category.name}</h2>
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded-lg shadow transition-colors flex items-center"
          aria-label="Back to category selection"
        >
          <ArrowUturnLeftIcon className="w-5 h-5 mr-2" />
          Back
        </button>
      </div>
      
      <div className="mb-6 p-4 bg-slate-700 rounded-lg shadow">
        <p className="text-slate-300 text-center">
          {answeredCount} of {totalQuestions} questions answered.
        </p>
        <div className="w-full bg-slate-600 rounded-full h-2.5 mt-2" aria-label="Question answering progress bar">
            <div 
                className="bg-sky-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                role="progressbar"
                aria-valuenow={answeredCount}
                aria-valuemin={0}
                aria-valuemax={totalQuestions}
            ></div>
        </div>
      </div>

      <div className="space-y-8">
        {category.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            questionNumber={index + 1}
            selectedOption={currentAnswers[question.id]}
            onOptionSelect={handleOptionSelect}
            showWarning={showWarnings && !currentAnswers[question.id]}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 flex items-center justify-center mx-auto text-lg"
        >
          <PaperAirplaneIcon className="w-6 h-6 mr-2" />
          Submit Answers & View Result
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;