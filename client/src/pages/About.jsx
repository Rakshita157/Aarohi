import { Link } from 'react-router-dom';
import '../styles/About.css';
import heroImage from '../assets/hero.png';
import mythImage from '../assets/myth vs facts.png';
import sakhiImage from '../assets/AskSakhi.png';
import trustedResourcesImage from '../assets/trusted resources.png';
import interactiveLessonsImage from '../assets/Interactive lessons.png';
import { AarohiLogo, AarohiLogoFull, SakhiAvatar, ArrowRight, ShieldCheck } from '../components/Icons';

const About = () => {
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
              <span>ABOUT US</span>
            </div>
            <h1 className="about-hero-title">
              About Aarohi
            </h1>
            <p className="about-hero-description">
              We make learning about your body easy, safe, and even fun. No awkwardness, no judgment — just real answers and a friendly AI guide (hi, that's Sakhi!) to help you every step of the way.
            </p>
            <div className="about-hero-buttons">
              <Link to="/learn" className="btn btn-primary">
                Explore Learning
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/ask-sakhi" className="btn btn-secondary">
                Meet Sakhi
              </Link>
            </div>
            <div className="about-mini-stats">
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">40+</span>
                <span className="about-mini-stat-label">Myths Busted</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">24/7</span>
                <span className="about-mini-stat-label">AI Support</span>
              </div>
              <div className="about-mini-stat">
                <span className="about-mini-stat-number">100%</span>
                <span className="about-mini-stat-label">Safe Content</span>
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
                  <strong>Hi! I&apos;m Sakhi</strong><br />
                  Ask me anything!
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
              <h2 className="about-section-heading">Our Story</h2>
              <p>
                Aarohi was born from a simple yet powerful realization - millions of students
                lack access to accurate menstrual health education. Misinformation, stigma, and
                cultural taboos leave young minds confused and anxious about a natural biological process.
              </p>
              <p>
                We set out to change that. By combining AI-powered guidance with culturally sensitive,
                age-appropriate content, Aarohi creates a safe space where students can learn,
                ask questions freely, and grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY AAROHI ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            Why Aarohi?
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            Designed to make menstrual health education accessible, engaging, and stigma-free for every student.
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
            <h3>Learn with Confidence</h3>
            <p>Curated, age-appropriate lessons that explain menstrual health clearly and accurately - no confusion, no shame.</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d2">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="9" width="14" height="10" rx="2"/>
                <path d="M9 5v2M15 5v2M9 13h.01M15 13h.01M12 17h.01"/>
              </svg>
            </div>
            <h3>AI Sakhi Guidance</h3>
            <p>Your personal AI companion who answers every question with patience, empathy, and scientifically accurate information.</p>
          </div>
          <div className="why-card about-fade-in about-fade-in-d3">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Break Stigma</h3>
            <p>Normalizing conversations around menstrual health through open dialogue, accurate facts, and a supportive community.</p>
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
            <h3>Inclusive Learning</h3>
            <p>Designed for every student regardless of background - multilingual, accessible, and welcoming to all identities.</p>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="about-section">
        <div className="values-wrapper">
          <div className="values-header">
            <h2 className="about-section-heading">Our Values</h2>
            <p className="about-section-sub" style={{ margin: '0 auto' }}>
              The principles that guide everything we create.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>
                </svg>
              </div>
              <h4>Education</h4>
              <p>Accurate, science-based knowledge for everyone</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#d4a8531a', color: '#d4a853' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>Empathy</h4>
              <p>Understanding every unique journey with compassion</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#b794d41a', color: '#b794d4' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#b794d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/><path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4>Trust</h4>
              <p>Reliable information reviewed by health experts</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h4>Privacy</h4>
              <p>Your data stays yours — always safe and secure</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon" style={{ background: '#e8917a1a', color: '#e8917a' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e8917a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <h4>Inclusivity</h4>
              <p>Safe, welcoming space for students of all backgrounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE HELP ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            How We Help
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            Four pillars that make menstrual health education effective and empowering.
          </p>
        </div>
        <div className="help-list">
          <div className="help-card help-card-interactive about-fade-in about-fade-in-d1">
            <div className="help-card-visual">
              <img src={interactiveLessonsImage} alt="Interactive Lessons" className="help-card-image-full" />
            </div>
            <div className="help-card-content">
              <h3>Interactive Lessons</h3>
              <p>Engaging, multimedia lessons designed to make learning about menstrual health feel natural, interesting, and empowering. Each module builds knowledge step by step.</p>
            </div>
          </div>
          <div className="help-card help-card-sakhi about-fade-in about-fade-in-d2">
            <div className="help-card-content">
              <h3>AI Sakhi</h3>
              <p>An AI companion available 24/7 to answer any question - no judgment, no embarrassment. Sakhi provides accurate, age-appropriate responses with warmth and empathy.</p>
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
              <h3>Myths vs Facts</h3>
              <p>We tackle common misconceptions head-on with clear, evidence-based facts. Our myth-busting approach helps students separate cultural beliefs from medical reality.</p>
            </div>
          </div>
          <div className="help-card help-card-trusted about-fade-in about-fade-in-d4">
            <div className="help-card-content">
              <h3>Trusted Resources</h3>
              <p>Every piece of content is reviewed by health professionals and aligned with WHO guidelines. Students and parents can trust the information they find on Aarohi.</p>
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
          <h2>Our Vision</h2>
          <p>
            We envision a world where every student grows up with accurate knowledge about their body,
            where menstrual health is discussed openly without shame, and where AI-powered education
            bridges the gap between curiosity and understanding. Aarohi is building a future where
            menstruation is just a normal part of life, not a secret.
          </p>
        </div>
      </section>

      {/* ========== IMPACT ========== */}
      <section className="about-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="about-section-heading" style={{ marginBottom: '0.5rem' }}>
            Our Impact
          </h2>
          <p className="about-section-sub" style={{ margin: '0 auto' }}>
            Built with purpose, designed for impact.
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
            <div className="impact-label">Learning Modules</div>
            <p className="impact-desc">Curated lessons covering menstrual health, hygiene, and body literacy</p>
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
            <div className="impact-label">AI Guidance</div>
            <p className="impact-desc">Sakhi is always available to answer questions with empathy and accuracy</p>
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
            <div className="impact-label">Multilingual Support</div>
            <p className="impact-desc">Breaking language barriers to reach students across diverse communities</p>
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
            <div className="impact-label">Safe &amp; Private</div>
            <p className="impact-desc">Your privacy is our priority. Learn in a secure, judgment-free space</p>
          </div>
        </div>
      </section>

      {/* ========== CLOSING QUOTE ========== */}
      <section className="about-section">
        <div className="quote-section-inner">
          <div className="quote-mark">&ldquo;</div>
          <p className="quote-text">
            Education is the first step toward breaking stigma.
          </p>
          <div className="quote-author">&mdash; Aarohi</div>
        </div>
      </section>

    </div>
  );
};

export default About;
