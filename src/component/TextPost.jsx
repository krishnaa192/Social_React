import React,{useState} from 'react'
import {Users} from '../DummyData'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import '../css/main.css'
import '../css/textpost.css'
import CommentPopup from './CommentPopup';




function TextPost(text) {
    const [like, setLike] = useState(text.like);
const [isLiked, setIsLiked] = useState(false)
const [comment, setComment] = useState(false);
const [isCommentOpen, setCommentOpen] = useState(false);

const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
};
const toggleCommentPopUp = () => {
    setCommentOpen(!isCommentOpen);
    console.log('Pressed')
  };

const handleComment = () => {
    toggleCommentPopUp();
}

  return (
  
      <div key={text.id} className="posted">

<div className='post-head'>
    <div className='post-profile'>
        <img src={process.env.PUBLIC_URL + Users.find(user => user.id === text.userId)?.profilePicture} alt='profile'></img>
    </div>
    <div className='post-content'>
        <div className='post-header'>
            <h3><a href="#">{Users.find(user => user.id === text.userId)?.username}</a></h3>
            <p>{text.date}</p>
        </div>

    </div>
</div>
<div className='post-body'>
    <p>{text.desc}</p>
</div>
<div className='like-text'>
    <small> <a href=""> {like}</a> people liked </small> <br />
    <small> <a href="">{text.comment}</a>   other commented</small>
</div>
<div className='post-footer'>
    <button onClick={handleLike}><ThumbUpIcon /></button>
    <button onClick={handleComment}><CommentIcon /></button>
    <button><ShareIcon /></button>
</div>
{isCommentOpen && 
<CommentPopup  text={text} onClose={toggleCommentPopUp} />
    }
</div>
  
  )
}

export default TextPost
