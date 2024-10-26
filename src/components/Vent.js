import React, { useState } from 'react';

const Vent = () => {
  const [vent, setVent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (vent.trim()) {
      // Add functionality to save the vent anonymously
      console.log("User Vent:", vent);
      setVent('');
      setSubmitted(true);
    }
  };

  return (
    <div className="vent-container">
      <textarea
        placeholder="Anonymously vent, rant, or ask for advice..."
        value={vent}
        onChange={(e) => setVent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Your vent has been submitted anonymously.</p>}
    </div>
  );
};

export default Vent;
