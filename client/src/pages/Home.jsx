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
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#c084a1"/>
                </svg>
                <div>
                  <div className="feature-title">Trusted</div>
                  <div className="feature-subtitle">Content</div>
                </div>
              </div>
              
              <div className="feature">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" fill="#c084a1"/>
                </svg>
                <div>
                  <div className="feature-title">AI Powered</div>
                  <div className="feature-subtitle">Guidance</div>
                </div>
              </div>
              
              <div className="feature">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="#c084a1"/>
                </svg>
                <div>
                  <div className="feature-title">Safe &</div>
                  <div className="feature-subtitle">Inclusive</div>
                </div>
              </div>
              
              <div className="feature">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#c084a1"/>
                </svg>
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
