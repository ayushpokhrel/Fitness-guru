import React from 'react'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Gymtypes = () => {
    const [data,setData]=useState([])

useEffect(()=>{
    fetch('http://localhost:3005/gymtype')
    .then(
      (response)=>response.json())
    .then((data)=>{
      // setImagePath(imagePath)
        // console.log(data)
        setData(data)
      })
},[])
// console.log(data)

  return (
    <div className='gymContainer'>
    <div className='mainbox'>
        {data.map((item,id)=>{
         const file=item.file;
        const rfile=file.replace('\\','/')
        const rrfile=rfile.replace('\\','/')

// console.log(encodedFilePath)
  const backgroundImageStyle={
            background:`url(http://localhost:3005/${rrfile})`
          }
          console.log(backgroundImageStyle.background);
            return(
            <div
            className='box' style={backgroundImageStyle}>{item.name} <br/><br/>{item.des}
            
            <div className='boxinfo'>{item.description}</div>
            <Link className='linksbox' to="/login">Beginner</Link>
            <Link  className="linksbox" to="/login">Intermediate</Link>
            <Link className='linksbox' to="/login">Advanced</Link>
            </div>)
          
            
        })}
        </div>
    </div>
  )
}

export default Gymtypes


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Gymtypes = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3005/gymtype')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div className='gymContainer'>
//       <div className='mainbox'>
//         {data.map((item, id) => {
//           const file = item.file;
//           const rfile = file.replace('\\', '/');
//           console.log(rfile)
//           const encodedFilePath = encodeURI(`../../../server/${rfile}`);
//           console.log(encodedFilePath)
//           const backgroundImageStyle = {
//             background: `url(${encodedFilePath})`,
//           };
//           // '../../../../Gym-guru/server/uploads/'             ../../Gym-guru/server/${rfile}      style={{background: `url(localhost:3000/Gym-tutu/server/uploads/1688799945933-exercise.jpg)`}}   style={backgroundImageStyle}
//           return (
//             <Link  className='box'  key={id}>
//               {item.name}
//               <br />
//               <br />
//               {item.des}
//               <div className='boxinfo'>{item.name + ' ' + item.description}</div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Gymtypes;
