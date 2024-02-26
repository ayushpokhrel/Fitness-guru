import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { divStyle,textStyle,h1style } from './Styles';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [fname,setFname]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const[file,setFile]=useState(null);
  const [errors, setErrors] = useState({});
  const[msg,setMsg]=useState('')



  const handleSubmit = (e) => {
    
    errorsCheck()
    e.preventDefault();

  };
  const handleFileChange=(e)=>{
    setFile(e.target.files[0]);
  }
  const errorsCheck=()=>{
    const validationErrors=validateForm();

    if (Object.keys(validationErrors).length === 0) {   
      const formData=new FormData();
      formData.append('file',file);
      formData.append('fname',fname);
      formData.append('username',username);
      formData.append('email',email);
      formData.append('phone',phone);
      formData.append('password',password);
      axios.post('http://localhost:3005/register', formData)
    .then(response => {

      // console.log(response.data);
      setErrors({})
      setMsg(response.data.msg)
      if(response.data.msg=="saved successfully"){
      window.location.href="/login"
      }
      // else if(response.data.msg=="user already exists"){
      //   setMsg(response.data.msg)
      // }

    })
    .catch(error => {

      console.error('Error:', error);

    });
      console.log('Form submitted:');
    }

      else{
        setErrors(validationErrors);
      }
  }

  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if(!fname.trim()){
      errors.fname='fullname is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhone(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!cpassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (password !== cpassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
     <div className='containerregister'><p className='fgNamereg'>Fitness Guru</p> <h3 className='title'>Register</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <div className='frow'>
        <p className='fname'> Fullname:</p>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      <p className='username'> Username:</p>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p>{errors.username}</p>}
      
      <div style={textStyle}>
      <p className='email'> Email:</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      </div>
      <div className='srow'>
      <p className='phonenumber'> Phone Number:</p><br/>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p>{errors.phone}</p>}
     
      
      <p className='password'> Password:</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
        
      <p className='password'>Confirm Password:</p>
        <input
          type="password"
          name="confirmPassword"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div className='trow'>
      <input type="file" onChange={handleFileChange} />
      </div><br/>
      </div> {msg}<br/>
      <button className='btnreg' type="submit">Register</button><br/>
      
     
    </form>
    <p>Already have an account? <Link to="/login">Login</Link></p>

    </div>

  );
};

export default RegistrationForm;
