import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/explore';
import Signin from './pages/signin';
import Register from './pages/Register';
import Search from './pages/Search';
import Notification from './pages/Notification';
import  Home from './pages/Home';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import ShowPost from './pages/ShowPost';


function App() {
  return (
    <div  >
      {/* <Search/> */}
      {/* <Navbar/>  */}
      {/* <Main/>
      <Footer/>  */}
{/* <Explore/>  */}
{/* <Signin/>  */}
{/* <Register/>  */}
  {/* <Header/> */}

  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<Edit/>} />
          <Route path="/post/" element= {<ShowPost/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
