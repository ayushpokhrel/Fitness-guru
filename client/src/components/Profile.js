import React from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie';


const Profile = () => {
const [username,setUsername]=useState('')
useEffect(()=>{
  const userinfo= Cookies.get('user');
 setUsername(userinfo)
},[])
  return (
    <div>
      <div className='profilename'>{username}</div>
      
    </div>
  )
}

export default Profile