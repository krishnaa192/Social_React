import React, { useState } from 'react'
import { Users } from '../DummyData'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import '../css/main.css'
import '../css/textpost.css'
import PostComment from './PostComment';

function Post(post) {
    const [like, setLike] = useState(post.like);
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

        <div key={post.id} className='posted'>

            <div className='post-head'>
                <div className='post-profile'>
                    <img src={process.env.PUBLIC_URL + Users.find(user => user.id === post.userId)?.profilePicture} alt='profile' />

                </div>
                <div className='post-content'>
                    <div className='post-header'>
                        <h3> <a href="#">{Users.find(user => user.id === post.userId)?.username}</a></h3>
                        <p>{post.date}</p>
                    </div>

                </div>
            </div>
            <div className='post-img-body'>
                <img src={post.photo} alt="postname" />
            </div>
            <div className='like-text'>
                <small>  <a href="#"> {post.like}</a> liked </small> <br />
                <small>  <a href="#">{post.comment}</a> people commented</small>
            </div>
            <div className='post-footer'>
                <button onClick={handleLike}><ThumbUpIcon /></button>
                <button onClick={handleComment}><CommentIcon /></button>

                <button><ShareIcon /></button>
            </div>
            {isCommentOpen &&
                <PostComment post={post} onClose={toggleCommentPopUp} />
            }
        </div>

    )

}
export default Post