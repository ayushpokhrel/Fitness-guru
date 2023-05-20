import React, { useState } from 'react';
import axios from 'axios'

const RegistrationForm = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password)
   
    // Make an API request to '/register' endpoint
    axios.post('http://localhost:3005/register', {name,email,password})
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
