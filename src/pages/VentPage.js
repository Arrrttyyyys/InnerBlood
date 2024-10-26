import React, { useState } from 'react';
import './VentPage.css';

const VentPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [replyInput, setReplyInput] = useState('');

  // Handle submission of the initial rant
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setMessages([{ text: userInput, isUser: true }]);
      setIsSubmitted(true);
      setUserInput('');
    }
  };

  // Handle replies in the chatbox
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyInput.trim()) {
      setMessages([...messages, { text: replyInput, isUser: false }]);
      setReplyInput('');
    }
  };

  return (
    <div className="vent-page">
      <h1>Anonymous Venting</h1>
      {!isSubmitted ? (
        <>
          <p>Express yourself freely and anonymously.</p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="vent-textarea"
              placeholder="Anonymously vent, rant, or ask for advice here..."
              rows="8"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </>
      ) : (
        <div className="chatbox">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.isUser ? 'user-message' : 'reply-message'}`}
            >
              {message.text}
            </div>
          ))}
          <form onSubmit={handleReplySubmit} className="reply-form">
            <input
              type="text"
              className="reply-input"
              placeholder="Type a reply..."
              value={replyInput}
              onChange={(e) => setReplyInput(e.target.value)}
              required
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VentPage;
