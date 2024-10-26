import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Select an option below to begin:</p>
      <div className="dashboard-options">
        <Link to="/vent" className="dashboard-option">
          Vent/Rant
        </Link>
        <Link to="/journal" className="dashboard-option">
          Mood Journal
        </Link>
        <Link to="/meditation" className="dashboard-option">
          Guided Meditation
        </Link>
        <Link to="/checkin" className="dashboard-option">
          Daily Check-In
        </Link>
        <Link to="/crisis" className="dashboard-option">
          Crisis Support
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
