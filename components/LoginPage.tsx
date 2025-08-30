import React, { useState } from 'react';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

interface LoginPageProps {
  onLogin: (email: string, password: string) => Promise<void>;
  error: string | null;
}

export const LoginPage = ({ onLogin, error }: LoginPageProps) => {
    const { t } = useLang();
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);
        setSuccessMessage(null);
        setLoading(true);

        if (isLoginView) {
            await onLogin(email, password);
        } else {
            if (password !== confirmPassword) {
                setFormError(t('passwordMismatchError'));
                setLoading(false);
                return;
            }
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) {
                setFormError(error.message);
            } else {
                setSuccessMessage(t('registrationSuccess'));
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            }
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>{isLoginView ? t('loginTitle') : t('registerTitle')}</h2>
                
                {error && isLoginView && <div className="error-message">{error}</div>}
                {formError && <div className="error-message">{formError}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="email">{t('emailLabel')}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{t('passwordLabel')}</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete={isLoginView ? "current-password" : "new-password"}
                        />
                    </div>
                    {!isLoginView && (
                         <div className="form-group">
                            <label htmlFor="confirmPassword">{t('confirmPasswordLabel')}</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                autoComplete="new-password"
                            />
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary btn-large" style={{width: '100%'}} disabled={loading}>
                        {loading ? '...' : (isLoginView ? t('loginButton') : t('createAccountButton'))}
                    </button>
                </form>

                <button onClick={() => { setIsLoginView(!isLoginView); setFormError(null); setSuccessMessage(null); }} className="form-toggle-link">
                    {isLoginView ? t('switchToRegister') : t('switchToLogin')}
                </button>
            </div>
        </div>
    );
};
