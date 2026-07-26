import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Learn.css';
import { modules as modulesEn, categories as categoriesEn } from './data/lessons';
import { modules as modulesHi, categories as categoriesHi } from './data/lessons_hi';
import { ArrowRight } from '../components/Icons';
import LearnSidebar from '../components/LearnSidebar';

import img1 from '../assets/first period.png';
import img2 from '../assets/know your cycle.png';
import img3 from '../assets/healthy habits.png';
import img4 from '../assets/period care.png';
import img5 from '../assets/nourish yourself.png';
import img6 from '../assets/mind&mood.png';
import img7 from '../assets/myth busters.png';
import heroImg from '../assets/learn hero.png';

const moduleImages = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6, 7: img7 };

const ModuleIllus = ({ id, completed, t }) => (
  <>
    <img src={moduleImages[id]} alt="" className="mod-illus" />
    {completed && (
      <div className="module-card-completed-overlay">
        <svg viewBox="0 0 12 12" fill="none" className="badge-check">
          <path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t('learn.completed')}
      </div>
    )}
  </>
);

const Learn = () => {
  const { language, t } = useLanguage();
  const modules = language === 'hi' ? modulesHi : modulesEn;
  const categories = language === 'hi' ? categoriesHi : categoriesEn;

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllModules, setShowAllModules] = useState(false);
  const [completed, setCompleted] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('aarohi_progress') || '[]'));
    } catch { return new Set(); }
  });

  // Sync activeCategory when language changes to preserve selection between Hindi/English values
  useEffect(() => {
    setActiveCategory(language === 'hi' ? 'सभी' : 'All');
  }, [language]);

  useEffect(() => {
    const sync = () => {
      try {
        setCompleted(new Set(JSON.parse(localStorage.getItem('aarohi_progress') || '[]')));
      } catch {}
    };
    window.addEventListener('focus', sync);
    window.addEventListener('storage', sync);
    const id = setInterval(sync, 2000);
    return () => {
      window.removeEventListener('focus', sync);
      window.removeEventListener('storage', sync);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    setShowAllModules(false);
  }, [activeCategory, searchQuery]);

  const nextIncomplete = modules.find((m) => !completed.has(m.id));
  const allDone = !nextIncomplete;

  const filteredModules = useMemo(() => {
    return modules.filter(mod => {
      const matchesCategory = 
        activeCategory === 'All' || 
        activeCategory === 'सभी' || 
        mod.category === activeCategory;
      const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, modules]);

  const visibleModules = showAllModules ? filteredModules : filteredModules.slice(0, 4);

  return (
    <div className="learn-page">
      <div className="learn-deco learn-deco-1" />
      <div className="learn-deco learn-deco-2" />
      <div className="learn-deco learn-deco-3" />
      <div className="learn-deco learn-deco-4" />

      {/* Hero */}
      <section className="learn-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="learn-hero-content">
          <div className="learn-hero-left">
            <div className="learn-tagline">
              <svg className="learn-tagline-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#dc7e96" strokeWidth="2" />
                <path d="M12 8v4l3 3" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>{t('learn.heroTagline')}</span>
            </div>
            <h1 className="learn-hero-title">
              {t('learn.heroTitle')}
            </h1>
            <p className="learn-hero-desc">
              {t('learn.heroSubtitle')}
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">{t('learn.stats.modulesNum')}</span>
                <span className="hero-stat-label">{t('learn.stats.modulesLabel')}</span>
              </div>
              <div className="hero-stat-dot" />
              <div className="hero-stat">
                <span className="hero-stat-num">{t('learn.stats.topicsNum')}</span>
                <span className="hero-stat-label">{t('learn.stats.topicsLabel')}</span>
              </div>
              <div className="hero-stat-dot" />
              <div className="hero-stat">
                <span className="hero-stat-num">{t('learn.stats.freeNum')}</span>
                <span className="hero-stat-label">{t('learn.stats.freeLabel')}</span>
              </div>
            </div>
            <div className="learn-hero-buttons">
              <a href="#modules" className="btn btn-primary">
                {t('learn.stats.exploreBtn')}
                <ArrowRight className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="learn-tools" id="modules">
        <div className="section-divider">
          <div className="section-divider-line" />
          <svg className="section-divider-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" opacity="0.3" />
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="section-divider-line" />
        </div>
        <div className="learn-tools-inner">
          <div className="learn-search-wrap">
            <svg className="learn-search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="learn-search-input"
              placeholder={t('learn.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="learn-categories">
            {categories.map(cat => (
              <button
                key={cat}
                data-category={cat}
                className={`cat-btn${activeCategory === cat ? ' cat-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Module Cards + Sidebar */}
      <section className="learn-modules-section">
        <div className="learn-modules-inner">
          <div className="learn-layout">
            <div className="learn-main">
              {/* Continue Learning Row */}
              {allDone ? (
                <div className="continue-all-done">
                  <svg viewBox="0 0 36 36" fill="none" className="continue-all-done-icon">
                    <circle cx="18" cy="18" r="16" fill="#38a169" opacity="0.15" />
                    <circle cx="18" cy="18" r="11" fill="#38a169" />
                    <path d="M11 18l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="continue-all-done-text">{t('learn.completedAllDone')}</div>
                    <div className="continue-all-done-sub">{t('learn.completedAllDoneSub')}</div>
                  </div>
                </div>
              ) : (
                <div className="continue-row">
                  <div className="continue-row-illus">
                    <img src={moduleImages[nextIncomplete.id]} alt="" />
                  </div>
                  <div className="continue-row-body">
                    <div className="continue-row-label">{t('learn.continueLearning')}</div>
                    <h4 className="continue-row-title">{nextIncomplete.title}</h4>
                    <p className="continue-row-desc">{nextIncomplete.description}</p>
                  </div>
                  <Link to={`/learn/${nextIncomplete.id}`} className="continue-row-cta">
                    {t('learn.btnContinue')}
                    <ArrowRight className="cta-arrow" />
                  </Link>
                </div>
              )}
              {filteredModules.length > 0 ? (
                <>
                  <div className="learn-grid">
                    {visibleModules.map((mod, index) => (
                      <div className="module-card" key={mod.id} data-category={mod.category} data-module-id={mod.id} style={{ animationDelay: `${index * 0.08}s` }}>
                        <div className="module-card-illus">
                          <ModuleIllus id={mod.id} completed={completed.has(mod.id)} t={t} />
                        </div>
                        <div className="module-card-body">
                          <div className="module-card-meta">
                            {mod.beginner && <span className="beginner-badge">{t('learn.beginner')}</span>}
                            {!mod.beginner && <span className="level-badge">{t('learn.intermediate')}</span>}
                            <span className="reading-time">{mod.readingTime}</span>
                          </div>
                          <h3 className="module-card-title">{mod.title}</h3>
                          <p className="module-card-desc">{mod.description}</p>
                          <Link to={mod.id === 7 ? '/resources' : `/learn/${mod.id}`} className="module-card-cta">
                            {t('learn.btnExplore')}
                            <ArrowRight className="cta-arrow" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredModules.length > 4 && (
                    <div className="show-more-wrap">
                      <button className="show-more-btn" onClick={() => setShowAllModules(p => !p)}>
                        {showAllModules ? t('learn.showLess') : `${t('learn.showAll')} (${filteredModules.length})`}
                        <svg className={`show-more-arrow${showAllModules ? ' up' : ''}`} viewBox="0 0 14 14" fill="none">
                          <path d="M3.5 5l3.5 3.5L10.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="learn-empty">
                  <svg viewBox="0 0 80 80" fill="none" style={{ width: 64, height: 64, marginBottom: '1rem' }}>
                    <circle cx="40" cy="40" r="30" stroke="#dc7e96" strokeWidth="2" opacity="0.4" />
                    <circle cx="40" cy="32" r="8" stroke="#dc7e96" strokeWidth="2" />
                    <path d="M24 56c0-8 7-14 16-14s16 6 16 14" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  </svg>
                  <p>{t('learn.noModules')} &ldquo;{searchQuery}&rdquo;</p>
                  <button className="cat-btn" onClick={() => { setSearchQuery(''); setActiveCategory(language === 'hi' ? 'सभी' : 'All'); }}>
                    {t('learn.clearFilters')}
                  </button>
                </div>
              )}
            </div>
            <LearnSidebar />
          </div>
        </div>
      </section>

      {/* Meet Sakhi */}
      <section className="sakhi-showcase">
        <div className="sakhi-showcase-deco sakhi-deco-1" />
        <div className="sakhi-showcase-deco sakhi-deco-2" />
        <div className="sakhi-showcase-inner">
          <div className="sakhi-showcase-left">
            <div className="sakhi-phone-wrapper">
              <svg className="sakhi-character" viewBox="0 0 120 160" fill="none">
                <circle cx="60" cy="50" r="30" fill="#f5edf1" stroke="#dc7e96" strokeWidth="1.5" />
                <circle cx="48" cy="44" r="4" fill="#dc7e96" />
                <circle cx="72" cy="44" r="4" fill="#dc7e96" />
                <path d="M48 64c4 4 8 5 12 5s8-1 12-5" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M60 80v30" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M42 86c6 4 12 6 18 6s12-2 18-6" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 120l8-6 12 8 12-8 8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="28" cy="38" r="3" fill="#e8917a" opacity="0.5" className="sakhi-float-1" />
                <circle cx="92" cy="30" r="2.5" fill="#d4a853" opacity="0.5" className="sakhi-float-2" />
                <circle cx="96" cy="70" r="2" fill="#e8917a" opacity="0.5" className="sakhi-float-3" />
              </svg>
              <svg className="sakhi-phone" viewBox="0 0 240 480" fill="none">
                <defs>
                  <linearGradient id="chatUser" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#dc7e96" />
                    <stop offset="100%" stopColor="#d05a7a" />
                  </linearGradient>
                  <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3a3a4a" />
                    <stop offset="100%" stopColor="#2a2a3a" />
                  </linearGradient>
                </defs>
                <rect x="20" y="10" width="200" height="460" rx="32" fill="url(#phoneGrad)" />
                <rect x="24" y="14" width="192" height="452" rx="28" fill="#3d3d4d" />
                <rect x="28" y="18" width="184" height="444" rx="24" fill="#f9f7f8" />
                <rect x="106" y="24" width="28" height="4" rx="2" fill="#2d3748" opacity="0.15" />
                <circle cx="204" cy="26" r="3" fill="#dc7e96" />
                <text x="36" y="29" fontSize="8" fill="#718096" fontFamily="system-ui" fontWeight="500">9:41</text>
                <circle cx="44" cy="58" r="12" fill="#f5edf1" stroke="#dc7e96" strokeWidth="1" />
                <circle cx="39" cy="55" r="2" fill="#dc7e96" />
                <circle cx="49" cy="55" r="2" fill="#dc7e96" />
                <path d="M38 63c2 2 5 3 8 3s6-1 8-3" stroke="#dc7e96" strokeWidth="1" strokeLinecap="round" />
                <text x="60" y="55" fontSize="6" fill="#4a5568" fontWeight="600">Sakhi</text>
                <text x="60" y="63" fontSize="5" fill="#718096">AI Assistant</text>
                {/* Chat bubble 1 - Sakhi */}
                <rect x="42" y="76" width="122" height="28" rx="10" fill="white" stroke="#e8dfe5" strokeWidth="0.5" />
                <text x="50" y="90" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">{language === 'hi' ? 'तथ्य: ऐंठन वास्तव में आपके' : 'Fun fact: those cramps are just'}</text>
                <text x="50" y="100" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">{language === 'hi' ? 'गर्भाशय के काम करने के कारण होती है।' : 'your uterus working out. Flex! 💪'}</text>
                {/* Chat bubble 2 - User */}
                <rect x="86" y="114" width="118" height="28" rx="10" fill="url(#chatUser)" />
                <text x="96" y="128" fontSize="6.5" fill="white" fontFamily="system-ui">{language === 'hi' ? 'तो मेरा गर्भाशय कसरत कर' : 'So my uterus is at the gym'}</text>
                <text x="96" y="138" fontSize="6.5" fill="white" fontFamily="system-ui">{language === 'hi' ? 'रहा है जबकि मैं रो रही हूँ? 😂' : 'while I cry at puppy ads? 😂'}</text>
                <circle cx="82" cy="128" r="6" fill="#fdf8fa" stroke="#e5a4c4" strokeWidth="0.5" />
                <text x="79" y="131" fontSize="6">👧</text>
                {/* Input bar */}
                <rect x="28" y="430" width="184" height="32" rx="16" fill="white" stroke="#e8dfe5" strokeWidth="1" />
                <text x="44" y="449" fontSize="7" fill="#718096" fontFamily="system-ui">{language === 'hi' ? 'कुछ भी पूछें...' : 'Ask anything...'}</text>
                <circle cx="192" cy="446" r="10" fill="url(#chatUser)" />
                <path d="M188 446l4 3 4-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="sakhi-sparkle sakhi-sparkle-1" />
              <div className="sakhi-sparkle sakhi-sparkle-2" />
              <div className="sakhi-sparkle sakhi-sparkle-3" />
            </div>
          </div>
          <div className="sakhi-showcase-right">
            <div className="learn-section-label">{t('learn.showcaseLabel')}</div>
            <h2 className="sakhi-showcase-title">{t('learn.showcaseTitle')}</h2>
            <p className="sakhi-showcase-subtitle">
              {t('learn.showcaseSubtitle')}
            </p>
            <p className="sakhi-showcase-desc">
              {t('learn.showcaseDesc')}
            </p>
            <div className="sakhi-features">
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('learn.showcaseFeatures.p1')}
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('learn.showcaseFeatures.p2')}
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('learn.showcaseFeatures.p3')}
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('learn.showcaseFeatures.p4')}
              </div>
            </div>
            <Link to="/ask-sakhi" className="btn-primary sakhi-showcase-cta">
              {t('learn.showcaseCta')}
              <ArrowRight className="btn-arrow" />
            </Link>
            <p className="sakhi-showcase-note">{t('learn.showcaseNote')}</p>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="quote-section">
        <div className="quote-card">
          <svg className="quote-floral quote-floral-tl" viewBox="0 0 80 80" fill="none">
            <circle cx="30" cy="30" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <circle cx="30" cy="30" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-tr" viewBox="0 0 80 80" fill="none">
            <circle cx="50" cy="50" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <circle cx="50" cy="50" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-bl" viewBox="0 0 80 80" fill="none">
            <circle cx="30" cy="50" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <circle cx="30" cy="50" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-br" viewBox="0 0 80 80" fill="none">
            <circle cx="50" cy="30" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <circle cx="50" cy="30" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-icon" viewBox="0 0 48 48" fill="none">
            <path d="M18 14c-4 0-7 3-7 7v7h7v-7h-7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37 14c-4 0-7 3-7 7v7h7v-7h-7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <blockquote className="quote-text">
            &ldquo;{t('learn.quote')}&rdquo;
          </blockquote>
          <cite className="quote-attribution">&mdash; {t('learn.attribution')}</cite>
        </div>
      </section>
    </div>
  );
};

export default Learn;
