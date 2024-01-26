import React, { useState } from 'react';
import '../css/popup.css';
import { Users, TextPosts } from '../DummyData';
import InfiniteScroll from 'react-infinite-scroll-component';
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
const CommentPopup = ({ onClose, text }) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [replyPopupOpen, setReplyPopupOpen] = useState(false);

  const toggleReplyPopup = () => {
    setReplyPopupOpen(!replyPopupOpen);
  };


  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  // how to find the user who posted the text post not the user who is commenting

  const usr = Users.find(user => user.id === text.userId);
  return (
  
    <div className="comment-popup">
      <div className='post-head'>
        <div className='post-profile'>
          <img src={process.env.PUBLIC_URL + Users.find(user => user.id === text.userId)?.profilePicture} alt='profile' />

        </div>
        <div className='post-content'>
          <div className='post-header'>
            <h3> <a href="#">{Users.find(user => user.id === text.userId)?.username}</a></h3>
            <p>{text.date}</p>
          </div>
        </div>
      </div>

      <div className="comment-popup-post">
        <p>{text.desc}</p>
      </div>
      <div className='post-footer'>
        <button ><ThumbUpIcon /></button>
        <button ><CommentIcon /></button>
        <button><ShareIcon /></button>
      </div>
      <div className="posts-stats">
        <p>
          <button> {like} </button> people liked
        </p>
        <p>
          <button> {text.comment} </button> people commented.
        </p>
      </div>
      <div className="comment-popup-cmt">
        <div className="comment-popup-content">
          {/* Your comment input field, comments, etc. */}
          <textarea placeholder="Add a comment..."></textarea>
          {/* Additional comment-related components go here */}
        </div>
        <div className="commented-box">
          <h3> Top Comments</h3>
         
          <div className="comment-content">
            <div className="comments">
              <div className="comments-content">
                <div className="comment-content">
                  <img src={process.env.PUBLIC_URL + Users.find(user => user.id === text.userId)?.profilePicture} alt='profile'></img>
                  <h4>{Users.find(user => user.id === text.userId)?.username}</h4>
                  <small>5 hours ago</small>
                </div>
                <p>Comment is made here and you can see it The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a</p>
              </div>

              <div className="like-btn">
                <button onClick={handleLike}>Like({like})</button>
                <button onClick={toggleReplyPopup}> Reply</button>
                {replyPopupOpen && <ReplyPopup userName={usr.username} onClose={toggleReplyPopup} />}
              </div>
              <button className='view-reply'>Views all replies</button>
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

export default CommentPopup;
