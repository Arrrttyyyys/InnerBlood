import React, { useState } from 'react';
import './MoodJournal.css';

const MoodJournal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newEntryText, setNewEntryText] = useState('');

  // Create a new entry
  const handleNewEntry = () => {
    setIsEditing(true);
    setCurrentEntry({ id: Date.now(), text: '', date: new Date().toLocaleDateString() });
  };

  // Save entry text
  const handleSaveEntry = () => {
    if (currentEntry.text.trim()) {
      setEntries([{ ...currentEntry, text: newEntryText }, ...entries]);
      setNewEntryText('');
      setIsEditing(false);
      setCurrentEntry(null);
    }
  };

  // Edit existing entry
  const handleEditEntry = (entry) => {
    setCurrentEntry(entry);
    setNewEntryText(entry.text);
    setIsEditing(true);
  };

  return (
    <div className="mood-journal">
      <h1>Mood Journal</h1>
      {!isEditing ? (
        <>
          <button onClick={handleNewEntry} className="new-entry-button">+ New Entry</button>
          <ul className="entry-list">
            {entries.map((entry) => (
              <li key={entry.id} onClick={() => handleEditEntry(entry)} className="entry-item">
                <div className="entry-date">{entry.date}</div>
                <div className="entry-preview">{entry.text.slice(0, 30)}...</div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="entry-editor">
          <textarea
            className="entry-textarea"
            value={newEntryText}
            onChange={(e) => setNewEntryText(e.target.value)}
            placeholder="Write about your mood here..."
          />
          <button onClick={handleSaveEntry} className="save-button">Save</button>
        </div>
      )}
    </div>
  );
};

export default MoodJournal;
