import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { modules } from '../pages/data/lessons';
import '../styles/LearnSidebar.css';

const STORAGE_KEY = 'aarohi_progress';

const getCompleted = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch {
    return new Set();
  }
};

const pathSteps = [
  { id: 1, label: 'First Period' },
  { id: 2, label: 'Know Your Cycle' },
  { id: 3, label: 'Healthy Habits' },
  { id: 4, label: 'Period Care' },
  { id: 5, label: 'Nourish Yourself' },
  { id: 6, label: 'Mind & Mood' },
  { id: 7, label: 'Myth Busters' },
  { id: 8, label: 'Ask Sakhi' },
];

const CircularProgress = ({ percent }) => {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <svg viewBox="0 0 100 100" className="sidebar-ring">
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(220, 126, 150, 0.12)" strokeWidth="7" />
      <circle
        cx="50" cy="50" r={r}
        fill="none"
        stroke="#dc7e96"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
        className="sidebar-ring-fill"
      />
      <text x="50" y="48" textAnchor="middle" dominantBaseline="central" className="sidebar-ring-pct">
        {Math.round(percent)}%
      </text>
      <text x="50" y="64" textAnchor="middle" dominantBaseline="central" className="sidebar-ring-label">
        done
      </text>
    </svg>
  );
};

const getMotivation = (pct) => {
  if (pct === 0) return "Let's begin your journey!";
  if (pct <= 25) return 'Great start! Keep learning.';
  if (pct <= 50) return 'Halfway there!';
  if (pct <= 75) return "You're doing amazing!";
  return 'Congratulations! You completed all modules!';
};

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="feat-icon-svg">
    <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="feat-icon-svg">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="feat-icon-svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="feat-icon-svg">
    <rect x="3" y="11" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
    <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 3v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 8l4-5 4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="path-check">
    <circle cx="10" cy="10" r="9" fill="#38a169"/>
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  { Icon: ShieldIcon, title: 'Trusted & Science-Based', desc: 'Every lesson is reviewed using trusted medical resources.' },
  { Icon: BookIcon, title: 'Beginner-Friendly', desc: 'Simple explanations without complicated medical jargon.' },
  { Icon: ClockIcon, title: 'Learn at Your Own Pace', desc: 'Resume anytime and continue where you left off.' },
  { Icon: BotIcon, title: 'AI Guidance with Sakhi', desc: 'Get private answers whenever you\'re confused.' },
];

const LearnSidebar = () => {
  const [completed, setCompleted] = useState(getCompleted);
  const [showAllPath, setShowAllPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle = () => setCompleted(getCompleted());
    window.addEventListener('focus', handle);
    window.addEventListener('storage', handle);
    const id = setInterval(handle, 2000);
    return () => {
      window.removeEventListener('focus', handle);
      window.removeEventListener('storage', handle);
      clearInterval(id);
    };
  }, []);

  const total = modules.length;
  const pct = total ? Math.round((completed.size / total) * 100) : 0;
  const motivation = getMotivation(pct);

  const nextModule = modules.find((m) => !completed.has(m.id));
  const allDone = pct === 100;

  const currentModuleId = pathSteps.find((s) => location.pathname === `/learn/${s.id}`)?.id || null;
  const visiblePathSteps = showAllPath ? pathSteps : pathSteps.slice(0, 5);

  return (
    <aside className="learn-sidebar">
      {/* Card 1 — Learning Progress */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Your Learning Progress</h3>
        <div className="sidebar-progress">
          <CircularProgress percent={pct} />
          <p className="sidebar-motivation">{motivation}</p>
        </div>
        <div className="sidebar-cta-wrap">
          <Link
            to={allDone ? '/learn' : `/learn/${nextModule?.id || 1}`}
            className="sidebar-cta"
          >
            {allDone ? 'Review Modules' : 'Continue Learning'}
          </Link>
        </div>
      </div>

      {/* Card 2 — Why Learn */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Why Learn with Aarohi?</h3>
        <p className="sidebar-card-sub">Simple, trusted education designed for every learner.</p>
        <div className="sidebar-features">
          {features.map((f, i) => (
            <div key={i} className="sidebar-feat-row">
              <div className="sidebar-feat-icon-wrap">
                <f.Icon />
              </div>
              <div className="sidebar-feat-text">
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 3 — Learning Path */}
      <div className="sidebar-card">
        <h3 className="sidebar-card-title">Learning Path</h3>
        <div className="sidebar-path">
          <div className="path-line" />
          {visiblePathSteps.map((step, i) => {
            const isCompleted = completed.has(step.id);
            const isCurrent = step.id === currentModuleId;
            return (
              <Link
                key={step.id}
                to={`/learn/${step.id}`}
                className={`path-step${isCompleted ? ' path-step-done' : ''}${isCurrent ? ' path-step-current' : ''}`}
              >
                <div className="path-step-badge">
                  {isCompleted ? <CheckIcon /> : <span className="path-step-num">{String(step.id).padStart(2, '0')}</span>}
                </div>
                <span className="path-step-label">{step.label}</span>
                {i < visiblePathSteps.length - 1 && <div className="path-step-line" />}
              </Link>
            );
          })}
          {pathSteps.length > 5 && (
            <button className="path-toggle-btn" onClick={() => setShowAllPath(p => !p)}>
              {showAllPath ? 'Show Less' : `Show All ${pathSteps.length} Steps`}
              <svg className={`path-toggle-arrow${showAllPath ? ' up' : ''}`} viewBox="0 0 14 14" fill="none">
                <path d="M3.5 5l3.5 3.5L10.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
        <div className="sidebar-path-flower">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="6" fill="#dc7e96" opacity="0.25"/>
            <circle cx="14" cy="14" r="4" fill="#e5a4c4" opacity="0.5"/>
            <circle cx="26" cy="14" r="4" fill="#e5a4c4" opacity="0.5"/>
            <circle cx="14" cy="26" r="4" fill="#e5a4c4" opacity="0.5"/>
            <circle cx="26" cy="26" r="4" fill="#e5a4c4" opacity="0.5"/>
            <circle cx="20" cy="20" r="3" fill="#dc7e96"/>
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default LearnSidebar;
