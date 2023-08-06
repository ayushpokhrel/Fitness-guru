import React from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie';


const Profile = () => {
const [username,setUsername]=useState('')
const[id,setId]=useState('')
const [fullname,setFullname]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [imgurl,setImgurl]=useState('')
useEffect(()=>{
  const userinfo= JSON.parse(Cookies.get('user'));
  setUsername(userinfo.username)
  setFullname(userinfo.fullname)
 setUsername(userinfo.name)
 setEmail(userinfo.email)
 setPhone(userinfo.phone)
 setImgurl(userinfo.file)
 setId(userinfo.id)
 const rfile=userinfo.file.replace('\\','/')
const encodedFilePath = encodeURI(`${rfile}`);
setImgurl(`http://localhost:3005/${encodedFilePath}`)

 
},[])
const backgroundImageStyle={
  background:`url(${imgurl})no-repeat center center/cover`
}

  return (
    <div>
    <div className='profilename'>User Profile</div>
    <div className='profilemain' style={backgroundImageStyle}>
      {/* <div className='pp'><img src={imgurl} alt="img here" height="100px" width="100px"/></div> */}
      <div className='userdetails'>
        Name: {fullname}<br/>
        Username:{username}<br/>
        Email: {email}<br/>
        Phone: {phone}<br/>
        id:{id}
      </div>
    </div>
    </div>
  )
}

export default Profile