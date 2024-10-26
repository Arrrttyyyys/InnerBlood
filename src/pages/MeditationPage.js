import React, { useState, useRef } from 'react';
import './MeditationPage.css';

const categories = [
  { id: 'anxiety', name: 'Anxiety Relief' },
  { id: 'relaxation', name: 'Relaxation' },
  { id: 'sleep', name: 'Sleep' },
];

const meditations = {
  anxiety: [
    {
      id: 1,
      title: "Anxiety Relief Meditation",
      description: "A meditation to help calm your mind and reduce anxiety.",
      url: "https://www.youtube.com/embed/example1",
    },
    {
      id: 2,
      title: "Overcoming Anxiety",
      description: "Guided meditation to reduce anxiety and find peace.",
      url: "https://www.youtube.com/embed/example2",
    },
  ],
  relaxation: [
    {
      id: 3,
      title: "Relaxation Meditation",
      description: "A gentle guided meditation for relaxation.",
      url: "https://www.youtube.com/embed/example3",
    },
  ],
  sleep: [
    {
      id: 4,
      title: "Sleep Meditation",
      description: "A calming guided meditation to help you fall asleep.",
      url: "https://www.youtube.com/embed/example4",
    },
  ],
};

const MeditationPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Create refs for each category section
  const sectionRefs = {
    anxiety: useRef(null),
    relaxation: useRef(null),
    sleep: useRef(null),
  };

  // Scroll to the selected category section
  const handleScrollToSection = (categoryId) => {
    sectionRefs[categoryId].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="meditation-page">
      <h1>Guided Meditations</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleScrollToSection(category.id)}
            className="category-button"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Meditation Sections */}
      {categories.map((category) => (
        <div key={category.id} ref={sectionRefs[category.id]} className="meditation-section">
          <h2>{category.name}</h2>
          <div className="meditation-list">
            {meditations[category.id].map((meditation) => (
              <div
                key={meditation.id}
                className="meditation-item"
                onClick={() => setSelectedVideo(meditation)}
              >
                <h3>{meditation.title}</h3>
                <p>{meditation.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Video Player */}
      {selectedVideo && (
        <div className="video-player">
          <iframe
            width="100%"
            height="315"
            src={selectedVideo.url}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MeditationPage;
