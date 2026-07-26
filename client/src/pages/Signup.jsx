import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('signup.matchError'));
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/ask-sakhi');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{t('signup.title')}</h1>
          <p>{t('signup.subtitle')}</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="name">{t('signup.nameLabel')}</label>
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
            <label htmlFor="email">{t('signup.emailLabel')}</label>
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
            <label htmlFor="password">{t('signup.passwordLabel')}</label>
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
            <label htmlFor="confirmPassword">{t('signup.confirmLabel')}</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('signup.confirmPlaceholder')}
              required
            />
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? t('signup.creating') : t('signup.btn')}
          </button>
        </form>

        <p className="auth-footer">
          {t('signup.footer')} <Link to="/login">{t('signup.loginLink')}</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
