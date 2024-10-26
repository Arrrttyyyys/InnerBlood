import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Select an option to start your journey towards well-being.</p>

      <Link to="/vent" className="feature-link">
        <div className="feature-box">
          <h2>Vent/Rant</h2>
          <p>Express yourself freely and anonymously.</p>
        </div>
      </Link>

      <Link to="/moodjournal" className="feature-link">
        <div className="feature-box">
          <h2>Mood Journal</h2>
          <p>Track your emotions and daily reflections.</p>
        </div>
      </Link>

      <Link to="/meditation" className="feature-link">
        <div className="feature-box">
          <h2>Guided Meditation</h2>
          <p>Relax with our guided meditation sessions.</p>
        </div>
      </Link>

      <Link to="/dailycheckin" className="feature-link">
        <div className="feature-box">
          <h2>Daily Check-In</h2>
          <p>Quick daily updates to track your progress.</p>
        </div>
      </Link>

      <Link to="/crisissupport" className="feature-link">
        <div className="feature-box">
          <h2>Crisis Support</h2>
          <p>Access resources during challenging times.</p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardPage;
