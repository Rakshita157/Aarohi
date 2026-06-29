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
    </div>
  );
};

export default Home;
