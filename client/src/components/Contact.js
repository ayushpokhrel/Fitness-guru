import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Contact = () => {
  return (
    <div className='contactmaindiv'>
    <header className="header">
      <div className="logo">
        <p className="logoname">fitness guru</p>
      </div>
      <div className="nav">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </header>

    <div className='contactbodydiv'>
        <div className='topdiv'>
        <h1 className='contactustitle'>Fitness Guru</h1>
        <p className='aboutusShortmsg'>Take care of your body. It's the only place you have to live ✌️</p>
        </div>
        
 
        </div>
        <div className='contactusbodysection'>
          <div className='contactmsg'>
          <div className='contactsidetexts'> Welcome to Fitness Guru Web App!</div><br/><br/>

We're thrilled you're here, embarking on your journey toward a healthier, fitter you. At Our Fitness Guru, we're passionate about empowering individuals like you to achieve your fitness goals, whether it's building strength, losing weight, or enhancing overall well-being.<br/><br/><br/><br/>

<div className='contactsidetexts'>Who We Are</div><br/>

Our Fitness Guru isn't just another fitness platform; we're a team of dedicated fitness professionals committed to your success. Our trainers and experts bring years of experience, knowledge, and enthusiasm to help you every step of the way.<br/><br/><br/><br/>
          </div>

          <div className='contactsidetexts'>Connect With Us</div><br/>
Have questions, feedback, or just want to say hello? We're here to listen and assist you on your fitness journey. Feel free to reach out to us via:
         <div className='contactsociallinks'><i className='fab fa-spin fa-facebook'></i> Facebook | <i className='fab fa-spin fa-instagram'></i> Instagram | <i className='fab fa-whatsapp fa-spin'></i> Whatsapp | <i className='fab fa-x fa-spin'></i> </div>
        </div>
        </div>
  )
}

export default Contact