import React, { useState } from 'react';
// import {useNavigate} from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Profile from '../img/profile.jpg';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import icon from '../img/icon.png';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev)=>!prev);



  };
  //   const handleRouter = (e) => {
  //     // use router in button click event
  //     const history = useNavigate();
  // }

  return (
  <div className="navs">
      <nav className="main-nav">
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
        <div className="logo">
          <img src={icon} alt="logo" />
        {/* <h2>
            <span>S</span>ocial
          </h2> */}
          </div>
          <ul className='ul-button'>
            <li>
              <button > <a href="/">Home</a></button>
            </li>
            <li>
              <button> <a href="/explore">Explore</a></button>
            </li>
            <li>
              <button><a href="">Messsage</a></button>
            </li>
            <li>
              <button> <a href="/search">Search</a></button>
            </li>
            <li>
              <button> <a href="/notification">Notification</a></button>
            </li>
            <li>
              <div className='dropdown'>
                <button onClick={toggleDropdown} > <img className="profile-image" src={Profile} alt='profile'></img>  </button>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button><a href="/profile">Profile</a></button>
                  <button>Logout</button>
                  <button> <a href="editprofile">Settings</a></button>
                </div>
              )}
              </div>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
