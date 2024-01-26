import React,{useState} from 'react'
import '../css/signin.css'
import { Link } from 'react-router-dom'

import  Navbar from '../component/Navbar'

function Signin() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
        
      }

const handleSignin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    console.log('Signing in with Username:', username);
    console.log('Signing in with Password:', password);
      };
      
  return (

  
       <div className='signin-box'> 
      <Navbar/> 
      <div className='signin'>
      <h2>Sign In</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link to="/register">
        <button type="submit"  className='signbtn'>New User</button>
       </Link>
        <button type="submit" className='register' onClick={handleSignin}>Signin</button>
      </form>
    </div>
    </div>
  );
}


export default Signin
