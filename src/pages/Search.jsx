import React from 'react'
import '../css/Search.css'
import { FaSearch } from 'react-icons/fa'
import Navbar from '../component/Navbar'
import img from '../img/profile.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.png'



function Search() {
    return (
        <>
            <div className="search-container">
                <div className="header-search">
                    <Navbar />
                </div>
                <div className='Search-main'>
                    <div className="search-form">
                        <form action="" method='POST'>
                            <input type="text" placeholder="Search" />
                            <button><FaSearch className='fasearch' /></button>
                        </form>
                    </div>
                    <div className="filter-option">
                        <ul className="filter">
                            <li> <a href="">Friends</a></li>
                            <li> <a href="">People</a></li>
                            <li> <a href="">Hashtags</a></li>
                            <li> <a href="">Posts</a></li>
                            <li> <a href="">Group</a></li>
                            <li> <a href="">Pages</a></li>
                        </ul>
                    </div>
                </div>
                {/* -----------------Friends------------------- */}
                <div className="people">
                    <div className="people-header">
                        <p>Friends</p>
                    </div>
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Remove </button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Friend Since tomorrow</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Remove</button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Friend Since 2d</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Remove </button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Friend Since 2y</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>

                {/* -----------------People------------------- */}
                <div className="people">
                    <div className="people-header">
                        <p>People</p>
                    </div>
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Add </button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Mutual Friend user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Add </button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Mutual Friend user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Krishna Upadhyay</a></p>
                            </div>
                            <div className="add-button">
                                <button>Add </button>
                            </div>

                        </div>
                        <div className="people-button">
                            <p>Mutual Friend user1,user2</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>
                {/* ------Group---------------- */}

                <div className="group">
                    <div className="people-header">
                        <p>Groups</p>
                    </div>
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Group1 Python</a></p>
                            </div>
                            <div className="add-button">
                                <button>Joined </button>
                            </div>
                        </div>
                        <div className="group-button">
                            <p>Joined by user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Group1 Jaascript</a></p>
                            </div>
                            <div className="add-button">
                                <button>Join </button>
                            </div>

                        </div>
                        <div className="group-button">
                            <p>Joined by user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Group 2 Django</a></p>
                            </div>
                            <div className="add-button">
                                <button>Join </button>
                            </div>

                        </div>
                        <div className="group-button">
                            <p>Joined by user1,user2</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>




                {/* -----------------Pages------------------- */}
                <div className="group">
                    <div className="people-header">
                        <p>Pages</p>
                    </div>
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Page1 Python</a></p>
                            </div>
                            <div className="add-button">
                                <button>Followed </button>
                            </div>
                        </div>
                        <div className="group-button">
                            <p>Followed by user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">page2 Javascript</a></p>
                            </div>
                            <div className="add-button">
                                <button>Follow </button>
                            </div>

                        </div>
                        <div className="group-button">
                            <p>Followed by user1,user2</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="people-name">
                                <p>   <a href="">Page3  Django</a></p>
                            </div>
                            <div className="add-button">
                                <button>Follow </button>
                            </div>

                        </div>
                        <div className="group-button">
                            <p>Followed by user1,user2</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>

                {/* -----------------Hashtags------------------- */}
                <div className="hashtag">
                    <div className="hash-header">
                        <p>Hashtags</p>
                    </div>
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-name">
                                <p>   <a href="">#Python</a></p>
                            </div>
                            <div className="add-button">
                                <button>Follow </button>
                            </div>
                        </div>
                        <div className="hash-button">
                            <p>1000+ Post</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-name">
                                <p>   <a href="">#Javascript</a></p>
                            </div>
                            <div className="add-button">
                                <button>Follow </button>
                            </div>

                        </div>
                        <div className="hash-button">
                            <p>1000+ Post</p>
                        </div>
                    </div>
                    <hr />
                    <div className="people-lists">
                        <div className="people-list">
                            <div className="people-name">
                                <p>   <a href="">#Django</a></p>
                            </div>
                            <div className="add-button">
                                <button>Follow </button>
                            </div>

                        </div>
                        <div className="hash-button">
                            <p>1000+ Post</p>
                        </div>
                    </div>
                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>


                {/* ---------------------------------Posts------------------------
*/}
                <div className="posts">
                    <div className="hash-header">
                        <p>Posts</p>
                    </div>
                    <div className="post-lists">
                        <div className="post-list">
                            <div className="user-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="user-name">
                                <p>   <a href="">krishna Upadhyay</a></p>
                            </div>
                            <div className="post-button">
                                <button>Follow </button>
                            </div>
                        </div>
                        <div className="img">
                            <div className="post-img">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className="caption">
                        <p>  <i>This is Caption</i></p>
                        </div>
                        <div className="post-stats-button">
                            <button> <a href="">Like </a></button>
                            <button>  <a href="">Comment</a> </button>
                            <button><a href="">Share</a> </button>
                        </div>
                        <div className="stats">
                            <p>1000 likes</p>
                            <p>10 comments</p>
                        </div>

                        
                    </div>
                    <hr/>
                    <div className="post-lists">
                        <div className="post-list">
                            <div className="user-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="user-name">
                                <p>   <a href="">Kishan Visvakarma</a></p>
                            </div>
                            <div className="post-button">
                                <button>Follow </button>
                            </div>
                        </div>
                        <div className="img">
                            <div className="post-img">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="caption">
                        <p>  <i>This is Caption</i></p>
                        </div>
                        <div className="post-stats-button">
                            <button> <a href="">Like </a></button>
                            <button>  <a href="">Comment</a> </button>
                            <button><a href="">Share</a> </button>
                        </div>
                        <div className="stats">
                            <p>1000 likes</p>
                            <p>10 comments</p>
                        </div>

                        
                    </div>
                    <div className="post-lists">
                        <div className="post-list">
                            <div className="user-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="user-name">
                                <p>   <a href="">Nikky Yadav</a></p>
                            </div>
                            <div className="post-button">
                                <button>Follow </button>
                            </div>
                        </div>
                        <div className="img">
                            <div className="post-img">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="caption">
                            <p>  <i>This is Caption</i></p>
                        </div>
                        <div className="post-stats-button">
                            <button> <a href="">Like </a></button>
                            <button>  <a href="">Comment</a> </button>
                            <button><a href="">Share</a> </button>
                        </div>
                        <div className="stats">
                            <p>1000 likes</p>
                            <p>10 comments</p>
                        </div>

                        
                    </div>


                    <div className="see-more">
                        <button> <a href="">See More</a></button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Search
