import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';
import heroImage from '../assets/hero.png';
import mythImage from '../assets/myth vs facts.png';
import sakhiImage from '../assets/AskSakhi.png';
import trustedResourcesImage from '../assets/trusted resources.png';
import interactiveLessonsImage from '../assets/Interactive lessons.png';
import { AarohiLogo, AarohiLogoFull, SakhiAvatar, ArrowRight } from '../components/Icons';

const About = () => {
  const { t } = useTranslation();
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
              {t('about.heroTitle')}
            </h1>
            <p className="about-hero-description">
              {t('about.heroDescription')}
            </p>
            <div className="about-hero-buttons">
              <Link to="/learn" className="btn btn-primary">
                {t('about.exploreLearning')}
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/ask-sakhi" className="btn btn-secondary">
                {t('about.meetSakhi')}
              </Link>
            </div>
            <div className="about-mini-stats">
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">40+</span>
                <span className="about-mini-stat-label">{t('about.mythsBusted')}</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">24/7</span>
                <span className="about-mini-stat-label">{t('about.aiSupport')}</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">100%</span>
                <span className="about-mini-stat-label">{t('about.safeContent')}</span>
              </div>
            </div>
          </div>
          <div className="about-hero-right">
            <div className="about-hero-image-container">
              <img src={heroImage} alt={t('about.heroImageAlt')} className="about-hero-image" />
              <div className="about-sakhi-bubble" onClick={() => window.location.href = '/ask-sakhi'} style={{ cursor: 'pointer' }}>
                <div className="about-sakhi-bubble-avatar">
                  <SakhiAvatar />
                </div>
                <div className="about-sakhi-bubble-text">
                  <strong>{t('about.sakhiGreeting')}</strong><br />
                  {t('about.sakhiAskAnything')}
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
              <h2 className="about-section-heading">{t('about.ourStory')}</h2>
              <p>
                {t('about.ourStoryP1')}
              </p>
              <p>
                {t('about.ourStoryP2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY AAROHI ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.whyAarohi')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.whyAarohiSub')}
          </p>
        </div>
        <div className="why-grid">
            <div className="why-card about-fade-in about-fade-in-d1">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path d="M8 7h8M8 11h6"/>
              </svg>
            </div>
            <h3>{t('about.learnWithConfidence')}</h3>
            <p>{t('about.learnWithConfidenceDesc')}</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d2">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="9" width="14" height="10" rx="2"/>
                <path d="M9 5v2M15 5v2M9 13h.01M15 13h.01M12 17h.01"/>
              </svg>
            </div>
            <h3>{t('about.aiSakhiGuidance')}</h3>
            <p>{t('about.aiSakhiGuidanceDesc')}</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d3">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>{t('about.breakStigma')}</h3>
            <p>{t('about.breakStigmaDesc')}</p>
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
            <h3>{t('about.inclusiveLearning')}</h3>
            <p>{t('about.inclusiveLearningDesc')}</p>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="about-section">
        <div className="values-wrapper">
          <div className="values-header">
            <h2 className="about-section-heading">{t('about.ourValues')}</h2>
            <p className="about-section-sub" style={{ margin: '0 auto' }}>
              {t('about.ourValuesSub')}
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>
                </svg>
              </div>
              <h4>{t('about.education')}</h4>
              <p>{t('about.educationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#d4a8531a', color: '#d4a853' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>{t('about.empathy')}</h4>
              <p>{t('about.empathyDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#b794d41a', color: '#b794d4' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/><path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4>{t('about.trust')}</h4>
              <p>{t('about.trustDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h4>{t('about.privacy')}</h4>
              <p>{t('about.privacyDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <h4>{t('about.inclusivity')}</h4>
              <p>{t('about.inclusivityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE HELP ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.howWeHelp')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.howWeHelpSub')}
          </p>
        </div>
        <div className="help-list">
          <div className="help-card help-card-interactive about-fade-in about-fade-in-d1">
            <div className="help-card-visual">
              <img src={interactiveLessonsImage} alt={t('about.interactiveLessonsAlt')} className="help-card-image-full" />
            </div>
            <div className="help-card-content">
              <h3>{t('about.interactiveLessons')}</h3>
              <p>{t('about.interactiveLessonsDesc')}</p>
            </div>
          </div>
          <div className="help-card help-card-sakhi about-fade-in about-fade-in-d2">
            <div className="help-card-content">
              <h3>{t('about.aiSakhi')}</h3>
              <p>{t('about.aiSakhiDesc')}</p>
            </div>
            <div className="help-card-visual">
              <img src={sakhiImage} alt={t('about.aiSakhiAlt')} className="help-card-image-full" />
            </div>
          </div>
          <div className="help-card help-card-myth about-fade-in about-fade-in-d3">
            <div className="help-card-visual">
              <img src={mythImage} alt={t('about.mythsVsFactsAlt')} className="help-card-image-full" />
            </div>
            <div className="help-card-content">
              <h3>{t('about.mythsVsFacts')}</h3>
              <p>{t('about.mythsVsFactsDesc')}</p>
            </div>
          </div>
          <div className="help-card help-card-trusted about-fade-in about-fade-in-d4">
            <div className="help-card-content">
              <h3>{t('about.trustedResources')}</h3>
              <p>{t('about.trustedResourcesDesc')}</p>
            </div>
            <div className="help-card-visual">
              <img src={trustedResourcesImage} alt={t('about.trustedResourcesAlt')} className="help-card-image-full" />
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
          <h2>{t('about.ourVision')}</h2>
          <p>
            {t('about.ourVisionText')}
          </p>
        </div>
      </section>

      {/* ========== IMPACT ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            {t('about.ourImpact')}
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            {t('about.ourImpactSub')}
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
            <h3>10+</h3>
            <div className="impact-label">{t('about.learningModules')}</div>
            <p className="impact-desc">{t('about.learningModulesDesc')}</p>
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
            <h3>24/7</h3>
            <div className="impact-label">{t('about.aiGuidance')}</div>
            <p className="impact-desc">{t('about.aiGuidanceDesc')}</p>
          </div>
          <div className="impact-stat about-fade-in about-fade-in-d3">
            <div className="impact-stat-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="20" r="12" fill="none"/>
                <ellipse cx="20" cy="20" rx="6" ry="12" fill="none"/>
                <path d="M8 20h24"/>
              </svg>
            </div>
            <h3>5+</h3>
            <div className="impact-label">{t('about.multilingualSupport')}</div>
            <p className="impact-desc">{t('about.multilingualSupportDesc')}</p>
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
            <h3>100%</h3>
            <div className="impact-label">{t('about.safeAndPrivate')}</div>
            <p className="impact-desc">{t('about.safeAndPrivateDesc')}</p>
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
          <div className="quote-author">{t('about.quoteAuthor')}</div>
        </div>
      </section>

    </div>
  );
};

export default About;
