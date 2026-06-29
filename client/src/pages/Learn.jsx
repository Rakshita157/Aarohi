import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learn.css';
import { modules, categories } from './data/lessons';
import { ArrowRight } from '../components/Icons';

const ModuleIllus = ({ id }) => {
  const illus = {
     1: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <rect x="60" y="30" width="60" height="55" rx="10" stroke="#e8917a" strokeWidth="2" fill="white" />
        <rect x="60" y="40" width="60" height="18" rx="5" fill="#e0f2ef" />
        <line x1="72" y1="49" x2="108" y2="49" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="65" x2="102" y2="65" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="78" y1="73" x2="98" y2="73" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M90 25c0 0-6 9-6 13s2.7 6 6 6 6-2.7 6-6-6-13-6-13z" fill="#e8917a" opacity="0.6" />
        <circle cx="90" cy="52" r="2" fill="#d4739f" />
        <circle cx="84" cy="71" r="2" fill="#d4739f" />
        <circle cx="96" cy="71" r="2" fill="#d4739f" />
        <circle cx="45" cy="42" r="3" fill="#e8917a" opacity="0.4" />
        <circle cx="135" cy="58" r="2.5" fill="#d4a853" opacity="0.4" />
        <circle cx="50" cy="90" r="2" fill="#e8917a" opacity="0.4" />
      </svg>
    ),
     2: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <circle cx="90" cy="58" r="32" stroke="#e8917a" strokeWidth="2" />
        <circle cx="90" cy="58" r="16" stroke="#e5a4c4" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="90" cy="58" r="4" fill="#dc7e96" />
        <path d="M110 38l8 8-8 8" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70 78l-8-8 8-8" stroke="#e5a4c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="72" r="3" fill="#d4a853" opacity="0.5" />
        <circle cx="138" cy="48" r="2.5" fill="#e8917a" opacity="0.5" />
        <circle cx="58" cy="30" r="2" fill="#e8917a" opacity="0.5" />
        <circle cx="130" cy="80" r="2" fill="#b794d4" opacity="0.5" />
        <circle cx="42" cy="42" r="2" fill="#e8917a" opacity="0.4" />
      </svg>
    ),
     3: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <path d="M90 98c-18-10-32-24-36-36-5-14 2-28 14-30 8-2 18 2 22 10 4-8 14-12 22-10 12 2 19 16 14 30-4 12-18 26-36 36z" stroke="#b794d4" strokeWidth="2" fill="#f5f0fa" />
        <path d="M94 70l-8 8 14 14" stroke="#e8917a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="48" cy="48" r="3" fill="#b794d4" opacity="0.5" />
        <circle cx="135" cy="55" r="2.5" fill="#d4a853" opacity="0.5" />
        <circle cx="62" cy="92" r="2" fill="#e8917a" opacity="0.5" />
        <circle cx="128" cy="82" r="2" fill="#e8917a" opacity="0.4" />
        <circle cx="55" cy="25" r="2" fill="#d4a853" opacity="0.4" />
      </svg>
    ),
     4: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <path d="M90 30c-10 0-18 10-18 22 0 16 18 38 18 38s18-22 18-38c0-12-8-22-18-22z" stroke="#dc7e96" strokeWidth="2" fill="#fdf8fa" />
        <path d="M90 44c-2.8 0-5 2.5-5 5.5" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" />
        <path d="M62 68l6-4" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" />
        <path d="M118 68l-6-4" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" />
        <path d="M82 82l8-4 8 4" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="55" r="3" fill="#dc7e96" opacity="0.4" />
        <circle cx="138" cy="62" r="2.5" fill="#d4a853" opacity="0.5" />
        <circle cx="55" cy="38" r="2" fill="#e8917a" opacity="0.4" />
        <circle cx="60" cy="95" r="2.5" fill="#e8917a" opacity="0.3" />
      </svg>
    ),
     5: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <circle cx="90" cy="60" r="28" stroke="#d4a853" strokeWidth="2" fill="#fdf8f0" />
        <path d="M90 44c-4.4 0-8 3.6-8 8 0 3 1.6 5.5 4 7-2.4 1.5-4 4-4 7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3-1.6-5.5-4-7 2.4-1.5 4-4 4-7 0-4.4-3.6-8-8-8z" fill="#f5ede0" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M90 46v28" stroke="#d4a853" strokeWidth="1.5" />
        <path d="M78 60h24" stroke="#d4a853" strokeWidth="1.5" />
        <circle cx="48" cy="48" r="3" fill="#e8917a" opacity="0.5" />
        <circle cx="135" cy="55" r="2.5" fill="#d4a853" opacity="0.5" />
        <circle cx="130" cy="78" r="2" fill="#e8917a" opacity="0.4" />
        <circle cx="56" cy="30" r="2" fill="#b794d4" opacity="0.4" />
      </svg>
    ),
     6: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <circle cx="90" cy="55" r="30" stroke="#b794d4" strokeWidth="2" fill="#f5f0fa" />
        <circle cx="82" cy="48" r="6" fill="#ede0f2" stroke="#b794d4" strokeWidth="1.5" />
        <circle cx="98" cy="48" r="6" fill="#ede0f2" stroke="#b794d4" strokeWidth="1.5" />
        <circle cx="82" cy="48" r="2.5" fill="#b794d4" />
        <circle cx="98" cy="48" r="2.5" fill="#b794d4" />
        <path d="M74 62c4 6 8 8 16 8s12-2 16-8" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="42" r="3" fill="#e8917a" opacity="0.5" />
        <circle cx="135" cy="48" r="2.5" fill="#d4a853" opacity="0.5" />
        <circle cx="58" cy="90" r="2" fill="#b794d4" opacity="0.5" />
        <circle cx="130" cy="82" r="2" fill="#e8917a" opacity="0.4" />
        <circle cx="50" cy="28" r="2" fill="#d4a853" opacity="0.4" />
      </svg>
    ),
     7: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <path d="M90 38c-14 0-25 10-25 22 0 8 4 14 10 18l-3 12 12-8c2 0 4 1 6 1 14 0 25-10 25-22s-11-22-25-22z" stroke="#e8917a" strokeWidth="2" fill="#fdf0f0" />
        <path d="M82 48l-4 12h8l-4 12" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="91" y1="52" x2="99" y2="52" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" />
        <line x1="91" y1="58" x2="99" y2="58" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="52" r="3" fill="#e8917a" opacity="0.5" />
        <circle cx="135" cy="58" r="2.5" fill="#b794d4" opacity="0.5" />
        <circle cx="60" cy="82" r="2" fill="#e8917a" opacity="0.5" />
        <circle cx="52" cy="28" r="2" fill="#d4a853" opacity="0.4" />
      </svg>
    ),
     8: (
      <svg viewBox="0 0 180 130" fill="none" className="mod-illus">
        <path d="M50 48c0-8 6-14 14-14h52c8 0 14 6 14 14v26c0 8-6 14-14 14h-8l-12 10v-10h-32c-8 0-14-6-14-14V48z" stroke="#e8917a" strokeWidth="2" fill="#f0faf9" />
        <circle cx="80" cy="55" r="3" fill="#e8917a" />
        <circle cx="95" cy="55" r="3" fill="#e8917a" />
        <circle cx="110" cy="55" r="3" fill="#e8917a" />
        <path d="M74 68c4 4 8 5 12 5s8-1 12-5" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" />
        <circle cx="45" cy="38" r="3" fill="#e8917a" opacity="0.5" />
        <circle cx="140" cy="42" r="2.5" fill="#d4a853" opacity="0.5" />
        <circle cx="55" cy="92" r="2" fill="#e8917a" opacity="0.4" />
        <circle cx="140" cy="80" r="2" fill="#b794d4" opacity="0.4" />
      </svg>
    ),
  };
  return illus[id] || null;
};

