import React, { useState } from 'react';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';
import { View } from '../types';

interface UserManagementPageProps {
  setView: (view: View) => void;
}

export const UserManagementPage = ({ setView }: UserManagementPageProps) => {
    const { t } = useLang();

    // Create User State
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [createLoading, setCreateLoading] = useState(false);

    // Reset Password State
    const [resetEmail, setResetEmail] = useState('');
    const [resetLoading, setResetLoading] = useState(false);
    
    // Message State
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
    
    const showMessage = (text: string, type: 'success' | 'error') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 7000);
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setCreateLoading(true);

        const { error } = await supabase.auth.signUp({
            email: createEmail,
            password: createPassword,
        });

        setCreateLoading(false);

        if (error) {
            showMessage(error.message, 'error');
        } else {
            alert(t('userCreatedAndLoggedOut'));
            // Signing up a new user on the client-side replaces the current (admin) session.
            // We must sign out immediately. This clears the session, and the onAuthStateChange 
            // listener in App.tsx will set currentUser to null, automatically displaying the login page.
            // The admin will need to log back in. This is a security measure.
            await supabase.auth.signOut();
        }
    };

    const handleSendResetLink = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setResetLoading(true);
        // The redirectTo path should point to a page in your app where users can update their password.
        // For now, it redirects to the home page after the password reset.
        const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
             redirectTo: window.location.origin,
        });

        if (error) {
            showMessage(error.message, 'error');
        } else {
            showMessage(t('resetLinkSent'), 'success');
            setResetEmail('');
        }
        setResetLoading(false);
    };

    return (
        <div className="container user-management-view">
            <div className="view-header">
                <button className="btn back-button-subview" onClick={() => setView('main_menu')}>{t('backToMenu')}</button>
                <h2 className="section-title">{t('userManagementTitle')}</h2>
            </div>
            
            {message && (
                <div className={`message-bar ${message.type}-message`}>
                    {message.text}
                </div>
            )}

            <div className="user-management-grid">
                <div className="user-management-card">
                    <h3>{t('createNewUser')}</h3>
                    <form onSubmit={handleCreateUser}>
                        <div className="form-group">
                            <label htmlFor="create-email">{t('emailLabel')}</label>
                            <input
                                id="create-email"
                                type="email"
                                value={createEmail}
                                onChange={(e) => setCreateEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                         <div className="form-group">
                            <label htmlFor="create-password">{t('passwordLabel')}</label>
                            <input
                                id="create-password"
                                type="password"
                                placeholder="Min. 6 characters"
                                value={createPassword}
                                onChange={(e) => setCreatePassword(e.target.value)}
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={createLoading}>
                            {createLoading ? '...' : t('createUserButton')}
                        </button>
                    </form>
                </div>

                <div className="user-management-card">
                    <h3>{t('sendPasswordReset')}</h3>
                    <form onSubmit={handleSendResetLink}>
                        <div className="form-group">
                            <label htmlFor="reset-email">{t('emailLabel')}</label>
                            <input
                                id="reset-email"
                                type="email"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary" disabled={resetLoading}>
                            {resetLoading ? '...' : t('sendLink')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};