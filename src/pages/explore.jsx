import React from 'react'
import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.png'
import '../css/explore.css'
import Profile from '../img/profile.jpg';
import Navbar from '../component/Navbar';

function Explore() {
  return (
    <div className='explore'>
      <div className='head'>
        <Navbar />
      </div>
      <div className='explore-main-box'>
        <div className='explore-box'>
          <div className='explore-image'>
            <a href=""> <img src={Img1} alt='img1' /></a>
            <div className="imagehover">
            </div>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img2} alt='img1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img3} alt='img1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img2} alt='img1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img1} alt='imghttps://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&feature=sharedhttps://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&feature=shared1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img2} alt='img1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <img src={Img2} alt='img1' />
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img1} alt='img1' /></a>
          </div>
        </div>

        <div className='explore-box'>
          <div className='explore-image'>
            <a href="">  <img src={Img3} alt='img1' /></a>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Explore
