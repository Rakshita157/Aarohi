import { useState, useMemo } from 'react';
import { mythsData } from './data/resources';
import '../styles/Resources.css';
import mythVsFactsImg from '../assets/myth vs facts.png';

const ITEMS_PER_LOAD = 6;

const categoryMap = {
  1:'social',2:'social',3:'hygiene',4:'health',5:'health',
  6:'body',7:'body',8:'health',9:'hygiene',10:'health',
  11:'health',12:'health',13:'social',14:'body',15:'social',
  16:'hygiene',17:'body',18:'hygiene',19:'social',20:'body',
  21:'body',22:'health',23:'body',24:'health',25:'health',
  26:'health',27:'body',28:'body',29:'health',30:'hygiene',
  31:'social',32:'health',33:'health',34:'health',35:'body',
  36:'hygiene',37:'health',38:'social',39:'social',40:'body'
};

const categories = [
  { key: 'all', label: 'All' },
  { key: 'health', label: 'Health' },
  { key: 'hygiene', label: 'Hygiene' },
  { key: 'body', label: 'Body' },
  { key: 'social', label: 'Social' }
];

const categoryColors = {
  health: { border: '#dc7e96', badge: '#fdf8fa', badgeText: '#d05a7a' },
  hygiene: { border: '#10b981', badge: '#d1fae5', badgeText: '#047857' },
  body: { border: '#8b5cf6', badge: '#f3e8ff', badgeText: '#6d28d9' },
  social: { border: '#d4a853', badge: '#fef3c7', badgeText: '#b45309' }
};

const categoryLabels = { health: 'Health', hygiene: 'Hygiene', body: 'Body', social: 'Social' };

const stateDots = [0, 1, 2];

