

import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [Isloggedin, setIsloggedin] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate=useNavigate()

  const send = (e) => {
    e.preventDefault();
    sendDataToServer();
  };

  const sendDataToServer = () => {
    axios
      .post('http://localhost:3005/login', { email, password })
      .then((res) => {
        console.log(res.data);

        if (res.data.loggedIn) {
          // setIsloggedin(true);
          setErrMsg('')
          // navigate('/dashboard')
          window.location.href="/dashboard"
          const userDetails=(res.data.username);
          console.log(userDetails)
          const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000);
        Cookies.set('user', userDetails, { expires: expirationTime }); 
        } else {
          // setIsloggedin(false);
          setErrMsg(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <p className="fgName">Fitness Guru</p>
      <h3 className="title">Login</h3>
      <p className="email">Email:</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <p className="password">Password:</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button className="btn" onClick={send}>
        Log In
      </button>
      {errMsg && <p className='errMsg'>{errMsg}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
