import React, { useEffect, useState } from 'react';
import DashboardCss from '../css/dashboard.module.css'
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if the user is already logged in
    axios.get('http://localhost:3005/loggedIn')
      .then((response) => {
        // console.log(response.username)
        if (response.data.loggedIn) {
          setUsername(response.data.username);
          setLoggedIn(true);
        } 
      })
      .catch((error) => {
        console.error(error);
      });
    },[])

  const handleLogout = async () => {
    try {
      await axios.post('/http://localhost:3005/logout');
      setLoggedIn(false);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={DashboardCss}>
      {loggedIn ? (
        <div>
          <h1 className="header">Welcome,{username}!</h1>
          {/* Your user dashboard content */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login />
      
      )}
    </div>
  );
};

export default UserDashboard;
