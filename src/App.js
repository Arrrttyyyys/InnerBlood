import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import VentPage from './pages/VentPage';
import JournalPage from './pages/JournalPage';
import SignUpPage from './pages/SignUpPage'; // Import SignUp Page
import LoginPage from './pages/LoginPage';   // Import Login Page
import MeditationPage from './pages/MeditationPage';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/moodjournal" element={<JournalPage />} /> {/* New route */}
        <Route path="/vent" element={<VentPage />} />
        <Route path="/meditation" element={<MeditationPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/signup" element={<SignUpPage />} />  {/* SignUp Route */}
        <Route path="/login" element={<LoginPage />} />    {/* Login Route */}
      </Routes>
    </Router>
  );
};

export default App;
