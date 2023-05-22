import React from 'react'
import {useState,useEffect} from 'react';

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
    <div className='mainbox'>
        {data.map((item,id)=>{
            return<div className='box'>{item.name}<br/>{item.des}</div>
        })}
    </div>
  )
}

export default Gymtypes