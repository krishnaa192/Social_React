import React, { useState } from 'react';
import '../css/popup.css';
import { Users } from '../DummyData';
import '../css/postpopup.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const ReplyPopup = ({ onClose, userName }) => {
  const [replyText, setReplyText] = useState(`@${userName}   `);
  const handleReply = () => {
    // Implement reply functionality here
    if (replyText.trim() !== '') {
      // Handle reply submission, e.g., send to backend or update state
      console.log(`Replying to ${userName}: ${replyText}`);
      setReplyText('');
    }
  };

  return (
    <div className="reply-popup">
      <textarea
        placeholder={`Reply to @${userName}...`}
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <div className="reply">
        <button onClick={handleReply}>Reply</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const PostComment = ({ onClose, post }) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [replyPopupOpen, setReplyPopupOpen] = useState(false);
  const [commentText, setCommentText] = useState('');

  const toggleReplyPopup = () => {
    setReplyPopupOpen(!replyPopupOpen);
  };


  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  const submitComment = () => {
    // Implement comment functionality here
    console.log('Comment submitted');
    setCommentText('');
    console.log(commentText);
  }

  // how to find the user who posted the text post not the user who is commenting

  const usr = Users.find(user => user.id === post.userId);
  return (
  <div className="comment-popups">
    <div className="comment-popup">
      <div className='post-head'>
      <div className="post-desc">
        <p> Comment on @{usr.username}  post </p>
        <p> Caption : {post.desc} </p>
        </div>
      
      </div>

     
      <div className="comment-popup-cmt">
        <div className="comment-popup-content">
          <textarea placeholder="Add a comment..." 
           value={commentText}
           onChange={(e) => setCommentText(e.target.value)}></textarea>
          <div className="comment-btn">
            <button onClick={submitComment}> Comment</button>
         
        </div>
       
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
     </div >
    
  
  );
};

export default PostComment;
