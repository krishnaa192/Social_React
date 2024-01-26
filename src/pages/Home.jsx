
import React, { useState, useEffect } from 'react'
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
import Comment from '../component/comment';
import Navbar from '../component/Navbar';
import { Posts, Users, TextPosts } from '../DummyData';
import TextPost from '../component/TextPost';
import Post from '../component/Post';


function Home(post) {
    // const [isCommentOpen, setCommentOpen] = useState(false);
    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false)
    const [comment, setComment] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)

        console.log('Pressed')
    };

    const handleComment = () => {
        setComment(comment + 1);
    }


    return (
        <div className='home-box'>
            <div className="home-header">
                <Navbar />
            </div>
            <div className="main">
                <div className="post-div">
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
                        {Posts.map(post => (
                            <Post key={post.id} {...post} />
                            // <div key={post.id} className='posted'>

                            //     <div className='post-head'>
                            //         <div className='post-profile'>
                            //             <img src={process.env.PUBLIC_URL + Users.find(user => user.id === post.userId)?.profilePicture} alt='profile' />

                            //         </div>
                            //         <div className='post-content'>
                            //             <div className='post-header'>
                            //                 <h3> <a href="#">{Users.find(user => user.id === post.userId)?.username}</a></h3>
                            //                 <p>{post.date}</p>
                            //             </div>

                            //         </div>
                            //     </div>
                            //     <div className='post-img-body'>
                            //         <img src={post.photo} alt="postname" />
                            //     </div>
                            //     <div className='like-text'>
                            //         <small>  <a href="#"> {post.like}</a> liked </small> <br />
                            //         <small>  <a href="#">{post.comment}</a> people commented</small>
                            //     </div>
                            //     <div className='post-footer'>
                            //         <button onClick={handleLike}><ThumbUpIcon /></button>
                            //         <button onClick={handleComment}><CommentIcon /></button>

                            //         <button><ShareIcon /></button>
                            //     </div>
                            // </div>
                        ))}
                        {TextPosts.map(text => (
                            <TextPost key={text.id} {...text} />
                            // <div key={text.id} className='posted'>

                            //     <div className='post-head'>
                            //         <div className='post-profile'>
                            //             <img src={process.env.PUBLIC_URL + Users.find(user => user.id === text.userId)?.profilePicture} alt='profile'></img>
                            //         </div>
                            //         <div className='post-content'>
                            //             <div className='post-header'>
                            //                 <h3><a href="#">{Users.find(user => user.id === text.userId)?.username}</a></h3>
                            //                 <p>{text.date}</p>
                            //             </div>

                            //         </div>
                            //     </div>
                            //     <div className='post-body'>
                            //         <p>{text.desc}</p>
                            //     </div>
                            //     <div className='like-text'>
                            //         <small> krishna and <a href=""> {text.like}</a> other liked </small> <br />
                            //         <small>  krishna and <a href="">{text.comment}</a>   other commented</small>
                            //     </div>
                            //     <div className='post-footer'>
                            //         <button onClick={handleLike}><ThumbUpIcon /></button>
                            //         <button onClick={handleComment}><CommentIcon /></button>
                            //         <button><ShareIcon /></button>
                            //     </div>
                            // </div>
                        ))}


                    </div>
                    {/* {isCommentOpen && (
                    <div className="comment" >
                        <Comment />
                    </div>
                )

                } */}
                </div>
                <div className="trending-topic">
                    <div className="trending-header">
                        <h2>Trending</h2>
                    </div>
                    <div className="trending-body">
                        <div className="trending-box">

                            <div className="trending-hashtage">
                                <p>#Javascript</p>
                            </div>
                            <div className="trending-desc">
                                <p> <a href="#">233k people are talking about it</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="trending-box">

                        <div className="trending-hashtage">
                            <p>Fresh topic.</p>
                        </div>
                        <div className="trending-desc">
                            <p> <a href="#">people are talking about New World cup sechdule</a></p>
                        </div>
                    </div>
                    <div className="trending-box">
                        <div className="trending-hashtage">
                            <p>Nonsece Things</p>
                        </div>
                        <div className="trending-desc">
                            <p>  <a href="">people are talking about A pig</a> </p>
                        </div>
                    </div>
                    <div className="trending-box">
                        <div className="trending-hashtage">
                            <p>#React</p>
                        </div>
                        <div className="trending-desc">
                            <p> <a href="">233k people are talking about it</a></p>
                        </div>
                    </div>
                    <div className="trending-box">
                        <div className="trending-hashtage">
                            <p>#React</p>
                        </div>
                        <div className="trending-desc">
                            <p> <a href="">233k people are talking about it</a></p>
                        </div>
                    </div>
                    <div className="trending-box">
                        <div className="trending-hashtage">
                            <p>#React</p>
                        </div>
                        <div className="trending-desc">
                            <p><a href="">233k people are talking about it</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
