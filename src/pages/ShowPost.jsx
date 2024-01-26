import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import '../css/showpost.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Profile from '../img/profile.jpg'

import post1 from '../img/1.jpg'

function ShowPost() {
    const [isCommentOpen, setCommentOpen] = useState(false);
    

    const openComment = () => {
        setCommentOpen(!isCommentOpen);
    }
    return (

        <div className="posts-container">
            <div className="posts-header">
                <Navbar />
            </div>
            <div className="posts-main">
                <div className="posts-heads">
                    <img src={Profile} alt="" />
                    <div className="posts-stats">
                        <h3> krishnaa192 </h3>
                        <small>
                            2 days ago
                        </small>
                    </div>
                </div>
                <div className="post-contents">
                    <img src={post1} alt="" />

                </div>
                <div className="post-foot">
                    <p>Caption </p> <button><small>See More</small></button>
                </div>
                <div className="like-comm">
                    <a href="#">12 people liked this post</a>

                    <a className='cmt' onClick={openComment} href="#">View all 12 comments</a>


                </div>
                <div className="button-reaction">
                    <button><ThumbUpIcon /></button>
                    <button><CommentIcon /></button>
                    <button><ShareIcon /></button>
                </div>
                {isCommentOpen && (
                <div className="comment-box">
                    <div className="comment-head">
                        <img src={Profile} alt="" />
                        <input type="text" placeholder="Write a comment..." />
                    </div>
                 
                        <div id='cmmt' className="comment-body">
                            <div className="comment-heads">
                                <img src={Profile} alt="" />
                                <div className="comment-stats">
                                    <h3> krishnaa192 </h3>
                                    <small>
                                        2 days ago
                                    </small>
                                </div>
                            </div>
                            <div className="comment-contents">
                                <p>Comment can be made here...</p>
                            </div>
                            <div className="comment-foot">
                                <button>
                                    <small>  <a href="">Like</a></small>
                                    <small > <a href="">Reply</a></small>
                                </button>
                            </div>
                            <div className="comment-reply">
                                <div className="comment-heads">
                                    <img src={Profile} alt="" />
                                    <div className="comment-stats">
                                        <h3> krishnaa192 </h3>
                                        <small>
                                            2 days ago
                                        </small>
                                    </div>
                                </div>
                                <div className="comment-contents">
                                    <p>Reply of this comment...</p>
                                </div>
                                <div className="comment-foot">
                                    <button>
                                        <small>  <a href="">Like</a></small>
                                        <small > <a href="">Reply</a></small>
                                    </button>
                                    <div className="seemore-reply">
                                        <a href="">See More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    <div className="comment-body">
                        <div className="comment-heads">
                            <img src={Profile} alt="" />
                            <div className="comment-stats">
                                <h3> krishnaa192 </h3>
                                <small>
                                    2 days ago
                                </small>
                            </div>
                        </div>
                        <div className="comment-contents">
                            <p>Comment can be made here...</p>
                        </div>
                        <div className="comment-foot">
                            <button>
                                <small>  <a href="">Like</a></small>
                                <small > <a href="">Reply</a></small>
                            </button>
                        </div>

                    </div>
                </div>
                 )}
            </div>

        </div>

    )
}

export default ShowPost