const MythCard = ({ item, cardState, onClick, index, category }) => {
  const [pressing, setPressing] = useState(false);
  const cc = categoryColors[category] || categoryColors.health;

  return (
    <div
      className={`flip-card ${cardState === 0 ? '' : 'flipped'}${pressing ? ' pressing' : ''}`}
      onClick={onClick}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      onMouseLeave={() => setPressing(false)}
      style={{ animationDelay: `${index * 0.08}s`, '--cat-color': cc.border }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-accent-top" />
          <span className="card-label"><span className="card-emoji">🛑</span> MYTH</span>
          <p className="flip-text">{item.myth}</p>
          <div className="card-footer">
            <div className="state-dots">
              {stateDots.map(s => (
                <span
                  key={s}
                  className={`state-dot${cardState === s ? ' active' : ''}`}
                  style={{ '--dot-color': s === 0 ? cc.border : s === 1 ? '#10b981' : '#8b5cf6' }}
                />
              ))}
            </div>
            <span className="card-category-tag" style={{ background: cc.badge, color: cc.badgeText }}>
              {categoryLabels[category]}
            </span>
          </div>
          <div className="tap-hint pulse-hint">
            <span className="tap-icon">👆</span> Tap to reveal
          </div>
        </div>

        <div className="flip-card-back">
          <div className={`back-panel ${cardState === 1 ? 'active' : ''}`}>
            <div className="card-accent-top" />
            <div className="fact-badge">
              <span className="card-emoji">✅</span>
              <span>FACT</span>
            </div>
            <p className="flip-text">{item.fact}</p>
            <div className="tap-hint">
              💡 Tap to learn more
            </div>
          </div>
          <div className={`back-panel ${cardState === 2 ? 'active' : ''}`}>
            <div className="card-accent-top" />
            <div className="fact-badge" style={{ color: '#d05a7a' }}>
              <span className="card-emoji">💡</span>
              <span>KNOW MORE</span>
            </div>
            <p className="flip-text">{item.knowMore}</p>
            <div className="tap-hint">
              🔄 Tap to go back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
  const [page, setPage] = useState(0);
  const [cardStates, setCardStates] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMyths = useMemo(() =>
    activeCategory === 'all'
      ? mythsData
      : mythsData.filter(m => categoryMap[m.id] === activeCategory),
    [activeCategory]
  );

  const totalFiltered = filteredMyths.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / ITEMS_PER_LOAD));
  const safePage = Math.min(page, totalPages - 1);

  const start = safePage * ITEMS_PER_LOAD;
  const end = Math.min(start + ITEMS_PER_LOAD, totalFiltered);
  const visibleMyths = filteredMyths.slice(start, end);
  const exploredCount = Object.keys(cardStates).length;

  const handleCardClick = (id) => {
    setCardStates((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % 3
    }));
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPage((prev) => (prev + 1) % totalPages);
      setCardStates({});
      setLoading(false);
    }, 500);
  };

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setPage(0);
    setCardStates({});
  };

  const progressPercent = totalFiltered > 0 ? ((safePage + 1) / totalPages) * 100 : 0;

  return (
    <div className="resources-container">
      <div className="resources-deco resources-deco-1" />
      <div className="resources-deco resources-deco-2" />
      <div className="resources-deco resources-deco-3" />
      {/* Decorative floating elements */}
      <div className="resources-deco resources-deco-1" />
      <div className="resources-deco resources-deco-2" />
      <div className="resources-deco resources-deco-3" />
      <div className="resources-deco resources-deco-4" />

      <div className="resources-content">
        {/* Hero Section */}
        <section className="resources-hero">
          <div className="resources-hero-content">
            <div className="resources-hero-left">
              <div className="resources-tagline">
                <svg className="resources-tagline-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#e8917a" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>MYTH BUSTING • FACTS • TRUTH</span>
              </div>
              <h1 className="resources-hero-title">Facts vs Myths</h1>
              <p className="resources-hero-desc">
                Turns out, most period "facts" are just myths with good PR. Let's fix that.
              </p>
              <div className="resources-hero-stats">
                <div className="resources-hero-stat">
                  <span className="resources-hero-stat-num">40</span>
                  <span className="resources-hero-stat-label">Myths Busted</span>
                </div>
                <div className="resources-hero-stat-dot" />
                <div className="resources-hero-stat">
                  <span className="resources-hero-stat-num">5</span>
                  <span className="resources-hero-stat-label">Categories</span>
                </div>
                <div className="resources-hero-stat-dot" />
                <div className="resources-hero-stat">
                  <span className="resources-hero-stat-num">✓</span>
                  <span className="resources-hero-stat-label">Science-Based</span>
                </div>
              </div>
              <div className="resources-hero-buttons">
                <button className="btn btn-primary" onClick={() => document.querySelector('.myth-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Myths
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="resources-hero-right">
              <img src={mythVsFactsImg} alt="Facts vs Myths Illustration" className="resources-hero-img" />
            </div>
          </div>
        </section>

        <div className="stats-bar">
          <span className="stat-item">
            <span className="stat-icon">🏆</span>
            Explored: {exploredCount}/{mythsData.length}
          </span>
          <span className="stat-item">
            <span className="stat-icon">📚</span>
            {totalFiltered} myths in view
          </span>
        </div>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`cat-filter ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="myth-grid">
          {visibleMyths.map((item, idx) => (
            <MythCard
              key={item.id}
              item={item}
              index={idx}
              category={categoryMap[item.id]}
              cardState={cardStates[item.id] || 0}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </div>

        <div className="load-more-wrapper">
          <button className="load-more-btn" onClick={handleLoadMore} disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" />
                Loading...
              </>
            ) : (
              <>
                <span>Next Page</span>
                <span className="btn-page-count">({safePage + 1}/{totalPages})</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>

          <div className="page-progress">
            <span className="page-label">Page {safePage + 1} of {totalPages}</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        <div className="info-row">
          <div className="info-item">
            <div className="info-icon" style={{ backgroundColor: '#f3e8ff' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#9333ea"/>
              </svg>
            </div>
            <div className="info-text">
              <span className="info-title">Evidence Based</span>
              <span className="info-subtitle">Information</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ backgroundColor: '#fce7f3' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#ec4899"/>
              </svg>
            </div>
            <div className="info-text">
              <span className="info-title">Myth Busting</span>
              <span className="info-subtitle">Made Simple</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ backgroundColor: '#d1fae5' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#10b981"/>
              </svg>
            </div>
            <div className="info-text">
              <span className="info-title">For Everyone,</span>
              <span className="info-subtitle">Every Age</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ backgroundColor: '#fed7aa' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-text">
              <span className="info-title">Inclusive &amp;</span>
              <span className="info-subtitle">Respectful</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ backgroundColor: '#dbeafe' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="#3b82f6"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-text">
              <span className="info-title">Private &amp;</span>
              <span className="info-subtitle">Safe Space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
