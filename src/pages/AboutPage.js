import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Preserving Your Peace, Supporting Your Growth</h1>
        <p>A safe, stigma-free space for your mental well-being journey.</p>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        <h2>Our Vision & Mission</h2>
        <p>
          At InnerBloom, our vision is to create a supportive, stigma-free environment where everyone can access tools for personal growth and mental wellness. Our mission is to empower individuals by providing an anonymous, accessible platform designed to support your mental well-being every step of the way.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <h2>Our Story</h2>
        <p>
          InnerBloom was founded with the goal of offering a safe, supportive space for people to reflect, express themselves, and find resources for mental health. We recognized the need for accessible mental wellness tools that can be used anywhere, anytime. Our journey is driven by the belief that everyone deserves a space to nurture their mental well-being.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value">
            <h3>Empathy</h3>
            <p>We listen and understand, fostering a compassionate environment.</p>
          </div>
          <div className="value">
            <h3>Anonymity</h3>
            <p>Your privacy is our priority; we ensure a safe, confidential space.</p>
          </div>
          <div className="value">
            <h3>Inclusivity</h3>
            <p>InnerBloom is designed for everyone, embracing all walks of life.</p>
          </div>
          <div className="value">
            <h3>Growth</h3>
            <p>Our tools are crafted to help you grow emotionally and mentally.</p>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="founder-section">
        <div className="founder-photo">
          <img src="/apic.png" alt="Founder" /> {/* Updated with the correct image path */}
        </div>
        <div className="founder-details">
          <h2>Meet the Founder</h2>
          <p>
            Hello! I’m Atharva Verma, the founder of InnerBloom. I created this platform to provide people with an anonymous, accessible space to support their mental health journey. It’s my hope that InnerBloom serves as a safe space for you to reflect, grow, and find peace.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/atharvaverma/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Arrrttyyyys" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
