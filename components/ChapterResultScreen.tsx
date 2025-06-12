
import React from 'react';
import type { QuizCategory, UserAnswersForCategory, CategoryScore } from '../types';
import QuestionCard from './QuestionCard';
import { ArrowUturnLeftIcon, CheckCircleIcon, XCircleIcon, CalculatorIcon } from '@heroicons/react/24/solid';

interface ChapterResultScreenProps {
  category: QuizCategory;
  userAnswers: UserAnswersForCategory;
  score: CategoryScore;
  onBack: () => void;
}

const ChapterResultScreen: React.FC<ChapterResultScreenProps> = ({ category, userAnswers, score, onBack }) => {
  const percentage = score.answered > 0 ? Math.round((score.correct / score.answered) * 100) : 0;
  let remark = "";
  let remarkColor = "text-slate-300";

  if (score.answered === 0) {
    remark = "You didn't answer any questions.";
    remarkColor = "text-yellow-400";
  } else if (percentage >= 80) {
    remark = "Excellent! Your performance was very good.";
    remarkColor = "text-green-400";
  } else if (percentage >= 60) {
    remark = "Good job! With a little more effort, it can be even better.";
    remarkColor = "text-sky-400";
  } else {
    remark = "Needs more effort. Reviewing explanations can be helpful.";
    remarkColor = "text-red-400";
  }


  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-300">Quiz Result: {category.name}</h2>
        <button
          onClick={onBack}
          className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded-lg shadow transition-colors flex items-center"
          aria-label="Back to category selection"
        >
          <ArrowUturnLeftIcon className="w-5 h-5 mr-2" />
          Back to Category Selection
        </button>
      </div>

      <div className="bg-slate-700 p-6 rounded-xl shadow-xl mb-8 text-center">
        <h3 className="text-2xl font-bold text-sky-200 mb-4 flex items-center justify-center">
            <CalculatorIcon className="w-8 h-8 mr-3 text-sky-400"/>
            Score Summary
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
            <div className="p-4 bg-slate-600 rounded-lg">
                <p className="flex items-center justify-center text-green-400">
                    <CheckCircleIcon className="w-6 h-6 mr-2"/> Correct: <span className="font-bold mx-1">{score.correct}</span>
                </p>
            </div>
            <div className="p-4 bg-slate-600 rounded-lg">
                <p className="flex items-center justify-center text-red-400">
                    <XCircleIcon className="w-6 h-6 mr-2"/> Incorrect: <span className="font-bold mx-1">{score.incorrect}</span>
                </p>
            </div>
             <div className="p-4 bg-slate-600 rounded-lg">
                <p className="text-slate-300">
                    Answered: <span className="font-bold">{score.answered} / {score.total}</span>
                </p>
            </div>
        </div>
        {score.answered > 0 && (
          <p className={`mt-4 text-xl font-semibold ${remarkColor}`}>{remark} ({percentage}%)</p>
        )}
         {score.answered < score.total && score.answered > 0 && (
            <p className="text-yellow-400 mt-2 text-sm">You have not answered all questions. Answer all questions for a more accurate calculation.</p>
        )}

      </div>

      <h3 className="text-xl font-semibold mb-6 text-sky-300">Review Questions:</h3>
      <div className="space-y-8">
        {category.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            questionNumber={index + 1}
            isResultView={true}
            userAnswer={userAnswers[question.id]}
            onOptionSelect={() => {}} // No-op for result view
          />
        ))}
      </div>
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

export default ChapterResultScreen;