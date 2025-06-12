

import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedOption?: string;
  onOptionSelect: (questionId: string, optionId: string) => void;
  isResultView?: boolean;
  userAnswer?: string;
  showWarning?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  selectedOption,
  onOptionSelect,
  isResultView = false,
  userAnswer,
  showWarning = false,
}) => {
  return (
    <div className={`p-5 rounded-xl shadow-xl transition-all duration-300 ${isResultView ? 'bg-slate-700' : 'bg-slate-700 hover:shadow-sky-500/30'} ${showWarning && !isResultView ? 'ring-2 ring-red-500' : ''}`}>
      <p className="text-lg font-semibold mb-4 text-sky-200">
        <span className="bg-sky-600 text-white rounded-full px-3 py-1 text-sm font-bold mr-3">{questionNumber}</span>
        {question.text}
      </p>
      {showWarning && !isResultView && !selectedOption && (
          <p className="text-sm text-red-400 mb-3 text-center">Please select an option.</p>
      )}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isUserAnswerInResult = userAnswer === option.id;
          const isCorrect = option.id === question.correctOptionId;

          let optionClass = `w-full text-left p-3 border rounded-lg transition-all duration-200 cursor-pointer flex items-center
                             border-slate-600 bg-slate-600 hover:bg-slate-500 hover:border-sky-500 text-slate-200`;

          if (isResultView) {
            optionClass = `w-full text-left p-3 border rounded-lg flex items-center border-slate-500 bg-slate-600 text-slate-300`; // Default for result view
            if (isCorrect) {
              optionClass += ' !bg-green-700 !border-green-500 !text-white font-semibold'; // Correct answer
            }
            if (isUserAnswerInResult && !isCorrect) {
              optionClass += ' !bg-red-700 !border-red-500 !text-white'; // User's incorrect answer
            }
             if (isUserAnswerInResult && isCorrect) {
              optionClass += ' ring-2 ring-white'; // User's correct answer, highlight
            }
          } else {
            // Quiz view
            if (isSelected) {
              optionClass += ' !bg-sky-600 !border-sky-400 !text-white ring-2 ring-sky-300';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => !isResultView && onOptionSelect(question.id, option.id)}
              disabled={isResultView}
              className={optionClass}
              aria-pressed={isSelected}
            >
              <span className={`mr-3 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                                ${isResultView ? 
                                  (isCorrect ? 'border-green-300 bg-green-500' : (isUserAnswerInResult ? 'border-red-300 bg-red-500' : 'border-slate-400')) :
                                  (isSelected ? 'border-sky-200 bg-sky-500' : 'border-slate-400 bg-slate-500')} `}>
                {isResultView && isCorrect && <span className="text-xs text-white">✓</span>}
                {isResultView && isUserAnswerInResult && !isCorrect && <span className="text-xs text-white">✗</span>}
              </span>
              <span className="flex-grow">{option.text}</span>
            </button>
          );
        })}
      </div>
      {isResultView && (
        <div className="mt-4 p-3 bg-slate-800 rounded-md border border-slate-600">
          <p className="text-sm font-semibold text-yellow-400">Explanation:</p>
          <p className="text-sm text-slate-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;