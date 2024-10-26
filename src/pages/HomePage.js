import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <h1>Welcome to InnerBloom</h1>
        <p>Nurturing Your Mental Well-being</p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <p>
          InnerBloom is a mental health app designed to provide a safe space for reflection, support, and personal growth.
          Our goal is to support your mental well-being in every way possible.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Our Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h3>Anonymous Venting</h3>
            <p>A safe place to express yourself freely and anonymously.</p>
          </div>
          <div className={styles.feature}>
            <h3>Mood Journal</h3>
            <p>Track your emotions and reflect on your daily experiences.</p>
          </div>
          <div className={styles.feature}>
            <h3>Crisis Support</h3>
            <p>Access resources and guidance in challenging times.</p>
          </div>
          <div className={styles.feature}>
            <h3>Guided Meditation</h3>
            <p>Tools to help you relax and find inner peace.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>InnerBloom &copy; 2023. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
