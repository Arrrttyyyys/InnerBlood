import React, { useState } from 'react';
import './MoodJournal.css';

const MoodJournal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newEntryText, setNewEntryText] = useState('');

  // Handle creating a new entry
  const handleNewEntry = () => {
    setIsEditing(true);
    setCurrentEntry(null);
    setNewEntryText('');
  };

  // Handle saving the entry
  const handleSaveEntry = () => {
    if (newEntryText.trim()) {
      const updatedEntries = currentEntry
        ? entries.map((entry) =>
            entry.id === currentEntry.id ? { ...entry, text: newEntryText } : entry
          )
        : [{ id: Date.now(), text: newEntryText, date: new Date().toLocaleDateString() }, ...entries];

      setEntries(updatedEntries);
      setIsEditing(false);
      setNewEntryText('');
    }
  };

  // Handle editing an existing entry
  const handleEditEntry = (entry) => {
    setCurrentEntry(entry);
    setNewEntryText(entry.text);
    setIsEditing(true);
  };

  // Handle deleting an entry
  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
    setIsEditing(false);
    setNewEntryText('');
  };

  return (
    <div className="mood-journal">
      <h1>Mood Journal</h1>
      
      {/* Entry Editing View */}
      {isEditing ? (
        <div className="entry-editor">
          <textarea
            className="entry-textarea"
            value={newEntryText}
            onChange={(e) => setNewEntryText(e.target.value)}
            placeholder="Write about your mood here..."
          />
          <button onClick={handleSaveEntry} className="save-button">Save</button>
          {currentEntry && (
            <button onClick={() => handleDeleteEntry(currentEntry.id)} className="delete-button">
              Delete
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Scrollable List of Entries */}
          <ul className="entry-list">
            {entries.map((entry) => (
              <li key={entry.id} onClick={() => handleEditEntry(entry)} className="entry-item">
                <div className="entry-date">{entry.date}</div>
                <div className="entry-preview">{entry.text.slice(0, 30)}...</div>
              </li>
            ))}
          </ul>

          {/* Button to Start New Entry */}
          <button onClick={handleNewEntry} className="new-entry-button">
            New Entry
          </button>
        </>
      )}
    </div>
  );
};

export default MoodJournal;
