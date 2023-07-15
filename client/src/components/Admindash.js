import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Gymtypes from './Gymtypes'
import Cookies from 'js-cookie';
import {  Link } from 'react-router-dom';
import AddTypes from './AddTypes';
import UserManagement from './UserManagement';


const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [content, setContent] = useState();
  const[users,setUsers]=useState();

  const handleLinkClick = (page) => {
    setContent(page);
  };


  useEffect(() => {
    axios.get('http://localhost:3005/loggedIn')
      .then((response) => {
      
        if (response.data.loggedIn) {
         const userinfo=JSON.parse(Cookies.get('user'));
          setUsername(userinfo.name);
          setLoggedIn(true);
        } 
        else{
          setLoggedIn(false)
        }
  })
      .catch((error) => {
        console.error(error+'  check');
      });
    },[])

    useEffect(()=>{
      axios.get('http://localhost:3005/users')
      .then((response)=>{
        setUsers(response.data);
      })
      .catch((error)=>{
        console.log(error)
      })
    },[]);

  const handleLogout =  () => {
          Cookies.remove('user')
          setLoggedIn(false);
      window.location.href = '/';
   
  };

  return (
    <div className="divDash">
      {username ? (
        <div className='wrapperDash'>
          <div className='leftrow'>
          <h1 className="headerDash" style={{marginButtom:'20px',textAlign:"center"}}>{username} Dashboard </h1>
          <Link className='linksFirst'   onClick={() => handleLinkClick(<AddTypes/>)}>Add Fitness types</Link>
          <Link className='linksFirst'   onClick={() => handleLinkClick(<Gymtypes/>)}>Manage Fitness</Link>
          <Link className='linksFirst'   onClick={() => handleLinkClick(<UserManagement users={users}/>)}>Manage Users</Link>
          <button className='logoutDash' onClick={handleLogout}>Logout</button>
          </div>

          <div className='rightrow'>
         {content}
        </div>
        </div>
      )  :
      <Login/>
      // window.location.href='/login'
      }

    </div>
  );
};

export default Admin;
