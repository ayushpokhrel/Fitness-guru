// import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'

// const Home = () => {
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//       setTimeout(() => {
//       setShowAlert(true);
//     }, 5000);
//   }, []);

//   const handleAlertClose = () => {
//     setShowAlert(false);
//   };
  
  

//   return (
//     <div>
//       <header className="header">
//         <div className="logo">
//           <p className="logoname">fitness guru</p>
//         </div>
//         <div className="nav">
//           <ul className="nav">
//             <li><Link to="/">Home</Link></li>            
//               <li><Link to="/">About Us</Link></li>
//               <li><Link to="/">Reviews</Link></li>
//             <li><Link to="/">Contact Us</Link></li>            
//           </ul>
//         </div>
//       </header>
//       <div className="bodies">
//         <div className="body1">
//           <p className="para">Welcome to our Fitness guru webapp!<br />
//             Whether you're a fitness enthusiast or just starting out, we've got you covered. Browse our selection of workout plans to find the perfect fit for your lifestyle. With our easy-to-follow plans, you'll be able to monitor your progress and stay motivated on your fitness journey. Join us today and start working towards your best self!</p>
//         </div>
//         {
//           showAlert && <div className="body2" id="body2">
//             <p id="alertmsg">Haven't logged in yet?</p>
//             <Link to="/login" className="btns">Login</Link>
//             <Link to="/register" className="btns">Register</Link>
//             <Link className="btns" onClick={handleAlertClose}>Close</Link>
//           </div>
//         }
           
         
        
          
        
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAlert, setShowAlert] = useState(false);  const [isSlideVisible, setIsSlideVisible] = useState(false);


  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const url=(link)=>{
return url(link)
  }



  useEffect(() => {
    setTimeout(() => {
             setShowAlert(true);
           }, 5000);
    const sliderContainer = document.querySelector('.body1');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const slideWidth = slides[0].offsetWidth;


    const slideNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      
    };

    const slidePrev = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);

    return () => {
      prevButton.removeEventListener('click', slidePrev);
      nextButton.removeEventListener('click', slideNext);
    };
  }, []);

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
          
        <div className="slider-controls">
            <button className="slider-prev">‹</button>
          </div>
          <div className="slider-container">
            <div
              className="slide"

  style={{ display: currentSlide === 0 ? 'block' : 'none',height:"390px", }}
            >
           <p className="para">Welcome to our Fitness guru webapp!<br />
            Whether you're a fitness enthusiast or just starting out, we've got you covered.  </p>
            </div>
            <div
              className="slide  "
              style={{ display: currentSlide === 1 ? 'block' : 'none',height:"390px" }}
            >
               <p className="para"> Browse our selection of workout plans to find the perfect fit for your lifestyle.</p>
            </div>
            <div
              className="slide"
              style={{ display: currentSlide === 2 ? 'block' : 'none' ,height:"390px"}}
            >
               <p className="para">With our easy-to-follow plans, you'll be able to monitor your progress and stay motivated on your fitness journey. Join us today and start working towards your best self! </p>
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-next">›</button>
          </div>
        </div>
      </div>

      {
          showAlert && <div className="body2" id="body2">
            <p id="alertmsg">Haven't logged in yet?     
            <Link className="closebtnhome" onClick={handleAlertClose}>╳</Link></p>
            <Link to="/login" className="btns">Login</Link>
            <Link to="/register" className="btns">Register</Link>
          </div>
        }
           
         
        
          
        
   </div>
  );
};

export default Home;


