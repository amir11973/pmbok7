import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { AppHeader } from './components/AppHeader';
import { MainMenu } from './components/MainMenu';
import { ChapterListView } from './components/ChapterListView';
import { ComprehensiveQuizListView } from './components/ComprehensiveQuizListView';
import { ChapterView } from './components/ChapterView';
import { QuizView } from './components/QuizView';
import { QuizReviewView } from './components/QuizReviewView';
import { ReportCard } from './components/ReportCard';
import { LoginPage } from './components/LoginPage';
import { UserManagementPage } from './components/UserManagementPage';
import { LanguageProvider, useLang } from './context/LanguageContext';
import { QuizCompletionData, Results, View, QuizMode, User } from './types';

const AppContent = () => {
    const [view, setView] = useState<View>('main_menu');
    const [currentChapterId, setCurrentChapterId] = useState<string | null>(null);
    const [results, setResults] = useState<Results>({});
    const [quizMode, setQuizMode] = useState<QuizMode>('chapter');
    
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [resultsLoading, setResultsLoading] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);
    const { t } = useLang();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setCurrentUser(session?.user ?? null);
            setAuthLoading(false);
        };
        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setCurrentUser(session?.user ?? null);
        });

        return () => subscription?.unsubscribe();
    }, []);

    useEffect(() => {
        const fetchResults = async (user: User) => {
            const { data, error } = await supabase
                .from('quiz_results')
                .select('quiz_id, result_data')
                .eq('user_id', user.id);
            
            if (error) {
                console.error("Error fetching quiz results:", JSON.stringify(error, null, 2));
            } else if (data) {
                const loadedResults = data.reduce((acc, item) => {
                    if(item.result_data) {
                      acc[item.quiz_id] = item.result_data;
                    }
                    return acc;
                }, {} as Results);
                setResults(loadedResults);
            }
            setResultsLoading(false);
        };

        if (currentUser) {
            setResultsLoading(true);
            fetchResults(currentUser);
        } else {
            setResults({});
            setResultsLoading(false);
        }
    }, [currentUser]);


    const handleLogin = async (email: string, password: string) => {
        setLoginError(null);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setLoginError(t('loginError'));
        } else {
            setView('main_menu');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setView('main_menu');
    };

    const saveResult = async (id: string, result: QuizCompletionData) => {
        if (!currentUser) return;
    
        const newResults = { ...results, [id]: result };
        setResults(newResults);
        
        const { error } = await supabase.from('quiz_results').upsert(
            {
                user_id: currentUser.id,
                quiz_id: id,
                result_data: result,
            },
            {
                onConflict: 'user_id,quiz_id', // Specify columns for conflict resolution
            }
        );
        
        if (error) {
            console.error("Error saving result:", JSON.stringify(error, null, 2));
            // Revert local state if DB save fails
            setResults(results); 
        }
    };

    const handleReview = (chapterId: string) => {
        setCurrentChapterId(chapterId);
        if (chapterId.startsWith('comp_')) {
            setQuizMode('comprehensive');
        } else {
            setQuizMode('chapter');
        }
        setView('quiz_review');
    };

    const renderView = () => {
        switch (view) {
            case 'main_menu':
                return <MainMenu setView={setView} setCurrentChapterId={setCurrentChapterId} setQuizMode={setQuizMode} />;
            case 'principles_list':
                return <ChapterListView type="principles" setView={setView} setCurrentChapterId={setCurrentChapterId} results={results} setQuizMode={setQuizMode} />;
            case 'domains_list':
                return <ChapterListView type="domains" setView={setView} setCurrentChapterId={setCurrentChapterId} results={results} setQuizMode={setQuizMode} />;
            case 'comprehensive_quizzes_list':
                return <ComprehensiveQuizListView setView={setView} setCurrentChapterId={setCurrentChapterId} results={results} setQuizMode={setQuizMode} />;
            case 'chapter':
                return <ChapterView chapterId={currentChapterId!} setView={setView} setQuizMode={setQuizMode} />;
            case 'quiz':
                return <QuizView chapterId={currentChapterId!} quizMode={quizMode} setView={setView} saveResult={saveResult} />;
            case 'quiz_review':
                return <QuizReviewView chapterId={currentChapterId!} setView={setView} results={results} />;
            case 'report_card':
                return <ReportCard results={results} setView={setView} onReview={handleReview} />;
            case 'user_management':
                if (currentUser?.email !== 'admin@pmbok.app') { // Example admin email
                     return <MainMenu setView={setView} setCurrentChapterId={setCurrentChapterId} setQuizMode={setQuizMode} />;
                }
                return <UserManagementPage setView={setView} />;
            default:
                return <MainMenu setView={setView} setCurrentChapterId={setCurrentChapterId} setQuizMode={setQuizMode} />;
        }
    };

    if (authLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <AppHeader
                currentUser={currentUser}
                onLogout={handleLogout}
                setView={setView}
            />
            {!currentUser ? (
                <LoginPage onLogin={handleLogin} error={loginError} />
            ) : resultsLoading ? (
                 <div className="container" style={{ textAlign: 'center', padding: '50px' }}>Loading results...</div>
            ) : (
                renderView()
            )}
        </>
    );
};

export const App = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};