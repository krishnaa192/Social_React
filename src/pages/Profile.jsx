import React from 'react'
import { useState } from 'react';

import Navbar from '../component/Navbar'
import '../css/profile.css'
import Img from '../img/profile.jpg'
import post1 from '../img/1.jpg'
import post2 from '../img/2.jpg'
import post3 from '../img/3.jpg'
import post4 from '../img/4.jpg' 
import post5 from '../img/5.jpg'
;

function Profile() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const handleLinkHover = () => {
    setIsStatsVisible(true);
  };

  const handleLinkLeave = () => {
    setIsStatsVisible(false);
  };

  return (
    <div className="Profile-main">
      <div className="header-profile">
        <Navbar />
      </div>

      <div className="profile-container">
        <div className="profile-img">
          <img src={Img} alt="" />
        </div>
        <div className="profile-details">
          <h2>Basic Details</h2>
          <p>@krishnaa192 </p>
          <p>Name: John Doe</p>
          <p>03-07-2002</p>
          <p>Email: krishna@gmail.com </p>
          <p>Bio: I am a web developer with the ability to create anything and ready to embrace it. </p>
          <p
           
          >
            <a href="#">Link</a>
          </p>
       
          <p>Other Details: details of the user</p>
        </div>
      </div>

      <div className="profile-buttons">
        <button>
          <a href="#">Edit Profile</a>
        </button>
        <button>
          <a href="#">Friends</a>
        </button>
        <button>
          <a href="#">Followers</a>
        </button>
      </div>

      <hr />

      <div className="profile-posts">

        <div className="post-main">
          <div className="profile-post">
            <div className="post-imgs">
              <a href="/post/">
                {' '}
                <img src={post1} alt="" />
              </a>
            </div>
            
            {/* onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave} */}
            {isStatsVisible && (
            <div className="post-stats">
              <p>10 Likes </p>
              <p>10 Comments </p>
              <p>10 Shares</p>
            </div>
         
          )}
        </div>
      
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post4} alt="" />
          </div>
          </a>
        
        </div>
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post1} alt="" />
          </div>
          </a>
          
        </div>
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post2} alt="" />
          </div>
          </a>
         
        </div>
        <div className="profile-post">
          <a href="/post/">
          <div className="post-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sint, a pariatur eum minima, 
              commodi est recusandae dolorum reprehenderit mollitia eaque numquam ea beatae id tempore assumenda,
               laudantium ipsa cupiditate accusamus tempora quam aliquam impedit. Possimus tempora sit corporis quod 
               corrupti accusantium, vel, accusamus provident voluptate nostrum modi tenetur labore eveniet assumenda !</p>
          </div>
          </a>
        </div>
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post3} alt="" />
          </div>
          </a>
         
        </div>
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post4} alt="" />
          </div>
          </a>
        </div>
        <div className="profile-post">
        <a href="/post/">
          <div className="post-imgs">
            <img src={post5} alt="" />
          </div>
          </a>
         
        </div>
        <div className="profile-post">
          <a href="/post/">
          <div className="post-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sint, a pariatur eum minima, 
              commodi est recusandae dolorum reprehenderit mollitia eaque numquam ea beatae id tempore assumenda,
               laudantium ipsa cupiditate accusamus tempora quam aliquam impedit. Possimus tempora sit corporis quod 
               corrupti accusantium, vel, accusamus provident voluptate nostrum modi tenetur labore eveniet assumenda !</p>
          </div>
          </a>
        </div>

      </div>
    </div>
    </div>


      )
}

      export default Profile
