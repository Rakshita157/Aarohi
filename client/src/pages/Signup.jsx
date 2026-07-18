import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import '../styles/Auth.css';

const Signup = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('signup.passwordsNoMatch'));
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/ask-sakhi');
    } catch (err) {
      setError(err.response?.data?.message || t('signup.registrationFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{t('signup.joinAarohi')}</h1>
          <p>{t('signup.createAccountSubtitle')}</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="name">{t('signup.name')}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('signup.namePlaceholder')}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">{t('signup.email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('signup.emailPlaceholder')}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">{t('signup.password')}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('signup.passwordPlaceholder')}
              minLength={6}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirmPassword">{t('signup.confirmPassword')}</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('signup.confirmPasswordPlaceholder')}
              required
            />
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? t('signup.creatingAccount') : t('signup.createAccount')}
          </button>
        </form>

        <p className="auth-footer">
          {t('signup.hasAccount')} <Link to="/login">{t('signup.signIn')}</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
