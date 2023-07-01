import React from 'react'
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Gymtypes = () => {
    const [data,setData]=useState([])

useEffect(()=>{
    fetch('http://localhost:3005/gymtype')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        setData(data)})
},[])
console.log(data)


  return (
    <div className='gymContainer'>
    <div className='mainbox'>
        {data.map((item,id)=>{
            return<div className='box'>{item.name}<br/>{item.des}
            <Link className='enrollLink'>enroll</Link><br/>
            </div>
          
            
        })}
        </div>
    </div>
  )
}

export default Gymtypes