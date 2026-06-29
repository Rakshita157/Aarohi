import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { AarohiLogo } from './Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <AarohiLogo className="footer-logo-icon" />
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
              <Link to="/ask-sakhi">Ask Sakhi</Link>
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
