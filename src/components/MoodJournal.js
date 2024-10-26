import React, { useState } from 'react';

const MoodJournal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    if (entry.trim()) {
      setEntries([...entries, { date: new Date().toLocaleString(), text: entry }]);
      setEntry('');
    }
  };

  return (
    <div className="journal-container">
      <textarea
        placeholder="How are you feeling today?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={handleAddEntry}>Add Entry</button>
      <div className="journal-entries">
        {entries.map((e, index) => (
          <div key={index} className="entry">
            <p>{e.date}</p>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodJournal;
