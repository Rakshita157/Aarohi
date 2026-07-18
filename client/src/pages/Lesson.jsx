import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { modules, lessonContent } from './data/lessons';
import { ArrowRight } from '../components/Icons';
import '../styles/Lesson.css';

const STORAGE_KEY = 'aarohi_progress';

const getCompleted = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch {
    return new Set();
  }
};

const SectionIcon = ({ type }) => {
  const icons = {
    sparkles: (
      <svg viewBox="0 0 24 24" fill="none" className="section-icon-svg">
        <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" fill="#d4a853" opacity="0.8" />
        <circle cx="19" cy="5" r="1.5" fill="#d4a853" />
        <circle cx="21" cy="12" r="1" fill="#d4a853" />
        <circle cx="6" cy="19" r="1" fill="#d4a853" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" className="section-icon-svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#dc7e96" />
      </svg>
    ),
    tip: (
      <svg viewBox="0 0 24 24" fill="none" className="section-icon-svg">
        <circle cx="12" cy="12" r="10" stroke="#d4a853" strokeWidth="2" />
        <path d="M12 16v-5M12 8h.01" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bag: (
      <svg viewBox="0 0 24 24" fill="none" className="section-icon-svg">
        <rect x="4" y="8" width="16" height="13" rx="2" stroke="#b794d4" strokeWidth="2" />
        <path d="M8 8V6a4 4 0 018 0v2" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const QuizCheck = () => (
  <svg viewBox="0 0 16 16" fill="none" className="quiz-check-svg">
    <path d="M4 8l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GLOSSARY_KEYS = {
  uterus: 'lesson.glossaryUterus',
  cervix: 'lesson.glossaryCervix',
  ovulation: 'lesson.glossaryOvulation',
  menstruation: 'lesson.glossaryMenstruation',
  'uterine lining': 'lesson.glossaryUterineLining',
  estrogen: 'lesson.glossaryEstrogen',
  progesterone: 'lesson.glossaryProgesterone',
  hormones: 'lesson.glossaryHormones',
  cramps: 'lesson.glossaryCramps',
  'menstrual cup': 'lesson.glossaryMenstrualCup',
  'follicular phase': 'lesson.glossaryFollicularPhase',
  'luteal phase': 'lesson.glossaryLutealPhase',
};

const GLOSSARY_TERMS = Object.keys(GLOSSARY_KEYS).sort((a, b) => b.length - a.length);

const GlossaryText = ({ text, className, t }) => {
  const escaped = useMemo(() => GLOSSARY_TERMS.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), []);
  const regex = useMemo(() => new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi'), [escaped]);

  const parts = text.split(regex);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        const match = GLOSSARY_TERMS.find(term => term.toLowerCase() === part.toLowerCase());
        return match ? (
          <span key={i} className="glossary-term" title={t(GLOSSARY_KEYS[match])}>
            {part}
          </span>
        ) : part;
      })}
    </span>
  );
};

