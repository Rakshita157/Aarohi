import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import heroImage from '../assets/hero.png';
import { AarohiLogo, ShieldCheck, Shield, SakhiAvatar, ArrowRight } from '../components/Icons';

const Home = () => {
  const navigate = useNavigate();

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
              <span>EDUCATE • EMPOWER • ELEVATE</span>
            </div>

            <h1 className="hero-title">
              Aarohi
              <svg className="title-flower" viewBox="0 0 40 40" fill="none">
                <path d="M20 5C20 5 15 10 15 15C15 18.866 17.134 22 20 22C22.866 22 25 18.866 25 15C25 10 20 5 20 5Z" fill="#e5a4c4"/>
                <path d="M35 20C35 20 30 15 25 15C21.134 15 18 17.134 18 20C18 22.866 21.134 25 25 25C30 25 35 20 35 20Z" fill="#e5a4c4"/>
                <path d="M20 35C20 35 25 30 25 25C25 21.134 22.866 18 20 18C17.134 18 15 21.134 15 25C15 30 20 35 20 35Z" fill="#e5a4c4"/>
                <path d="M5 20C5 20 10 25 15 25C18.866 25 22 22.866 22 20C22 17.134 18.866 15 15 15C10 15 5 20 5 20Z" fill="#e5a4c4"/>
                <circle cx="20" cy="20" r="3" fill="#d4739f"/>
              </svg>
            </h1>

            <h2 className="hero-subtitle">
              Empowering Every Cycle<br />
              Through Education
            </h2>

            <p className="hero-description">
              Learn menstrual health through engaging lessons,<br />
              AI guidance, and a safe learning experience.
            </p>

            <div className="hero-buttons">
              <Link to="/ask-sakhi" className="btn btn-primary">
                Chat with Sakhi
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About Us
              </Link>
            </div>

            <div className="features">
                    <div className="feature">
                <div className="feature-icon-bg">
                  <ShieldCheck className="feature-icon" style={{ stroke: '#e8917a' }} />
                </div>
                <div>
                  <div className="feature-title">Trusted</div>
                  <div className="feature-subtitle">Content</div>
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
                  <div className="feature-title">AI Powered</div>
                  <div className="feature-subtitle">Guidance</div>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon-bg">
                  <Shield className="feature-icon" style={{ stroke: '#d4a853' }} />
                </div>
                <div>
                  <div className="feature-title">Safe &</div>
                  <div className="feature-subtitle">Inclusive</div>
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
                  <div className="feature-title">For Everyone,</div>
                  <div className="feature-subtitle">Always</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <img src={heroImage} alt="Woman reading about menstrual health" className="hero-image" />

              <div className="ai-chatbox" onClick={() => navigate('/ask-sakhi')} style={{ cursor: 'pointer' }}>
                <div className="chatbox-header">
                  <div className="ai-avatar">
                    <SakhiAvatar />
                  </div>
                  <div className="chatbox-text">
                    <div className="chatbox-title">Hi! I'm Sakhi</div>
                    <div className="chatbox-subtitle">Your AI guide for all<br/>things menstrual health.</div>
                  </div>
                </div>
                <div className="chatbox-input">
                  <span>Ask me anything</span>
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

        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">40+</span>
            <span className="stat-label">Myths Busted</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">AI Support</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Safe Content</span>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="offer-section">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Everything you need to understand menstrual health, all in one place.</p>
        <div className="offer-grid">
          <Link to="/learn" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #e0f2ef, #c8e8e3)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#2d7a6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 28V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16H8a4 4 0 0 0-4 4z" />
                <path d="M12 12h8M12 16h6" />
              </svg>
            </div>
            <h3>Interactive Lessons</h3>
            <p>Learn about menstrual health through engaging, age-appropriate lessons designed by experts.</p>
            <span className="offer-link">Start Learning <ArrowRight className="offer-arrow" /></span>
          </Link>

          <Link to="/resources" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #f5f0fa, #ede0f2)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#8f4d69" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="16" r="12" />
                <path d="M16 10v6l4 2" />
              </svg>
            </div>
            <h3>Know the Truth</h3>
            <p>Separate fact from fiction. Bust common myths and discover real science-backed answers.</p>
            <span className="offer-link">Explore Myths <ArrowRight className="offer-arrow" /></span>
          </Link>

          <Link to="/ask-sakhi" className="offer-card">
            <div className="offer-icon" style={{ background: 'linear-gradient(135deg, #fdf8f0, #f5ede0)' }}>
              <svg viewBox="0 0 32 32" fill="none" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="11" cy="10" r="1.5" fill="#b8860b" />
                <circle cx="15" cy="10" r="1.5" fill="#b8860b" />
              </svg>
            </div>
            <h3>Ask Sakhi</h3>
            <p>Your AI guide. Ask anything about menstrual health in a safe, private, judgment-free space.</p>
            <span className="offer-link">Chat Now <ArrowRight className="offer-arrow" /></span>
          </Link>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Three simple steps to start your menstrual health journey.</p>
        <div className="how-grid">
          <div className="how-step">
            <div className="how-number">1</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #e0f2ef, #c8e8e3)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#2d7a6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 24V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12H8a4 4 0 0 0-4 4z" />
                <path d="M10 10h8M10 14h5" />
              </svg>
            </div>
            <h3>Learn</h3>
            <p>Go through interactive lessons at your own pace. Each module is designed to be clear, engaging, and stigma-free.</p>
          </div>

          <div className="how-step">
            <div className="how-number">2</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #fdf8f0, #f5ede0)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#b8860b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 13a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                <circle cx="10" cy="10" r="1.5" fill="#b8860b" />
              </svg>
            </div>
            <h3>Ask</h3>
            <p>Have questions? Sakhi is available 24/7 to answer anything you're curious about in a safe, private space.</p>
          </div>

          <div className="how-step">
            <div className="how-number">3</div>
            <div className="how-icon" style={{ background: 'linear-gradient(135deg, #f5f0fa, #ede0f2)' }}>
              <svg viewBox="0 0 28 28" fill="none" stroke="#8f4d69" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="14" cy="14" r="10" />
                <path d="M14 8v6l4 2" />
              </svg>
            </div>
            <h3>Explore</h3>
            <p>Bust myths, track what you learn, and build confidence with real science — not gossip or guesswork.</p>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="coming-soon-section">
        <div className="coming-soon-content">
          <div className="coming-soon-badge">Coming Soon</div>
          <h2 className="coming-soon-title">Video Lessons Are on the Way</h2>
          <p className="coming-soon-text">
            We're working hard to bring you engaging video lessons with animations, real-life stories, and expert explanations — making menstrual health education even more interactive and fun.
          </p>
          <div className="coming-soon-features">
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 10 5 17 5 3" />
              </svg>
              <span>Animated explainers</span>
            </div>
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="7" />
                <path d="M10 7v3l2 1" />
              </svg>
              <span>Bite-sized & easy to follow</span>
            </div>
            <div className="coming-soon-feature">
              <svg viewBox="0 0 20 20" fill="none" stroke="#dc7e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Expert-led sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-text">
            Join thousands of girls taking control of their menstrual health through education.
          </p>
          <Link to="/learn" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto' }}>
            Get Started for Free
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
