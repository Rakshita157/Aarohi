import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navbar.css';
import { AarohiLogoFull } from './Icons';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
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
          <li><Link to="/resources" className={`nav-link${isActive('/resources') ? ' active' : ''}`}>{t('nav.knowTruth')}</Link></li>
          <li><Link to="/community" className={`nav-link${isActive('/community') ? ' active' : ''}`}>{t('nav.community')}</Link></li>
          <li><Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>{t('nav.aboutUs')}</Link></li>
        </ul>
        <div className="nav-actions">
          <div className="lang-toggle-container">
            <button
              onClick={() => setLanguage('en')}
              className={`lang-toggle-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`lang-toggle-btn ${language === 'hi' ? 'active' : ''}`}
            >
              हिन्दी
            </button>
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

