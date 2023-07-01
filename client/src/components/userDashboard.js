import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Login';
import RegistrationForm from './RegistrationForm'
import Gymtypes from './Gymtypes'
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';
import Profile from './Profile';
import Progress from './Progress';


const UserDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  // const [cookieAlert,setCookieAlert]=useState('')
  const[showAlert,setShowAlert]=useState(true)
  const [content, setContent] = useState('');
  const [visibility,setVisibility]=useState('visible');

  const handleLinkClick = (page) => {
    // Set the content based on the clicked link
    setContent(page);
  };
  useEffect(()=>{
      setTimeout(()=>{
        setShowAlert(false);
        // setVisibility('visible')
      },10000)
  })

  useEffect(() => {
    // Check if the user is already logged in
    axios.get('http://localhost:3005/loggedIn')
      .then((response) => {
        // console.log(response.username)
        if (response.data.loggedIn) {
         const userinfo= Cookies.get('user');
        //  setUsercookie(userinfo);
          setUsername(userinfo);
          setLoggedIn(true);
        // console.log(response)
        } 
        else{
          setLoggedIn(false)
        }
  })
      .catch((error) => {
        console.error(error+'  check');
      });
    },[])

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
          {showAlert&&<h1 className="headerDash" style={{visibility,marginButtom:'20px'}}>Welcome {username} </h1>}
          <Link className='linksFirst'   onClick={() => handleLinkClick(<Profile/>)}>Profile</Link>
          <Link className='links' to ="" onClick={() => handleLinkClick(<Progress/>)}>Progress</Link>
          <Link className='links' to ="" onClick={() => handleLinkClick(<Gymtypes/>)}>Programs</Link>
          <Link className='links' to="" onClick={() => handleLinkClick('features')}>Features</Link>
          <button className='logoutDash' onClick={handleLogout}>Logout</button>
          </div>
          {/* Your user dashboard content */}
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

export default UserDashboard;
