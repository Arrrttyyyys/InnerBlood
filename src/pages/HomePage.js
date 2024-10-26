import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup'); // Redirect to Sign Up page
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <h1>Welcome to InnerBloom</h1>
        <p>Nurturing Your Mental Well-being</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <p>
          InnerBloom is a mental health app designed to provide a safe space for reflection, support, and personal growth.
          Our goal is to support your mental well-being in every way possible.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Anonymous Venting</h3>
            <p>A safe place to express yourself freely and anonymously.</p>
          </div>
          <div className="feature">
            <h3>Mood Journal</h3>
            <p>Track your emotions and reflect on your daily experiences.</p>
          </div>
          <div className="feature">
            <h3>Crisis Support</h3>
            <p>Access resources and guidance in challenging times.</p>
          </div>
          <div className="feature">
            <h3>Guided Meditation</h3>
            <p>Tools to help you relax and find inner peace.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign Up or Log In to your account.</li>
          <li>Select an activity from the Dashboard.</li>
          <li>Start tracking your mood or expressing yourself anonymously.</li>
        </ol>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>InnerBloom &copy; 2023. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
