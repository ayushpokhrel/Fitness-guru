// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Login from './Login';
// import Gymtypes from './Gymtypes'
// import Cookies from 'js-cookie';
// import Profile from './Profile';
// import Progress from './Progress';
// import BMI from './BMI';


// const UserDashboard = () => {
//   const [username, setUsername] = useState('');
//   const[showAlert,setShowAlert]=useState(true)
//   const [content, setContent] = useState(<Profile/>);
//   const [loggedIn,setLoggedIn]=useState(false);
//   const visibility="visible";
//   const handleLinkClick = (page) => {
//     setContent(page);
//   };

//   useEffect(()=>{
//       setTimeout(()=>{
//         setShowAlert(false);
//       },10000)
//   })

//   useEffect(() => {
//     // Check if the user is already logged in
//     axios.get('http://localhost:3005/loggedIn')
//       .then((response) => {
//         // console.log(response.username)
//         if (response.data.loggedIn) {
//          const userinfo= JSON.parse(Cookies.get('user'));
//         //  setUsercookie(userinfo);
//           setUsername(userinfo.name);
//           setLoggedIn(true);
//         } 
//         else{
//           setLoggedIn(false)
//         }
//   })
//       .catch((error) => {
//         console.error(error+'  check');
//       });
//     },[])

//   const handleLogout =  () => {
//           Cookies.remove('user')
//           setLoggedIn(false);
//       window.location.href = '/';
   
//   };

//   return (
//     <div className="divDash">
//       {username ? (
//         <div className='wrapperDash'>
//           <div className='leftrow'>
//           {showAlert&&<h1 className="headerDash" style={{visibility,marginButtom:'20px'}}>Welcome {username} </h1>}
//           <Link className='linksFirst'   onClick={() => handleLinkClick(<Profile/>)}>Profile</Link>
//           <Link className='links' to ="" onClick={() => handleLinkClick(<Progress/>)}>Progress</Link>
//           <Link className='links' to ="" onClick={() => handleLinkClick(<Gymtypes/>)}>Programs</Link>
//           <Link className='links' to="" onClick={() => handleLinkClick(<BMI/>)}>BMI Calculator</Link>
//           <button className='logoutDash' onClick={handleLogout}>Logout</button>
//           </div>

//           <div className='rightrow'>
//          {content}
//         </div>
//         </div>
//       )  :
//       <Login/>
//       // window.location.href='/login'
//       }

//     </div>
//   );
// };

// export default UserDashboard;







import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Login from './Login';
import Gymtypes from './Gymtypes';
import HealthForm from './HealthForm';
import Profile from './Profile';
import Progress from './Progress';
import BMI from './BMI';

const UserDashboard = () => {
  const [username, setUsername] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const [content, setContent] = useState(<Profile/>);
  const [loggedIn, setLoggedIn] = useState(false);
  const visibility='visible'
  const handleLinkClick = (page) => {
       setContent(page);
       };

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  }, []);

  useEffect(() => {
    // Check if the user is already logged in
    axios
      .get('http://localhost:3005/loggedIn', {
        headers: {
          'user-id': JSON.parse(Cookies.get('user'))._id, 
        },
      })
      .then((response) => {
        if (response.data.loggedIn) {
          const userinfo = JSON.parse(Cookies.get('user'));
          setUsername(userinfo.name);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(error + '  check');
      });
  }, []);

  const handleLogout = () => {
    Cookies.remove('user');
    setLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <div className="divDash">
      {username ? (
        <div className="wrapperDash">
          <div className="leftrow">
            {showAlert && (
              <h1 className="headerDash" style={{ visibility, marginBottom: '20px' }}>
                Welcome {username}
              </h1>
            )}
           <Link className='linksFirst'   onClick={() => handleLinkClick(<Profile/>)}>Profile</Link>   
                  <Link className='links' to ="" onClick={() => handleLinkClick(<Progress/>)}>Progress</Link>
        <Link className='links' to ="" onClick={() => handleLinkClick(<Gymtypes/>)}>Programs</Link>
         <Link className='links' to="" onClick={() => handleLinkClick(<BMI/>)}>BMI Calculator</Link>
          <Link className='links' to="" onClick={() => handleLinkClick(<HealthForm/>)}>Level Analyzer</Link>
         

            <button className="logoutDash" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="rightrow">
      {content}
          </div>
        </div>
      ) : (
        <Login />
      )}
      {/* HealthForm outside of wrapperDash to render outside of rightrow */}
      {/* {loggedIn && <Route exact path="/healthform" component={HealthForm} />} */}
    </div>
  );
};

export default UserDashboard;
