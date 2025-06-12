export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
}

export type CategoryType = 'principle' | 'performanceDomain';

export interface QuizCategory {
  id: string;
  name: string;
  type: CategoryType;
  questions: Question[];
  description?: string; // Optional description for the category
}

export interface UserAnswersForCategory {
  [questionId: string]: string; // selectedOptionId
}

export interface AllUserAnswers {
  [categoryId: string]: UserAnswersForCategory;
}

export interface CategoryScore {
  correct: number;
  incorrect: number;
  total: number;
  answered: number;
}

export interface AllCategoryScores {
  [categoryId: string]: CategoryScore;
}

export type AppView = 'categorySelection' | 'quiz' | 'chapterResult' | 'overallResults';