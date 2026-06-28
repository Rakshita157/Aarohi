import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import heroImage from '../assets/hero.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="tagline">
              <svg className="tagline-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#c084a1"/>
                <circle cx="8" cy="10" r="1.5" fill="#c084a1"/>
                <circle cx="16" cy="10" r="1.5" fill="#c084a1"/>
                <circle cx="12" cy="14" r="1.5" fill="#c084a1"/>
                <circle cx="10" cy="12" r="1.5" fill="#c084a1"/>
                <circle cx="14" cy="12" r="1.5" fill="#c084a1"/>
              </svg>
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
              <Link to="/not-found" className="btn btn-primary">
                Get Started
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/not-found" className="btn btn-secondary">
                Explore Lessons
              </Link>
            </div>
            
            {/* Features */}
            <div className="features">
              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#c084a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Trusted</div>
                  <div className="feature-subtitle">Content</div>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#c084a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="10" r="1" fill="#c084a1"/>
                    <circle cx="9" cy="10" r="1" fill="#c084a1"/>
                    <circle cx="15" cy="10" r="1" fill="#c084a1"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">AI Powered</div>
                  <div className="feature-subtitle">Guidance</div>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#c084a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Safe &</div>
                  <div className="feature-subtitle">Inclusive</div>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon-bg">
                  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="#c084a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              
              {/* AI Chat Box Overlay */}
              <div className="ai-chatbox">
                <div className="chatbox-header">
                  <div className="ai-avatar">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#2d3748"/>
                      <circle cx="9" cy="10" r="1.5" fill="white"/>
                      <circle cx="15" cy="10" r="1.5" fill="white"/>
                      <path d="M8 14c0 2.21 1.79 4 4 4s4-1.79 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
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
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="#c084a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
