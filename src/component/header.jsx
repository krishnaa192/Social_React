import React, { useState, useEffect } from 'react';
import Profile from '../img/profile.jpg';
// import '../css/header.css';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isDropdownOpen, setDropdownOpen] = useState(
  //   JSON.parse(localStorage.getItem('isMenuOpen')) || false);

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev)=>!prev);


  // useEffect(() => {
  //   // Add an event listener to handle changes in localStorage
  //   const handleStorageChange = (e) => {
  //     if (e.key === 'isMenuOpen') {
  //       setMenuOpen(JSON.parse(e.newValue));
  //     }
  //   };
  //   window.addEventListener('storage', handleStorageChange);
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);
//   const newIsMenuOpen = !isMenuOpen;
//    localStorage.setItem('isMenuOpen', JSON.stringify(newIsMenuOpen));
//     setMenuOpen(newIsMenuOpen);
//  };

  return (
    <div className="header ">
      <div className={isMenuOpen ?'menu-icon':'menu'}>
      <a href="#" onClick={() => setMenuOpen(!isMenuOpen)}>
        <MenuIcon  />
        </a>
      </div>
      {/* {isMenuOpen && (  */}
        <div className="header-main">
          <div className="header-logo">
            <h2>Social</h2>
          </div>
          <div className="header-menu">
            <ul>
              <button>Home</button>
              <button>Explore</button>
              <button>Message</button>
              <button>Notification</button>
              {/* <button onClick={toggleDropdown}> <img className="profile-image" src={Profile} alt='profile'></img>  </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button>Profile</button>
                  <button>Logout</button>
                  <button>Settings</button>
                </div> */}
              {/* )} */}
            </ul>
          </div>

        </div>
       {/* )}  */}
      <hr />
    
      
      {/* id 3 */}
      
    </div>
  );
}

export default Header;
