import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';
import { AarohiLogo } from './Icons';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <AarohiLogo className="logo-icon" />
            <span className="logo-text">Aarohi</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link${isActive('/') && location.pathname === '/' ? ' active' : ''}`}>Home</Link></li>
          <li><Link to="/learn" className={`nav-link${isActive('/learn') ? ' active' : ''}`}>Learn</Link></li>
          <li><Link to="/ask-sakhi" className={`nav-link${isActive('/ask-sakhi') ? ' active' : ''}`}>Ask Sakhi</Link></li>
          <li><Link to="/not-found" className="nav-link">Resources</Link></li>
          <li><Link to="/not-found" className="nav-link">Community</Link></li>
          <li><Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About Us</Link></li>
        </ul>
        {user ? (
          <div className="nav-user">
            <span className="nav-user-name">{user.name}</span>
            <button onClick={logout} className="login-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
