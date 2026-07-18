import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';
import { AarohiLogoFull } from './Icons';

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <AarohiLogoFull className="footer-logo-icon" />
            </div>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.platform')}</h4>
            <Link to="/">{t('footer.home')}</Link>
            <Link to="/learn">{t('footer.learn')}</Link>
            <Link to="/ask-sakhi">{t('footer.askSakhi')}</Link>
            <Link to="/resources">{t('footer.knowTheTruth')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <Link to="/about">{t('footer.aboutUs')}</Link>
            <Link to="/community">{t('footer.community')}</Link>
            <a href="#">{t('footer.privacyPolicy')}</a>
            <a href="#">{t('footer.termsOfUse')}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.resources')}</h4>
            <a href="#">{t('footer.blog')}</a>
            <a href="#">{t('footer.faq')}</a>
            <a href="#">{t('footer.guides')}</a>
            <a href="#">{t('footer.support')}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.connect')}</h4>
            <a href="mailto:hello@aarohi.edu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              {t('footer.emailUs')}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <XIcon /><span>X</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> {t('footer.instagram')}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
