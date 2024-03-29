

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errMsg, setErrMsg] = useState('');

//   const send = (e) => {
//     e.preventDefault();
//     sendDataToServer();
//   };

//   const sendDataToServer = () => {
//     axios
//       .post('http://localhost:3005/login', { email, password })
//       .then((res) => {
//         // console.log(res.data);

//         if (res.data.loggedIn) {
//           // setIsloggedin(true);
//           setErrMsg('')
//           if(res.data.username==="Admin"){
//           const userDetails={
//             name:res.data.username,
//             email:res.data.email,

//           }
//           // console.log(userDetails)
//           const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
//           Cookies.set('user', JSON.stringify(userDetails) , { expires: expirationTime }); 
//           window.location.href="/admindash"         
//           }
//           // navigate('/dashboard')
//           if(res.data.username!=="Admin"){
//             window.location.href="/dashboard"
//             const userDetails={
//               id:res.data.id,
//               fullname:res.data.fullname,
//               username:res.data.username,
//               name:res.data.username,
//               email:res.data.email,
//               phone:res.data.phone,
//               file:res.data.file
//             }
//           const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
//         Cookies.set('user', JSON.stringify(userDetails), { expires: expirationTime }); 
//           }
          
//         } else {
//           // setIsloggedin(false);
//           setErrMsg(res.data.msg);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
    
//     <div className="container">
//       <p className="fgName">Fitness Guru</p>
//       <h3 className="title">Login</h3>
//       <p className="email">Email:</p>
//       <input type="email" onChange={(e) => setEmail(e.target.value)} />
//       <br />
//       <p className="password">Password:</p>
//       <input type="password" onChange={(e) => setPassword(e.target.value)} />
//       <br />
//       <button className="btn" onClick={send}>
//         Log In
//       </button>
//       {errMsg && <p className='errMsg'>{errMsg}</p>}
//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const send = (e) => {
    e.preventDefault();

    // Basic validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrMsg('Please enter a valid email address');
      return;
    }

    // Basic validation for password format (at least one letter and one number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrMsg('Password must contain at least 1 letter and 1 number, and be at least 8 characters long');
      return;
    }

    // Clear error message if validation passes
    setErrMsg('');

    sendDataToServer();
  };

  const sendDataToServer = () => {
    axios
      .post('http://localhost:3005/login', { email, password })
      .then((res) => {
        if (res.data.loggedIn) {
          setErrMsg('');
          if(res.data.username==="Admin"){
          const userDetails={
            name:res.data.username,
            email:res.data.email,

          }
          // console.log(userDetails)
          const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
          Cookies.set('user', JSON.stringify(userDetails) , { expires: expirationTime }); 
          window.location.href="/admindash"         
          }
          // navigate('/dashboard')
          if(res.data.username!=="Admin"){
            window.location.href="/dashboard"
            const userDetails={
              id:res.data.id,
              fullname:res.data.fullname,
              username:res.data.username,
              name:res.data.username,
              email:res.data.email,
              phone:res.data.phone,
              file:res.data.file
            }
          const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000);
        Cookies.set('user', JSON.stringify(userDetails), { expires: expirationTime }); 
          }
          
        } else {
          // setIsloggedin(false);
          setErrMsg(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <p className="fgName">Fitness Guru</p>
      <h3 className="title">Login</h3>
      <p className="email">Email:</p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <p className="password">Password:</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button className="btn" onClick={send}>
        Log In
      </button>
      {errMsg && <p className="errMsg">{errMsg}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;

