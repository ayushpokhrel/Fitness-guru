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
          <li><Link to="/reviews">Reviews</Link></li>
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
        
        </div>
  )
}

export default Contact