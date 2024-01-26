import React from 'react'
import Profile from '../img/profile.jpg';
import '../css/comment.css';

function Comment() {
  return (
    <>
    <div className='comment-box'>
      <div className='comment-container'>
        <div className='comment-profile'>
          <img src={Profile} alt='profile'></img>
        <div className='comment-form'>
          <textarea placeholder='Write a comment...'></textarea>
        </div>
      </div>
      </div>

      <div className='commented'>
        <div className='commented-profile'>
          <img src={Profile} alt='profile'></img>
          <div className='commented-name'>
            <p>Username </p>
            <span>9:00 17 Sept</span>
          </div>
        </div>
        <div className='commented-content'>
          Hi Nice pic Tu lagdi lahore ni
        </div>
      </div>

    </div>

    </>
  )
}

export default Comment