const Learn = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = useMemo(() => {
    return modules.filter(mod => {
      const matchesCategory = activeCategory === 'All' || mod.category === activeCategory;
      const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="learn-page">
      {/* Decorative floating elements */}
      <div className="learn-deco learn-deco-1" />
      <div className="learn-deco learn-deco-2" />
      <div className="learn-deco learn-deco-3" />
      <div className="learn-deco learn-deco-4" />

      {/* Hero */}
      <section className="learn-hero">
        <div className="learn-hero-content">
          <div className="learn-hero-left">
            <div className="learn-tagline">
              <svg className="learn-tagline-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#dc7e96" strokeWidth="2" />
                <path d="M12 8v4l3 3" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>KNOWLEDGE • CONFIDENCE • FREEDOM</span>
            </div>
            <h1 className="learn-hero-title">
              Learn at Your<br />
              Own Pace
            </h1>
            <p className="learn-hero-desc">
              Explore structured menstrual health lessons through simple,<br />
              beginner-friendly modules designed just for you.
            </p>
            <div className="learn-hero-buttons">
              <a href="#modules" className="btn btn-primary">
                Explore Modules
                <ArrowRight className="btn-arrow" />
              </a>
            </div>
          </div>
          <div className="learn-hero-right">
            <div className="learn-hero-illustration">
              <svg viewBox="0 0 360 320" fill="none" className="hero-illus-svg">
                <defs>
                  <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f5f0f3" />
                    <stop offset="100%" stopColor="#f0e6ec" />
                  </linearGradient>
                </defs>
                {/* Tablet */}
                <rect x="130" y="120" width="140" height="100" rx="14" stroke="#dc7e96" strokeWidth="2" fill="white" />
                <rect x="140" y="130" width="120" height="70" rx="6" fill="#fdf8fa" />
                {/* Screen content - chart/learning */}
                <rect x="150" y="138" width="40" height="30" rx="4" stroke="#e5a4c4" strokeWidth="1.5" fill="#fff5f9" />
                <rect x="150" y="174" width="100" height="8" rx="3" fill="#f5edf1" />
                <rect x="150" y="186" width="80" height="8" rx="3" fill="#f5edf1" />
                <line x1="155" y1="148" x2="185" y2="148" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="158" y1="155" x2="175" y2="155" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="155" y1="162" x2="182" y2="162" stroke="#e5a4c4" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="205" cy="153" r="10" fill="#f5edf1" stroke="#e5a4c4" strokeWidth="1.5" />
                <circle cx="205" cy="153" r="3" fill="#dc7e96" />
                <path d="M205 143v4" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M200 153h10" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" />
                {/* Book */}
                <rect x="285" y="145" width="40" height="32" rx="4" stroke="#dc7e96" strokeWidth="2" fill="white" transform="rotate(12 285 145)" />
                <line x1="292" y1="152" x2="318" y2="148" stroke="#e5a4c4" strokeWidth="1.5" strokeLinecap="round" transform="rotate(12 285 145)" />
                <line x1="292" y1="160" x2="318" y2="156" stroke="#e5a4c4" strokeWidth="1.5" strokeLinecap="round" transform="rotate(12 285 145)" />
                <line x1="292" y1="168" x2="315" y2="164" stroke="#e5a4c4" strokeWidth="1.5" strokeLinecap="round" transform="rotate(12 285 145)" />
                {/* Pencil */}
                <line x1="280" y1="170" x2="260" y2="140" stroke="#d4739f" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M258 138l-4 4 2 2 4-4-2-2z" fill="#dc7e96" />
                {/* Sparkles / floating elements */}
                <path d="M200 90c0 0-3 5-3 8s1.3 4 3 4 3-1.3 3-3-3-9-3-9z" fill="#e8917a" opacity="0.6" className="float-elem-1" />
                <path d="M310 110c0 0-2 4-2 6s1 3 2 3 2-1 2-2-2-7-2-7z" fill="#d4a853" opacity="0.6" className="float-elem-2" />
                <path d="M80 135c0 0-2 4-2 6s1 3 2 3 2-1 2-2-2-7-2-7z" fill="#e8917a" opacity="0.6" className="float-elem-3" />
                <circle cx="160" cy="105" r="3" fill="#e8917a" opacity="0.5" className="float-elem-4" />
                <circle cx="300" cy="95" r="2.5" fill="#d4a853" opacity="0.5" className="float-elem-1" />
                <circle cx="70" cy="200" r="2" fill="#b794d4" opacity="0.5" className="float-elem-2" />
                <circle cx="330" cy="180" r="3" fill="#e8917a" opacity="0.4" className="float-elem-3" />
                {/* Extra colorful doodads */}
                <circle cx="220" cy="130" r="2" fill="#e8917a" opacity="0.4" className="float-elem-4" />
                <circle cx="60" cy="160" r="2.5" fill="#d4a853" opacity="0.3" className="float-elem-1" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="learn-tools" id="modules">
        <div className="learn-tools-inner">
          <div className="learn-search-wrap">
            <svg className="learn-search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="learn-search-input"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="learn-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-btn${activeCategory === cat ? ' cat-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Module Cards */}
      <section className="learn-modules-section">
        <div className="learn-modules-inner">
          {filteredModules.length > 0 ? (
            <div className="learn-grid">
              {filteredModules.map((mod, index) => (
                <div className="module-card" key={mod.id} data-category={mod.category} style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="module-card-illus">
                    <ModuleIllus id={mod.id} />
                  </div>
                  <div className="module-card-body">
                    <div className="module-card-meta">
                      {mod.beginner && <span className="beginner-badge">Beginner</span>}
                      {!mod.beginner && <span className="level-badge">Intermediate</span>}
                      <span className="reading-time">{mod.readingTime}</span>
                    </div>
                    <h3 className="module-card-title">{mod.title}</h3>
                    <p className="module-card-desc">{mod.description}</p>
                    <Link to={mod.id === 8 ? '/ask-sakhi' : '/not-found'} className="module-card-cta">
                      Explore
                      <ArrowRight className="cta-arrow" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="learn-empty">
              <svg viewBox="0 0 80 80" fill="none" style={{ width: 64, height: 64, marginBottom: '1rem' }}>
                <circle cx="40" cy="40" r="30" stroke="#dc7e96" strokeWidth="2" opacity="0.4" />
                <circle cx="40" cy="32" r="8" stroke="#dc7e96" strokeWidth="2" />
                <path d="M24 56c0-8 7-14 16-14s16 6 16 14" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
              <p>No modules found for &ldquo;{searchQuery}&rdquo;</p>
              <button className="cat-btn" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Your Learning Path */}
      <section className="path-section">
        <div className="path-container">
          {/* Decorative paper airplane */}
          <svg className="path-plane" viewBox="0 0 60 60" fill="none">
            <path d="M50 10L10 28l14 6 4 14 6-20 16-18z" fill="#e8917a" opacity="0.2" />
            <path d="M28 34l-4 14 16-18-12 4z" fill="#e8917a" opacity="0.35" />
            <path d="M50 10L10 28l14 6 6-20 20-4z" fill="#d4a853" opacity="0.2" />
          </svg>
          <svg className="path-plane-trail" viewBox="0 0 180 120" fill="none">
            <path d="M140 20C120 30 100 50 90 60S60 80 50 90s-20 20-20 20" stroke="#e8917a" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" fill="none" />
            <circle cx="40" cy="86" r="2" fill="#e8917a" opacity="0.5" />
            <circle cx="55" cy="78" r="1.5" fill="#d4a853" opacity="0.4" />
            <circle cx="68" cy="68" r="1.5" fill="#e8917a" opacity="0.4" />
            <circle cx="85" cy="56" r="2" fill="#b794d4" opacity="0.5" />
            <circle cx="100" cy="48" r="1.5" fill="#e8917a" opacity="0.4" />
          </svg>

          <div className="learn-section-label">YOUR PATH</div>
          <h2 className="learn-section-title">Your Learning Path</h2>
          <p className="learn-section-desc">
            Follow this journey to build your menstrual health knowledge step by step.
          </p>

          <div className="path-track">
            <div className="path-steps">
              <div className="path-step">
                <div className="path-step-badge">01</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#e8917a" strokeWidth="1.5" />
                    <path d="M36 18c-6 0-10 4-10 9 0 7 10 15 10 15s10-8 10-15c0-5-4-9-10-9z" fill="#e0f2ef" stroke="#e8917a" strokeWidth="1.5" />
                    <path d="M36 22v10" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="28" cy="22" r="2" fill="#d4a853" opacity="0.6" />
                    <circle cx="44" cy="24" r="1.5" fill="#e8917a" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Your First Period</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">02</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#e8917a" strokeWidth="1.5" />
                    <rect x="24" y="20" width="24" height="30" rx="4" stroke="#e8917a" strokeWidth="1.5" fill="white" />
                    <line x1="28" y1="30" x2="44" y2="30" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="28" y1="38" x2="40" y2="38" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M30 20v-4" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M42 20v-4" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="28" cy="48" r="2" fill="#d4a853" opacity="0.6" />
                    <circle cx="48" cy="22" r="1.5" fill="#e8917a" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Know Your Cycle</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">03</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#b794d4" strokeWidth="1.5" />
                    <path d="M36 52c-8-5-16-12-18-18-2-7 1-14 7-15 4-1 9 1 11 5 2-4 7-6 11-5 6 1 9 8 7 15-2 6-10 13-18 18z" stroke="#b794d4" strokeWidth="1.5" fill="#f5f0fa" />
                    <path d="M38 38l-4 4 7 7" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="1.5" fill="#d4a853" opacity="0.6" />
                    <circle cx="48" cy="22" r="2" fill="#e8917a" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Healthy Habits</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">04</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#e8917a" strokeWidth="1.5" />
                    <ellipse cx="36" cy="42" rx="14" ry="16" stroke="#e8917a" strokeWidth="1.5" fill="#fdf0f0" />
                    <path d="M36 30c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" fill="#f5e0e0" stroke="#e8917a" strokeWidth="1" />
                    <path d="M30 48l4-2 2-1 2 1 4 2" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="28" r="1.5" fill="#e8917a" opacity="0.6" />
                    <circle cx="50" cy="30" r="2" fill="#d4a853" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Period Care</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">05</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#d4a853" strokeWidth="1.5" />
                    <circle cx="36" cy="36" r="16" stroke="#d4a853" strokeWidth="1.5" fill="#fdf8f0" />
                    <path d="M36 26c-2.5 0-4.5 2-4.5 4.5 0 1.7.9 3 2.3 4-1.4.9-2.3 2.3-2.3 4 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-1.7-.9-3-2.3-4 1.4-.9 2.3-2.3 2.3-4 0-2.5-2-4.5-4.5-4.5z" fill="#f5ede0" stroke="#d4a853" strokeWidth="1" />
                    <path d="M36 28v16" stroke="#d4a853" strokeWidth="1.5" />
                    <path d="M28 36h16" stroke="#d4a853" strokeWidth="1.5" />
                    <circle cx="24" cy="24" r="1.5" fill="#e8917a" opacity="0.6" />
                    <circle cx="50" cy="22" r="2" fill="#e8917a" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Nourish Yourself</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">06</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#b794d4" strokeWidth="1.5" />
                    <circle cx="36" cy="34" r="12" stroke="#b794d4" strokeWidth="1.5" fill="#f5f0fa" />
                    <circle cx="32" cy="30" r="3" fill="#ede0f2" stroke="#b794d4" strokeWidth="1" />
                    <circle cx="40" cy="30" r="3" fill="#ede0f2" stroke="#b794d4" strokeWidth="1" />
                    <circle cx="32" cy="30" r="1.2" fill="#b794d4" />
                    <circle cx="40" cy="30" r="1.2" fill="#b794d4" />
                    <path d="M30 40c2 3 4 4 6 4s4-1 6-4" stroke="#b794d4" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="22" cy="22" r="1.5" fill="#e8917a" opacity="0.6" />
                    <circle cx="52" cy="24" r="2" fill="#d4a853" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Mind &amp; Mood</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">07</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#e8917a" strokeWidth="1.5" />
                    <path d="M36 24c-8 0-14 6-14 12 0 4 2 8 6 10l-2 7 7-5c1 0 2 1 3 1 8 0 14-6 14-12s-6-12-14-12z" stroke="#e8917a" strokeWidth="1.5" fill="#fdf0f0" />
                    <path d="M32 30l-2 6h5l-2 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="38" y1="32" x2="43" y2="32" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="38" y1="36" x2="42" y2="36" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="22" cy="24" r="1.5" fill="#e8917a" opacity="0.6" />
                    <circle cx="52" cy="22" r="2" fill="#b794d4" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Myth Busters</span>
              </div>

              <div className="path-arrow">
                <svg viewBox="0 0 40 24" fill="none">
                  <path d="M4 12h28M26 6l8 6-8 6" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="path-step">
                <div className="path-step-badge">08</div>
                <div className="path-step-circle">
                  <svg viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="34" fill="white" stroke="#e8917a" strokeWidth="1.5" />
                    <circle cx="36" cy="36" r="16" fill="#e0f2ef" stroke="#e8917a" strokeWidth="1.5" />
                    <circle cx="30" cy="32" r="2.5" fill="#e8917a" />
                    <circle cx="42" cy="32" r="2.5" fill="#e8917a" />
                    <path d="M30 42c3 2 6 3 9 3s6-1 9-3" stroke="#e8917a" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M46 28l2-4" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M48 26l4-2" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="22" cy="22" r="1.5" fill="#b794d4" opacity="0.6" />
                    <circle cx="52" cy="24" r="2" fill="#e8917a" opacity="0.5" />
                  </svg>
                </div>
                <span className="path-step-label">Ask Sakhi</span>
              </div>
            </div>
          </div>

          <div className="path-deco path-deco-1" />
          <div className="path-deco path-deco-2" />
          <div className="path-deco path-deco-3" />
          <div className="path-deco path-deco-4" />
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
                <path d="M20 70c0 0-2 3-2 5s1 2 2 2 2-1 2-2-2-5-2-5z" fill="#e8917a" opacity="0.5" className="sakhi-float-1" />
                <path d="M100 55c0 0-2 3-2 5s1 2 2 2 2-1 2-2-2-5-2-5z" fill="#d4a853" opacity="0.4" className="sakhi-float-3" />
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
                <circle cx="212" cy="26" r="3" fill="#dc7e96" opacity="0.5" />
                <rect x="216" y="24" width="8" height="4" rx="1" fill="#dc7e96" opacity="0.3" />
                <text x="36" y="29" fontSize="8" fill="#718096" fontFamily="system-ui" fontWeight="500">9:41</text>
                {/* Sakhi avatar in chat */}
                <circle cx="44" cy="58" r="12" fill="#f5edf1" stroke="#dc7e96" strokeWidth="1" />
                <circle cx="39" cy="55" r="2" fill="#dc7e96" />
                <circle cx="49" cy="55" r="2" fill="#dc7e96" />
                <path d="M38 63c2 2 5 3 8 3s6-1 8-3" stroke="#dc7e96" strokeWidth="1" strokeLinecap="round" />
                <text x="60" y="55" fontSize="6" fill="#4a5568" fontWeight="600">Sakhi</text>
                <text x="60" y="63" fontSize="5" fill="#718096">AI Assistant</text>
                {/* Chat bubble 1 - Sakhi */}
                <rect x="42" y="76" width="104" height="32" rx="10" fill="white" stroke="#e8dfe5" strokeWidth="0.5" />
                <text x="50" y="90" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">Mild cramps happen because your</text>
                <text x="50" y="100" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">uterus contracts to shed its lining.</text>
                {/* Chat bubble 2 - User */}
                <rect x="98" y="116" width="94" height="24" rx="10" fill="url(#chatUser)" />
                <text x="108" y="128" fontSize="6.5" fill="white" fontFamily="system-ui">Why do I get cramps</text>
                <text x="108" y="138" fontSize="6.5" fill="white" fontFamily="system-ui">during periods?</text>
                <circle cx="94" cy="128" r="6" fill="#fdf8fa" stroke="#e5a4c4" strokeWidth="0.5" />
                <text x="91" y="131" fontSize="6">👧</text>
                {/* Chat bubble 3 - Sakhi */}
                <rect x="42" y="148" width="108" height="20" rx="10" fill="white" stroke="#e8dfe5" strokeWidth="0.5" />
                <text x="50" y="156" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">Yes! Especially during the teenage</text>
                <text x="50" y="165" fontSize="6.5" fill="#4a5568" fontFamily="system-ui">years, your cycle may take time.</text>
                {/* Chat bubble 4 - typing indicator */}
                <rect x="42" y="176" width="52" height="24" rx="10" fill="white" stroke="#e8dfe5" strokeWidth="0.5" />
                <circle cx="56" cy="188" r="3" fill="#e8917a" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="66" cy="188" r="3" fill="#e8917a" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
                </circle>
                <circle cx="76" cy="188" r="3" fill="#e8917a" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
                </circle>
                {/* Input bar */}
                <rect x="28" y="430" width="184" height="32" rx="16" fill="white" stroke="#e8dfe5" strokeWidth="1" />
                <text x="44" y="449" fontSize="7" fill="#718096" fontFamily="system-ui">Ask anything...</text>
                <circle cx="192" cy="446" r="10" fill="url(#chatUser)" />
                <path d="M188 446l4 3 4-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="sakhi-sparkle sakhi-sparkle-1" />
              <div className="sakhi-sparkle sakhi-sparkle-2" />
              <div className="sakhi-sparkle sakhi-sparkle-3" />
            </div>
          </div>
          <div className="sakhi-showcase-right">
            <div className="learn-section-label">AI COMPANION</div>
            <h2 className="sakhi-showcase-title">Meet Sakhi</h2>
            <p className="sakhi-showcase-subtitle">
              Your trusted AI companion for menstrual health.
            </p>
            <p className="sakhi-showcase-desc">
              Whether you&rsquo;re curious, confused, or simply want to learn more, Sakhi provides private, science-backed, and judgment-free guidance whenever you need it.
            </p>
            <div className="sakhi-features">
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Private Conversations
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Science-Based Answers
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Safe for Every Student
              </div>
              <div className="sakhi-feature-pill">
                <svg viewBox="0 0 20 20" fill="none" className="pill-check">
                  <circle cx="10" cy="10" r="9" fill="#e8917a" />
                  <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Available 24&times;7
              </div>
            </div>
            <Link to="/ask-sakhi" className="btn-primary sakhi-showcase-cta">
              Start Chatting
              <ArrowRight className="btn-arrow" />
            </Link>
            <p className="sakhi-showcase-note">No question is too small. Ask confidently.</p>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="quote-section">
        <div className="quote-card">
          <svg className="quote-floral quote-floral-tl" viewBox="0 0 80 80" fill="none">
            <circle cx="30" cy="30" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <path d="M30 10c0 0-4 6-4 10s1.8 5 4 5 4-1.8 4-4-4-11-4-11z" fill="#e5a4c4" opacity="0.35" />
            <path d="M50 30c0 0-6 4-10 4s-5-1.8-5-4 1.8-4 4-4 11 4 11 4z" fill="#d4739f" opacity="0.25" />
            <path d="M30 50c0 0-4-6-4-10s1.8-5 4-5 4 1.8 4 4-4 11-4 11z" fill="#dc7e96" opacity="0.2" />
            <path d="M10 30c0 0 6-4 10-4s5 1.8 5 4-1.8 4-4 4-11-4-11-4z" fill="#e5a4c4" opacity="0.3" />
            <circle cx="30" cy="30" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-tr" viewBox="0 0 80 80" fill="none">
            <circle cx="50" cy="50" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <path d="M50 30c0 0 4 6 4 10s-1.8 5-4 5-4-1.8-4-4 4-11 4-11z" fill="#e5a4c4" opacity="0.35" />
            <path d="M30 50c0 0 6 4 10 4s5-1.8 5-4-1.8-4-4-4-11 4-11 4z" fill="#d4739f" opacity="0.25" />
            <path d="M50 70c0 0-4-6-4-10s1.8-5 4-5 4 1.8 4 4-4 11-4 11z" fill="#dc7e96" opacity="0.2" />
            <path d="M70 50c0 0-6-4-10-4s-5 1.8-5 4 1.8 4 4 4 11-4 11-4z" fill="#e5a4c4" opacity="0.3" />
            <circle cx="50" cy="50" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-bl" viewBox="0 0 80 80" fill="none">
            <circle cx="30" cy="50" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <path d="M30 30c0 0-4 6-4 10s1.8 5 4 5 4-1.8 4-4-4-11-4-11z" fill="#d4739f" opacity="0.25" />
            <path d="M50 50c0 0-6-4-10-4s-5 1.8-5 4 1.8 4 4 4 11-4 11-4z" fill="#e5a4c4" opacity="0.35" />
            <path d="M30 70c0 0-4-6-4-10s1.8-5 4-5 4 1.8 4 4-4 11-4 11z" fill="#dc7e96" opacity="0.2" />
            <path d="M10 50c0 0 6 4 10 4s5-1.8 5-4-1.8-4-4-4-11 4-11 4z" fill="#e5a4c4" opacity="0.3" />
            <circle cx="30" cy="50" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-floral quote-floral-br" viewBox="0 0 80 80" fill="none">
            <circle cx="50" cy="30" r="20" stroke="#e5a4c4" strokeWidth="1" opacity="0.25" />
            <path d="M50 10c0 0 4 6 4 10s-1.8 5-4 5-4-1.8-4-4 4-11 4-11z" fill="#dc7e96" opacity="0.2" />
            <path d="M30 30c0 0 6 4 10 4s5-1.8 5-4-1.8-4-4-4-11 4-11 4z" fill="#e5a4c4" opacity="0.35" />
            <path d="M50 50c0 0-4-6-4-10s1.8-5 4-5 4 1.8 4 4-4 11-4 11z" fill="#d4739f" opacity="0.25" />
            <path d="M70 30c0 0-6-4-10-4s-5 1.8-5 4 1.8 4 4 4 11-4 11-4z" fill="#e5a4c4" opacity="0.3" />
            <circle cx="50" cy="30" r="2.5" fill="#dc7e96" opacity="0.4" />
          </svg>
          <svg className="quote-icon" viewBox="0 0 48 48" fill="none">
            <path d="M18 14c-4 0-7 3-7 7v7h7v-7h-7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37 14c-4 0-7 3-7 7v7h7v-7h-7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 28c0 4 2 7 7 7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            <path d="M30 28c0 4 2 7 7 7" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
          <blockquote className="quote-text">
            &ldquo;The more you understand your body,<br />the more confidently you can care for it.&rdquo;
          </blockquote>
          <cite className="quote-attribution">&mdash; Team Aarohi</cite>
        </div>
      </section>
    </div>
  );
};

export default Learn;
