import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

const CheckCircle = () => (
  <svg viewBox="0 0 20 20" fill="none" className="check-circle-svg">
    <circle cx="10" cy="10" r="9" stroke="#dc7e96" strokeWidth="2" />
    <path d="M6 10l3 3 5-5" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const QuizCheck = () => (
  <svg viewBox="0 0 16 16" fill="none" className="quiz-check-svg">
    <path d="M4 8l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Lesson = () => {
  const { moduleId } = useParams();
  const mod = modules.find((m) => m.id === Number(moduleId));
  const content = lessonContent[Number(moduleId)];
  const [currentQ, setCurrentQ] = useState(0);
  const [answeredQ, setAnsweredQ] = useState({});
  const [completed, setCompleted] = useState(() => getCompleted());
  const isComplete = completed.has(Number(moduleId));

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentQ(0);
    setAnsweredQ({});
  }, [moduleId]);

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

  const quizSections = content?.sections?.filter(s => s.type === 'quiz') || [];
  const firstQuizIdx = content?.sections?.findIndex(s => s.type === 'quiz') ?? -1;
  const totalSections = content?.sections?.length || 0;

  if (!mod || !content) {
    return (
      <div className="lesson-page">
        <div className="lesson-error">
          <h2>Module not found</h2>
          <Link to="/learn" className="lesson-back-link">Back to Lessons</Link>
        </div>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading': {
        const headingNum = content.sections.slice(0, index).filter(s => s.type === 'heading').length + 1;
        const displayNum = headingNum < 10 ? `0${headingNum}` : headingNum;
        return (
          <div key={index} className="lesson-section lesson-section-heading">
            <span className="section-number">{displayNum}</span>
            <h2>{section.content}</h2>
          </div>
        );
      }

      case 'body':
        return (
          <p key={index} className="lesson-section lesson-body">
            {section.content}
          </p>
        );

      case 'highlight':
        return (
          <div key={index} className="lesson-section lesson-highlight">
            <div className="highlight-icon">
              <SectionIcon type={section.icon} />
            </div>
            <div className="highlight-content">
              <p>{section.content}</p>
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div key={index} className="lesson-section lesson-checklist">
            {section.items.map((item, i) => (
              <div key={i} className="check-item">
                <CheckCircle />
                <span>{item}</span>
              </div>
            ))}
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
          <div key="quiz-group" className="lesson-section lesson-quiz">
            <div className="quiz-header">
              <QuizCheck />
              <div className="quiz-header-text">
                <span>Quick Check</span>
                <span className="quiz-counter">Question {currentQ + 1} of {quizSections.length}</span>
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
                {qCorrect ? 'Correct! ' : 'Not quite — '}
                {qSection.explanation}
              </div>
            )}
            <div className="quiz-nav">
              <button
                className="quiz-nav-btn quiz-prev-btn"
                onClick={() => setCurrentQ(prev => prev - 1)}
                disabled={currentQ === 0}
              >
                Previous
              </button>
              <button
                className="quiz-nav-btn quiz-skip-btn"
                onClick={() => setCurrentQ(prev => Math.min(quizSections.length - 1, prev + 1))}
                disabled={currentQ === quizSections.length - 1}
              >
                Skip
              </button>
              {qShowResult && (
                <button
                  className="quiz-nav-btn quiz-next-btn"
                  onClick={() => setCurrentQ(prev => Math.min(quizSections.length - 1, prev + 1))}
                  disabled={currentQ === quizSections.length - 1}
                >
                  {currentQ === quizSections.length - 1 ? 'Finished' : 'Next'}
                </button>
              )}
            </div>
          </div>
        );

      case 'takeaways':
        return (
          <div key={index} className="lesson-section lesson-takeaways">
            <h3 className="takeaways-title">Key Takeaways</h3>
            <div className="takeaways-list">
              {section.items.map((item, i) => (
                <div key={i} className="takeaway-item">
                  <span className="takeaway-bullet">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'next':
        const nextMod = modules.find((m) => m.id === section.moduleId);
        return (
          <div key={index} className="lesson-section lesson-next">
            <div className="next-label">Up Next</div>
            <h3 className="next-title">{section.title}</h3>
            <p className="next-desc">{section.description}</p>
            <Link to={`/learn/${section.moduleId}`} className="next-cta">
              Start Module
              <ArrowRight className="next-arrow" />
            </Link>
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
          Back to Modules
        </Link>
        <div className="lesson-header-meta">
          <span className="lesson-category-badge" data-category={mod.category}>{mod.category}</span>
          {mod.beginner && <span className="beginner-badge-lesson">Beginner</span>}
          {!mod.beginner && <span className="intermediate-badge-lesson">Intermediate</span>}
          <span className="lesson-reading-time">{mod.readingTime}</span>
        </div>
        <h1 className="lesson-page-title">{mod.title}</h1>
        <p className="lesson-page-desc">{mod.description}</p>
      </section>

      {/* Content */}
      <section className="lesson-content">
        {content.sections.map((section, i) => renderSection(section, i))}
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
            {isComplete ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>
        <Link to="/learn" className="lesson-footer-back">All Modules</Link>
      </div>
    </div>
  );
};

export default Lesson;
