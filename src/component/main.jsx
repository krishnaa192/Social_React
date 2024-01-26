import React, { useState } from 'react'
import '../css/main.css'
import ImageIcon from '@mui/icons-material/Image';
import Profile from '../img/profile.jpg';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.png';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Comment from './comment';

function Main() {
    const [isCommentOpen, setCommentOpen] = useState(false);

    const toggleComment = () => {
        setCommentOpen((prev) => !prev);
    }

    return (
        <div className={`main ${isCommentOpen ? 'blur' : ''}`}>
            <div className='post-box'>
                <div className='post'>
                    <div className='post-form-profile'>
                        <img src={Profile} alt='profile'></img>
                    </div>
                    <div className='post-form'>
                        <textarea placeholder='What is on your mind?'></textarea>
                    </div>
                </div>
                <div className='post-option'>
                    <button><ImageIcon /> Images</button>
                    <button>  <AttachFileIcon /> Others  </button>
                </div>
                <button className='submit'>Post</button>
            </div>
            <div className='post-container'>
                <div className='posted'>
                    <div className='post-head'>
                        <div className='post-profile'>
                            <img src={Profile} alt='profile'></img>
                        </div>
                        <div className='post-content'>
                            <div className='post-header'>
                                <h3>Username</h3>
                                {/* <p>Time</p> */}
                            </div>
                            <div className='vert-icon'>
                                <MoreVertIcon />
                            </div>
                        </div>
                    </div>
                    <div className='post-img-body'>
                        <img src={Img1} alt="postname" />
                    </div>
                    <div className='like-text'>
                        <small> krishna and 22 other liked </small> <br />
                        <small>  krishna and 2  other commented</small>
                     </div>
                    <div className='post-footer'>
                        <button><ThumbUpIcon /></button>
                        <button onClick={toggleComment}><CommentIcon /></button>

                        <button><ShareIcon /></button>
                    </div>
                </div>
                {/* post 2 */}
                <div className='posted'>
                    <div className='post-head'>
                        <div className='post-profile'>
                            <img src={Profile} alt='profile'></img>
                        </div>
                        <div className='post-content'>
                            <div className='post-header'>
                                <h3>Username</h3>
                                {/* <p>Time</p> */}
                            </div>
                            <div className='vert-icon'>
                                <MoreVertIcon />
                            </div>
                        </div>
                    </div>
                    <div className='post-body'>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro mollitia suscipit tenetur expedita nobis excepturi modi delectus, eius facilis molestias exercitationem architecto quo harum dolorem quod explicabo! Recusandae, possimus tempore.</p>
                    </div>
                    <div className='like-text'>
                        <small> krishna and 22 other liked </small> <br />
                        <small>  krishna and 2  other commented</small>
                     </div>
                    <div className='post-footer'>
                        <button><ThumbUpIcon /></button>
                        <button onClick={toggleComment}><CommentIcon /></button>
                        <button><ShareIcon /></button>
                    </div>
                </div>
                {/* post 3 */}
                <div className='posted'>
                    <div className='post-head'>
                        <div className='post-profile'>
                            <img src={Profile} alt='profile'></img>
                        </div>
                        <div className='post-content'>
                            <div className='post-header'>
                                <h3>Username</h3>
                                {/* <p>Time</p> */}
                            </div>
                            <div className='vert-icon'>
                                <MoreVertIcon />
                            </div>
                        </div>
                    </div>
                    <div className='post-img-body'>
                        <img src={Img2} alt="postname" />
                        <div className='like-text'>
                        <small> krishna and 22 other liked </small> <br />
                        <small>  krishna and 2  other commented</small>
                     </div>
                        <div className='post-footer'>
                            <button><ThumbUpIcon /></button>
                            <button onClick={toggleComment}><CommentIcon /></button>
                            <button><ShareIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            {isCommentOpen && (
                <div className="comment" >
                    <Comment />
                </div>
            )

            }
        </div>

    )
}

export default Main
