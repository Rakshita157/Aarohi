import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';
import { AarohiLogo, AarohiLogoFull } from './Icons';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/learn', label: 'Learn' },
    { path: '/ask-sakhi', label: 'Ask Sakhi' },
    { path: '/resources', label: 'Know the Truth' },
    { path: '/community', label: 'Community' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <AarohiLogoFull className="logo-icon" />
            </Link>
          </div>
          <ul className="nav-links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className={`nav-link${isActive(path) && (path === '/' ? location.pathname === '/' : true) ? ' active' : ''}`}>{label}</Link>
              </li>
            ))}
          </ul>
          {user ? (
            <div className="nav-user">
              <span className="nav-user-name">{user.name}</span>
              <button onClick={logout} className="login-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}

          <button
            className={`hamburger${drawerOpen ? ' is-open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer-overlay${drawerOpen ? ' visible' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <AarohiLogoFull className="drawer-logo" />
          </Link>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="drawer-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={`drawer-link${isActive(path) && (path === '/' ? location.pathname === '/' : true) ? ' active' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          {user ? (
            <>
              <span className="drawer-user-name">{user.name}</span>
              <button onClick={logout} className="drawer-login-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="drawer-login-btn">Login</Link>
          )}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
