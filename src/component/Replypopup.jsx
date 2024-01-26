import React, { useState } from 'react';
import './CommentPopup.css'; // Create a CSS file for styling

const Replypopup = ({ onClose, userName }) => {
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]);

  const handleReply = () => {
    if (replyText.trim() !== '') {
      setReplies((prevReplies) => [...prevReplies, replyText]);
      setReplyText('');
    }
  };

  return (
    <div className="comment-popup">
      <h2>Comment on @{userName}</h2>
      <textarea
        placeholder="Write your reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <button onClick={handleReply}>Reply</button>
      <ul>
        {replies.map((reply, index) => (
          <li key={index}>{reply}</li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Replypopup;
