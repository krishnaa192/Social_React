import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import '../css/edit.css';

const Edit = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    bio: '',
    dob: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send data to the server or perform other actions
    console.log(formData);
  };

  return (
   
    <div className="editpage">
        <div className="edit-header">
            <Navbar/>
        </div>
        <div className="edit-body">
            <h2>Edit Profile</h2>
        </div>
    <div className="edit-container">
   
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />

      <label>
       <p>Bio:</p> 
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <br />
    
      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <br />

      <label>
        Profile Image:
        <input type="file" accept="image/*" className="uploads" onChange={handleImageChange} />
      </label>
      <br />

      <label>
        Location:
        <input type="text" name="locaion" value={formData.location} onChange={handleChange} />
      </label>
      <br />
      

      <button type="submit">Submit</button>

    </form>
    </div>
    </div>
  );
};

export default Edit;
