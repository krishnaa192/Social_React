import React, { useState, useReducer } from 'react';
import '../css/register.css';
import Navbar from '../component/Navbar';
import Signin from './signin';
import { Link } from 'react-router-dom';



const initialState = {
  username: '',
  Name: '',
  Email: '',
  Phone_no: '',
  password: '',
  confirmpassword: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Register = () => {
 

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your signin logic here
    console.log('Form Data:', formData);

    // Reset form after submission
    dispatch({ type: 'RESET_FORM' });
  };


  const handleRegister = (e) => {
    e.preventDefault();
    const { username, Name, Email, Phone_no, password, confirmpassword } = formData;
  
    // Your registration logic here
    if (password === confirmpassword) {
      console.log('Registration successful!');
      console.log(formData)
    } else {
      console.error('Passwords do not match');
    }

   
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className='Register-box'> 
    <Navbar/> 
      <div className='signup'>
      <h2>Register User</h2>
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
            type="text"
            id="Name"
            name="Name"
            placeholder='Name'
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder='Email'
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            id="Phone_no"
            name="Phone_no"
            placeholder='Phone_no'
            value={formData.Phone_no}
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
        <div>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder='confirm Password'
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <Link to="/signin">
        <button type="submit"  className='signbtn' >Sign In</button>
    </Link>
        <button type="submit" className='register' onClick={handleRegister} >Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register


   
 

    
