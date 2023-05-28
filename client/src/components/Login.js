import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isloggedin,setIsloggedin]=useState(false)
    const navigate=useNavigate()
    const send=(e)=>{
        e.preventDefault();
        // console.log(email,password)
        sendDataToServer()
    }

    const sendDataToServer =() => {
        axios.post('http://localhost:3005/login',{email,password})
        .then(
          res=>{
            console.log(res.data)
          if(res.data.loggedIn==true){
            setIsloggedin(true)
          }
        })
        .catch(err=>{console.log(err)})
      };
      if(isloggedin){
        console.log('logged in successfully')
        // navigate('/dashboard')
      window.location.href = '/dashboard';
      }
      
  return (
    <div className='container'><p className='ggName'>Fitness Guru</p> <h3 className='title'>login</h3>
    <p className='email'> Email:</p> <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br/>
     <p className="password">Password:</p> <input type="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button className='btn' onClick={send}>Log In</button>
    <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login