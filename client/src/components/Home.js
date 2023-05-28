import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
      setTimeout(() => {
      setShowAlert(true);
    }, 5000);
  }, []);

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  

  return (
    <div>
      <header className="header">
        <div className="logo">
          <p className="logoname">fitness guru</p>
        </div>
        <div className="nav">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>            
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Reviews</Link></li>
            <li><Link to="/">Contact Us</Link></li>            
          </ul>
        </div>
      </header>
      <div className="bodies">
        <div className="body1">
          <p className="para">Welcome to our Fitness guru webapp!<br />
            Whether you're a fitness enthusiast or just starting out, we've got you covered. Browse our selection of workout plans to find the perfect fit for your lifestyle. With our easy-to-follow plans, you'll be able to monitor your progress and stay motivated on your fitness journey. Join us today and start working towards your best self!</p>
        </div>
        {
          showAlert && <div className="body2" id="body2">
            <p id="alertmsg">Haven't logged in yet?</p>
            <Link to="/login" className="btns">Login</Link>
            <Link to="/register" className="btns">Register</Link>
            <Link className="btns" onClick={handleAlertClose}>Close</Link>
          </div>
        }
           
         
        
          
        
      </div>
    </div>
  );
};

export default Home;
