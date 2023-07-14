import React, { useEffect } from 'react'
// import questions from './api';
import './accordion.css';
import MyAccordion from './MyAccordion';
import { useState } from 'react';

const Sports = () => {
  const [data,setdata]=useState([]);
  const callsportspage=async()=>{
    try {
      const res=await fetch('/sportsdata',{
        method:'GET',
        headers:{
          Accept:'appllication/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      });
      const data=await res.json();
      setdata(data);
      console.log('sports',data)
    } catch (error) {
      console.log(error);
    }
  }

  callsportspage();
  // callaecpage();   it will loop infinitely so use 'useEffect
  useEffect(()=>{
    callsportspage();
  },[]);
  return (
    <>
        <section className='main-div'>
        <h1>Sports Queries</h1>
        {console.log('func',data)}
        {
        data.map((curdata)=>{
            console.log(curdata)
            return <MyAccordion key={curdata._id} {...curdata}/>
        })
        }
        </section>
    </>
  )
}

export default Sports