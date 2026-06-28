import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#c084a1"/>
              <circle cx="8" cy="10" r="1.5" fill="#c084a1"/>
              <circle cx="16" cy="10" r="1.5" fill="#c084a1"/>
              <circle cx="12" cy="14" r="1.5" fill="#c084a1"/>
              <circle cx="10" cy="12" r="1.5" fill="#c084a1"/>
              <circle cx="14" cy="12" r="1.5" fill="#c084a1"/>
            </svg>
            <span className="logo-text">Aarohi</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link${isActive('/') && location.pathname === '/' ? ' active' : ''}`}>Home</Link></li>
          <li><Link to="/not-found" className="nav-link">Learn</Link></li>
          <li><Link to="/not-found" className="nav-link">Ask Sakhi</Link></li>
          <li><Link to="/not-found" className="nav-link">Resources</Link></li>
          <li><Link to="/not-found" className="nav-link">Community</Link></li>
          <li><Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About Us</Link></li>
        </ul>
        <Link to="/not-found" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
