import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';
import heroImage from '../assets/hero.png';
import mythImage from '../assets/myth vs facts.png';
import sakhiImage from '../assets/AskSakhi.png';
import trustedResourcesImage from '../assets/trusted resources.png';
import interactiveLessonsImage from '../assets/Interactive lessons.png';
import { AarohiLogo, AarohiLogoFull, SakhiAvatar, ArrowRight } from '../components/Icons';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      {/* ========== HERO ========== */}
      <section className="about-hero">
        <div className="about-deco about-deco-1" />
        <div className="about-deco about-deco-2" />
        <div className="about-hero-content">
          <div className="about-hero-left">
            <div className="about-tagline">
              <AarohiLogo className="about-tagline-icon" />
              <span>{t('about.tagline')}</span>
            </div>
            <h1 className="about-hero-title">
              {t('about.title')}
            </h1>
            <p className="about-hero-description">
              {t('about.description')}
            </p>
            <div className="about-hero-buttons">
              <Link to="/learn" className="btn btn-primary">
                {t('about.btnExplore')}
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/ask-sakhi" className="btn btn-secondary">
                {t('about.btnMeetSakhi')}
              </Link>
            </div>
            <div className="about-mini-stats">
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">{t('about.impact.multiNum')}</span>
                <span className="about-mini-stat-label">{t('about.impact.multiLabel')}</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">{t('about.impact.aiNum')}</span>
                <span className="about-mini-stat-label">{t('about.impact.aiLabel')}</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">{t('about.impact.safeNum')}</span>
                <span className="about-mini-stat-label">{t('about.impact.safeLabel')}</span>
              </div>
            </div>
          </div>
          <div className="about-hero-right">
            <div className="about-hero-image-container">
              <img src={heroImage} alt="Student learning with AI Sakhi" className="about-hero-image" />
              <div className="about-sakhi-bubble" onClick={() => window.location.href = '/ask-sakhi'} style={{ cursor: 'pointer' }}>
                <div className="about-sakhi-bubble-avatar">
                  <SakhiAvatar />
                </div>
                <div className="about-sakhi-bubble-text">
                  <strong>{t('about.bubbleTitle')}</strong><br />
                  {t('about.bubbleText')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-scroll-indicator">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="about-section">
        <div className="story-wrapper">
          <div className="story-grid">
            <div className="story-image">
              <AarohiLogoFull className="story-logo" />
            </div>
            <div className="story-content">
              <h2 className="about-section-heading">{t('about.storyTitle')}</h2>
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY AAROHI ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.whyTitle')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.whySubtitle')}
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card about-fade-in about-fade-in-d1">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 20V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16H8.5a2.5 2.5 0 0 0-2 0z"/>
              </svg>
            </div>
            <h3>{t('about.features.confidenceTitle')}</h3>
            <p>{t('about.features.confidenceDesc')}</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d2">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="9" width="14" height="10" rx="2"/>
                <path d="M9 5v2M15 5v2M9 13h.01M15 13h.01M12 17h.01"/>
              </svg>
            </div>
            <h3>{t('about.features.guidanceTitle')}</h3>
            <p>{t('about.features.guidanceDesc')}</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d3">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>{t('about.features.stigmaTitle')}</h3>
            <p>{t('about.features.stigmaDesc')}</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d4">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>{t('about.features.inclusiveTitle')}</h3>
            <p>{t('about.features.inclusiveDesc')}</p>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="about-section">
        <div className="values-wrapper">
          <div className="values-header">
            <h2 className="about-section-heading">{t('about.valuesTitle')}</h2>
            <p className="about-section-sub" style={{ margin: '0 auto' }}>
              {t('about.valuesSubtitle')}
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>
                </svg>
              </div>
              <h4>{t('about.values.educationTitle')}</h4>
              <p>{t('about.values.educationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#d4a8531a', color: '#d4a853' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>{t('about.values.empathyTitle')}</h4>
              <p>{t('about.values.empathyDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#b794d41a', color: '#b794d4' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/><path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4>{t('about.values.trustTitle')}</h4>
              <p>{t('about.values.trustDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h4>{t('about.values.privacyTitle')}</h4>
              <p>{t('about.values.privacyDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <h4>{t('about.values.inclusivityTitle')}</h4>
              <p>{t('about.values.inclusivityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE HELP ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.howWeHelpTitle')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.howWeHelpSubtitle')}
          </p>
        </div>
        <div className="help-list">
          <div className="help-card help-card-interactive about-fade-in about-fade-in-d1">
            <div className="help-card-visual">
              <img src={interactiveLessonsImage} alt="Interactive Lessons" className="help-card-image-full" />
            </div>
            <div className="help-card-content">
              <h3>{t('about.helpCards.lessonsTitle')}</h3>
              <p>{t('about.helpCards.lessonsDesc')}</p>
            </div>
          </div>
          <div className="help-card help-card-sakhi about-fade-in about-fade-in-d2">
            <div className="help-card-content">
              <h3>{t('about.helpCards.sakhiTitle')}</h3>
              <p>{t('about.helpCards.sakhiDesc')}</p>
            </div>
            <div className="help-card-visual">
              <img src={sakhiImage} alt="Ask Sakhi" className="help-card-image-full" />
            </div>
          </div>
          <div className="help-card help-card-myth about-fade-in about-fade-in-d3">
            <div className="help-card-visual">
              <img src={mythImage} alt="Myths vs Facts" className="help-card-image-full" />
            </div>
            <div className="help-card-content">
              <h3>{t('about.helpCards.mythsTitle')}</h3>
              <p>{t('about.helpCards.mythsDesc')}</p>
            </div>
          </div>
          <div className="help-card help-card-trusted about-fade-in about-fade-in-d4">
            <div className="help-card-content">
              <h3>{t('about.helpCards.resourcesTitle')}</h3>
              <p>{t('about.helpCards.resourcesDesc')}</p>
            </div>
            <div className="help-card-visual">
              <img src={trustedResourcesImage} alt="Trusted Resources" className="help-card-image-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR VISION ========== */}
      <section className="about-section">
        <div className="vision-card">
          <div className="vision-icon">
            <svg viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" fill="white" opacity="0.15"/>
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30 14l2 4 4.5.5-3.5 3 1 4.5-4-2-4 2 1-4.5-3.5-3 4.5-.5 2-4z" fill="none"/>
                <path d="M16 20l1 2 2.25.25-1.75 1.5.5 2.25-2-1-2 1 .5-2.25-1.75-1.5 2.25-.25 1-2z" fill="none" opacity="0.6"/>
                <path d="M42 16l1 1.5 2 .25-1.5 1 .5 2-1.5-1-1.5 1 .5-2-1.5-1 2-.25 1-1.5z" fill="none" opacity="0.6"/>
              </g>
            </svg>
          </div>
          <h2>{t('about.visionTitle')}</h2>
          <p>{t('about.visionText')}</p>
        </div>
      </section>

      {/* ========== IMPACT ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.impactTitle')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.impactSubtitle')}
          </p>
        </div>
        <div className="impact-grid">
          <div className="impact-stat about-fade-in about-fade-in-d1">
            <div className="impact-stat-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="10" width="28" height="22" rx="3" fill="none"/>
                <path d="M12 16h16M12 22h12M12 28h8"/>
              </svg>
            </div>
            <h3>{t('about.impact.modulesNum')}</h3>
            <div className="impact-label">{t('about.impact.modulesLabel')}</div>
            <p className="impact-desc">{t('about.impact.modulesDesc')}</p>
          </div>
          <div className="impact-stat about-fade-in about-fade-in-d2">
            <div className="impact-stat-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="12" width="20" height="14" rx="3" fill="none"/>
                <circle cx="16" cy="18" r="1.5" fill="#b794d4"/>
                <circle cx="20" cy="18" r="1.5" fill="#b794d4"/>
                <circle cx="24" cy="18" r="1.5" fill="#b794d4"/>
                <path d="M14 12v-3M26 12v-3"/>
              </svg>
            </div>
            <h3>{t('about.impact.aiNum')}</h3>
            <div className="impact-label">{t('about.impact.aiLabel')}</div>
            <p className="impact-desc">{t('about.impact.aiDesc')}</p>
          </div>
          <div className="impact-stat about-fade-in about-fade-in-d3">
            <div className="impact-stat-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="20" r="12" fill="none"/>
                <ellipse cx="20" cy="20" rx="6" ry="12" fill="none"/>
                <path d="M8 20h24"/>
              </svg>
            </div>
            <h3>{t('about.impact.multiNum')}</h3>
            <div className="impact-label">{t('about.impact.multiLabel')}</div>
            <p className="impact-desc">{t('about.impact.multiDesc')}</p>
          </div>
          <div className="impact-stat about-fade-in about-fade-in-d4">
            <div className="impact-stat-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="18" width="24" height="14" rx="3" fill="none"/>
                <path d="M14 18v-5a6 6 0 0112 0v5" fill="none"/>
                <circle cx="20" cy="24" r="3" fill="#e8917a"/>
                <path d="M20 24v3"/>
              </svg>
            </div>
            <h3>{t('about.impact.safeNum')}</h3>
            <div className="impact-label">{t('about.impact.safeLabel')}</div>
            <p className="impact-desc">{t('about.impact.safeDesc')}</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING QUOTE ========== */}
      <section className="about-section">
        <div className="quote-section-inner">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text">
            {t('about.quoteText')}
          </p>
          <div className="quote-author">&mdash; Aarohi</div>
        </div>
      </section>

    </div>
  );
};

export default About;