const Lesson = () => {
  const { t } = useTranslation();
  const { moduleId } = useParams();
  const mod = modules.find((m) => m.id === Number(moduleId));
  const content = lessonContent[Number(moduleId)];
  const [currentQ, setCurrentQ] = useState(0);
  const [answeredQ, setAnsweredQ] = useState({});
  const [completed, setCompleted] = useState(() => getCompleted());
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const d = JSON.parse(localStorage.getItem('aarohi_checklist') || '{}');
      return d[moduleId] || [];
    } catch { return []; }
  });
  const sectionRefs = useRef([]);
  const isComplete = completed.has(Number(moduleId));
  const headingSections = useMemo(() => content?.sections?.filter(s => s.type === 'heading') || [], [content]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentQ(0);
    setAnsweredQ({});
    setVisibleSections(new Set());
    setExpandedSections(new Set());
  }, [moduleId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.sectionIndex);
            if (!isNaN(idx)) {
              setVisibleSections(prev => {
                if (prev.has(idx)) return prev;
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const refs = sectionRefs.current;
    refs.forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, [content]);

  const toggleComplete = () => {
    const next = new Set(getCompleted());
    if (next.has(Number(moduleId))) {
      next.delete(Number(moduleId));
    } else {
      next.add(Number(moduleId));
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    setCompleted(next);
  };

  const toggleExpanded = (idx) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  const toggleCheckItem = (sectionIdx, itemIdx) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setCheckedItems(prev => {
      const next = prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key];
      try {
        const d = JSON.parse(localStorage.getItem('aarohi_checklist') || '{}');
        d[moduleId] = next;
        localStorage.setItem('aarohi_checklist', JSON.stringify(d));
      } catch {}
      return next;
    });
  };

  const quizSections = content?.sections?.filter(s => s.type === 'quiz') || [];
  const firstQuizIdx = content?.sections?.findIndex(s => s.type === 'quiz') ?? -1;
  const totalSections = content?.sections?.length || 0;

  if (!mod || !content) {
    return (
      <div className="lesson-page">
        <div className="lesson-error">
          <h2>{t('lesson.moduleNotFound')}</h2>
          <Link to="/learn" className="lesson-back-link">{t('lesson.backToLessons')}</Link>
        </div>
      </div>
    );
  }

  const renderSection = (section, index) => {
    const isVisible = visibleSections.has(index);
    const revealProps = {
      ref: el => sectionRefs.current[index] = el,
      'data-section-index': index,
      className: `lesson-section section-reveal ${isVisible ? 'section-visible' : ''}`,
    };

    switch (section.type) {
      case 'heading': {
        const headingNum = headingSections.findIndex(s => s === section) + 1;
        const displayNum = headingNum < 10 ? `0${headingNum}` : headingNum;
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-section-heading">
              <span className="section-number">{displayNum}</span>
              <h2>{section.content}</h2>
            </div>
          </div>
        );
      }

      case 'body': {
        const isLong = section.content.length > 280;
        const showFull = !isLong || expandedSections.has(index);
        return (
          <div key={index} {...revealProps}>
            <div className={`lesson-body ${isLong ? 'lesson-body-collapsible' : ''}`}>
              <GlossaryText text={showFull ? section.content : `${section.content.slice(0, 280)}...`} t={t} />
              {isLong && (
                <button className="body-toggle-btn" onClick={() => toggleExpanded(index)}>
                  {showFull ? t('lesson.showLess') : t('lesson.readMore')}
                </button>
              )}
            </div>
          </div>
        );
      }

      case 'highlight':
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-highlight">
              <div className="highlight-icon">
                <SectionIcon type={section.icon} />
              </div>
              <div className="highlight-content">
                <p>{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'image':
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-image-card">
              <div className="lesson-image-placeholder">
                <svg viewBox="0 0 80 60" fill="none" className="image-placeholder-icon">
                  <rect x="5" y="10" width="70" height="40" rx="4" stroke="#dc7e96" strokeWidth="2" fill="rgba(220,126,150,0.06)" />
                  <circle cx="28" cy="26" r="6" stroke="#dc7e96" strokeWidth="1.5" fill="rgba(220,126,150,0.1)" />
                  <path d="M12 44l16-20 14 16 10-8 16 12" stroke="#dc7e96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {section.caption && <p className="lesson-image-caption">{section.caption}</p>}
            </div>
          </div>
        );

      case 'pullquote':
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-pullquote">
              <div className="pullquote-mark">"</div>
              <blockquote>{section.content}</blockquote>
              {section.attribution && <cite>{section.attribution}</cite>}
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-checklist">
              {section.items.map((item, i) => {
                const isChecked = checkedItems.includes(`${index}-${i}`);
                return (
                  <div
                    key={i}
                    className={`check-item ${isChecked ? 'check-item-done' : ''}`}
                    onClick={() => toggleCheckItem(index, i)}
                    role="checkbox"
                    aria-checked={isChecked}
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCheckItem(index, i); } }}
                  >
                    <span className={`check-box ${isChecked ? 'check-box-filled' : ''}`}>
                      {isChecked && (
                        <svg viewBox="0 0 16 16" fill="none" className="check-box-svg">
                          <path d="M4 8l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'quiz':
        if (index !== firstQuizIdx) return null;
        const qSection = quizSections[currentQ];
        if (!qSection) return null;
        const qSelected = answeredQ[currentQ];
        const qCorrect = qSelected === qSection.correct;
        const qShowResult = qSelected !== undefined;
        return (
          <div key="quiz-group" {...revealProps}>
            <div className="lesson-quiz">
              <div className="quiz-header">
                <QuizCheck />
                <div className="quiz-header-text">
                  <span>{t('lesson.quickCheck')}</span>
                  <span className="quiz-counter">{t('lesson.question', { current: currentQ + 1, total: quizSections.length })}</span>
                </div>
              </div>
              <p className="quiz-question">{qSection.question}</p>
              <div className="quiz-options">
                {qSection.options.map((opt, i) => {
                  let className = 'quiz-option';
                  if (qShowResult && i === qSection.correct) className += ' quiz-option-correct';
                  if (qShowResult && i === qSelected && !qCorrect) className += ' quiz-option-wrong';
                  return (
                    <button
                      key={i}
                      className={className}
                      onClick={() => setAnsweredQ(prev => ({ ...prev, [currentQ]: i }))}
                    >
                      <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                      {opt}
                      {qShowResult && i === qSection.correct && <QuizCheck />}
                    </button>
                  );
                })}
              </div>
              {qShowResult && (
                <div className={`quiz-feedback ${qCorrect ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}`}>
                  {qCorrect ? t('lesson.correct') : t('lesson.notQuite')}
                  {qSection.explanation}
                </div>
              )}
              <div className="quiz-nav">
                <button
                  className="quiz-nav-btn quiz-prev-btn"
                  onClick={() => setCurrentQ(prev => prev - 1)}
                  disabled={currentQ === 0}
                >
                  {t('lesson.previous')}
                </button>
                <button
                  className="quiz-nav-btn quiz-skip-btn"
                  onClick={() => setCurrentQ(prev => Math.min(quizSections.length - 1, prev + 1))}
                  disabled={currentQ === quizSections.length - 1}
                >
                  {t('lesson.skip')}
                </button>
                {qShowResult && (
                  <button
                    className="quiz-nav-btn quiz-next-btn"
                    onClick={() => setCurrentQ(prev => Math.min(quizSections.length - 1, prev + 1))}
                    disabled={currentQ === quizSections.length - 1}
                  >
                    {currentQ === quizSections.length - 1 ? t('lesson.finished') : t('lesson.next')}
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 'takeaways':
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-takeaways">
              <h3 className="takeaways-title">{t('lesson.keyTakeaways')}</h3>
              <div className="takeaways-list">
                {section.items.map((item, i) => (
                  <div key={i} className="takeaway-item">
                    <span className="takeaway-bullet">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'next':
        const nextLink = section.moduleId === 7 ? '/resources' : `/learn/${section.moduleId}`;
        return (
          <div key={index} {...revealProps}>
            <div className="lesson-next">
              <div className="next-label">{t('lesson.upNext')}</div>
              <h3 className="next-title">{section.title}</h3>
              <p className="next-desc">{section.description}</p>
              <Link to={nextLink} className="next-cta">
                {t('lesson.startModule')}
                <ArrowRight className="next-arrow" />
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="lesson-page">
      {/* Progress Bar */}
      <div className="lesson-progress-bar">
        <div className="lesson-progress-fill" style={{ width: `${quizSections.length > 0 ? (Object.keys(answeredQ).length / quizSections.length) * 100 : 0}%` }} />
      </div>

      {/* Header */}
      <section className="lesson-header">
        <Link to="/learn" className="lesson-back">
          <svg viewBox="0 0 24 24" fill="none" className="back-arrow-icon">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('lesson.backToModules')}
        </Link>
        <div className="lesson-header-meta">
          <span className="lesson-category-badge" data-category={mod.category}>{mod.category}</span>
          {mod.beginner && <span className="beginner-badge-lesson">{t('learn.beginner')}</span>}
          {!mod.beginner && <span className="intermediate-badge-lesson">{t('learn.intermediate')}</span>}
          <span className="lesson-reading-time">{mod.readingTime}</span>
        </div>
        <div className="lesson-title-row">
          <h1 className="lesson-page-title">{mod.title}</h1>
          {headingSections.length > 1 && (
            <span className="lesson-section-count">
              {headingSections.length} {headingSections.length === 1 ? t('lesson.section') : t('lesson.sections')}
            </span>
          )}
        </div>
        <p className="lesson-page-desc">{mod.description}</p>
      </section>

      {/* Content */}
      <section className="lesson-content">
        {content.sections.map((section, i) => {
          const prevType = i > 0 ? content.sections[i - 1].type : null;
          const showDivider = prevType && prevType !== 'heading' && (
            (section.type === 'heading') ||
            (section.type === 'takeaways') ||
            (section.type === 'next')
          );
          return (
            <div key={i}>
              {showDivider && <div className="section-divider" />}
              {renderSection(section, i)}
            </div>
          );
        })}
      </section>

      {/* Footer */}
      <div className="lesson-footer">
        <div className="lesson-complete-wrap">
          <button
            className={`lesson-complete-btn${isComplete ? ' lesson-complete-done' : ''}`}
            onClick={toggleComplete}
          >
            <svg viewBox="0 0 20 20" fill="none" className="complete-check-icon">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {isComplete ? t('lesson.completed') : t('lesson.markAsComplete')}
          </button>
        </div>
        <Link to="/learn" className="lesson-footer-back">{t('lesson.allModules')}</Link>
      </div>
    </div>
  );
};

export default Lesson;
