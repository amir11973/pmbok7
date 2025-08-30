export type Language = 'en' | 'fa';

// FIX: Define User type locally as it's not exported in supabase-js v1.
export interface User {
  id: string;
  email?: string;
}

export interface LocalizedString {
  en: string;
  fa: string;
}

export interface Question {
  question: LocalizedString;
  options: LocalizedString[];
  correctAnswer: number;
  explanation: LocalizedString;
}

export interface Chapter {
  id: string;
  title: LocalizedString;
  icon: string;
  proseSummary: LocalizedString;
  summary: LocalizedString[];
  questions: Question[];
}

export interface PmbokData {
    principles: Chapter[];
    domains: Chapter[];
}

export interface QuizCompletionData {
  score: number;
  total: number;
  answers: { [key: number]: number };
  questions?: Question[]; // For comprehensive quizzes to allow review
}

export interface Results {
  [id: string]: QuizCompletionData;
}

export type View = 'login' | 'user_management' | 'main_menu' | 'principles_list' | 'domains_list' | 'chapter' | 'quiz' | 'quiz_review' | 'report_card' | 'comprehensive_quizzes_list';
export type QuizMode = 'chapter' | 'comprehensive';
