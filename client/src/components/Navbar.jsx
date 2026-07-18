import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';
import { AarohiLogoFull } from './Icons';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { i18n, t } = useTranslation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <AarohiLogoFull className="logo-icon" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link${isActive('/') && location.pathname === '/' ? ' active' : ''}`}>{t('nav.home')}</Link></li>
          <li><Link to="/learn" className={`nav-link${isActive('/learn') ? ' active' : ''}`}>{t('nav.learn')}</Link></li>
          <li><Link to="/ask-sakhi" className={`nav-link${isActive('/ask-sakhi') ? ' active' : ''}`}>{t('nav.askSakhi')}</Link></li>
          <li><Link to="/resources" className={`nav-link${isActive('/resources') ? ' active' : ''}`}>{t('nav.knowTheTruth')}</Link></li>
          <li><Link to="/community" className={`nav-link${isActive('/community') ? ' active' : ''}`}>{t('nav.community')}</Link></li>
          <li><Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>{t('nav.aboutUs')}</Link></li>
        </ul>
        <div className="nav-actions">
          <div className="lang-selector">
            <svg className="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <select
              className="lang-select"
              value={i18n.language?.split('-')[0] || 'en'}
              onChange={handleLanguageChange}
              aria-label={t('nav.chooseLanguage')}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          {user ? (
            <div className="nav-user">
              <span className="nav-user-name">{user.name}</span>
              <button onClick={logout} className="login-btn">{t('nav.logout')}</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">{t('nav.login')}</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
