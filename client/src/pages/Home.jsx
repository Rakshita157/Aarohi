import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import heroImage from '../assets/hero.png';
import { AarohiLogo, ShieldCheck, Shield, SakhiAvatar, ArrowRight } from '../components/Icons';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Decorative floating elements */}
      <div className="home-deco home-deco-1" />
      <div className="home-deco home-deco-2" />
      <div className="home-deco home-deco-3" />

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="tagline">
              <AarohiLogo className="tagline-icon" />
              <span>{t('home.tagline')}</span>
            </div>

            <h1 className="hero-title">
              {t('home.heroTitle')}
              <svg className="title-flower" viewBox="0 0 40 40" fill="none">
                <path d="M20 5C20 5 15 10 15 15C15 18.866 17.134 22 20 22C22.866 22 25 18.866 25 15C25 10 20 5 20 5Z" fill="#dc7e96" opacity="0.7"/>
                <path d="M35 20C35 20 30 15 25 15C21.134 15 18 17.134 18 20C18 22.866 21.134 25 25 25C30 25 35 20 35 20Z" fill="#e8917a" opacity="0.7"/>
                <path d="M20 35C20 35 25 30 25 25C25 21.134 22.866 18 20 18C17.134 18 15 21.134 15 25C15 30 20 35 20 35Z" fill="#d05a7a" opacity="0.7"/>
                <path d="M5 20C5 20 10 25 15 25C18.866 25 22 22.866 22 20C22 17.134 18.866 15 15 15C10 15 5 20 5 20Z" fill="#dc7e96" opacity="0.7"/>
                <circle cx="20" cy="20" r="3" fill="#d05a7a"/>
              </svg>
            </h1>

            <h2 className="hero-subtitle">
              {t('home.heroSubtitle1')}<br />
              {t('home.heroSubtitle2')}
            </h2>

            <p className="hero-description">
              {t('home.heroDescription1')}<br />
              {t('home.heroDescription2')}
            </p>

            <div className="hero-buttons">
              <Link to="/ask-sakhi" className="btn btn-primary">
                {t('home.chatWithSakhi')}
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('home.aboutUs')}
              </Link>
            </div>

            <div className="features">
                    <div className="feature">
                <div className="feature-icon-bg">
                  <ShieldCheck className="feature-icon" style={{ stroke: '#e8917a' }} />
                </div>
                <div>
                  <div className="feature-title">{t('home.trustedTitle')}</div>
                  <div className="feature-subtitle">{t('home.trustedSubtitle')}</div>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="10" r="1" fill="#b794d4"/>
                    <circle cx="9" cy="10" r="1" fill="#b794d4"/>
                    <circle cx="15" cy="10" r="1" fill="#b794d4"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">{t('home.aiTitle')}</div>
                  <div className="feature-subtitle">{t('home.aiSubtitle')}</div>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon-bg">
                  <Shield className="feature-icon" style={{ stroke: '#d4a853' }} />
                </div>
                <div>
                  <div className="feature-title">{t('home.safeTitle')}</div>
                  <div className="feature-subtitle">{t('home.safeSubtitle')}</div>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">{t('home.everyoneTitle')}</div>
                  <div className="feature-subtitle">{t('home.everyoneSubtitle')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <img src={heroImage} alt={t('home.heroImageAlt')} className="hero-image" />

              <div className="ai-chatbox" onClick={() => navigate('/ask-sakhi')} style={{ cursor: 'pointer' }}>
                <div className="chatbox-header">
                  <div className="ai-avatar">
                    <SakhiAvatar />
                  </div>
                  <div className="chatbox-text">
                    <div className="chatbox-title">{t('home.sakhiTitle')}</div>
                    <div className="chatbox-subtitle">{t('home.sakhiSubtitle1')}<br/>{t('home.sakhiSubtitle2')}</div>
                  </div>
                </div>
                <div className="chatbox-input">
                  <span>{t('home.askAnything')}</span>
                  <button className="send-btn">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Stats Section ── */}
      <section className="stats-section fade-on-scroll">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">40+</span>
            <span className="stat-label">{t('home.mythsBusted')}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">{t('home.aiSupport')}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('home.safeContent')}</span>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="offer-section fade-on-scroll">
        <h2 className="section-title">{t('home.whatWeOffer')}</h2>
        <p className="section-subtitle">{t('home.whatWeOfferSub')}</p>
        <div className="offer-grid">
          <Link to="/learn" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #e0f2ef, #c8e8e3)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#2d7a6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 28V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16H8a4 4 0 0 0-4 4z" />
                <path d="M12 12h8M12 16h6" />
              </svg>
            </div>
            <h3>{t('home.interactiveLessons')}</h3>
            <p>{t('home.interactiveLessonsDesc')}</p>
            <span className="offer-link">{t('home.startLearning')} <ArrowRight className="offer-arrow" /></span>
          </Link>

          <Link to="/resources" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #f5f0fa, #ede0f2)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#8f4d69" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="16" r="12" />
                <path d="M16 10v6l4 2" />
              </svg>
            </div>
            <h3>{t('home.knowTheTruth')}</h3>
            <p>{t('home.knowTheTruthDesc')}</p>
            <span className="offer-link">{t('home.exploreMyths')} <ArrowRight className="offer-arrow" /></span>
          </Link>

          <Link to="/ask-sakhi" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #fdf8f0, #f5ede0)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="11" cy="10" r="1.5" fill="#b8860b" />
                <circle cx="15" cy="10" r="1.5" fill="#b8860b" />
              </svg>
            </div>
            <h3>{t('home.askSakhi')}</h3>
            <p>{t('home.askSakhiDesc')}</p>
            <span className="offer-link">{t('home.chatNow')} <ArrowRight className="offer-arrow" /></span>
          </Link>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works-section fade-on-scroll">
        <h2 className="section-title">{t('home.howItWorks')}</h2>
        <p className="section-subtitle">{t('home.howItWorksSub')}</p>
        <div className="how-grid">
          <div className="how-step">
            <div className="how-number">1</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #e0f2ef, #c8e8e3)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#2d7a6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 24V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12H8a4 4 0 0 0-4 4z" />
                <path d="M10 10h8M10 14h5" />
              </svg>
            </div>
            <h3>{t('home.learnTitle')}</h3>
            <p>{t('home.learnDesc')}</p>
          </div>

          <div className="how-step">
            <div className="how-number">2</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #fdf8f0, #f5ede0)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 13a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                <circle cx="10" cy="10" r="1.5" fill="#b8860b" />
              </svg>
            </div>
            <h3>{t('home.askTitle')}</h3>
            <p>{t('home.askDesc')}</p>
          </div>

          <div className="how-step">
            <div className="how-number">3</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #f5f0fa, #ede0f2)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#8f4d69" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="14" cy="14" r="10" />
                <path d="M14 8v6l4 2" />
              </svg>
            </div>
            <h3>{t('home.exploreTitle')}</h3>
            <p>{t('home.exploreDesc')}</p>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="coming-soon-section fade-on-scroll">
        <div className="coming-soon-content">
          <div className="coming-soon-badge">{t('home.comingSoonBadge')}</div>
          <h2 className="coming-soon-title">{t('home.comingSoonTitle')}</h2>
          <p className="coming-soon-text">
            {t('home.comingSoonText')}
          </p>
          <div className="coming-soon-features">
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 10 5 17 5 3" />
              </svg>
              <span>{t('home.animatedExplainers')}</span>
            </div>
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="7" />
                <path d="M10 7v3l2 1" />
              </svg>
              <span>{t('home.biteSized')}</span>
            </div>
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>{t('home.expertSessions')}</span>
            </div>
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{t('home.communitySpace')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section fade-on-scroll">
        <div className="cta-content">
          <h2 className="cta-title">{t('home.ctaTitle')}</h2>
          <p className="cta-text">
            {t('home.ctaText')}
          </p>
          <Link to="/learn" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto' }}>
            {t('home.getStarted')}
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
