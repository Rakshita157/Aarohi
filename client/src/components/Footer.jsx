import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="footer-logo-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#c084a1"/>
                <circle cx="8" cy="10" r="1.5" fill="#c084a1"/>
                <circle cx="16" cy="10" r="1.5" fill="#c084a1"/>
                <circle cx="12" cy="14" r="1.5" fill="#c084a1"/>
                <circle cx="10" cy="12" r="1.5" fill="#c084a1"/>
                <circle cx="14" cy="12" r="1.5" fill="#c084a1"/>
              </svg>
              <span className="footer-logo-text">Aarohi</span>
            </div>
            <p className="footer-tagline">
              Empowering Every Cycle Through Education
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Platform</h4>
              <Link to="/">Home</Link>
              <Link to="/not-found">Learn</Link>
              <Link to="/not-found">Ask Sakhi</Link>
              <Link to="/not-found">Resources</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/not-found">Community</Link>
              <Link to="/not-found">Privacy Policy</Link>
              <Link to="/not-found">Terms of Use</Link>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="mailto:hello@aarohi.edu">hello@aarohi.edu</a>
              <Link to="/not-found">Twitter</Link>
              <Link to="/not-found">Instagram</Link>
              <Link to="/not-found">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aarohi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
