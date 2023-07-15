import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const About = () => {
  const [showAlert, setShowAlert] = useState(false); 


  const handleAlertClose = () => {
    setShowAlert(false);
  };




  useEffect(() => {
    setTimeout(() => {
             setShowAlert(true);
           }, 5000);
          })
  return (
    <div className='aboutusMainDiv'>
    <header className="header">
      <div className="logo">
        <p className="logoname">fitness guru</p>
      </div>
      <div className="nav">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </header>

    <div className='aboutusBodyDiv'>
        <div className='topdiv'>
        <h1 className='aboutusTitle'>Fitness Guru</h1>
        <p className='aboutusShortmsg'>Take care of your body. It's the only place you have to live ✌️</p>
        </div>
        <div className='secdiv'> 
            <div className='wrapperAbout'>
                   <div className='aboutusleft'>
                    <p className='secdivP'></p></div>
            <div className='aboutusright'>
            <p className='ourfoundingAbout'>Our Founding</p>
                <p className='imgdiv'>Fitness Guru is the brainchild of Ayush Pokhrel and Anjali Dahal, two passionate individuals committed to promoting health and wellness. With a shared vision of providing a comprehensive platform for fitness enthusiasts, we have developed this web application as part of our project defense</p></div>
            </div>
            <div className='wrapperAbout'>
                   <div className='mission'>
                    <p className='secdivP'></p></div>
            <div className='aboutusright'>
            <p className='ourfoundingAbout'>Our Mission</p>
                <p className='imgdiv'>At Fitness Guru, our mission is to empower individuals to lead healthier lives by offering accessible and reliable fitness information and tools. We believe that everyone deserves the opportunity to achieve their fitness goals, and our platform is designed to support them every step of the way</p></div>
            </div>
            <div className='wrapperAbout'>
                   <div className='features'>
                    <p className='secdivP'></p></div>
            <div className='aboutusright'>
            <p className='ourfoundingAbout'>Key Features</p>
                <p className='imgdiv'>Fitness Guru boasts an array of features aimed at enhancing your fitness journey. Our BMI calculator allows you to easily assess and track your body mass index, providing valuable insights into your overall health.Additionally, we offer various types of yoga programs that cater to different skill levels and preferences, promoting flexibility, strength, and relaxation</p></div>
            </div>
            <div className='wrapperAbout'>
            <div className='aboutusrightlast'>
            <p className='ourfoundingAbout'>Thankyou</p>
                <p className='imgdiv'>Thank you for joining us on this exciting fitness journey. Explore Fitness Guru today and embark on the path to a healthier and happier you!</p></div>
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
  )
}


export default About;